"use server";
type Provider = "google";

import { signIn } from "@/auth";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  //   console.log(action);

  if (action === "google") {
    await signIn(action as Provider, { redirectTo: "/dashboard" });
  } else {
    throw new Error("Invalid provider");
  }
}
