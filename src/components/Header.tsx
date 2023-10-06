import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-300 mb-10">
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <h1 className="text-xl font-bold">{"CHAHYUNWOO's Blog"}</h1>
        </Link>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
