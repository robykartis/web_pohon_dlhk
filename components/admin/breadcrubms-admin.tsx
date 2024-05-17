'use client'
import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


type TBreadCrumbProps = {
    homeElement?: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}
export default function BreadcrumbAdmin({ homeElement, containerClasses, listClasses, activeClasses, capitalizeLinks }: TBreadCrumbProps) {
    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);

    return (
        <Breadcrumb className={containerClasses}>
            <BreadcrumbList className={listClasses}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">{homeElement}</BreadcrumbLink>
                </BreadcrumbItem>
                {pathNames.map((path, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            {index === pathNames.length - 1 ? ( // Tautan terakhir (yang sedang aktif)
                                <BreadcrumbPage className="font-semibold">
                                    {capitalizeLinks ? (path.replace(/-/g, ' ').charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')).slice(0, 20) + (path.length > 20 ? '...' : '') : (path.replace(/-/g, ' ')).slice(0, 20) + (path.length > 20 ? '...' : '')}
                                </BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href={`/${path}`}>
                                    <BreadcrumbPage className="text-gray-500">
                                        {capitalizeLinks ? (path.replace(/-/g, ' ').charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')).slice(0, 20) + (path.length > 20 ? '...' : '') : (path.replace(/-/g, ' ')).slice(0, 20) + (path.length > 20 ? '...' : '')}
                                    </BreadcrumbPage>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}

            </BreadcrumbList>
        </Breadcrumb>
    );
}