import * as React from 'react';
import { useUID } from 'react-uid';

export function useId(definedId?: string) {
  const uid = useUID();
  return definedId || uid;
}
