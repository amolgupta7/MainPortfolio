import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { PhotographyTeaser } from "@/components/home/PhotographyTeaser";
import { PageLayout } from "@/components/layout/PageLayout";
import { preferredScrollBehavior } from "@/lib/utils";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: preferredScrollBehavior() });
  }, [location.hash]);

  return (
    <PageLayout>
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <PhotographyTeaser />
    </PageLayout>
  );
}
