'use client'
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'
import { Button } from "../ui/button";
import { getUsers } from "@/app/api/Admin/UserApi";
async function generate() {
    const DATA: any = await getUsers()
    const data = DATA.data
    const doc = new jsPDF('p', 'mm', 'a4');
    autoTable(doc, {
        head: [['Name', 'Email']],
        body: data.map((user: UserType) => [user.name, user.email]),
        headStyles: {
            fillColor: [22, 163, 74]
        }
    })
    doc.save('users.pdf')
}

export default function GeneratePDF() {
    return (
        <>
            <Button onClick={generate}>Generate PDF</Button>
        </>
    )
}
