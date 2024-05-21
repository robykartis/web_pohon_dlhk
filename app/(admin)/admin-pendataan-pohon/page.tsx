import { getToken } from "@/app/api/Admin/UserApi"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { DataTable } from "./data-table"
import { columns } from "./columns-table"
import { Metadata } from "next"
import { getMapsDataTable } from "@/app/api/Admin/MapsApi"

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Lokasi Kerusakan`,
    description: 'Build digital experiences for any tech stack, visually.',
}
export default async function PendataanPohonPage() {
    const tokensData = await getToken()
    const DATA: any = await getMapsDataTable();
    // console.log(DATA)
    return (
        <>
            <div className="container mx-auto px-4 py-2 md:px-6 md:py-3">
                <div className="grid grid-cols-1 gap-8">
                    <Card>
                        <CardHeader >
                            <CardTitle className="flex flex-col md:flex-row md:w-full justify-between items-center">
                                <span className="md:text-center md:px-3">Pendataan Pohon</span>
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <DataTable columns={columns} data={DATA.data} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
