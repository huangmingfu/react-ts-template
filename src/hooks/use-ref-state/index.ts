import { useState } from 'react';

import { useLatest } from 'ahooks';

export function useRefState<T>(initialState: T | (() => T)) {
  const [state, setState] = useState<T>(initialState);
  const stateRef = useLatest(state);
  return [state, setState, stateRef] as const;
}
