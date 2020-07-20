import * as React from 'react';

export type AmbientContextType = {
  /** The currently active content key */
  activeKey: string | null;
  /** An element ref to the background element */
  backgroundElement: HTMLDivElement | null;
  /** The user data for the currently active content */
  activeData: any | null;
  /** All user data, keyed by content id */
  dataByKey: Record<string, any>;
  /** The context provider's group id, used internally by useAmbient */
  groupId: string;
};

export const AmbientContext = React.createContext<AmbientContextType>({
  activeKey: null,
  backgroundElement: null,
  activeData: {},
  dataByKey: {},
  groupId: 'default',
});
