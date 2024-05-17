



import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Metadata } from "next"
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('@/components/admin/Maps/Maps'), {
    ssr: false
});

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Dashboard`,
    description: 'Build digital experiences for any tech stack, visually.',
}


export default function StatistikLokasiKerusakanPage() {

    return (
        <>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <div className="grid grid-cols-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Lokasi Kerusakan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DynamicMap />
                        </CardContent>
                    </Card>
                </div>
                {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pie Chart</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <PieCharts />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Bar Chart</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <BarCharts />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Line Chart</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <LineCharts />
                        </CardContent>
                    </Card>
                </div> */}

            </main>
        </>

    )
}
