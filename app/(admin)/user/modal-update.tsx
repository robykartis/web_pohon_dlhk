'use client'

import { Input } from "@/components/ui/input"
import { UPDATE_POHON, UPDATE_USER } from "@/lib/api"
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
import { SubmitHandler } from 'react-hook-form';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";


interface FormData {
    id: number;
    id_user: number;
    NamaUser: string;
    level: string;
    NoHp: string;
    JK: string;
    Email: string;
    password?: string;
    cPassword?: string;
}
function ModalUpdate({ data, onUpdateFinish }: { data: UserType, onUpdateFinish: () => void }) {

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
        id_user: z.number(),
        NamaUser: z.string().min(1, { message: "Nama harus diisi" }),
        level: z.string().min(1, { message: "Level harus diisi" }),
        NoHp: z.string().min(1, { message: "Nomor HP harus diisi" }),
        JK: z.string().min(1, { message: "Jenis Kelamin harus diisi" }),
        Email: z.string().min(1, { message: 'Email harus diisi' }).email('dengan email valid'),
        password: z.string().optional(),
        cPassword: z.string().optional()
    }).refine((data) => {
        if (data.password && data.password !== data.cPassword) {
            throw new Error('Password dan konfirmasi password tidak sama');
        }
        if ((data.password && !data.cPassword) || (!data.password && data.cPassword)) {
            throw new Error('Password dan konfirmasi password harus diisi');
        }
        return true;
    }, {
        message: 'Password dan konfirmasi password tidak sama',
        path: ['cPassword'],
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            id: data.id,
            id_user: data.id,
            password: '',
            cPassword: '',
            level: data.level,
            NamaUser: data.name,
            NoHp: data.no_hp,
            JK: data.jk,
            Email: data.email,
        },
    });

    const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (formData: any) => {

        try {
            const tokens = await getToken();

            const { password, cPassword, ...submissionData } = formData;
            if (!password && !cPassword) {
                delete submissionData.password;
            } else {
                if (password.length < 6 || password !== cPassword) {
                    throw new Error('Password dan konfirmasi password tidak sama atau kurang dari 6 karakter');
                }
                submissionData.password = password;
            }

            const response = await axios.post(
                UPDATE_USER,
                submissionData,
                {
                    headers: {
                        Authorization: `Bearer ${tokens}`,
                    },
                }
            );
            router.refresh();
            toast({
                title: 'Success',
                description: response?.data.message,
                duration: 2000
            });
            onUpdateFinish();
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
    };
    const levelType = [{
        value: "admin",
        name: "Admin"
    },
    {
        value: "user",
        name: "User"
    },
    {
        value: "petugas",
        name: "Petugas"
    }
    ]
    const genderType = [{
        value: "L",
        name: "Laki-laki"
    },
    {
        value: "P",
        name: "Perempuan"
    }
    ]

    return (
        <DrawerContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <div className="mx-auto w-full max-w-full p-6">
                        <DrawerHeader className="justify-items-center">
                            <DrawerTitle>Edit Pengguna</DrawerTitle>
                            <DrawerDescription>Edit Data Pengguna</DrawerDescription>
                        </DrawerHeader>
                        <div className="grid items-start gap-4">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    {isLoading ? (
                                        <Skeleton className="h-8 rounded-md mt-8" />
                                    ) : (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="NamaUser"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Nama User</FormLabel>
                                                        <Input
                                                            id="NamaUser"
                                                            placeholder="Name User"
                                                            {...field}
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    {isLoading ? (
                                        <Skeleton className="h-8 rounded-md mt-8" />
                                    ) : (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="Email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email</FormLabel>
                                                        <Input
                                                            id="Email"
                                                            placeholder="Email User"
                                                            {...field}
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </>
                                    )}

                                </div>
                                <div className="space-y-2">
                                    {isLoading ? (
                                        <Skeleton className="h-8 rounded-md mt-8" />
                                    ) : (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="level"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Level</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Pilih Level" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {levelType.map((data, index) => (
                                                                    <SelectItem key={index} value={data.value}>{data.name}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </>
                                    )}

                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    {isLoading ? (
                                        <Skeleton className="h-8 rounded-md mt-8" />
                                    ) : (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="NoHp"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>No HP</FormLabel>
                                                        <Input
                                                            type="number"
                                                            placeholder="No HP"
                                                            {...field}
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </>
                                    )}


                                </div>
                                <div className="space-y-2">
                                    {isLoading ? (
                                        <Skeleton className="h-8 rounded-md mt-8" />
                                    ) : (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="JK"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Jenis Kelamin</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Pilih Jenis Kelamin" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {genderType.map((data, index) => (
                                                                    <SelectItem key={index} value={data.value}>{data.name}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </>
                                    )}

                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    {isLoading ? (
                                        <Skeleton className="h-8 rounded-md mt-8" />
                                    ) : (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="password"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Password</FormLabel>
                                                        <Input
                                                            type="password"
                                                            placeholder="Masukkan Password"
                                                            {...field}
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </>
                                    )}

                                </div>
                                <div className="space-y-2">
                                    {isLoading ? (
                                        <Skeleton className="h-8 rounded-md mt-8" />
                                    ) : (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="cPassword"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Confirm Password</FormLabel>
                                                        <Input
                                                            type="password"
                                                            placeholder="Masukkan Password"
                                                            {...field}
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </>
                                    )}

                                </div>
                            </div>

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
                                            Simpan
                                        </Button>
                                    )}
                                    <DrawerClose asChild>
                                        <Button variant="outline">Batal</Button>
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