import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import Link from "next/link"

export default function DetailPohon({ DATA_DETAIL }: { DATA_DETAIL: MapsLokasiKerusakanType }) {
    return (
        <>
            <div className="lg:flex sm:w-full gap-4 space-y-1">
                <div className="lg:w-1/1 sm:w-full items-center justify-center">
                    <Table className="w-full">
                        <TableBody>
                            <TableRow >
                                <TableCell className="text-2xl">Nama Pohon</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-2xl">{DATA_DETAIL.DetailPohon.nama_pohon}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">Tahun Tanam</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.tahun_tanam}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">Kelurahan</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.kel}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">Kecamatan</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.kec}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">Status Pohon</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.status_pohon}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">ID Petugas</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.id_petugas}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">Diameter</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.diameter}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">T1</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.T1}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">T2</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.T2}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">T3</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.T3}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">Tinggi</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.tinggi}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">Tahun</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.tahun}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">Tanggal</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.tgl}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="text-lg">Jam</TableCell>
                                <TableCell className="text-2xl">:</TableCell>
                                <TableCell className="text-lg">{DATA_DETAIL.DetailPohon.jam}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

                <div className="lg:w-1/2 items-center justify-center">
                    <div className="grid gap-8">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-8 lg:grid-cols-1 sm:py-6 sm:px-6">
                            <div className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none">
                                <Link className="block h-96 w-full overflow-hidden" href="#">
                                    <Image
                                        alt="Pohon Detail"
                                        className="h-full w-full object-cover transition-all group-hover:scale-125"
                                        height={500}
                                        src={`${process.env.NEXT_PUBLIC_API_URL}/${DATA_DETAIL.DetailPohon.folder}${DATA_DETAIL.DetailPohon.foto_pohon}`}
                                        style={{
                                            aspectRatio: "500/500",
                                            objectFit: "cover",
                                        }}
                                        width={500}
                                    />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
