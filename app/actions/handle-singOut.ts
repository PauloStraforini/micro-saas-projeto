"use server";

import { signOut } from "@/app/lib/auth";

export async function handleSingOut() {
  await signOut({
    redirectTo: "/project/login",
  });
}
