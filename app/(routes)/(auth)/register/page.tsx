import Link from "next/link";
import React from "react";

import { RegisterForm } from "./RegisterForm";
import { Terms } from "../components/Terms";

export default function RegisterPage() {
  return (
    <div>
      <p className="mb-7 text-left text-3xl font-bold">Sign Up</p>

      <RegisterForm />

      <div className="mt-4 flex gap-1">
        <p className="text-white opacity-70">Already have an account?</p>
        <Link href="/login" className="opacity-1 text-white">
          Log In here
        </Link>
      </div>

      <Terms />
    </div>
  );
}
