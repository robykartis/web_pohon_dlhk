'use client'
import PlusIcons from "@/components/admin/icons/plus-icons"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { STORE_LOKASI_KERUSAKAN } from "@/lib/api"
import { useRouter } from "next/navigation"
import { useState } from "react"
// import { toast } from "react-toastify"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from "react-hook-form"
import { useFormStatus } from "react-dom"
import { ReloadIcon } from "@radix-ui/react-icons"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import axios from "@/lib/axios"
import { toast } from "@/components/ui/use-toast"
interface Props {
    tokensData: any;
}
export default function ModalCreateLokasiKerusakan({ tokensData }: Props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    const [errorsRes, setErrors] = useState<any>({});
    const { pending } = useFormStatus();

    const FormSchema = z.object({
        Kode: z.string().min(1, { message: "Kode harus diisi" }),
        LokasiKerusakan: z.string().min(1, { message: "Lokasi Kerusakan harus diisi" }),
    });
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            Kode: "",
            LokasiKerusakan: "",
        },
    });

    async function onSubmit(formData: z.infer<typeof FormSchema>) {
        setIsMutating(true);
        try {
            const response = await axios.post(
                STORE_LOKASI_KERUSAKAN,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${tokensData}`,
                    },
                }
            );
            toast({
                title: 'Success',
                description: response?.data.message,
                duration: 2000
            });
            form.reset();
            setIsDrawerOpen(false);
            router.refresh();
            setIsMutating(false);
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
                toast({
                    title: 'Error',
                    description: error.response?.data.message,
                    duration: 5000
                });
            } else {
                console.error("Gagal menyimpan data. Terjadi kesalahan pada server.");
            }
        }
    }
    return (
        <>

            <Button size="sm" variant="outline" className="ml-auto" onClick={() => setIsDrawerOpen(true)}>
                <PlusIcons />
                Tambah Jenis Kerusakan
            </Button>
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                            <div className="mx-auto w-full max-w-lg">
                                <DrawerHeader className="justify-items-center">
                                    <DrawerTitle>Tambah Jenis Kerusakan</DrawerTitle>
                                    <DrawerDescription>Menambahkan Data Jenis Kerusakan</DrawerDescription>
                                </DrawerHeader>
                                <div className="grid items-start gap-4">
                                    <FormField
                                        control={form.control}
                                        name="Kode"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Kode</FormLabel>
                                                <Input
                                                    id="Kode"
                                                    placeholder="Kode"
                                                    {...field}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="LokasiKerusakan"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Jenis Kerusakan</FormLabel>
                                                <Input
                                                    id="LokasiKerusakan"
                                                    placeholder="Jenis Kerusakan"
                                                    {...field}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <DrawerFooter>
                                    {pending ? (
                                        <Button disabled >
                                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                            Process...
                                        </Button>
                                    ) : (
                                        <Button disabled={pending}>
                                            Simpan
                                        </Button>
                                    )}
                                    <DrawerClose asChild>
                                        <Button variant="outline">Batal</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </div>
                        </form>
                    </Form>
                </DrawerContent>
            </Drawer>
        </>
    )
}
