import { auth } from "@/auth";
import { redirect } from "next/navigation";
import HeaderClient from "./header-client";

export default async function Header() {
  const session = await auth();
  if (!session?.user) redirect("/");

  return <HeaderClient session={session} />;
}
