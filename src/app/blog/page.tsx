import Link from "next/link";

export default function Page() {

    const blogs_list = ["232", "312", "781", "131", "198", "129"]
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <label className="text-4xl">BLOGS HOME!</label>
            <li className="flex flex-col gap-y-3 text-lg">
                {blogs_list.map((blog) => {
                    return (
                        <Link key={blog} href={`/blog/${blog}`}>BLOG NUMBER {blog}!</Link>
                    )
                })}

            </li>
        </div>
    );
}