import { unstable_getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await unstable_getServerSession();
  if (session) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
