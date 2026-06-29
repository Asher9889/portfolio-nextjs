export interface OutcomeGroup {
  id: string;
  headline: string;
  question: string;
  items: OutcomeItem[];
}

export interface OutcomeItem {
  label: string;
  desc: string;
}

export const outcomeGroups: OutcomeGroup[] = [
  {
    id: "customers",
    headline: "Need More Customers?",
    question: "I build digital storefronts that convert visitors into leads. Not template sites — purpose-built landing experiences, SEO architecture, and performance tuning that makes your business discoverable.",
    items: [
      { label: "Website Strategy", desc: "Information architecture, user flows, and content structure designed for conversion" },
      { label: "SEO & Organic Growth", desc: "Technical SEO, structured data, and content strategy that earns rankings" },
      { label: "Landing Pages", desc: "Campaign-specific pages with clear CTAs, tested layouts, and fast load times" },
      { label: "Performance Optimization", desc: "Core Web Vitals, Lighthouse scores above 90, sub-second page loads" },
      { label: "Analytics & Tracking", desc: "Event-driven analytics, funnel analysis, and actionable reporting" },
    ],
  },
  {
    id: "mobile",
    headline: "Want Your Customers In Their Pocket?",
    question: "I build cross-platform mobile apps that ship to both stores from a single codebase. Push notifications, offline sync, payments — everything your users expect from a native app.",
    items: [
      { label: "iOS & Android Apps", desc: "React Native apps with native feel, shared business logic, platform-tailored UI" },
      { label: "Push Notifications", desc: "Segmented campaigns, in-app messaging, and real-time alerts via FCM/APNs" },
      { label: "In-App Payments", desc: "Stripe, Razorpay, or platform-specific payment integrations" },
      { label: "Offline Mode", desc: "Local-first architecture with background sync and conflict resolution" },
      { label: "App Store Deployment", desc: "EAS Build pipeline, TestFlight, internal testing tracks, and store listing" },
    ],
  },
  {
    id: "automation",
    headline: "Spend Less Time On Repetitive Work",
    question: "I build automation systems that eliminate manual workflows. Document processing, data extraction, AI-powered decisions — your team focuses on what matters, not what repeats.",
    items: [
      { label: "AI Chat & Assistants", desc: "Custom chatbots, knowledge-base assistants, and LLM-powered customer support" },
      { label: "Workflow Automation", desc: "Multi-step processes with conditional logic, approvals, and notifications" },
      { label: "OCR & Document Processing", desc: "Extract text, tables, and signatures from scanned documents at scale" },
      { label: "Internal Tools", desc: "Admin panels, dashboards, and CRUD interfaces for your operations team" },
      { label: "Data Extraction & ETL", desc: "Parse, transform, and load data from unstructured sources into your systems" },
    ],
  },
  {
    id: "scale",
    headline: "Want To Scale Your Product?",
    question: "I architect systems that handle growth without collapsing. Microservices, cloud infrastructure, database optimization — your product survives traffic spikes and keeps shipping.",
    items: [
      { label: "System Architecture", desc: "Event-driven microservices, service boundaries, and fault-tolerant design" },
      { label: "Cloud Infrastructure", desc: "AWS, GCP, or multi-cloud with Terraform-defined, auto-scaling resources" },
      { label: "Database Design", desc: "Schema modeling, query optimization, read replicas, and migration strategies" },
      { label: "API Development", desc: "REST, GraphQL, or gRPC APIs with rate limiting, caching, and documentation" },
      { label: "Performance Tuning", desc: "Profiling, caching layers, CDN strategies, and database query optimization" },
    ],
  },
  {
    id: "platform",
    headline: "Need A Platform Your Team Can Use?",
    question: "I build internal platforms that your team actually wants to use. Clean interfaces, thoughtful UX, reliable data — not another clunky admin panel that everyone hates.",
    items: [
      { label: "Admin Dashboards", desc: "Custom admin panels with role-based access, audit logs, and bulk actions" },
      { label: "Analytics Portals", desc: "Interactive charts, filters, exports, and scheduled report delivery" },
      { label: "Collaboration Tools", desc: "Real-time editing, comments, approvals, and notification workflows" },
      { label: "Reporting Systems", desc: "Custom report builders, PDF generation, and automated distribution" },
      { label: "Data Visualization", desc: "Interactive dashboards, geographic maps, and real-time data streams" },
    ],
  },
];

