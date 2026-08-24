import type { ReactNode } from "react"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { TechnicalGrid } from "@/components/layout/TechnicalGrid"

export function PageLayout({
  children,
  showTechnicalGrid = true,
}: {
  children: ReactNode
  showTechnicalGrid?: boolean
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {showTechnicalGrid && <TechnicalGrid />}
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  )
}
