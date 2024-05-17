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
import { STORE_USER } from "@/lib/api"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
interface Props {
    tokensData: any;
}
export default function ModalCreateUser({ tokensData }: Props) {

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [isMutating, setIsMutating] = useState(false);
    const route = useRouter();
    const [errorsRes, setErrors] = useState<any>({});
    const { pending } = useFormStatus();

    const FormSchema = z.object({
        NamaUser: z.string().min(1, { message: "Nama harus diisi" }),
        level: z.string().min(1, { message: "Level harus diisi" }),
        NoHp: z.string().min(1, { message: "Nomor HP harus diisi" }),
        JK: z.string().min(1, { message: "Jenis Kelamin harus diisi" }),
        Email: z.string().min(1, { message: 'Email harus diisi' }).email(' dengan email valid'),
        password: z.string().min(6, { message: 'Password harus diisi minimal 6 karakter' }),
        cPassword: z.string().min(6, { message: 'Password harus diisi minimal 6 karakter' })
    }).refine((data) => data.password === data.cPassword, {
        path: ['cPassword'],
        message: 'Password tidak sama',
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            password: "",
            cPassword: "",
            level: "",
            NamaUser: "",
            NoHp: "",
            JK: "",
            Email: "",
        },
    });



    const onSubmit = async (formData: z.infer<typeof FormSchema>) => {

        try {
            const response = await axios.post(
                STORE_USER,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${tokensData}`,
                    },
                }
            );

            console.log(response);

            toast({
                title: 'Success',
                description: response?.data.message,
                duration: 2000
            });
            form.reset();
            setIsDrawerOpen(false);
            route.refresh();
            setIsMutating(false);

            // Tambahkan logika navigasi atau tindakan lain jika diperlukan
            route.push("/user");
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
        <>
            <Button size="sm" variant="outline" className="ml-auto" onClick={() => setIsDrawerOpen(true)}>
                <PlusIcons />
                Tambah User
            </Button>
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} >
                <DrawerContent >
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                            <div className="mx-auto w-full max-w-full p-6">
                                <DrawerHeader className="justify-items-center">
                                    <DrawerTitle>Create Pohon</DrawerTitle>
                                    <DrawerDescription>Menambahkan Data Pohon Ke Sistim</DrawerDescription>
                                </DrawerHeader>
                                <div className="grid items-start gap-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="space-y-2">
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
                                        </div>

                                        <div className="space-y-2">
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
                                        </div>
                                        <div className="space-y-2">
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
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
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
                                        </div>
                                        <div className="space-y-2">
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
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
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
                                        </div>
                                        <div className="space-y-2">
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
                                        </div>
                                    </div>

                                </div>
                                <DrawerFooter>
                                    {pending ? (
                                        <Button disabled >
                                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                            Process...
                                        </Button>
                                    ) : (
                                        <Button disabled={pending}>
                                            Save
                                        </Button>
                                    )}
                                    <DrawerClose asChild>
                                        <Button variant="outline">Cancel</Button>
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
