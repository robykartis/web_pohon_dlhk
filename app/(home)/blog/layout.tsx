import { Metadata } from "next"
import RecentBlog from "@/components/home/blog/recent-blog"


import BreadcrumbHome from "@/components/home/breadcrubms-home"


export const metadata: Metadata = {
    title: 'Todo List - Build digital experiences for any tech stack, visually.',
    description: 'Build digital experiences for any tech stack, visually.',
}
export default function BlogLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="container py-3 mb-0">
                <BreadcrumbHome
                    homeElement="Home"
                    containerClasses="container-class"
                    listClasses="list-class"
                    activeClasses="active-class"
                    capitalizeLinks={true}
                />
            </div>
            <main className="container mx-auto grid grid-cols-1 gap-8 px-4 py-4 md:grid-cols-[3fr_1fr] md:gap-12 md:px-6 md:py-12">
                {children}
                <RecentBlog />
            </main>

        </>
    )
}
