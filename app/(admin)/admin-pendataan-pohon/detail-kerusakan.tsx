

import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import Link from "next/link"

export default function DetailKerusakan({ DATA_KERUSAKAN }: { DATA_KERUSAKAN: MapsLokasiKerusakanType }) {
    const KERUSAKAN: any[] = DATA_KERUSAKAN.KerusakanPohon
    return (
        <>

            {KERUSAKAN.map((dt, index) => (
                <>
                    <div className="lg:flex sm:w-full gap-4 space-y-1" key={index}>
                        <div className="lg:w-1/1 sm:w-full items-center justify-center">
                            <Table className="w-full ">
                                <TableBody>
                                    <TableRow >
                                        <TableCell className="text-2xl">Tipe Kerusakan </TableCell>
                                        <TableCell className="text-2xl">:</TableCell>
                                        <TableCell className="text-2xl">{dt.tipe_kerusakan}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell className="text-lg">Pembobotan Tipe Kerusakan</TableCell>
                                        <TableCell className="text-2xl">:</TableCell>
                                        <TableCell className="text-lg">{dt.pembobotan_tipe_kerusakan}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell className="text-lg">Tingak Keparahan</TableCell>
                                        <TableCell className="text-2xl">:</TableCell>
                                        <TableCell className="text-lg">{dt.tingak_keparahan}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell className="text-lg">Pembobotan Tingak Keparahan</TableCell>
                                        <TableCell className="text-2xl">:</TableCell>
                                        <TableCell className="text-lg">{dt.pembobotan_tingak_keparahan} </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell className="text-lg">Nilai IK</TableCell>
                                        <TableCell className="text-2xl">:</TableCell>
                                        <TableCell className="text-lg">{dt.nilai_IK}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell className="text-lg">Tahun</TableCell>
                                        <TableCell className="text-2xl">:</TableCell>
                                        <TableCell className="text-lg">{dt.tahun}</TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </div>

                        <div className="lg:w-1/2 items-center justify-center mx-auto">
                            <div className="grid gap-8">
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-8 lg:grid-cols-1 sm:py-6 sm:px-6">
                                    <div className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none">
                                        <Link className="block h-78 w-full overflow-hidden" href="#">
                                            <Image
                                                alt="Pohon Detail"
                                                className="h-full w-full object-cover transition-all group-hover:scale-125"
                                                height={300}
                                                src={`${process.env.NEXT_PUBLIC_API_URL}/${dt.folder_kerusakan}${dt.foto_kerusakan}`}
                                                style={{
                                                    aspectRatio: "300/300",
                                                    objectFit: "cover",
                                                }}
                                                width={300}
                                            />
                                        </Link>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Separator className="my-10 font-bold" />
                </>
            ))}

        </>
    )
}
