'use client'

import { Input } from "@/components/ui/input"
import { UPDATE_LOKASI_KERUSAKAN } from "@/lib/api"
import { useRouter } from "next/navigation"
import * as z from 'zod';
import { useForm } from "react-hook-form"

import axios from "@/lib/axios"


import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"



function ModalView({ data }: { data: MapsLokasiKerusakanType }) {

    console.log(data)
    return (
        <DialogContent className="sm:max-w-[1400px]">
            <DialogHeader>
                <DialogTitle>Detail Pohon</DialogTitle>

            </DialogHeader>
            <Table>
                <TableCaption>Detail Informasi Pohon</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[300px]">Nama Pohon</TableHead>
                        <TableHead>Tahun Tanam</TableHead>
                        <TableHead>Nama Jalan</TableHead>
                        <TableHead className="text-right">Status Pohon</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow >
                        <TableCell className="font-medium">{data.DetailPohon.nama_pohon}</TableCell>
                        <TableCell>{data.DetailPohon.tahun_tanam}</TableCell>
                        <TableCell>{data.DetailPohon.nm_jalan}</TableCell>
                        <TableCell className="text-right">{data.DetailPohon.status_pohon}</TableCell>
                    </TableRow>

                </TableBody>

            </Table>

        </DialogContent>
    )
}

export default ModalView;