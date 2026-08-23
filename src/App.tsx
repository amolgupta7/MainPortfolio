import { Route, Routes } from "react-router-dom"

import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import Blueprint from "@/pages/Blueprint"
import Contact from "@/pages/Contact"
import Gallery from "@/pages/Gallery"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Projects from "@/pages/Projects"

function App() {
  return (
    <>
      <ScrollToTop />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blueprint/:slug" element={<Blueprint />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
