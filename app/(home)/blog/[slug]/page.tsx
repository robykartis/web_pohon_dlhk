import React from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Image from 'next/image'

type Props = {
    params: { slug: string };
};
export const generateMetadata = async (
    props: Props
): Promise<Metadata> => {
    const { params } = props
    const url = process.env.NEXT_PUBLIC_API_URL;
    // const result = await myAxios.get(`${url}/api/public/posts/show/${params.slug}`);
    // console.log(result.data.data);
    const data = 'Blog - Detail';
    if (!data) {
        return {
            title: `Blog - 404`,
        };
    } else {
        return {
            title: `Blog - ${data}`,
        };
    }

};

export default function BlogDetail({ params }: Props) {
    return (
        <>
            <div className="grid gap-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
                    <article className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none">
                        <Link className="block h-80 w-full overflow-hidden" href="#">
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
                            <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
                            <p className="mt-2 text-sm text-gray-600 line-clamp-2 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                                nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                                href="#"
                            >
                                Read more

                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        </>
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