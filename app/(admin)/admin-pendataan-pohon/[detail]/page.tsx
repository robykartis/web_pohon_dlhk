
import { checkId, getDetailPohon } from '@/app/api/Admin/MapsApi';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import DetailData from './detail-data';


export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Detail Pendataan Pohon`,
    description: `${process.env.NEXT_PUBLIC_APP_NAME} - Detail Pendataan Pohon`,
}
export default async function DetailPendataan({ params }: { params: any }) {

    const paramsID = params.detail;
    const newId = paramsID.slice(9, -9);
    const id = parseInt(newId, 10);
    // console.log(id)
    const isValidId = await checkId(id);
    // console.log(isValidId)

    if (!isValidId) {
        redirect('/not-found');
    }
    const PohonData = await getDetailPohon(id);
    const DATA = PohonData.data.data

    return (
        <>
            <DetailData DATA={DATA} />
        </>
    )
}
