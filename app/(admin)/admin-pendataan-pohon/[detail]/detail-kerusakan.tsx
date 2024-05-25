import { CircleIcon, MegaphoneIcon, MessageCircleQuestionIcon, TextIcon, TriangleAlert } from 'lucide-react'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import React from 'react'
import Image from 'next/image'

const DetailKerusakanPohon = ({ dataPohon }: any) => {
    const data = dataPohon.KerusakanPohon
    // console.log(data)
    return (
        <>
            {data.map((data: any, index: number) => (

                <div className="container mx-auto mt-6 py-4" key={index}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
                        <div className="flex items-center justify-center w-full">
                            <Image
                                alt="Informasi Terkini"
                                className="w-full max-w-md rounded-lg object-cover"
                                src={`${process.env.NEXT_PUBLIC_API_URL}/${data.folder_kerusakan}${data.foto_kerusakan}`}
                                height={400}
                                style={{
                                    aspectRatio: "600/400",
                                    objectFit: "cover",
                                }}
                                width={600}
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="grid gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <TriangleAlert className="h-6 w-6 text-red-500" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-xl font-semibold">Kerusakan {data.tipe_kerusakan}</h3>
                                        <div className="text-gray-500 dark:text-gray-400">
                                            <Table >
                                                <TableBody>
                                                    <TableRow >
                                                        <TableCell className="font-semibold">Tipe Kerusakan</TableCell>
                                                        <TableCell className="font-semibold">{data.tipe_kerusakan}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">Bobot Kerusakan</TableCell>
                                                        <TableCell className="font-semibold">{data.pembobotan_tipe_kerusakan}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">Lokasi Kerusakan</TableCell>
                                                        <TableCell className="font-semibold">{data.lokasi_kerusakan}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">Bobot Lokasi Kerusakan</TableCell>
                                                        <TableCell className="font-semibold">{data.pembobotan_lokasi_kerusakan} </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">Tingkat Keparahan</TableCell>
                                                        <TableCell className="font-semibold">{data.tingak_keparahan}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">Bobot Tingkat Keparahan</TableCell>
                                                        <TableCell className="font-semibold">{data.pembobotan_tingak_keparahan}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">Nilai IK</TableCell>
                                                        <TableCell className="font-semibold">{data.nilai_IK}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default DetailKerusakanPohon