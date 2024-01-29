"use client";
import { Button } from "../components/material-ui/index";
import AboutSection from "../components/portfolio/AboutSection";
import HeroSection from "../components/portfolio/HeroSection";
import NavBar from "../components/portfolio/NavBar";
import ProjectSection from "../components/portfolio/ProjectSection";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212] ">
			<NavBar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<HeroSection />
				<AboutSection />
				<ProjectSection />
			</div>
		</main>
	);
}
