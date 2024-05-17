import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function RecentBlog() {
  return (
    <>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="grid gap-2">
              <Link className="text-sm font-medium hover:underline" href="#">
                Design
              </Link>
              <Link className="text-sm font-medium hover:underline" href="#">
                Development
              </Link>
              <Link className="text-sm font-medium hover:underline" href="#">
                Marketing
              </Link>
              <Link className="text-sm font-medium hover:underline" href="#">
                Business
              </Link>
            </nav>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="grid gap-4">
              <Link className="flex items-center gap-4" href="#">
                <Image
                  alt="Blog Post 1"
                  className="h-20 w-20 rounded-lg object-cover"
                  height={60}
                  src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80}
                />
                <div>
                  <h3 className="text-sm font-medium transition-colors hover:text-primary dark:text-gray-50">
                    Blog Post 1
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </Link>
              <Link className="flex items-center gap-4" href="#">
                <Image
                  alt="Blog Post 2"
                  className="h-20 w-20 rounded-lg object-cover"
                  height={60}
                  src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80}
                />
                <div>
                  <h3 className="text-sm font-medium transition-colors hover:text-primary dark:text-gray-50">
                    Blog Post 2
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </Link>
              <Link className="flex items-center gap-4" href="#">
                <Image
                  alt="Blog Post 3"
                  className="h-20 w-20 rounded-lg object-cover"
                  height={60}
                  src="https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80}
                />
                <div>
                  <h3 className="text-sm font-medium transition-colors hover:text-primary dark:text-gray-50">
                    Blog Post 3
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </Link>
            </nav>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Search</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex space-x-2">
              <Input className="flex-1" placeholder="Search blog posts..." type="search" />
              <Button type="submit">
                <SearchIcon className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
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