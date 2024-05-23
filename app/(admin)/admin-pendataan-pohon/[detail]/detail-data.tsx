'use client'
import React, { useEffect, useState } from 'react'
import DetailInformasi from './detail-informasi'
import { ArrowLeftIcon, MapPinned } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link';
import SkeletonLoadingDetail from './skeletoon-info'
import SkeletonLoadingKerusakan from './skeletoon-kerusakan'
import DetailKerusakanPohon from './detail-kerusakan'
import SkeletonMaps from './skeletoon-maps'

export default function DetailData({ DATA }: { DATA: any }) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    const DynamicMap = dynamic(() => import('./maps-data'), {
        ssr: false
    });
    return (
        <>
            {isLoading ? (
                <SkeletonLoadingDetail />
            ) : (

                <DetailInformasi infoData={DATA} />
            )}

            <div className="container mx-auto py-4 px-4 md:px-6">

                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <MapPinned className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold"> Lokasi Pohon</h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">Temukan informasi penting yang Anda butuhkan.</p>
                </div>

                {isLoading ? (
                    <SkeletonMaps />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-full rounded-md border-2 border-gray-200">
                        <div className="space-y-4">
                            <DynamicMap mapData={DATA} />
                        </div>
                    </div>
                )}

            </div>

            {DATA.DetailPohon.status_pohon === '1' ? (
                <div className="container mx-auto py-4 px-4 md:px-6 text-center">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Tidak Ada Data Kerusakan</h2>
                    </div>

                </div>
            ) : (
                <>
                    {isLoading ? (
                        <SkeletonLoadingKerusakan />
                    ) : (

                        <DetailKerusakanPohon dataPohon={DATA} />
                    )}
                </>
            )}

            <div className="flex items-start gap-4 container mx-auto py-4 px-4 md:px-6 mb-4">
                <div className="flex-shrink-0">
                    <ArrowLeftIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <Link
                        className="font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="/admin-pendataan-pohon"
                    >
                        Kembali
                    </Link>
                </div>
            </div>
        </>
    )
}
