import FooterHome from "@/components/home/layout/footer-home"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Pohon Digital - Login',
    description: 'Build digital experiences for any tech stack, visually.',
}

export default function HomeLayout({ children, }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex min-h-screen flex-col">
                {/* <HeaderHome /> */}

                {children}

                <FooterHome />
            </div>
        </>
    )
}
