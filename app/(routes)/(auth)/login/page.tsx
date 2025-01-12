import Link from "next/link";

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
      <div className="mt-4 flex items-center space-x-2"></div>
    </div>
  );
}
