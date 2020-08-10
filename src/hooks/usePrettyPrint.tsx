import { useEffect } from 'react';
import { prettyPrint } from 'src/utils';

export const usePrettyPrint = (obj: Any) => {
  useEffect(() => {
    prettyPrint(obj);
  }, [obj]);
};
