import { getMapsDataTable } from "@/app/api/Admin/MapsApi";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Metadata } from "next"
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./maps-data'), {
    ssr: false
});

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Sebaran Data Pohon`,
    description: `${process.env.NEXT_PUBLIC_APP_NAME} - Sebaran Data Pohon`,
}


export default async function StatistikLokasiKerusakanPage() {
    const DATA: any[] = await getMapsDataTable();
    // console.log(DATA)
    return (
        <>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <div className="grid grid-cols-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Lokasi Kerusakan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DynamicMap mapData={DATA} />
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>

    )
}
