"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import { NavigationItem } from "../../app/types/navlink";
import MenuOverLay from "./MenuOverLay";
import NavLink from "./NavLink";

function NavBar() {
	const navLinks: NavigationItem[] = [
		{ title: "Geography", path: "geography/main" },
		{ title: "English", path: "english/main" },
		{ title: "Music", path: "music" },
		{ title: "About", path: "about" },
		{ title: "Project", path: "#project" },
		{ title: "Contact", path: "contact" },
		{ title: "Login", path: "login" },
	];
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
			<div className="flex flex-wrap items-center justify-between mx-auto px-8 py-4">
				<Link
					href="/"
					className="text-2xl md:text-5xl text-white font-semibold"
				>
					Jacqueese
				</Link>
				<div className="mobile-menu block md:hidden" id="navbar">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<Bars3Icon className="h-5 w-5"></Bars3Icon>
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<XMarkIcon className="h-5 w-5"></XMarkIcon>
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
						{navLinks.map((item, index) => (
							<li key={index}>
								<NavLink href={item.path} title={item.title}></NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverLay navLinks={navLinks}></MenuOverLay> : null}
		</nav>
	);
}

export default NavBar;
