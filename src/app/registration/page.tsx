import React from "react";
import RegistrationForm from "../../Components/Forms/Registration/RegistrationForm";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegistrationForm />
    </Suspense>
  );
}
