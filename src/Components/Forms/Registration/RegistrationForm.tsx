"use client";

import { useState } from "react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import { InputControl, InputTester } from "../../../CustomRenderers/index";

export const RegistrationForm = () => {
  const [data, setData] = useState();

  const renderers = [
    ...materialRenderers,
    { tester: InputTester, renderer: InputControl },
  ];

  const schema = {
    type: "object",
    properties: {
      first_name: {
        type: "string",
        minLength: 3,
        description: "Please enter your first name",
      },
      last_name: {
        type: "string",
        minLength: 3,
        description: "Please enter your last name",
      },
      email: {
        type: "string",
      },
      username: {
        type: "string",
      },
      password: {
        type: "string",
      },
      password_confirmation: {
        type: "string",
      },
      confirm: {
        type: "boolean",
      },
    },
    required: [
      "first_name",
      "last_name",
      "email",
      "username",
      "password",
      "password_confirmation",
      "confirm",
    ],
  };

  const uiSchema = {
    type: "Group",
    label: "Registration Form",
    elements: [
      {
        // type: "Control",
        scope: "#/properties/first_name",
        options: {
          use: "NameInput",
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-full px-10 pt-10 gap-y-5 max-w-screen-sm mx-auto">
      <JsonForms
        schema={schema}
        uischema={uiSchema}
        data={data}
        renderers={renderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  );
};

RegistrationForm.displayName = "RegistrationForm";

export default RegistrationForm;

// {
//   type: "Control",
//   scope: "#/properties/last_name",
// },
// {
//   type: "Control",
//   scope: "#/properties/email",
// },
// {
//   type: "Control",
//   scope: "#/properties/username",
// },
// {
//   type: "Control",
//   scope: "#/properties/password",
// },
// {
//   type: "Control",
//   scope: "#/properties/password_confirmation",
// },
// {
//   type: "Control",
//   scope: "#/properties/confirm",
// },
