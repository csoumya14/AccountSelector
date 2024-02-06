import React, { FC } from "react";

interface FieldSetTypes extends React.HTMLAttributes<HTMLFormElement> {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export const FieldSet: FC<FieldSetTypes> = ({ title, children, className }) => (
  <fieldset className={className}>
    <legend>{title}:</legend>
    {children}
  </fieldset>
);
