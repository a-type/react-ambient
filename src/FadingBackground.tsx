import * as React from 'react';

export type FadingBackgroundProps = React.HTMLAttributes<HTMLDivElement> & {
  fadeDurationSeconds?: number;
  active: boolean;
};

/**
 * The default background transition component. It fades quickly
 * between active backgrounds as they change.
 */
export function FadingBackground(props: FadingBackgroundProps) {
  const { active, fadeDurationSeconds = 0.4, ...rest } = props;
  return (
    <div
      {...rest}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        opacity: active ? 1 : 0,
        transition: `opacity ${fadeDurationSeconds}s ease-in-out`,
        ...rest.style,
      }}
    />
  );
}
