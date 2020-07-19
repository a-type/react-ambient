import * as React from 'react';
import { Illustration, Ellipse, Rect, useRender, Group } from 'react-zdog';

function Contents() {
  const groupRef = React.useRef<any>();

  useRender(() => {
    if (!groupRef.current) return;
    groupRef.current.rotate.y += 0.003;
  });

  return (
    <Group ref={groupRef} updateSort>
      <Ellipse
        diameter={80}
        translate={{ z: 40 }}
        stroke={20}
        color="var(--color-orange-1)"
      />
      <Rect
        width={80}
        height={80}
        translate={{ z: -40 }}
        stroke={12}
        color="var(--color-orange-2)"
        fill
      />
    </Group>
  );
}

export function FlashyBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'var(--color-orange-3)',
      }}
    >
      <Illustration zoom={24}>
        <Contents />
      </Illustration>
    </div>
  );
}
