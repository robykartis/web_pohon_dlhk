'use server'
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "../auth/[...nextauth]/options";
import { LIST_KELAS_KEPARAHAN, LIST_LOKASI_KERUSAKAN, LIST_MAP_POHON, LIST_POHON, LIST_TIPE_KERUSAKAN, LIST_USER } from "@/lib/api";


export async function getToken() {
    const session: CustomSession | null = await getServerSession(authOptions);
    const tokens = session?.user?.tokens;
    return tokens
}

export async function getUsers(): Promise<[]> {
const tokens =await getToken()
    const response = await fetch(
        LIST_USER, {
        headers: {
            Authorization: `Bearer ${tokens}`,
        }
    }
    )
    const res = await response.json()
    return res
}

export async function getDataPohon() {
    const tokens = await getToken()
    // console.log(tokens)
    const res = await fetch(LIST_POHON, {
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${tokens}`,
        }
    });
    return res.json();
}
export async function getLokasiKerusakan(): Promise<[LokasiKerusakanType]> {
const tokens =await getToken()
    const response = await fetch(
        LIST_LOKASI_KERUSAKAN, {
        headers: {
            Authorization: `Bearer ${tokens}`,
        }
    }
    )
    const res = await response.json()
    return res
}
export async function getTipeKerusakan(): Promise<[TipeKerusakanType]> {
const tokens =await getToken()
    const response = await fetch(
        LIST_TIPE_KERUSAKAN, {
        headers: {
            Authorization: `Bearer ${tokens}`,
        }
    }
    )
    const res = await response.json()
    return res
}
export async function getKelasKeparahan(): Promise<[KelasKeparahanType]> {
const tokens =await getToken()
    const response = await fetch(
        LIST_KELAS_KEPARAHAN, {
        headers: {
            Authorization: `Bearer ${tokens}`,
        }
    }
    )
    const res = await response.json()
    return res
}


// Maps Get
// export async function getMapsData(): Promise<[MapsLokasiKerusakanType]>  {
//     const tokens = await getToken()
    
//     const res = await fetch(LIST_MAP_POHON, {
//         cache: "no-store",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             Authorization: `Bearer ${tokens}`,
//         }
//     });
//    const dataRes = await res.json();
//    const data = dataRes.data
// //    console.log(data)
//     return data;
// }



