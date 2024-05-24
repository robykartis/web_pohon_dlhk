'use server'
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "../auth/[...nextauth]/options";
import { DETAIL_MAP_POHON, LIST_MAP_POHON } from "@/lib/api";
import axios from "@/lib/axios";


export async function getToken() {
    const session: CustomSession | null = await getServerSession(authOptions);
    const tokens = session?.user?.tokens;
    return tokens
}


export async function getMapsData(): Promise<[MapsLokasiKerusakanType]> {
    const tokens = await getToken()

    const res = await fetch(LIST_MAP_POHON, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${tokens}`,
        }
    });
    const dataRes = await res.json();
    const data = dataRes.data
    console.log(data)
    return data;
}
export async function getMapsDataTable(): Promise<[MapsLokasiKerusakanType]> {
    const tokens = await getToken()

    const res = await fetch(LIST_MAP_POHON, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${tokens}`,
        }
    });
    const dataRes = await res.json();
    const data = dataRes
    // console.log(data)
    return data;
}
export async function getMapsDataDetail(): Promise<[MapsLokasiKerusakanType]> {
    const tokens = await getToken()

    const res = await fetch(LIST_MAP_POHON, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${tokens}`,
        }
    });
    const dataRes = await res.json();
    const data = dataRes
    // console.log(data)
    return data;
}

export async function checkId(id: any) {
    const Listdata: any = await getMapsDataTable();
    if (!Listdata || !Array.isArray(Listdata.data)) {
        return false;
    }
    const data: { id: any }[] = Listdata.data;
    return data.some(item => item.id === id);
}
export async function getDetailPohon(id: any) {
    const tokens = await getToken()
    const response = await axios.post(
        DETAIL_MAP_POHON,
        { id_pohon: id },
        {
            headers: {
                Authorization: `Bearer ${tokens}`,
            }
        },
    );
    return response
}


