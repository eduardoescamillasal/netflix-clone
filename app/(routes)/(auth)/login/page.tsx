import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Terms } from "./Terms";

export default function LoginPage() {
  return (
    <div>
      <p className="mb-7 text-left text-3xl font-bold">Start session</p>
      <p>Form login ...</p>
      <div className="mt-5 text-center">
        <Link href="/" className="hover:underline hover:opacity-70">
          Did you forget your password?
        </Link>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <Checkbox id="terms" className="border-white" />
        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Remember me
        </label>
      </div>
      <div className="mt-4 flex gap-1">
        <p className="text-white opacity-70">Still without an Netflix?</p>
        <Link href="/register" className="opacity-1 text-white">
          Subscribe now
        </Link>
      </div>
      <Terms />
    </div>
  );
}