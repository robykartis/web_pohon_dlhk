
'use client'
import { ColumnDef, ColumnFiltersState } from '@tanstack/react-table'
import { ArrowUpDown, View } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { DETAIL_MAP_POHON } from '@/lib/api'
import axios from '@/lib/axios'
import { getToken } from '@/app/api/Admin/UserApi'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import React, { useState } from 'react'

const CellComponent = ({ row }: any) => {
    const Star = Math.floor(100000000 + Math.random() * 900000000).toString();
    const Id = row.original.id;
    // console.log(Id)
    const End = Math.floor(100000000 + Math.random() * 900000000).toString();
    // console.log(Star + Id + End);


    // const [modalData, setModalData] = useState(null);
    // const [modalOpen, setModalOpen] = useState<boolean>(false);
    // const handleOpenModal = async () => {
    //     try {
    //         const data = await handleClik(pohonId);
    //         setModalData(data);
    //         setModalOpen(true);
    //     } catch (error: any) {
    //         toast.error(error, { theme: "colored" });
    //     }
    // };

    return (
        <>
            <div className="flex gap-2 float-right">
                {/* Tombol edit */}
                <Link href={`admin-pendataan-pohon/${Star}${Id}${End}`}>
                    <Button size="icon"><View /></Button>
                </Link>

                {/* <Button onClick={handleOpenModal} size="icon">  <View /></Button>
                <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                    {modalData && modalOpen && <ModalView data={modalData} />}
                </Dialog> */}

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
        accessorKey: 'tahun_tanam',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Tahun Tanam
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            )
        },
        meta: {
            filterVariant: 'select',
        },
    },
    {
        accessorKey: 'kec',
        header: 'Kecamatan'
    },
    {
        accessorKey: 'kel',
        header: 'Kelurahan'
    },
    {
        accessorKey: 'nm_jalan',
        header: 'Nama Jalan'
    },
    {
        accessorKey: 'status_pohon',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Status Pohon
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            )
        },
        cell: ({ row }: any) => {
            // console.log(row); // Log the value of row.status_pohon
            if (row.original.status_pohon === '1') {
                return <Badge className='bg-primary'>Sehat</Badge>;
            } else if (row.original.status_pohon === '2') {
                return <Badge variant="destructive">Ada Kerusakan</Badge>;
            } else {
                row.original.status_pohon = 'Menunggu'; // Update the status_pohon property
                return 'Menunggu';
            }
        }
    },
    {
        id: 'actions',
        cell: CellComponent
    }
];

// function Filter({ column }: { column: Column<any, unknown> }) {
//     const columnFilterValue = column.getFilterValue()
//     const { filterVariant } = column.columnDef.meta ?? {}

//     return filterVariant === 'range' ? (
//       <div>
//         <div className="flex space-x-2">
//           {/* See faceted column filters example for min max values functionality */}
//           <DebouncedInput
//             type="number"
//             value={(columnFilterValue as [number, number])?.[0] ?? ''}
//             onChange={value =>
//               column.setFilterValue((old: [number, number]) => [value, old?.[1]])
//             }
//             placeholder={`Min`}
//             className="w-24 border shadow rounded"
//           />
//           <DebouncedInput
//             type="number"
//             value={(columnFilterValue as [number, number])?.[1] ?? ''}
//             onChange={value =>
//               column.setFilterValue((old: [number, number]) => [old?.[0], value])
//             }
//             placeholder={`Max`}
//             className="w-24 border shadow rounded"
//           />
//         </div>
//         <div className="h-1" />
//       </div>
//     ) : filterVariant === 'select' ? (
//       <select
//         onChange={e => column.setFilterValue(e.target.value)}
//         value={columnFilterValue?.toString()}
//       >
//         {/* See faceted column filters example for dynamic select options */}
//         <option value="">All</option>
//         <option value="complicated">complicated</option>
//         <option value="relationship">relationship</option>
//         <option value="single">single</option>
//       </select>
//     ) : (
//       <DebouncedInput
//         className="w-36 border shadow rounded"
//         onChange={value => column.setFilterValue(value)}
//         placeholder={`Search...`}
//         type="text"
//         value={(columnFilterValue ?? '') as string}
//       />
//       // See faceted column filters example for datalist search suggestions
//     )
//   }


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