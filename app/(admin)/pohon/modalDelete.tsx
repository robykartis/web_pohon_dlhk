'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

import { ReloadIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/navigation'
import axios from '@/lib/axios'
import { getToken } from '@/app/api/Admin/UserApi'
import { DELETE_POHON } from '@/lib/api'
import { DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { useFormStatus } from 'react-dom'
import { toast } from '@/components/ui/use-toast'

export default function ModalDeletePohon({ data }: { data: PohonType, onDeleteFinish: () => void }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const { pending } = useFormStatus();
    const router = useRouter();

    const handleDeletePohon = async () => {
        try {
            const tokens = await getToken();
            const id = data?.id;
            const response = await axios.post(
                DELETE_POHON,
                { id_pohon: id },
                {
                    headers: {
                        Authorization: `Bearer ${tokens}`,
                    }
                },
            );
            // console.log(response);
            toast({
                title: 'Success',
                description: response?.data.message,
                duration: 2000
            });

            router.refresh();

        } catch (error: any) {
            console.error("Gagal mengirim permintaan penghapusan:", error);
            toast({
                title: 'Error',
                description: error.response?.data.message,
                duration: 2000
            });
        }
    };

    return (
        <DrawerContent>
            <div className="w-full space-y-4">
                <div className="mx-auto w-full max-w-lg">
                    <DrawerHeader className="justify-items-center">
                        <DrawerTitle>Hapus Pohon</DrawerTitle>
                        <DrawerDescription>{data ? data.nama : ""} </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid items-start gap-4">
                        {/* Tempatkan konten tambahan di sini jika diperlukan */}
                    </div>
                    <DrawerFooter>
                        <Button disabled={pending} variant="destructive" onClick={handleDeletePohon}>
                            {pending ? (
                                <>
                                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                    Proses...
                                </>
                            ) : (
                                "Hapus"
                            )}
                        </Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Batal</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </div>
        </DrawerContent>
    );
}
