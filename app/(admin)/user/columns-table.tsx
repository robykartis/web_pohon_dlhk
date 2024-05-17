'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, ArrowUpDown, Pencil, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { DETAIL_POHON, DETAIL_USER } from '@/lib/api'
import { useState } from 'react'
import axios from '@/lib/axios'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import { getToken } from '@/app/api/Admin/UserApi'

import { toast } from 'react-toastify'
import ModalUpdate from './modal-update'
import ModalDelete from './modal-delete'

const CellComponent = ({ row }: any) => {
    const pohonId = row.original.id;
    const [modalData, setModalData] = useState(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [modalOpenDeleteData, setModalOpenDeleteData] = useState(null);
    const [modalOpenDelete, setModalOpenDelete] = useState<boolean>(false);

    const handleUpdateFinish = () => {
        setModalOpen(false); // Menutup Drawer setelah berhasil mengirimkan data update
    };

    const handleUpdateDelete = () => {
        setModalOpenDelete(false); // Menutup Drawer setelah berhasil mengirimkan data delete
    };

    const handleOpenModal = async () => {
        try {
            const data = await handleSubmit(pohonId);
            setModalData(data);
            setModalOpen(true);
        } catch (error: any) {
            toast.error(error, { theme: "colored" });
        }
    };

    const handleOpenModalDelete = async () => {
        try {
            const data = await handleSubmit(pohonId);
            setModalOpenDeleteData(data);
            setModalOpenDelete(true);
        } catch (error: any) {
            toast.error(error, { theme: "colored" });
        }
    };

    return (
        <>
            <div className="flex gap-2 float-right">
                {/* Tombol edit */}
                <Button onClick={handleOpenModal} size="icon">  <Pencil /></Button>
                <Drawer open={modalOpen} onOpenChange={setModalOpen}>
                    {modalData && modalOpen && <ModalUpdate data={modalData} onUpdateFinish={handleUpdateFinish} />}
                </Drawer>
                {/* Tombol delete */}
                <Button variant="destructive" onClick={handleOpenModalDelete} size="icon">  <Trash /></Button>
                <Drawer open={modalOpenDelete} onOpenChange={setModalOpenDelete}>
                    {/* Menggunakan onDeleteFinish untuk menutup drawer setelah penghapusan berhasil */}
                    {modalOpenDeleteData && modalOpenDelete && <ModalDelete data={modalOpenDeleteData} onDeleteFinish={handleUpdateDelete} isDrawerOpenProp={modalOpenDelete} />}

                </Drawer>
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
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Name
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            )
        }
    },
    {
        accessorKey: 'email',
        header: 'Email'
    },
    {
        accessorKey: 'level',
        header: 'Level'
    },
    {
        accessorKey: 'jk',
        header: 'Jenis Kelamin'
    },
    {
        id: 'actions',
        cell: CellComponent
    }
];
async function handleSubmit(id: any) {
    const tokens = await getToken();
    try {
        const response = await axios.post(
            DETAIL_USER,
            { id_user: id },
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