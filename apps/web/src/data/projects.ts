export interface ProjectLink {
  live?: string
  github?: string
  caseStudy?: string
}

export interface MetricItem {
  value: string
  label: string
}

export interface Project {
  id: string
  slug?: string
  title: string
  subtitle?: string
  description: string
  role: string
  impact: string
  tech: string[]
  links: ProjectLink
  img: string
  index: string
  status: "Completed" | "Live" | "In Progress" | "Archived"
  year: string
  hasCaseStudy: boolean
  featured?: boolean
  metrics?: MetricItem[]
  highlights?: string[]
}

// Global fallback projects for static safety and offline viewing
export const projectsData: Project[] = [
  {
    id: "hospital-management-system",
    slug: "hospital-management-system",
    title: "Hospital Management System",
    subtitle: "Healthcare & Doctor Scheduling Platform",
    description:
      "Comprehensive hospital platform with patient appointment booking, doctor scheduling, blood donation management, and admin dashboard.",
    role: "Full Stack Developer",
    impact:
      "Automated patient scheduling, doctor roster management, and emergency blood donation tracking with real-time slot locking.",
    tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    links: {
      live: "https://www.kbmhbd.com/",
    },
    img: "https://res.cloudinary.com/duu47ahmd/image/upload/v1755121351/react-next-js-frontend-website_embdac.jpg",
    index: "01",
    status: "Live",
    year: "2025",
    hasCaseStudy: false,
    featured: true,
    highlights: [
      "Dynamic date picker showing only doctor-available slots",
      "Blood donor directory and emergency donor requirement matching",
      "Role-based hospital admin control center",
    ],
    metrics: [
      { label: "Role Access", value: "Multi-Tier" },
      { label: "Stack", value: "MERN + Next" },
      { label: "Deployment", value: "Production" },
    ],
  },
  {
    id: "foodies-paradise",
    slug: "foodies-paradise",
    title: "Foodies Paradise",
    subtitle: "Full-Stack Restaurant & Ordering Platform",
    description:
      "Modern restaurant website with category tabs, carousel showcase, food ordering, online Stripe payment, and admin dashboard.",
    role: "Full Stack Developer",
    impact:
      "Built streamlined ordering pipeline with Stripe payment intent checkout, persistent user cart, and live order tracking.",
    tech: ["React", "Express.js", "MongoDB", "Node.js", "Stripe", "Tailwind CSS", "DaisyUI"],
    links: {
      live: "https://bistro-boss-restaurant-26f8c.web.app/",
      github: "https://github.com/ahshobuj1/bistro-boss-restaurant-client",
    },
    img: "https://res.cloudinary.com/duu47ahmd/image/upload/v1755173191/Bistro-Boss-Home_bylnex.jpg",
    index: "02",
    status: "Live",
    year: "2024",
    hasCaseStudy: false,
    featured: true,
    highlights: [
      "Stripe payment gateway integration with webhooks",
      "Dynamic category filtering and interactive dish showcase",
      "Admin order dispatch and revenue statistics",
    ],
    metrics: [
      { label: "Payments", value: "Stripe.js" },
      { label: "Cart State", value: "Persistent" },
      { label: "Auth", value: "JWT Secure" },
    ],
  },
  {
    id: "stayease-rental",
    slug: "stayease-rental",
    title: "StayEase",
    subtitle: "Full-Stack Rental & Vacation Booking Platform",
    description:
      "A modern rental booking website where users can book vacation stays or tourist accommodations, with host applications and secure payments.",
    role: "Full Stack Developer",
    impact:
      "Engineered vacation rental marketplace with date-range reservation checks, host listing verification, and TanStack Query state caching.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe", "TanStack Query"],
    links: {
      live: "https://stay-visa-f4c0d.web.app/",
      github: "https://github.com/ahshobuj1",
    },
    img: "https://res.cloudinary.com/duu47ahmd/image/upload/v1755173545/DreamStay-Vacation-Homes-_f4x7u4.jpg",
    index: "03",
    status: "Live",
    year: "2025",
    hasCaseStudy: false,
    featured: true,
    highlights: [
      "Date-range availability verification before checkout",
      "Dual user & host portal with booking analytics",
      "TanStack Query cache invalidation for instant state synchronization",
    ],
    metrics: [
      { label: "Query Cache", value: "TanStack" },
      { label: "Booking Flow", value: "Interactive" },
      { label: "Marketplace", value: "Multi-User" },
    ],
  },
]

export function getCaseStudies(): Project[] {
  return projectsData.filter((p) => p.hasCaseStudy)
}

export function getProjectsWithoutCaseStudy(): Project[] {
  return projectsData.filter((p) => !p.hasCaseStudy)
}

export function getAllProjects(): Project[] {
  return projectsData
}
