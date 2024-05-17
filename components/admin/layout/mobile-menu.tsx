'use client'
import { CustomSession } from '@/app/api/auth/[...nextauth]/options';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { BugOff, HomeIcon, MapPinned, TreeDeciduous, Trees, TriangleAlert, Users2 } from 'lucide-react'
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


const MobileMenuAdmin = () => {
    const { data } = useSession();
    const userSession = data as CustomSession;
    const level = userSession?.user?.level;
    // console.log(level);
    const isSu = level?.includes("Superadmin");
    const isAdmin = level?.includes("admin");
    const isKepala = level?.includes("kepala");
    const isUser = level?.includes("user");
    const isPetugas = level?.includes("petugas");

    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);

    // Fungsi untuk memeriksa apakah path URL saat ini adalah bagian dari page
    const isDashboardPath = () => {
        return pathNames[0] === "dashboard" || pathNames[0] === "show" || pathNames[0] === "edit";
    };
    const isUsersPath = () => {
        return pathNames[0] === "user" || pathNames[0] === "show" || pathNames[0] === "edit";
    };
    const isPohonPath = () => {
        return pathNames[0] === "pohon" || pathNames[0] === "show" || pathNames[0] === "edit";
    };
    const isLokasiPath = () => {
        return pathNames[0] === "lokasi-kerusakan" || pathNames[0] === "show" || pathNames[0] === "edit";
    };
    const isTipeKerusakan = () => {
        return pathNames[0] === "tipe-kerusakan" || pathNames[0] === "show" || pathNames[0] === "edit";
    };
    const isKelasKeparahan = () => {
        return pathNames[0] === "kelas-keparahan" || pathNames[0] === "show" || pathNames[0] === "edit";
    };
    const isMapsKelasKerusakan = () => {
        return pathNames[0] === "admin-maps-kelas-kerusakan" || pathNames[0] === "show" || pathNames[0] === "edit";
    };

    return (
        <>
            <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
            >
                <TreeDeciduous className="h-6 w-6" />Admin

            </Link>

            <Link
                href="/dashboard"
                className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground", {
                    "rounded-lg bg-muted px-3 py-2 text-sm text-primary": isDashboardPath(),
                })}
            >
                <HomeIcon className="h-4 w-4" />
                Dashboard
            </Link>

            {(isSu || isAdmin) && (
                <>
                    <Separator className="my-4" />
                    <h4 className='md:px-3 md:py-2 text-sm font-bold'>DATA MASTER</h4>
                    <Link
                        href="/user"
                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 text-sm py-2 text-muted-foreground hover:text-foreground", {
                            "rounded-xl bg-muted px-3 py-2 text-sm text-primary": isUsersPath(),
                        })}
                    >
                        <Users2 className="h-4 w-4" />
                        User
                    </Link>
                    <Link
                        href="/pohon"
                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground", {
                            "rounded-xl bg-muted px-3 py-2 text-sm text-primary": isPohonPath(),
                        })}
                    >
                        <Trees className="h-4 w-4" />
                        Jenis Pohon
                    </Link>
                    <Link
                        href="/tipe-kerusakan"
                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground", {
                            "rounded-xl bg-muted px-3 py-2 text-sm text-primary": isTipeKerusakan(),
                        })}
                    >
                        <BugOff className="h-4 w-4" />
                        Tipe Kerusakan
                    </Link>
                    <Link
                        href="/lokasi-kerusakan"
                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground", {
                            "rounded-xl bg-muted px-3 py-2 text-sm text-primary": isLokasiPath(),
                        })}
                    >
                        <MapPinned className="h-4 w-4" />
                        Lokasi Kerusakan
                    </Link>
                    <Link
                        href="/kelas-keparahan"
                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground", {
                            "rounded-xl bg-muted px-3 py-2 text-sm text-primary": isKelasKeparahan(),
                        })}
                    >
                        <TriangleAlert className="h-4 w-4" />
                        Kelas Keparahan
                    </Link>
                    <Separator className="my-4" />
                    <h4 className='md:px-3 md:py-2 text-sm font-bold'>DATA MAP</h4>
                    <Link
                        href="/admin-maps-lokasi-kerusakan"
                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground", {
                            "rounded-xl bg-muted px-3 py-2 text-sm text-primary": isMapsKelasKerusakan(),
                        })}
                    >
                        <MapPinned className="h-4 w-4" />
                        Lokasi Kerusakan
                    </Link>

                </>
            )}
            {/* Menu untuk pengguna biasa */}
            {isKepala && (
                <>


                </>
            )}
            {isUser && (
                <>


                </>
            )}
            {isPetugas && (
                <>


                </>
            )}



        </>
    )
}

export default MobileMenuAdmin
