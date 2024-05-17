import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - 404`,
    description: 'App Pohon Digital - 404',
}
export default function FrobidenAccess() {
    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-800">
            <div className="mx-auto max-w-md text-center">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">403</h1>
                <p className="mt-4 text-lg font-medium text-gray-500 dark:text-gray-400">
                    Maaf, tampaknya Anda tidak memiliki akses ke halaman ini. Silakan hubungi administrator sistem atau tim pengembang untuk informasi lebih lanjut.
                </p>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Sepertinya Anda tidak memiliki izin untuk melihat halaman ini. Silakan periksa dengan administrator situs atau coba mengakses halaman dari akun yang berbeda.
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