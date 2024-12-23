"use client";

import { useState } from "react";
import { person } from "@jsonforms/examples";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";

export default function Page() {
  const [data, setData] = useState(person.data);

  const schema = person.schema;
  const uischema = person.uischema;

  const customUISchema = {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/name",
      },
      // {
      //   type: "Control",
      //   scope: "#/properties/personalData/properties/age",
      // },
    ],
  };

  return (
    <div className="flex flex-col w-full px-10 pt-10 gap-y-5">
      <JsonForms
        schema={schema}
        uischema={customUISchema}
        data={typeof window !== "undefined" ? [] : data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  );
}
