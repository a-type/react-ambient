import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AmbientContext } from './AmbientContext';
import { FadingBackground, FadingBackgroundProps } from './FadingBackground';
import { useId } from './internal/useId';
import { DATA_ATTRIBUTE_KEY, DATA_ATTRIBUTE_GROUP } from './constants';

export type UseAmbientOptions<
  /** The type for any provided user data */
  D = Record<string, any>,
  /** The prop type for the WrapperComponent */
  T = FadingBackgroundProps
> = {
  /**
   * You can provide any arbitrary data you like for this content, which will be made
   * available to all other uses of this hook inside the same parent context. Use
   * this feature for things like choosing a foreground color which is applied to every
   * section based on the current active section, by having each content section pass
   * a color value in `data`, and then use the color value from the `activeData` return
   * value to set the CSS foreground color.
   *
   * @example
   * ```
   * function Section({ color }) {
   *   const [props, { activeData, renderBackground }] = useAmbient({
   *     data: { color },
   *   });
   *
   *   return (
   *     // by pulling the color value from activeData, we are using the color
   *     // as specified by the currently active section, which presumably will
   *     // have the best contrast with the currently active background.
   *     <section {...props} style={{ color: activeData.color }}>
   *       {renderBackground(<BackgroundImage />)}
   *       Some content
   *     </section>
   *   );
   * }
   * ```
   */
  data?: D;
  /**
   * By default, backgrounds will fade to transition from one to another. You can override
   * this behavior by providing your own wrapper component to implement the transition. If
   * you like, you can provide `null` to have no transition at all. If you provide a custom
   * WrapperComponent, you probably also want to override the getWrapperProps value to pass
   * the correct props to your component.
   *
   * @example
   * ```
   * import { Scale } from '@material-ui/core';
   *
   * function Section() {
   *   const [props, { renderBackground }] = useAmbient({
   *     WrapperComponent: Scale,
   *     getWrapperProps: ({ active }) => ({ in: active })
   *   });
   *
   *   return (
   *     <section {...props}>
   *       {renderBackground(<BackgroundImage />)}
   *       Some content
   *     </section>
   *   );
   * }
   * ```
   */
  WrapperComponent?: React.ComponentType<T> | null;
  /**
   * If you provide your own WrapperComponent, it might have specific props it needs to render
   * correctly - use this function to compute the props that will be passed to that component
   * based on the current ambient state. Or, even if you use the default wrapper, you can provide
   * extra props to that wrapper using this function - for example, you can provide `fadeDurationSeconds`
   * to override the default fade duration on the built-in wrapper. If you override props for the
   * built-in wrapper (i.e. you provide this function without providing WrapperComponent), you must
   * at minimum return an object with `active` set to `state.active`.
   *
   * @example
   * ```
   * function Section() {
   *   const [props, { renderBackground }] = useAmbient({
   *     getWrapperProps: ({ active }) => ({ active, fadeDurationSeconds: 1 })
   *   });
   *
   *   return (
   *     <section {...props}>
   *       {renderBackground(<BackgroundImage />)}
   *       Some content
   *     </section>
   *   );
   * }
   * ```
   */
  getWrapperProps?: (state: {
    active: boolean;
    activeKey: string | null;
    activeData: D | null;
  }) => T;
  /**
   * Optionally, you can provide your own key for this content. By providing your own
   * key, you can include logic which utilizes the activeKey value meaningfully.
   */
  key?: string;
};

function defaultGetWrapperProps({ active }: { active: boolean }) {
  return {
    active,
  };
}

/**
 * Props which you should pass to your content component
 */
export type UseAmbientBindProps = {
  [DATA_ATTRIBUTE_KEY]: string;
  [DATA_ATTRIBUTE_GROUP]: string;
};
/**
 * A set of utilities for interacting with the ambient system. Includes
 * a function you should wrap your background content in when rendering,
 * and information about the currently active content. `active` will be
 * true if the component which is bound to this hook usage is active.
 */
export type UseAmbientTools<D> = {
  /**
   * Whether the content section which is bound to this hook usage is currently
   * active.
   */
  active: boolean;
  /**
   * Wrap your background React content in this function and call it within
   * your component JSX. You can also omit any content to render a blank
   * background for this content.
   */
  renderBackground: (content?: React.ReactNode) => React.ReactPortal | null;
  /**
   * The user-defined context data for the active content. This is the value
   * that was passed to the `data` config property by the currently active
   * content when it called useAmbient.
   */
  activeData: D | null;
  /**
   * The key of the currently active content. You can pass your own key
   * to useActive if you want to utilize this meaningfully. Otherwise, it's
   * a random value generated at runtime for each content item.
   */
  activeKey: string | null;
};

export type UseAmbientReturn<D> = [UseAmbientBindProps, UseAmbientTools<D>];

/**
 * Hooks into the ambient background system and provides props to give to
 * your content component, plus utilities for drawing your background and
 * reacting to changes in the active content.
 */
export function useAmbient<D = any, T = FadingBackgroundProps>(
  options: UseAmbientOptions<D, T> = {}
): UseAmbientReturn<D> {
  const {
    key: providedKey,
    WrapperComponent = FadingBackground,
    getWrapperProps = defaultGetWrapperProps,
    data = {},
  } = options;
  const key = useId(providedKey);
  const ctx = React.useContext(AmbientContext);
  const active = ctx.activeKey === key;

  React.useEffect(() => {
    ctx.dataByKey[key] = data;
  }, [data, key]);

  function renderBackground(content: React.ReactNode = null) {
    const backgroundElement = ctx.backgroundRef?.current;
    if (!backgroundElement) return null;
    if (WrapperComponent) {
      return ReactDOM.createPortal(
        // @ts-ignore too complicated to make this logic work internally
        <WrapperComponent
          {...getWrapperProps({
            active,
            activeKey: ctx.activeKey,
            activeData: ctx.activeData,
          })}
        >
          {content}
        </WrapperComponent>,
        backgroundElement
      );
    } else {
      return ReactDOM.createPortal(content, backgroundElement);
    }
  }

  return [
    {
      [DATA_ATTRIBUTE_KEY]: key,
      [DATA_ATTRIBUTE_GROUP]: ctx.groupId,
    },
    {
      active,
      renderBackground,
      activeData: ctx.activeData as D | null,
      activeKey: ctx.activeKey,
    },
  ];
}
