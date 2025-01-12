import { Logo } from "@/components/Shared/Logo";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full">
      <div className="relative h-full">
        <div className="absolute -z-10 h-full min-h-screen w-full bg-black">
          <div className="h-full bg-[url('/login-bg.jpg')] opacity-40" />
        </div>
        <div className="mx-auto max-w-7xl px-8 py-5">
          <Logo />
        </div>
        <div className="mx-auto h-full w-full max-w-md">
          <div className="py bg-black/70 px-14 py-16">{children}</div>
        </div>
      </div>
    </div>
  );
}
