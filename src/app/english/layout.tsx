// Shared Components
import { Metadata } from "next";
import { FooterWithSocialLinks } from "../../components/english/Footer";
import NavBar from "../../components/portfolio/NavBar";
// setting meta
export const metadata: Metadata = {
	title: "English",
};
export default function AboutLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="w-full min-h-full">
			{children}
			<FooterWithSocialLinks />
		</main>
	);
}
