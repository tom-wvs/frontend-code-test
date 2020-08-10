import { TextInput, Checkbox, Select } from 'src/components/forms';
import { useState, useEffect } from 'react';

export const prettyPrint = (obj) => console.log(JSON.stringify(obj, null, 2));

export const convertFieldToElement = (field, value, handleChange, disabled) => {
  const commonProps = {
    id: field.name,
    label: field.label,
    required: field.required,
    value,
    disabled,
  };

  if (field.type === 'text') {
    return (
      <TextInput
        {...commonProps}
        value={value}
        onChange={(e) => handleChange(e.currentTarget.value)}
      />
    );
  }

  if (field.type === 'email') {
    return (
      <TextInput
        {...commonProps}
        value={value}
        onChange={(e) => handleChange(e.currentTarget.value)}
        type="email"
      />
    );
  }

  if (field.type === 'checkbox') {
    return (
      <Checkbox
        {...commonProps}
        checked={value}
        onChange={(e) => handleChange(e.currentTarget.checked)}
      />
    );
  }

  if (field.type === 'select') {
    return (
      <Select
        {...commonProps}
        value={value}
        onChange={(e) => handleChange(e.currentTarget.value)}
      >
        <option value="" disabled />
        {field.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    );
  }

  if (field.type === 'date') {
    return (
      <TextInput
        {...commonProps}
        value={value}
        type="date"
        onChange={(e) => handleChange(e.currentTarget.value)}
      />
    );
  }

  return () => <div>{field.name}</div>;
};
