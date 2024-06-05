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
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { STORE_POHON } from "@/lib/api"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
// import { toast } from "react-toastify"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from "react-hook-form"
import { useFormStatus } from "react-dom"
import { ReloadIcon } from "@radix-ui/react-icons"
import {
    Form,
    FormControl,
    FormDescription,
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
export default function ModalCreate({ tokensData }: Props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    const [errorsRes, setErrors] = useState<any>({});
    const { pending } = useFormStatus();

    const FormSchema = z.object({
        NamaPohon: z.string().min(1, { message: "Nama pohon harus diisi" }),
        NamaLatin: z.string().min(1, { message: "Nama latin pohon harus diisi" }),
    });
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            NamaPohon: "",
            NamaLatin: "",
        },
    });



    async function onSubmit(formData: z.infer<typeof FormSchema>) {
        setIsMutating(true);
        try {
            const response = await axios.post(
                STORE_POHON,
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
                Tambah Pohon
            </Button>
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                            <div className="mx-auto w-full max-w-lg">
                                <DrawerHeader className="justify-items-center">
                                    <DrawerTitle>Tambah Jenis Pohon</DrawerTitle>
                                    <DrawerDescription>Menambahkan Data Jenis Pohon</DrawerDescription>
                                </DrawerHeader>
                                <div className="grid items-start gap-4">
                                    <FormField
                                        control={form.control}
                                        name="NamaPohon"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nama Pohon</FormLabel>
                                                <Input
                                                    id="NamaPohon"
                                                    placeholder="Nama Pohon"
                                                    {...field}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="NamaLatin"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nama Latin Pohon</FormLabel>
                                                <Input
                                                    id="NamaLatin"
                                                    placeholder="Nama Latin Pohon"
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
