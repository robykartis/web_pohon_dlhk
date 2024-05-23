'use client'
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu"

import { useState } from "react"
import { CustomSession } from "@/app/api/auth/[...nextauth]/options"
import { signOut, useSession } from "next-auth/react"
import { LOGOUT_URL } from "@/lib/api"
import axios from "@/lib/axios"
import { toast } from "react-toastify"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { ReloadIcon } from "@radix-ui/react-icons"

import {
    CircleUser,
    Menu,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/theme-toggle"
import { MobileMenuAdmin } from "./menu-admin"


export default function HeaderAdmin() {
    const [logoutOpen, setLogOutOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

    const { data } = useSession();
    const userSession = data as CustomSession;
    const dataSession = userSession?.user;
    const session = dataSession

    // console.log(session?.tokens)

    const logoutUser = async () => {
        setLoading(true);
        try {
            await axios.post(
                LOGOUT_URL,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${session?.tokens}`,
                    },
                }
            );
            signOut({
                callbackUrl: "/",
                redirect: true,
            });
            toast.success('Logout Berhasil', { theme: "colored" });
        } catch (err) {
            toast.error("Something went wrong. Please try again!");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <header className="flex h-14 items-center gap-4 border-b  px-4 lg:h-[60px] lg:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col">
                        <nav className="grid gap-2 text-lg font-medium">

                            <MobileMenuAdmin />

                        </nav>
                        <div className="mt-auto">
                            {/* <Card>
                                <CardHeader>
                                    <CardTitle>Upgrade to Pro</CardTitle>
                                    <CardDescription>
                                        Unlock all features and get unlimited access to our
                                        support team.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button size="sm" className="w-full">
                                        Upgrade
                                    </Button>
                                </CardContent>
                            </Card> */}
                        </div>
                    </SheetContent>
                </Sheet>
                <div className="w-full flex-1">

                </div>
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{session?.nama}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => setLogOutOpen(true)}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>



            <Dialog open={logoutOpen} onOpenChange={setLogOutOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Apa Anda Yakin ?</DialogTitle>
                        <DialogDescription>
                            Tindakan ini akan mengakhiri sesi Anda dan Anda perlu masuk kembali untuk mengakses dasbor Anda.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end space-x-4">
                        {loading ? (
                            <Button variant="destructive" onClick={logoutUser}>
                                Ya Logout!
                            </Button>
                        ) : (
                            <Button variant="destructive">
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                Process...
                            </Button>
                        )}
                        <DialogClose>
                            <Button>Batal</Button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>

        </>
    )
}

