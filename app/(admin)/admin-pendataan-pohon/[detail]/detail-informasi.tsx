
import { TableRow, TableCell, TableBody, Table } from "@/components/ui/table"
import { Info, MapPin, Trees } from "lucide-react"
import Image from "next/image"

const DetailInformasi = (infoData: any) => {
    const info = infoData.infoData.DetailPohon

    // console.log(info)
    return (
        <>

            <div className="container mx-auto py-4 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <div className="grid gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <Trees className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-xl font-semibold">Informasi Pohon</h3>
                                        <div className="text-gray-500 dark:text-gray-400">
                                            <Table >
                                                <TableBody>

                                                    <TableRow >
                                                        <TableCell className="font-semibold" width={'20%'}>Nama Pohon</TableCell>
                                                        <TableCell className="font-semibold " width={'5%'}>:</TableCell>
                                                        <TableCell className="font-semibold text-start" width={'75%'}> {info.nama_pohon} </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold" width={'20%'}>Tahun Tanam</TableCell>
                                                        <TableCell className="font-semibold " width={'5%'}>:</TableCell>
                                                        <TableCell className="font-semibold" width={'75%'}>{info.tahun_tanam} </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold" width={'20%'}>Status Kerusakan</TableCell>
                                                        <TableCell className="font-semibold " width={'5%'}>:</TableCell>
                                                        <TableCell className="font-semibold" width={'75%'}>  {info.status_pohon === '1' ? 'Tidak ada kerusakan' : 'Ada kerusakan'}</TableCell>
                                                    </TableRow>
                                                    <TableRow >
                                                        <TableCell className="font-semibold" width={'20%'}>Diameter Pohon</TableCell>
                                                        <TableCell className="font-semibold " width={'5%'}>:</TableCell>
                                                        <TableCell className="font-semibold" width={'75%'}>{info.diameter}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold" width={'20%'}>T1</TableCell>
                                                        <TableCell className="font-semibold " width={'5%'}>:</TableCell>
                                                        <TableCell className="font-semibold" width={'75%'}>{info.T1}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold" width={'20%'}>T2</TableCell>
                                                        <TableCell className="font-semibold " width={'5%'}>:</TableCell>
                                                        <TableCell className="font-semibold" width={'75%'}> {info.T2}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold" width={'20%'}>T3</TableCell>
                                                        <TableCell className="font-semibold " width={'5%'}>:</TableCell>
                                                        <TableCell className="font-semibold" width={'75%'}> {info.T3}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold" width={'20%'}>Tinggi Pohon</TableCell>
                                                        <TableCell className="font-semibold " width={'5%'}>:</TableCell>
                                                        <TableCell className="font-semibold" width={'75%'}> {info.tinggi}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="grid gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-xl font-semibold">Alamat Lengkap</h3>
                                        <div className="text-gray-500 dark:text-gray-400">
                                            <Table >
                                                <TableBody>
                                                    <TableRow >
                                                        <TableCell className="font-semibold">Kecamatan</TableCell>
                                                        <TableCell className="font-semibold">{info.kec}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">Kelurahan</TableCell>
                                                        <TableCell className="font-semibold">{info.kel}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">Nama Jalan</TableCell>
                                                        <TableCell className="font-semibold">  {info.nm_jalan}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="flex-row">

                            <h3 className="text-xl font-semibold">Foto Pohon</h3>
                            <Image
                                alt="Informasi Penting"
                                className="w-full rounded-lg object-cover"
                                src={`${process.env.NEXT_PUBLIC_API_URL}/${info.folder}${info.foto_pohon}`}
                                height={400}
                                style={{
                                    aspectRatio: "600/400",
                                    objectFit: "cover",
                                }}
                                width={600}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default DetailInformasi