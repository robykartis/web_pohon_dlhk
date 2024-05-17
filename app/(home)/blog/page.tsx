import React from 'react'
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import Image from 'next/image'
export default function BlogPage() {
    return (
        <>
            <div className="grid gap-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <article className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none">
                        <Link className="block h-48 w-full overflow-hidden" href="#">
                            <Image
                                alt="Blog Post 1"
                                className="h-full w-full object-cover transition-all group-hover:scale-105"
                                height={300}
                                src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </Link>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold transition-colors group-hover:text-primary dark:text-gray-50">
                                <Link href="#">Blog Post 1</Link>
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                                nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                                href="#"
                            >
                                Read more
                                <ArrowRightIcon className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </article>
                    <article className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none">
                        <Link className="block h-48 w-full overflow-hidden" href="#">
                            <Image
                                alt="Blog Post 2"
                                className="h-full w-full object-cover transition-all group-hover:scale-105"
                                height={300}
                                src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </Link>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold transition-colors group-hover:text-primary dark:text-gray-50">
                                <Link href="#">Blog Post 2</Link>
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                                nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                                href="#"
                            >
                                Read more
                                <ArrowRightIcon className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </article>
                    <article className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none">
                        <Link className="block h-48 w-full overflow-hidden" href="#">
                            <Image
                                alt="Blog Post 3"
                                className="h-full w-full object-cover transition-all group-hover:scale-105"
                                height={300}
                                src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </Link>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold transition-colors group-hover:text-primary dark:text-gray-50">
                                <Link href="#">Blog Post 3</Link>
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                                nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                                href="#"
                            >
                                Read more
                                <ArrowRightIcon className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </article>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <article className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none">
                        <Link className="block h-48 w-full overflow-hidden" href="#">
                            <Image
                                alt="Blog Post 4"
                                className="h-full w-full object-cover transition-all group-hover:scale-105"
                                height={300}
                                src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </Link>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold transition-colors group-hover:text-primary dark:text-gray-50">
                                <Link href="#">Blog Post 4</Link>
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                                nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                                href="#"
                            >
                                Read more
                                <ArrowRightIcon className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </article>
                    <article className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none">
                        <Link className="block h-48 w-full overflow-hidden" href="#">
                            <Image
                                alt="Blog Post 5"
                                className="h-full w-full object-cover transition-all group-hover:scale-105"
                                height={300}
                                src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </Link>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold transition-colors group-hover:text-primary dark:text-gray-50">
                                <Link href="#">Blog Post 5</Link>
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                                nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                                href="#"
                            >
                                Read more
                                <ArrowRightIcon className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </article>
                    <article className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none">
                        <Link className="block h-48 w-full overflow-hidden" href="#">
                            <Image
                                alt="Blog Post 6"
                                className="h-full w-full object-cover transition-all group-hover:scale-105"
                                height={300}
                                src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </Link>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold transition-colors group-hover:text-primary dark:text-gray-50">
                                <Link href="#">Blog Post 6</Link>
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                                nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                                href="#"
                            >
                                Read more
                                <ArrowRightIcon className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

function ArrowRightIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}


function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}