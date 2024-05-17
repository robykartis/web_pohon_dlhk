'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { CustomSession } from '@/app/api/auth/[...nextauth]/options'


import {
    Bell,
    BugOff,
    CircleUser,
    Home,
    HomeIcon,
    LineChart,
    MapPinned,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Trees,
    Triangle,
    TriangleAlert,
    Users,
    Users2,
} from "lucide-react"
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'


const useUserLevels = () => {
    const { data } = useSession();
    const userSession = data as CustomSession;
    const level = userSession?.user?.level;

    return {
        isSu: level?.includes("Superadmin"),
        isAdmin: level?.includes("admin"),
        isKepala: level?.includes("kepala"),
        isUser: level?.includes("user"),
        isPetugas: level?.includes("petugas"),
    };
};

const usePathChecks = () => {
    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);

    return {
        isDashboardPath: () => ["dashboard", "show", "edit"].includes(pathNames[0]),
        isUsersPath: () => ["user", "show", "edit"].includes(pathNames[0]),
        isPohonPath: () => ["pohon", "show", "edit"].includes(pathNames[0]),
        isLokasiPath: () => ["lokasi-kerusakan", "show", "edit"].includes(pathNames[0]),
        isTipeKerusakanPath: () => ["tipe-kerusakan", "show", "edit"].includes(pathNames[0]),
        isKelasKeparahanPath: () => ["kelas-keparahan", "show", "edit"].includes(pathNames[0]),
        isMapsKelasKeparahan: () => ["admin-maps-lokasi-kerusakan", "show", "edit"].includes(pathNames[0]),
    };
}


export function MenuAdmin() {
    const { isSu, isAdmin, isKepala, isUser, isPetugas } = useUserLevels();
    const {
        isDashboardPath, isUsersPath, isPohonPath, isTipeKerusakanPath,
        isLokasiPath, isKelasKeparahanPath, isMapsKelasKeparahan
    } = usePathChecks();

    return (
        <>
            <Link
                href="/dashboard"
                className={cn("flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:rounded-lg hover:bg-primary/20", {
                    "rounded-lg bg-primary/20 text-black": isDashboardPath(),
                })}

            >
                <HomeIcon className="h-4 w-4" />
                Dashboard
            </Link>

            {(isSu || isAdmin) && (
                <>
                    <Separator className="my-4" />
                    <h4 className='px-3 py-2'>DATA MASTER</h4>
                    <Link
                        href="/user"
                        className={cn("flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:rounded-lg hover:bg-primary/20", {
                            "rounded-lg bg-primary/20 text-black  dark:text-white": isUsersPath(),
                        })}
                    >
                        <Users2 className="h-4 w-4" />
                        User
                    </Link>

                    <Link
                        href="/pohon"
                        className={cn("flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:rounded-lg hover:bg-primary/20", {
                            "rounded-lg bg-primary/20 text-black  dark:text-white": isPohonPath(),
                        })}
                    >
                        <Trees className="h-4 w-4" />
                        Jenis Pohon
                    </Link>
                    <Link
                        href="/tipe-kerusakan"
                        className={cn("flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:rounded-lg hover:bg-primary/20", {
                            "rounded-lg bg-primary/20 text-black dark:text-white": isTipeKerusakanPath(),
                        })}
                    >
                        <BugOff className="h-4 w-4" />
                        Tipe Kerusakan
                    </Link>
                    <Link
                        href="/lokasi-kerusakan"
                        className={cn("flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:rounded-lg hover:bg-primary/20", {
                            "rounded-lg bg-primary/20 text-black  dark:text-white": isLokasiPath(),
                        })}
                    >
                        <MapPinned className="h-4 w-4" />
                        Lokasi Kerusakan
                    </Link>
                    <Link
                        href="/kelas-keparahan"
                        className={cn("flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:rounded-lg hover:bg-primary/20", {
                            "rounded-lg bg-primary/20 text-black  dark:text-white": isKelasKeparahanPath(),
                        })}
                    >
                        <TriangleAlert className="h-4 w-4" />
                        Kelas Keparahan
                    </Link>

                    <Separator className="my-4" />
                    <h4 className='px-3 py-2'>DATA MAP</h4>
                    <Link
                        href="/admin-maps-lokasi-kerusakan"
                        className={cn("flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:rounded-lg hover:bg-primary/20", {
                            "rounded-lg bg-primary/20 text-black  dark:text-white": isMapsKelasKeparahan(),
                        })}
                    >
                        <MapPinned className="h-4 w-4" />
                        Lokasi Kerusakan
                    </Link>
                </>
            )}

            {isKepala && (
                <Link
                    href="#"
                    className={cn("flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary", {
                        "rounded-lg bg-muted text-primary": isUsersPath(),
                    })}
                >
                    <Package className="h-4 w-4" />
                    Kepala
                </Link>
            )}

            {isUser && (
                <Link
                    href="#"
                    className={cn("flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary", {
                        "rounded-lg bg-muted text-primary": isUsersPath(),
                    })}
                >
                    <Package className="h-4 w-4" />
                    User
                </Link>
            )}

            {isPetugas && (
                <Link
                    href="#"
                    className={cn("flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary", {
                        "rounded-lg bg-muted text-primary": isUsersPath(),
                    })}
                >
                    <Package className="h-4 w-4" />
                    Petugas
                </Link>
            )}
        </>
    );
}

export function MobileMenuAdmin() {
    const { isSu, isAdmin, isKepala, isUser, isPetugas } = useUserLevels();
    const {
        isDashboardPath, isUsersPath, isPohonPath, isTipeKerusakanPath,
        isLokasiPath, isKelasKeparahanPath
    } = usePathChecks();

    return (
        <>
            <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
            >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
            </Link>

            <Link
                href="/dashboard"
                className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground", {
                    "rounded-lg bg-muted px-3 py-2 text-primary": isDashboardPath(),
                })}
            >
                <ShoppingCart className="h-5 w-5" />
                Dashboard
            </Link>

            {(isSu || isAdmin) && (
                <>
                    <Link
                        href="/user"
                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground", {
                            "rounded-xl bg-muted px-3 py-2 text-primary": isUsersPath(),
                        })}
                    >
                        <ShoppingCart className="h-5 w-5" />
                        User
                    </Link>
                    <Link
                        href="/pohon"
                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground", {
                            "rounded-xl bg-muted px-3 py-2 text-primary": isPohonPath(),
                        })}
                    >
                        <ShoppingCart className="h-5 w-5" />
                        Jenis Pohon
                    </Link>
                    <Link
                        href="/tipe-kerusakan"
                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground", {
                            "rounded-xl bg-muted px-3 py-2 text-primary": isTipeKerusakanPath(),
                        })}
                    >
                        <ShoppingCart className="h-5 w-5" />
                        Tipe Kerusakan
                    </Link>
                    <Link
                        href="/lokasi-kerusakan"
                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground", {
                            "rounded-xl bg-muted px-3 py-2 text-primary": isLokasiPath(),
                        })}
                    >
                        <ShoppingCart className="h-5 w-5" />
                        Lokasi Kerusakan
                    </Link>
                    <Link
                        href="/kelas-keparahan"
                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground", {
                            "rounded-xl bg-muted px-3 py-2 text-primary": isKelasKeparahanPath(),
                        })}
                    >
                        <ShoppingCart className="h-5 w-5" />
                        Kelas Keparahan
                    </Link>
                </>
            )}
        </>
    );
}