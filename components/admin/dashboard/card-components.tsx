import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function CardDashboard({ titleCard, totalData, ketData }: any) {
    return (
        <>
            <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        {titleCard}
                    </CardTitle>

                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{totalData}</div>
                    <p className="text-xs text-muted-foreground">
                        {ketData}
                    </p>
                </CardContent>
            </Card>
        </>
    )
}
