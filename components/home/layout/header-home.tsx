import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet"
import MenuHome from './menu-home'
import { ModeToggle } from '@/components/theme-toggle'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
export default async function HeaderHome() {
    const session: any | null = await getServerSession(authOptions);
    const isLoggedIn = !!session;
    console.log(session);
    return (
        <>
            <header className="bg-white/90 shadow-sm dark:bg-gray-950/90 border-b sticky top-0 z-10 backdrop-filter backdrop-blur-sm">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <Link className="flex items-center gap-2 hover:underline" href="/">
                        <MountainIcon className="h-6 w-6" />
                        <span className="text-lg font-semibold">Blog</span>
                    </Link>
                    <nav className="hidden space-x-4 md:flex">
                        <MenuHome />
                    </nav>
                    <div className="flex items-center gap-2">
                        {isLoggedIn ? (
                            <Link href={"/dashboard"}>
                                <Button variant="outline">
                                    Dashboard
                                </Button>
                            </Link>
                        ) : (
                            <Link href={"/login"}>
                                <Button variant="outline">
                                    Login
                                </Button>
                            </Link>
                        )}
                        <ModeToggle />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className="md:hidden" size="icon" variant="ghost">
                                    <MenuIcon className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-white/90 shadow-sm dark:bg-gray-950/90  backdrop-filter backdrop-blur-sm">
                                <div className="grid gap-4 p-4">
                                    <MenuHome />
                                </div>
                            </SheetContent>
                        </Sheet>

                    </div>

                </div>
            </header>
        </>
    )
}



function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
function MoonIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    )
}