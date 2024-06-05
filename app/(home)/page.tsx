import Link from "next/link"
import FormLogin from "@/components/auth/form-login"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Login`,
  description: `${process.env.NEXT_PUBLIC_APP_NAME} - Login`,
};
export default async function LoginPage() {
  const session: any | null = await getServerSession(authOptions);
  console.log(session);
  if (session) {
    redirect("/dashboard");
  }
  return (

    <>
      <FormLogin />
    </>

  )
}
