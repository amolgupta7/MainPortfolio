import type { IconifyIcon } from "@iconify/types"

// Social / brand marks. GitHub has no color of its own in real life (its
// mark is just black/white depending on context), so it's the one exception
// pulled from Simple Icons (a single `currentColor` path) instead of the
// full-color `logos` set — everything else here is a real logo used exactly
// as shipped, no color overrides.
import githubIcon from "@iconify-icons/simple-icons/github"
import linkedinIcon from "@iconify-icons/logos/linkedin-icon"
import whatsappIcon from "@iconify-icons/logos/whatsapp-icon"
import gmailIcon from "@iconify-icons/logos/google-gmail"
import googleMapsIcon from "@iconify-icons/logos/google-maps"
import visaIcon from "@iconify-icons/logos/visa"

// Tech-stack marks, all from Iconify's "logos" collection.
import cPlusPlusIcon from "@iconify-icons/logos/c-plusplus"
import css3Icon from "@iconify-icons/logos/css-3"
import elasticsearchIcon from "@iconify-icons/logos/elasticsearch"
import html5Icon from "@iconify-icons/logos/html-5"
import huggingFaceIcon from "@iconify-icons/logos/hugging-face-icon"
import javaIcon from "@iconify-icons/logos/java"
import javascriptIcon from "@iconify-icons/logos/javascript"
import kubernetesIcon from "@iconify-icons/logos/kubernetes"
import nodejsIcon from "@iconify-icons/logos/nodejs-icon"
import nxIcon from "@iconify-icons/logos/nx"
import playwrightIcon from "@iconify-icons/logos/playwright"
import postgresqlIcon from "@iconify-icons/logos/postgresql"
import pythonIcon from "@iconify-icons/logos/python"
import pytorchIcon from "@iconify-icons/logos/pytorch-icon"
import reactIcon from "@iconify-icons/logos/react"
import reactQueryIcon from "@iconify-icons/logos/react-query-icon"
import reduxIcon from "@iconify-icons/logos/redux"
import reduxSagaIcon from "@iconify-icons/logos/redux-saga"
import redisIcon from "@iconify-icons/logos/redis"
import springIcon from "@iconify-icons/logos/spring-icon"
import tailwindcssIcon from "@iconify-icons/logos/tailwindcss-icon"
import typescriptIcon from "@iconify-icons/logos/typescript-icon"
import viteIcon from "@iconify-icons/logos/vite-icon"

/** Single shared registry of real brand/logo icons, keyed by the label or
 * tag text used to look them up — SocialIcon and TechTag both read from
 * this instead of each keeping their own copy. */
export const brandIcons: Record<string, IconifyIcon> = {
  // Social
  GitHub: githubIcon,
  LinkedIn: linkedinIcon,
  WhatsApp: whatsappIcon,
  Email: gmailIcon,
  "Google Maps": googleMapsIcon,
  Visa: visaIcon,

  // Tech stack
  React: reactIcon,
  TypeScript: typescriptIcon,
  "Node.js": nodejsIcon,
  PostgreSQL: postgresqlIcon,
  Redis: redisIcon,
  Elasticsearch: elasticsearchIcon,
  "Tailwind CSS": tailwindcssIcon,
  Vite: viteIcon,
  HTML: html5Icon,
  CSS: css3Icon,
  JavaScript: javascriptIcon,
  PyTorch: pytorchIcon,
  // "Transformers" refers to Hugging Face's transformers library.
  Transformers: huggingFaceIcon,
  Java: javaIcon,
  "C++": cPlusPlusIcon,
  Python: pythonIcon,
  Kubernetes: kubernetesIcon,
  Playwright: playwrightIcon,
  "TanStack Query": reactQueryIcon,
  "Redux Toolkit": reduxIcon,
  // "Sagas" refers to the redux-saga middleware.
  Sagas: reduxSagaIcon,
  Nx: nxIcon,
  // No dedicated Spring Boot mark exists in the logos set — this is the
  // plain Spring Framework leaf, the same one Spring Boot uses in practice.
  "Spring Boot": springIcon,
}
