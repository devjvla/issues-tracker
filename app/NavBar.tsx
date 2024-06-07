import Link from "next/link"
import React from "react"

// Icons
import { PiBugBeetleLight } from "react-icons/pi";

const NavBar = () => {
	const NAVBAR_STYLES = {
		branding: "flex font-extrabold text-green-600 items-center",
		links: "font-light text-zinc-500 hover:text-green-600 transition-colors"
	}

	const NAVBAR_LINKS = [
		{ label: "Dashboard", href: "/dashboard", className: NAVBAR_STYLES.links },
		{ label: "Issues", href: "/issues", className: NAVBAR_STYLES.links },
	]

  return (
		<nav className="flex space-x-12 border-b mb-5 p-8">
			<Link href="/" className={NAVBAR_STYLES.branding}><PiBugBeetleLight className="mr-2 text-2xl"/>IssueTracker</Link>
			<ul className="flex space-x-6">
				{ NAVBAR_LINKS.map((link, index) => ( <li key={index}><Link href={link.href} className={link.className}>{link.label}</Link></li> ))}
			</ul>
		</nav>
	)
}

export default NavBar