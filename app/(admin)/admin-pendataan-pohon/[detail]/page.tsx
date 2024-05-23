

import { checkId } from '@/app/api/Admin/MapsApi';
import { getToken } from '@/app/api/Admin/UserApi';
import { DETAIL_MAP_POHON } from '@/lib/api';
import axios from '@/lib/axios';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Detail Pendataan Pohon`,
    description: `${process.env.NEXT_PUBLIC_APP_NAME} - Detail Pendataan Pohon`,
}
export default async function DetailPendataan({ params }: { params: any }) {
    const tokens = await getToken();
    const paramsID = params.detail;
    const newId = paramsID.slice(9, -9);

    const id = parseInt(newId, 10);
    // console.log(id)
    const isValidId = await checkId(id);
    console.log(isValidId)

    if (!isValidId) {
        redirect('/not-found');
    }


    const response = await axios.post(
        DETAIL_MAP_POHON,
        { id_pohon: newId },
        {
            headers: {
                Authorization: `Bearer ${tokens}`,
            }
        },
    );
    return (
        <>
            <div className="container mx-auto px-4 py-2 md:px-6 md:py-3">
                <div className="grid grid-cols-1 gap-8">
                    {JSON.stringify(response.data)}
                </div>
            </div>
        </>
    )
}
