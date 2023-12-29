import NavBar from "../../components/portfolio/NavBar"
// Shared Components
import { Metadata } from 'next'
// setting meta
export const metadata: Metadata = {
  title: 'Music',
}
export default function AboutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        {children}
      </div>
    </main>
  )
}