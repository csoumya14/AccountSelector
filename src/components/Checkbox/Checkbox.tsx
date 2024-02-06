import React, { FC } from "react";

interface CheckBoxTypes extends React.HTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  value: string;
  className?: string;
  id: string;
  checked: boolean;
  labelText: string;
}

export const Checkbox: FC<CheckBoxTypes> = ({
  type = "checkbox",
  name,
  checked = false,
  className,
  labelText,
  value,
  id,
  onChange,
}) => (
  <>
    <input
      type={type}
      name={name}
      checked={checked}
      className={className}
      id={id}
      value={value}
      onChange={onChange}
    />
    <label htmlFor={id}>{labelText}</label>
  </>
);
