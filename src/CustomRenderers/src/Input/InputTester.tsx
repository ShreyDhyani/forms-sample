import React, { useEffect } from "react";
import { ControlProps, RankedTester, rankWith } from "@jsonforms/core";
import { useJsonForms, withJsonFormsControlProps } from "@jsonforms/react";

export const InputControl = (props: ControlProps) => {
  const [value, setValue] = React.useState<any>(
    props.data === undefined ? "" : props.data
  );
  useEffect(() => {
    setValue(props.data === undefined ? "" : props.data);
  }, [props.data]);

  const ctx = useJsonForms();
  return (
    <input
      className="w-full h-10 bg-red-300 border border-blue-500"
      name={props.label}
      // displayStrings={props.uischema?.options?.display_strings}
      // errorMessage={props.errors ? props.errors : ""}
      onChange={(e: any) => {
        setValue(e.target.value);
        props.handleChange && props.handleChange(props.path, e.target.value);
      }}
      value={value}
      required={props?.uischema?.options?.required}
      disabled={!props.enabled || ctx?.core?.data?.pan_disabled}
    />
  );
};
const contains = (uischema: any, expected: any) => {
  if (uischema?.options?.use === expected) {
    return true;
  }
  return false;
};
const DomainKitComponent =
  (expected: string) =>
  (uischema: any): boolean => {
    return contains(uischema, expected);
  };

export const InputTester: RankedTester = rankWith(
  1,
  DomainKitComponent("NameInput")
);

export default withJsonFormsControlProps(InputControl);
