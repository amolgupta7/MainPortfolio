import { Route, Routes } from "react-router-dom"

import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import CaseStudy from "@/pages/CaseStudy"
import Contact from "@/pages/Contact"
import Gallery from "@/pages/Gallery"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"

function App() {
  return (
    <>
      <ScrollToTop />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
