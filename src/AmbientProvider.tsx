import * as React from 'react';
import { debounce } from './internal/debounce';
import { AmbientContext } from './AmbientContext';
import { getVisibleElementHeight } from './internal/getVisibleElementHeight';
import { useId } from './internal/useId';
import { DATA_ATTRIBUTE_GROUP, DATA_ATTRIBUTE_KEY } from './constants';

export type AmbientProviderProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Optionally, if you have multiple groups at once, you can provide
   * a discrete ID for each one. Otherwise, this will be generated for you.
   */
  groupId?: string;
  /**
   * Provide props to the background element which holds the dynamic background
   * items. By default, it is CSS position: fixed, covering the whole viewport
   * size, at z-index 0.
   */
  backgroundElementProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * Adjust the scroll event debouncing. Defaults at 20ms.
   */
  debounceTimeout?: number;
};

/**
 * A top-level Provider for the ambient system. Place this component
 * in the React tree above all usages of useAmbient. You can have multiple
 * different ambient systems at once, whether parallel or nested - but
 * note that since the default styling of the background pane is position: fixed,
 * by default multiple usages will collide! To fix this, change the styling
 * of the background pane using `backgroundElementProps`.
 *
 * @example
 * ```
 * function AppLayout() {
 *   return (
 *     <AmbientProvider
 *       backgroundElementProps={{ style: { backgroundColor: 'black' } }}
 *       debounceTimeout={50}
 *       style={{ zIndex: 500 }}
 *     >
 *       <AppContent />
 *     </AmbientProvider>
 *   );
 * }
 * ```
 */
export function AmbientProvider(props: AmbientProviderProps) {
  const {
    groupId: providedGroupId,
    children,
    backgroundElementProps = {},
    debounceTimeout = 20,
    style,
    ...rest
  } = props;
  const [firstKey, setFirstKey] = React.useState<string | null>(null);
  const backgroundRef = React.useRef<HTMLDivElement>(null);
  const dataByKeyRef = React.useRef<Record<string, any>>({});
  const groupId = useId(providedGroupId);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    function onScroll() {
      const sectionElements = document.querySelectorAll(
        `[${DATA_ATTRIBUTE_GROUP}="${groupId}"][${DATA_ATTRIBUTE_KEY}]`
      );
      let mostVisible: Element | null = null;
      let greatestPercent = 0;
      sectionElements.forEach((sectionEl) => {
        const visiblePercentage = getVisibleElementHeight(
          sectionEl,
          window.innerHeight
        );

        if (visiblePercentage > greatestPercent) {
          greatestPercent = visiblePercentage;
          mostVisible = sectionEl;
        }
      });

      const winningKey =
        mostVisible &&
        (mostVisible as Element).getAttribute(DATA_ATTRIBUTE_KEY);
      setFirstKey(winningKey);
    }
    onScroll();
    const debounced = debounce(onScroll, debounceTimeout);
    document.addEventListener('scroll', debounced);
    return () => {
      document.removeEventListener('scroll', debounced);
    };
  }, [groupId, debounceTimeout]);

  const finalStyle = React.useMemo(
    () => ({
      position: 'relative' as const,
      zIndex: 1,
      ...style,
    }),
    [style]
  );

  return (
    <AmbientContext.Provider
      value={{
        activeKey: firstKey,
        backgroundRef,
        activeData: firstKey && dataByKeyRef.current[firstKey],
        dataByKey: dataByKeyRef.current,
        groupId,
      }}
    >
      <div
        {...backgroundElementProps}
        data-first-visible-background
        ref={backgroundRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 0,
          ...backgroundElementProps.style,
        }}
      />
      <div {...rest} style={finalStyle}>
        {children}
      </div>
    </AmbientContext.Provider>
  );
}
