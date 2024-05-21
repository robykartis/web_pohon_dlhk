'use client'

import { Input } from "@/components/ui/input"
import { UPDATE_POHON } from "@/lib/api"
import { useRouter } from "next/navigation"
import * as z from 'zod';
import { useForm } from "react-hook-form"

import axios from "@/lib/axios"


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
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { getToken } from "@/app/api/Admin/UserApi"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useFormStatus } from "react-dom"
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";



function ModalUpdate({ data, onUpdateFinish }: { data: PohonType, onUpdateFinish: () => void }) {

    // console.log(data)
    const { pending } = useFormStatus();
    const [errorsRes, setErrors] = useState<any>({});
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulasikan pemuatan data
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Ubah durasi sesuai kebutuhan

        return () => clearTimeout(timer);
    }, []);

    const FormSchema = z.object({
        id: z.number(),
        id_pohon: z.number(),
        NamaPohon: z.string().min(1, "Nama pohon tidak boleh kosong"),
        NamaLatin: z.string().min(1, "Nama Latin tidak boleh kosong")
    });
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            id: data.id,
            id_pohon: data.id,
            NamaPohon: data.nama,
            NamaLatin: data.nama_latin,
        },
    });
    const onSubmit = async (formData: z.infer<typeof FormSchema>) => {
        const tokens = await getToken();
        // console.log(tokens);

        try {
            const response = await axios.post(
                UPDATE_POHON,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${tokens}`,
                    },
                }
            );
            // console.log(response);
            router.refresh();
            toast({
                title: 'Success',
                description: response?.data.message,
                duration: 2000
            });
            onUpdateFinish();
            // Lakukan sesuatu dengan respons dari server jika diperlukan
        } catch (error: any) {

            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
                toast({
                    title: 'Error',
                    description: error.response?.data.message,
                    duration: 2000
                });
            } else {
                console.error("Gagal menyimpan data. Terjadi kesalahan pada server.");
            }
        }
    };

    return (
        <DrawerContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                    <div className="mx-auto w-full max-w-lg">
                        <DrawerHeader className="justify-items-center">
                            <DrawerTitle>Update Pohon</DrawerTitle>
                            <DrawerDescription>{data ? data.nama : ""} </DrawerDescription>
                        </DrawerHeader>
                        <div className="grid items-start gap-4">
                            <FormField
                                control={form.control}
                                name="id"

                                render={({ field }) => (
                                    <FormItem>

                                        <Input
                                            placeholder="ID"
                                            type="hidden"
                                            {...field}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="id_pohon"
                                render={({ field }) => (
                                    <FormItem>

                                        <Input
                                            placeholder="ID POHON"
                                            type="hidden"
                                            {...field}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {isLoading ? (
                                <Skeleton className="h-8 rounded-md mt-8" />
                            ) : (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="NamaPohon"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nama Pohon</FormLabel>
                                                <Input
                                                    placeholder="Nama Pohon"

                                                    {...field}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}

                            {isLoading ? (
                                <Skeleton className="h-8 rounded-md mt-8" />
                            ) : (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="NamaLatin"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nama Latin Pohon</FormLabel>
                                                <Input
                                                    placeholder="Nama Latin Pohon"
                                                    {...field}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}


                        </div>
                        <DrawerFooter>
                            {isLoading ? (
                                <Skeleton className="h-8 rounded-md mt-8" />
                            ) : (
                                <>
                                    {pending ? (
                                        <Button disabled >
                                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                            Process...
                                        </Button>
                                    ) : (
                                        <Button disabled={pending}>
                                            Update
                                        </Button>
                                    )}
                                    <DrawerClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DrawerClose>
                                </>
                            )}

                        </DrawerFooter>
                    </div>

                </form>
            </Form>
        </DrawerContent>
    )
}

export default ModalUpdate;