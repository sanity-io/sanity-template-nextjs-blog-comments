import Link from 'next/link'
import styled from "@emotion/styled";
import ThemeToggle from "../components/ThemeToggle";
import dynamic from "next/dynamic";

export default function Header() {

  const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
    ssr: false,
  });

  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
      .
      <div className="w-12/12 flex justify-end items-center">
        <ThemeToggle />
      </div>
    </h2>
  )
}
