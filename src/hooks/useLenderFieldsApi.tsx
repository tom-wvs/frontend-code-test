import { useEffect, useState } from 'react';
import {
  LenderFields,
  LenderGetResponse,
  LenderGetResponseExtended,
} from 'lib/types';

export enum LenderFieldsApiStatus {
  Unloaded = 'UNLOADED',
  Loading = 'LOADING',
  Loaded = 'LOADED',
  Error = 'ERROR',
}

export interface LenderFieldsExtended extends LenderFields {
  label: string;
}

export interface LenderFieldsApiResponse {
  name: string;
  fields: LenderFieldsExtended[];
}

export const useLenderFieldsApi = (
  lenderSlug: string | undefined,
): [LenderFieldsApiResponse | undefined, LenderFieldsApiStatus] => {
  const [data, setData] = useState<LenderFieldsApiResponse | undefined>(
    undefined,
  );
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
      .then((response: LenderGetResponse | LenderGetResponseExtended) => {
        setTimeout(() => {
          let processedResponse: LenderFieldsApiResponse = {
            name: response.name,
            fields: [],
          };

          processedResponse.fields = (response.fields as Array<
            string | LenderFields
          >).map((f: string | LenderFields) => processField(f));

          setData(processedResponse);
          setStatus(LenderFieldsApiStatus.Loaded);
        }, 500);
      })
      .catch(() => {
        setStatus(LenderFieldsApiStatus.Error);
      });
  }, [lenderSlug]);

  return [data, status];
};

const processField = (field: LenderFields | string): LenderFieldsExtended => {
  let fieldName;
  if (typeof field === 'string') {
    fieldName = field;
  } else {
    fieldName = field.name;
  }

  const fieldType = getNormalisedFieldType(field);
  const label = getFieldLabel(fieldName);
  const required = typeof field === 'string' ? false : field.required;
  const options = getFieldOptions(field);

  return {
    name: fieldName,
    type: fieldType,
    label,
    required,
    options,
  };
};

const getNormalisedFieldType = (field: LenderFields | string): string => {
  if (typeof field !== 'string') {
    return field.type;
  }

  switch (field) {
    case 'first_name':
    case 'last_name':
    case 'monthly_income':
      return 'text';
    case 'email':
      return 'email';
    case 'gender':
      return 'select';
    case 'date_of_birth':
      return 'date';
    default:
      return 'unknown';
  }
};

const getFieldLabel = (fieldName: string): string => {
  switch (fieldName) {
    case 'first_name':
      return 'First name';
    case 'last_name':
      return 'Last name';
    case 'monthly_income':
      return 'Monthly income';
    case 'email':
      return 'Email address';
    case 'gender':
      return 'Gender';
    case 'date_of_birth':
      return 'Date of birth';
    case 'contractor':
      return 'Contractor';
    default:
      return fieldName;
  }
};

const getFieldOptions = (
  field: LenderFields | string,
): Array<string> | undefined => {
  if (typeof field !== 'string') {
    return field.options;
  }

  if (field === 'gender') {
    return ['opt1', 'opt2', 'opt3'];
  }

  return undefined;
};
