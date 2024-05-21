'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, ArrowUpDown, Pencil, Trash, View } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { DETAIL_LOKASI_KERUSAKAN, DETAIL_MAP_POHON, DETAIL_POHON } from '@/lib/api'
import { useState } from 'react'
import axios from '@/lib/axios'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import { getToken } from '@/app/api/Admin/UserApi'

import { toast } from 'react-toastify'
import ModalView from './modal-view'
import { Dialog } from '@/components/ui/dialog'

const CellComponent = ({ row }: any) => {
    const pohonId = row.original.id;
    const [modalData, setModalData] = useState(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleOpenModal = async () => {
        try {
            const data = await handleClik(pohonId);
            setModalData(data);
            setModalOpen(true);
        } catch (error: any) {
            toast.error(error, { theme: "colored" });
        }
    };

    return (
        <>
            <div className="flex gap-2 float-right">
                {/* Tombol edit */}
                <Button onClick={handleOpenModal} size="icon">  <View /></Button>
                <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                    {modalData && modalOpen && <ModalView data={modalData} />}
                </Dialog>

            </div>
        </>
    );
};

// Mendefinisikan kolom-kolom tabel
export const columns: ColumnDef<PohonType>[] = [
    {
        id: 'no_urut',
        header: 'No',
        cell: ({ row }) => {
            return row.index + 1;
        }
    },
    {
        accessorKey: 'nama_pohon',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Nama Pohon
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            )
        }
    },
    {
        accessorKey: 'nm_jalan',
        header: 'Nama Jalan'
    },
    {
        accessorKey: 'status_pohon',
        header: 'Status Pohon'
    },
    {
        id: 'actions',
        cell: CellComponent
    }
];
async function handleClik(id: any) {
    const tokens = await getToken();
    try {
        const response = await axios.post(
            DETAIL_MAP_POHON,
            { id_pohon: id },
            {
                headers: {
                    Authorization: `Bearer ${tokens}`,
                }
            },
        );
        // console.log(response);
        return response.data.data; // Mengembalikan data yang diperoleh dari respons POST
    } catch (error) {
        console.error("Gagal menyimpan data. Terjadi kesalahan pada server:", error);
        throw error; // Meneruskan error untuk ditangani oleh komponen yang memanggil handleSubmit
    }
}