import * as React from 'react';
import { Illustration, Polygon, useRender } from 'react-zdog';

function Contents() {
  const outerRef = React.useRef<any>();
  const middleRef = React.useRef<any>();
  const innerRef = React.useRef<any>();

  useRender(() => {
    if (!outerRef.current || !middleRef.current || !innerRef.current) return;

    outerRef.current.rotate.z += 0.003;
    middleRef.current.rotate.z -= 0.003;
    innerRef.current.rotate.z += 0.003;
  });

  return (
    <>
      <Polygon
        radius={60}
        sides={20}
        stroke={2}
        color="var(--color-blue-1)"
        ref={outerRef}
      />
      <Polygon
        radius={55}
        sides={5}
        stroke={4}
        color="var(--color-blue-2)"
        ref={middleRef}
      />
      <Polygon
        radius={40}
        sides={10}
        stroke={1}
        color="var(--color-blue-3)"
        ref={innerRef}
      />
    </>
  );
}

export function RippleBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'var(--color-blue-4)',
      }}
    >
      <Illustration zoom={12}>
        <Contents />
      </Illustration>
    </div>
  );
}
