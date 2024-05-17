
import HeaderAdmin from "@/components/admin/layout/header-admin"
import { Metadata } from "next"
import NextAuthSessionProvider from "@/providers/sessionProvider"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"
import SidebarAdmin from "@/components/admin/layout/sidebar-admin"
import BreadcrumbAdmin from "@/components/admin/breadcrubms-admin"


export const metadata: Metadata = {
    title: 'Pohon Digital - Admin',
    description: 'Build digital experiences for any tech stack, visually.',
}
export default async function DashboardLayout({ children, }: { children: React.ReactNode }) {
    const session: any | null = await getServerSession(authOptions);
    // console.log(session);
    if (!session) {
        redirect("/");
    }

    return (
        <>
            <NextAuthSessionProvider>
                <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                    <SidebarAdmin />
                    <div className="flex flex-col">
                        <HeaderAdmin />
                        <div className="mt-4">
                            {children}
                        </div>
                    </div>
                </div>
            </NextAuthSessionProvider>


        </>
    )
}
