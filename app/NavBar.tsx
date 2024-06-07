"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react"

// Icons
import { PiBugBeetleLight } from "react-icons/pi";

const NavBar = () => {
	const currentPath = usePathname();

	const NAVBAR_STYLES = {
		branding: "flex font-extrabold text-green-600 items-center",
		classes: "font-light text-zinc-500 hover:text-green-600 transition-colors"
	}

	const NAVBAR_LINKS = [
		{ label: "Dashboard", href: "/dashboard", classes: currentPath == "/dashboard" ? "text-green-600 font-light" : NAVBAR_STYLES.classes },
		{ label: "Issues", href: "/issues", classes: currentPath == "/issues" ? "text-green-600 font-light" : NAVBAR_STYLES.classes },
	]

  return (
		<nav className="flex space-x-12 border-b mb-5 p-8">
			<Link href="/" className={NAVBAR_STYLES.branding}><PiBugBeetleLight className="mr-2 text-2xl"/>IssueTracker</Link>
			<ul className="flex space-x-6">
				{ NAVBAR_LINKS.map((link, index) => ( <li key={index}><Link href={link.href} className={link.classes}>{link.label}</Link></li> ))}
			</ul>
		</nav>
	)
}

export default NavBar