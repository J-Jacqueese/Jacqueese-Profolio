import { FooterWithSocialLinks } from "../../components/english/Footer"
// Shared Components
import { Metadata } from 'next'
// setting meta
export const metadata: Metadata = {
    title: 'Typhoon',
}
export default function GeographyLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <main className="w-full min-h-full">
            {children}
        </main>
    )
}