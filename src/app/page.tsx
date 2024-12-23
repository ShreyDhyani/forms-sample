import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://api.github.com/repos/vercel/next.js");
  const data = await response.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <label className="text-4xl">Hello World! {data.id}</label>
      <Link href={"/blog"}>Blogs</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/people"}>People</Link>
      <Link href={"/registration"}>Registarion</Link>
    </div>
  );
}
