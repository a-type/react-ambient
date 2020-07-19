import * as React from 'react';

function randomId() {
  return `id-${Math.random().toFixed(20).replace('.', '')}`;
}

export function useId(definedId?: string) {
  const idRef = React.useRef(definedId || randomId());
  return idRef.current;
}
