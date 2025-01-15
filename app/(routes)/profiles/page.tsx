import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Profiles } from "./components/Profiles";

export default async function ProfilePage() {
  const session = await auth();
  console.log(session);
  if (!session?.user) {
    redirect("/login");
  }

  const userNetflix = await db.userNetflix.findMany({
    where: {
      userId: session?.user?.id,
    },
  });

  console.log({ userNetflix });
  return (
    <div className="flex h-full flex-col items-center justify-center bg-zinc-900">
      <div>
        <h1 className="mb-8 text-5xl"> Who are you? Choose your profile</h1>
      </div>
      <Profiles users={userNetflix} />
    </div>
  );
}
