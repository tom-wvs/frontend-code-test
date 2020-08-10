import { TextInput, Checkbox, Select } from 'src/components/forms';
import { useState, useEffect } from 'react';

export const prettyPrint = (obj) => console.log(JSON.stringify(obj, null, 2));

export const usePrettyPrint = (obj) => {
  useEffect(() => {
    prettyPrint(obj);
  }, [obj]);
};

export const convertFieldToRenderMethod = (field) => {
  let fieldLabel = field.name;

  const commonProps = {
    id: field.name,
    label: fieldLabel,
    required: field.required,
  };

  if (field.type === 'text') {
    return (value, handleChange) => (
      <TextInput
        {...commonProps}
        value={value}
        onChange={(e) => handleChange(e.currentTarget.value)}
      />
    );
  }

  if (field.type === 'email') {
    return (value, handleChange) => (
      <TextInput
        {...commonProps}
        value={value}
        onChange={(e) => handleChange(e.currentTarget.value)}
        type="email"
      />
    );
  }

  if (field.type === 'checkbox') {
    return (value, handleChange) => (
      <Checkbox
        {...commonProps}
        checked={value}
        onChange={(e) => handleChange(e.currentTarget.checked)}
      />
    );
  }

  if (field.type === 'select') {
    return (value, handleChange) => (
      <Select
        {...commonProps}
        defaultValue=""
        onChange={(e) => handleChange(e.currentTarget.value)}
      >
        <option value="" disabled>
          Select a value
        </option>
        {field.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    );
  }

  if (field.type === 'date') {
    return (value, handleChange) => (
      <TextInput
        {...commonProps}
        value={value}
        placeholder="dd/mm/yyyy"
        type="date"
        onChange={(e) => handleChange(e.currentTarget.value)}
      />
    );
  }

  return () => <div {...commonProps}>{field.name}</div>;
};
