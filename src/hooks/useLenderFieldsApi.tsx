import { useEffect, useState } from 'react';
import { LenderGetResponseExtended, LenderFields } from 'lib/types';

export enum LenderFieldsApiStatus {
  Unloaded = 'UNLOADED',
  Loading = 'LOADING',
  Loaded = 'LOADED',
  Error = 'ERROR',
}

export const useLenderFieldsApi = (
  lenderSlug: string | undefined,
): [LenderGetResponseExtended | undefined, LenderFieldsApiStatus] => {
  const [data, setData] = useState(undefined);
  const [status, setStatus] = useState<LenderFieldsApiStatus>(
    LenderFieldsApiStatus.Unloaded,
  );

  useEffect(() => {
    if (!lenderSlug) {
      setStatus(LenderFieldsApiStatus.Unloaded);
      return;
    }

    setStatus(LenderFieldsApiStatus.Loading);

    fetch(`http://localhost:3000/api/lenders/${lenderSlug}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        let processedResponse = response;
        // Check if this is a basic definition
        if (typeof response.fields[0] === 'string') {
          processedResponse.fields = response.fields.map((f: string) =>
            processField(f),
          );
        }
        setData(processedResponse);
        setStatus(LenderFieldsApiStatus.Loaded);
      })
      .catch((error) => {
        console.error(error);
        setStatus(LenderFieldsApiStatus.Error);
      });
  }, [lenderSlug]);

  return [data, status];
};

const processField = (field: string): LenderFields => {
  let ret = {
    name: field,
    required: false,
  };

  switch (field) {
    case 'first_name':
    case 'last_name':
    case 'monthly_income': {
      return {
        ...ret,
        type: 'text',
      };
    }
    case 'email':
      return {
        ...ret,
        type: 'email',
      };
    case 'gender':
      return {
        ...ret,
        type: 'select',
        options: ['opt1', 'opt2', 'opt3'],
      };
    case 'date_of_birth':
      return {
        ...ret,
        type: 'date',
      };
    default:
      throw new Error(`Unknown field type: [${field}]!`);
  }
};
