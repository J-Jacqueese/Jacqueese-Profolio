// Shared Components
import { Metadata } from "next";
import { FooterWithSocialLinks } from "../../components/english/Footer";
// setting meta
export const metadata: Metadata = {
	title: "Typhoon",
};
export default function GeographyLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <main className="w-full min-h-full">{children}</main>;
}
