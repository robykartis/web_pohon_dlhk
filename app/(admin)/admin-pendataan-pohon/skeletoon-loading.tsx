
import { Skeleton } from '@/components/ui/skeleton';


export default function SkeletonLoading() {

    return (
        <>
            <div className="lg:flex sm:w-full gap-4 space-y-1">
                <div className="lg:w-1/1 sm:w-full items-center justify-center">
                    <div className="grid gap-4 space-y-3 mt-6">
                        <Skeleton className="h-4 py-4 w-full" />
                        <Skeleton className="h-4 py-4 w-full" />
                        <Skeleton className="h-4 py-4 w-full" />
                        <Skeleton className="h-4 py-4 w-full" />
                        <Skeleton className="h-4 py-4 w-full" />
                        <Skeleton className="h-4 py-4 w-full" />
                    </div>
                </div>
                <div className="lg:w-1/2 items-center justify-center">
                    <div className="grid gap-8">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-8 lg:grid-cols-1 sm:py-6 sm:px-6">
                            <div className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none">
                                <Skeleton className="h-80 w-full rounded-xl" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