export interface Milestone {
  step: string;
  title: string;
  deliverables: string;
  timeline: string;
  involvement: string;
}

export const milestones: Milestone[] = [
  { step: "01", title: "Strategy Workshop", deliverables: "Problem definition, user research, competitive analysis, technical feasibility assessment", timeline: "2 3 days", involvement: " Stakeholder interviews, join the discovery sessions" },
  { step: "02", title: "Wireframes", deliverables: "User flows, wireframes, tech stack recommendation, architecture sketch", timeline: "3 5 days", involvement: "Review and approve user flows, sign off on tech stack" },
  { step: "03", title: "Rapid Prototype", deliverables: "Clickable prototype, data model, API design, deployment plan", timeline: "5 7 days", involvement: "Test the prototype, provide feedback on interactions" },
  { step: "04", title: "Development Sprint", deliverables: "Working software every week, automated tests, documentation, CI/CD pipeline", timeline: "2 6 weeks", involvement: "Weekly demo, prioritize backlog, test in staging" },
  { step: "05", title: "QA & Launch", deliverables: "Staging environment, load testing, security audit, rollback plan, launch runbook", timeline: "3 5 days", involvement: "Final UAT, content migration, launch day coordination" },
  { step: "06", title: "Growth Partner", deliverables: "Monitoring, performance reports, feature roadmap, ongoing optimization", timeline: "Ongoing", involvement: "Monthly reviews, prioritise next cycle, share user feedback" },
];

export interface ComparisonItem {
  label: string;
  typical: string;
  our: string;
  positive: boolean;
}

export const comparisons: ComparisonItem[] = [
  { label: "Team composition", typical: "Junior developers learning on your project", our: "Senior engineer who architects before coding", positive: true },
  { label: "Code quality", typical: "Generic templates with minimal customization", our: "Custom architecture written for your specific problem", positive: true },
  { label: "Communication", typical: "Slow email chains, unclear timelines", our: "Weekly demos, transparent progress, Slack/WhatsApp", positive: true },
  { label: "Documentation", typical: "No documentation beyond commits", our: "Architecture docs, API references, runbooks, READMEs", positive: true },
  { label: "Post-launch", typical: "Project delivered, goodbye", our: "Ongoing monitoring, performance reports, growth partnership", positive: true },
  { label: "Risk management", typical: "No rollback plan, no staging environment", our: "Blue-green deploys, automated tests, monitored rollbacks", positive: true },
  { label: "Cost predictability", typical: "Unexpected overruns, scope creep", our: "Fixed-price sprints, clear change request process", positive: true },
];

export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  challenges: string;
  architecture: string;
  result: string;
  metrics: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "elearning",
    title: "E-Learning Platform",
    problem: "Content was managed manually spreadsheets, email threads, and Slack messages. Publishing a single course took 3 days of coordination between 4 people.",
    challenges: "Migrating 200+ existing courses without downtime. Supporting video streaming at scale. Building a role system for instructors, reviewers, and admins.",
    architecture: "Next.js frontend with server-side rendering. Node.js API gateway. PostgreSQL for course data, MongoDB for user progress. Redis for caching. AWS S3 + CloudFront for video. BullMQ for async processing.",
    result: "Publishing time dropped from 3 days to 15 minutes. Zero downtime during migration. Platform handles 50K+ concurrent users during peak hours.",
    metrics: ["3 days to 15 minutes publishing", "50K+ concurrent users", "Zero downtime migration", "4 person workflow to 1 click"],
  },
  {
    id: "inventory",
    title: "Inventory Management System",
    problem: "The client tracked inventory across 5 warehouses using paper logs and a shared Excel file. Stockouts were common, overstock was invisible, and reconciliation took a full week every month.",
    challenges: "Real-time sync across 5 geographically distributed warehouses. Barcode scanning integration with existing hardware. Offline resilience warehouse internet is unreliable.",
    architecture: "React Native mobile app for warehouse staff. React dashboard for managers. Node.js + PostgreSQL backend. WebSocket for real-time updates. PouchDB for offline sync with CouchDB on the server. Barcode scanning via camera API.",
    result: "Reconciliation dropped from 1 week to 15 minutes. Stockouts reduced by 60% in 3 months. Inventory accuracy improved from 72% to 98%.",
    metrics: ["1 week to 15 minutes reconciliation", "60% fewer stockouts", "72% to 98% inventory accuracy", "5 warehouses, real-time sync"],
  },
];

