import "../styles/globals.css"
import Footer from "../components/Footer"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>{children}</body>

    </html>
  )
}
