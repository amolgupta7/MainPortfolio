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
      "Leading design and development of backend services for merchant-facing payment products using Java, Spring Boot, and Vert.x. Designing and implementing RESTful payment and transaction search APIs within existing microservices, with a focus on correctness, performance, and backward compatibility, and building internal platform tooling including a feature-toggle service and client library used across teams. On the frontend, leading development of merchant-facing features such as payment processing interfaces, API key management using React, TypeScript, Redux Toolkit, and TanStack Query, with testing standards driven by Vitest, Playwright, MSW, and Storybook. Owning gateway and microservice integrations, conducting code reviews, and mentoring engineers across the stack.",
    current: true,
  },
  {
    period: "Jun 2022 - Jun 2024",
    role: "Software Engineer",
    company: "Visa Inc. · Bengaluru, India",
    description:
      "Developed and maintained backend microservices for payment products using Java, Spring Boot, JPA/Hibernate, and MySQL, building merchant and terminal management services with well-designed data models, data access layers, and REST APIs. Integrated services with payment gateways and internal systems, backed by unit and integration tests for reliability. On the frontend, built reusable React and TypeScript components, integrated UIs with backend APIs, and wrote unit and end-to-end tests using Jest and Playwright. Collaborated with cross-functional teams in an agile setup to deliver features end to end.",
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
  { label: "Specialization", value: "Java/Springboot, React/TypeScript" },
  { label: "Availability", value: "Open", highlight: true },
]