export const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "React Native"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "Infrastructure", items: ["AWS", "Docker", "Terraform", "CI/CD", "Cloudflare"] },
  { category: "AI/ML", items: ["OpenAI", "LangChain", "YOLO", "TensorFlow"] },
];

export const enterprisePractices = [
  "CI/CD with automated testing",
  "Secure authentication & authorization",
  "Monitoring & alerting (Grafana, Sentry)",
  "Scalable, fault-tolerant architecture",
  "Automated backups & disaster recovery",
  "Performance budgets & Core Web Vitals",
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Will I own the source code?",
    answer: "Yes. 100% of the code I write for your project is yours. No licenses, no lock-in, no hidden terms. You can take it to any other team tomorrow.",
  },
  {
    question: "How do you estimate cost?",
    answer: "I break the project into phases. Each phase has a fixed price based on the scope defined in the strategy workshop. If scope changes, we agree on the adjustment before work starts, not after.",
  },
  {
    question: "Can you work with my existing software?",
    answer: "Usually yes. I review your existing codebase, infrastructure, and team workflows during the strategy workshop. I can extend, refactor, or integrate with most tech stacks.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes. I sign NDAs before any detailed discussion. Your idea, your data, and your business logic are confidential.",
  },
  {
    question: "Who owns the IP?",
    answer: "You do. All intellectual property, including code, designs, documentation, and architecture decisions, belongs to you. I retain the right to list the work in my portfolio unless we agree otherwise.",
  },
  {
    question: "How long is support included?",
    answer: "Every project includes 30 days of post-launch support for bug fixes and minor adjustments. After that, we can set up a monthly retainer or move to hourly support.",
  },
  {
    question: "Can the product scale later?",
    answer: "Yes. I architect for scale from day one, even if you only have 100 users today. Database indexing, caching layers, and stateless services are built in. Scaling up means adding resources, not rewriting code.",
  },
  {
    question: "Will I receive documentation?",
    answer: "Yes. Every project ships with architecture documentation, API reference, deployment runbook, environment setup guide, and a handoff document. Your team can take over without me.",
  },
];

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Business Website",
    price: "Starting at \u20B925,000",
    description: "A fast, responsive website that converts visitors into leads. Built with modern tech, optimized for search, and designed to load in under a second.",
    features: ["Custom design, no templates", "SEO-optimized structure", "Contact forms & lead capture", "Analytics integration", "1 month support included"],
    highlighted: false,
  },
  {
    name: "Web Application",
    price: "Starting at \u20B980,000",
    description: "A full-featured web application with user accounts, data management, and admin controls. For businesses that need more than a brochure site.",
    features: ["Custom architecture & design", "User authentication & roles", "Database design & API", "Admin dashboard", "Deployment & CI/CD", "1 month support included"],
    highlighted: true,
  },
  {
    name: "Custom SaaS",
    price: "Custom Quote",
    description: "A multi-tenant platform with complex business logic, real-time features, and cloud infrastructure. For serious products that need serious engineering.",
    features: ["Full system architecture", "Multi-tenant infrastructure", "Real-time features", "AI/ML integration if needed", "Team training & handoff", "Ongoing partnership available"],
    highlighted: false,
  },
];

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  items: OutcomeItem[];
}

export const services: Service[] = outcomeGroups.map((g) => ({
  id: g.id,
  title: g.headline,
  tagline: g.question.split(" ").slice(0, 6).join(" ") + "...",
  description: g.question,
  items: g.items,
}));
