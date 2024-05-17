import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - 404`,
    description: 'App Pohon Digital - 404',
}

export default function NotFound() {
    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-800">
            <div className="mx-auto max-w-md text-center">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">404</h1>
                <p className="mt-4 text-lg font-medium text-gray-500 dark:text-gray-400">
                    Oops, halaman yang Anda cari tidak ada.
                </p>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Sepertinya halaman yang Anda coba akses tidak ada atau telah dipindahkan. Mohon periksa URL atau coba kembali ke halaman utama.
                </p>
                <div className="mt-10">
                    <Link
                        className="inline-flex items-center px-4 py-2 text-sm font-medium transition-colors"
                        href="/"
                    >
                        <Button >
                            Go back home
                        </Button>

                    </Link>
                </div>
            </div>
        </div>
    )
}
