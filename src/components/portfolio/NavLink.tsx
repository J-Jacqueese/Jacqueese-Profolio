"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface navlink {
	href: string;
	title: string;
}
const NavLink = ({ href, title }: navlink) => {
	const pathname = usePathname();
	const isLinkActive = pathname.slice(1) === href;

	return (
		<Link
			href={href}
			className={`block py-2 pl-3 pr-4  sm:text-xl md:p-0 hover:text-white ${
				isLinkActive
					? "text-white border-b-2 border-green-600"
					: "text-[#c1c7c1]"
			}`}
		>
			{title}
		</Link>
	);
};

export default NavLink;
