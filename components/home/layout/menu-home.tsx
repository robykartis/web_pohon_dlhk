'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function MenuHome() {
    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);

    const isHome = () => {
        return pathNames[0] === "/";
    };
    const isAbout = () => {
        return pathNames[0] === "about";
    };
    const isBlog = () => {
        return pathNames[0] === "blog" || pathNames[0] === "show";
    };
    const isContact = () => {
        return pathNames[0] === "contact";
    };
    return (
        <>

            <Link className={cn("text-sm ", {
                "font-bold underline": isHome(),
                "text-sm font-medium hover:underline hover:font-bold": !isHome(),
            })} href="/">
                Home
            </Link>
            <Link className={cn("text-sm ", {
                "font-bold underline": isAbout(),
                "text-sm font-medium hover:underline hover:font-bold": !isAbout(),
            })} href="/about">
                About
            </Link>
            <Link className={cn("text-sm ", {
                "font-bold underline": isBlog(),
                "text-sm font-medium hover:underline hover:font-bold": !isBlog(),
            })} href="/blog">
                Blog
            </Link>
            <Link className={cn("text-sm ", {
                "font-bold underline": isContact(),
                "text-sm font-medium hover:underline hover:font-bold": !isContact(),
            })} href="/contact">
                Contact
            </Link>
        </>
    )
}
