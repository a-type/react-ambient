import * as React from 'react';

export type ComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export function Component({ children, ...rest }: ComponentProps) {
  return <div {...rest}>{children || 'Hello world'}</div>;
}
