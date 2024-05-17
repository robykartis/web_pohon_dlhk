import Link from "next/link"
import {
    Bell,
    Package2,
    TreeDeciduous,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { MenuAdmin } from './menu-admin'

export default function SidebarAdmin() {
    return (
        <>
            <div className="hidden border-r bg-muted/70 md:block">
                <div className="flex max-h-screen flex-col gap-2  ">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 ">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <TreeDeciduous className="h-6 w-6" />
                            <span className="">Admin</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <MenuAdmin />
                        </nav>
                    </div>
                    <div className="mt-auto p-4">
                        {/* <Card x-chunk="dashboard-02-chunk-0">
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>
                                    Unlock all features and get unlimited access to our support
                                    team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card> */}
                    </div>
                </div>
            </div>
        </>
    )
}
