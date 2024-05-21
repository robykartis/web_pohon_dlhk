import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { getToken, getUsers } from "@/app/api/Admin/UserApi"
import ModalCreateUser from "./modal-create"
import { DataTable } from "./data-table"
import { columns } from "./columns-table"
import { Metadata } from "next"
import GeneratePDF from "@/components/PDF/MyPdf"
export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - User`,
    description: 'Build digital experiences for any tech stack, visually.',
}
export default async function UserPage() {
    const DATA: any = await getUsers()
    const tokens = await getToken()
    return (
        <>
            <div className="container mx-auto px-4 py-2 md:px-6 md:py-3">
                <div className="grid grid-cols-1 gap-8">
                    <Card>
                        <CardHeader >
                            <CardTitle className="flex flex-col md:flex-row md:w-full justify-between items-center">
                                <span className="md:text-center md:px-3">Master User</span>
                                <div className="mt-2 md:mt-0 ml-auto md:ml-0">
                                    <ModalCreateUser tokensData={tokens} />
                                    {/* <GeneratePDF /> */}
                                </div>
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
