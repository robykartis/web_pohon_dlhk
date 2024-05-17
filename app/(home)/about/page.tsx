import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
    return (
        <>
            <main className="flex flex-col min-h-[calc(100vh_-_theme(spacing.16))]">
                <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
                    <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    About Our Blog
                                </h1>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Learn more about our blog and the team behind it.
                                </p>
                                <div className="space-x-4">
                                    <Link
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Image
                            alt="About"
                            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                            height={300}
                            src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width={1270}
                        />
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm/relaxed">
                                    Our mission is to provide valuable and insightful content to our readers, covering a wide range of
                                    topics that are relevant to our audience. We strive to be a trusted source of information and
                                    inspiration.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Team</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm/relaxed">
                                    Our team is composed of experienced writers, editors, and designers who are passionate about creating
                                    high-quality content. We work collaboratively to ensure that every article we publish meets our
                                    standards of excellence.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Values</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm/relaxed">
                                    At the core of our blog are the values of integrity, creativity, and a commitment to continuous
                                    learning. We believe in providing our readers with honest, thoughtful, and innovative content that
                                    helps them grow and succeed.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Recent Blog Posts</h2>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Check out our latest blog posts and stay up-to-date with the latest trends and insights.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card>
                                <CardContent>
                                    <Link className="flex flex-col gap-4" href="#">
                                        <Image
                                            alt="Blog Post 1"
                                            className="aspect-video rounded-lg object-cover"
                                            height={310}
                                            src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            width={550}
                                        />
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold transition-colors hover:text-primary dark:text-gray-50">
                                                Blog Post 1
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </Link>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Link className="flex flex-col gap-4" href="#">
                                        <Image
                                            alt="Blog Post 2"
                                            className="aspect-video rounded-lg object-cover"
                                            height={310}
                                            src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            width={550}
                                        />
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold transition-colors hover:text-primary dark:text-gray-50">
                                                Blog Post 2
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </Link>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Link className="flex flex-col gap-4" href="#">
                                        <Image
                                            alt="Blog Post 3"
                                            className="aspect-video rounded-lg object-cover"
                                            height={310}
                                            src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            width={550}
                                        />
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold transition-colors hover:text-primary dark:text-gray-50">
                                                Blog Post 3
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
