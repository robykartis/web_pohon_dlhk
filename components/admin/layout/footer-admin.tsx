import Link from 'next/link'
import React from 'react'

export default function FooterAdmin() {
    return (
        <>
            <footer className="bg-gray-50 py-8 dark:bg-gray-950  left-0 right-0 z-10">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400 ml-44">© `${new Date().getFullYear()} ${process.env.NEXT_PUBLIC_APP_NAME}. All rights reserved`.</p>
                    <nav className="flex space-x-4">
                        <Link className="text-sm font-medium hover:underline" href="#">

                        </Link>
                        <Link className="text-sm font-medium hover:underline" href="#">

                        </Link>
                        <Link className="text-sm font-medium hover:underline" href="#">

                        </Link>
                    </nav>
                </div>
            </footer>
        </>
    )
}
