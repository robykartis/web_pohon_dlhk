'use client'
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import DetailPohon from "./detail-pohon"
import DetailKerusakan from "./detail-kerusakan"
import { useEffect, useState } from "react"
import SkeletonLoading from "./skeletoon-loading"

export default function Detail({ DATA }: { DATA: MapsLokasiKerusakanType }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulasikan pemuatan data
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Ubah durasi sesuai kebutuhan

        return () => clearTimeout(timer);
    }, []);

    return (
        <Tabs defaultValue="detail-pohon" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                {DATA.DetailPohon.status_pohon === '1' ? (
                    <TabsTrigger value="detail-pohon">Detail</TabsTrigger>
                ) : (
                    <>
                        <TabsTrigger value="detail-pohon">Detail</TabsTrigger>
                        <TabsTrigger value="detail-kerusakan">Kerusakan</TabsTrigger>
                    </>
                )}
            </TabsList>
            <TabsContent value="detail-pohon">
                <Card>
                    <ScrollArea className="h-[400px] w-full">
                        <CardContent className="space-y-2">
                            {isLoading ? (
                                <SkeletonLoading />
                            ) : (
                                <DetailPohon DATA_DETAIL={DATA} />
                            )}
                        </CardContent>
                    </ScrollArea>
                </Card>
            </TabsContent>
            <TabsContent value="detail-kerusakan">
                <Card>
                    <ScrollArea className="h-[400px] w-full">
                        <CardContent className="space-y-2">
                            {isLoading ? (
                                <SkeletonLoading />
                            ) : (
                                <DetailKerusakan DATA_KERUSAKAN={DATA} />
                            )}
                        </CardContent>
                    </ScrollArea>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
