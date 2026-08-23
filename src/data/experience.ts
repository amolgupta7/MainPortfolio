export interface ExperienceItem {
  period: string
  role: string
  company: string
  description?: string
  current?: boolean
}

export const experience: ExperienceItem[] = [
  {
    period: "Jun 2024 - Present",
    role: "Senior Software Engineer",
    company: "Visa Inc. · Bengaluru, India",
    description:
      "Led frontend development of the Virtual Terminal and API Keys modules for Visa's Authorize.Net international merchant portal (APEX), built on React 19, TypeScript, and Vite in a large-scale Nx monorepo. Owned ~30% of the codebase across three concurrent product squads, drove 50% business growth, and improved rendering performance by 55%.",
    current: true,
  },
  {
    period: "Jun 2022 - Jun 2024",
    role: "Software Engineer",
    company: "Visa Inc. · Bengaluru, India",
    description:
      "Built a secure, responsive payment product (Authorize.Net) in React and JavaScript for accepting credit card, eCheck, and other payment methods. Shipped notification and OTP authentication services, plus Merchant ID and Terminal ID management services with Java, Spring Boot, JPA/Hibernate, and MySQL.",
  },
]

export const coreTechnologies = [
  "React",
  "JavaScript",
  "TypeScript",
  "Java",
  "C++",
  "Python",
  "Kubernetes",
  "TanStack Query",
  "Redux Toolkit",
  "Sagas",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Nx",
  "Spring Boot"
]

export const aboutStats = [
  { label: "Role", value: "Senior Software Engineer" },
  { label: "Experience", value: "4+ Years" },
  { label: "Location", value: "Bengaluru, India" },
  { label: "Specialization", value: "React/TypeScript" },
  { label: "Availability", value: "Open", highlight: true },
]
