import * as React from 'react';
import { useAmbient } from '../../src';

export type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  background?: React.ReactNode;
  color?: string;
};

export function Section({
  background,
  color = 'black',
  children,
  ...rest
}: SectionProps) {
  const [props, { renderBackground, activeData }] = useAmbient({
    data: { color },
  });

  return (
    <section
      {...rest}
      {...props}
      style={{
        color: activeData?.color ?? color,
      }}
    >
      {renderBackground(background)}
      {children}
    </section>
  );
}
