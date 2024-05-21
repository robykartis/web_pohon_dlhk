
import CardDashboard from "@/components/admin/dashboard/card-components"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Dashboard`,
    description: 'Build digital experiences for any tech stack, visually.',
}


export default function DashboardPage() {
    return (
        <>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <div className="flex items-center">
                    <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
                </div>
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    <CardDashboard titleCard="Total Pengguna" totalData="45,231.89" ketData="+20.1%" />
                    <CardDashboard titleCard="Total Pohon" totalData="45,231.89" ketData="+20.1%" />
                    <CardDashboard titleCard="Total Pohon Rusak" totalData="45,231.89" ketData="+20.1%" />
                </div>
            </main>
        </>

    )
}
