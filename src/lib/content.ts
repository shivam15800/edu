export type Program = {
  slug: string;
  title: string;
  category: "Undergraduate" | "Postgraduate" | "Diploma" | "Certification";
  school: string;
  duration: string;
  mode: "On campus" | "Hybrid" | "Online";
  level: string;
  description: string;
  modules: string[];
  outcomes: string[];
};

export const programs: Program[] = [
  { slug: "bba-strategy-innovation", title: "BBA in Strategy & Innovation", category: "Undergraduate", school: "School of Business", duration: "3 years", mode: "On campus", level: "Bachelor's", description: "Build the analytical, creative, and leadership capabilities to shape responsible enterprises.", modules: ["Business foundations", "Economics for decision-making", "Designing new ventures", "Strategic leadership", "Applied consulting studio", "Capstone project"], outcomes: ["Strategy analyst", "Product associate", "Entrepreneur", "Management consultant"] },
  { slug: "msc-applied-data-science", title: "MSc Applied Data Science", category: "Postgraduate", school: "School of Technology", duration: "18 months", mode: "Hybrid", level: "Master's", description: "Turn complex data into responsible decisions through statistics, computing, and live industry briefs.", modules: ["Statistical foundations", "Machine learning", "Data engineering", "Responsible AI", "Visual analytics", "Industry capstone"], outcomes: ["Data scientist", "Analytics consultant", "ML specialist", "Research analyst"] },
  { slug: "diploma-ux-service-design", title: "Diploma in UX & Service Design", category: "Diploma", school: "School of Design", duration: "12 months", mode: "On campus", level: "Advanced diploma", description: "Research, prototype, and improve meaningful digital and service experiences.", modules: ["Human-centred research", "Interaction design", "Service blueprints", "Accessible systems", "Design operations", "Portfolio studio"], outcomes: ["UX designer", "Service designer", "UX researcher", "Product designer"] },
  { slug: "certificate-sustainable-leadership", title: "Certificate in Sustainable Leadership", category: "Certification", school: "Executive Education", duration: "14 weeks", mode: "Online", level: "Professional", description: "Lead practical environmental and social transformation across teams and organisations.", modules: ["Systems thinking", "ESG fundamentals", "Climate strategy", "Stakeholder leadership", "Impact measurement", "Action plan"], outcomes: ["Sustainability lead", "ESG advisor", "Programme manager", "Impact consultant"] },
  { slug: "bdes-communication-design", title: "BDes Communication Design", category: "Undergraduate", school: "School of Design", duration: "4 years", mode: "On campus", level: "Bachelor's", description: "Create compelling visual systems across identity, information, editorial, and emerging media.", modules: ["Visual language", "Typography", "Information design", "Motion systems", "Design futures", "Graduate studio"], outcomes: ["Communication designer", "Brand designer", "Art director", "Information designer"] },
  { slug: "mba-digital-business", title: "MBA Digital Business", category: "Postgraduate", school: "School of Business", duration: "2 years", mode: "Hybrid", level: "Master's", description: "Combine core management expertise with the skills to lead digital transformation.", modules: ["Managerial economics", "Finance", "Digital operations", "Platform strategy", "Leadership lab", "Transformation capstone"], outcomes: ["Business leader", "Transformation consultant", "Product director", "Founder"] },
  { slug: "diploma-financial-analytics", title: "Diploma in Financial Analytics", category: "Diploma", school: "School of Business", duration: "10 months", mode: "Online", level: "Advanced diploma", description: "Apply modelling, forecasting, and data tools to modern financial decision-making.", modules: ["Financial statements", "Business statistics", "Forecasting", "Risk analytics", "Fintech landscape", "Applied project"], outcomes: ["Financial analyst", "Risk associate", "Fintech analyst", "Business analyst"] },
  { slug: "certificate-ai-product-management", title: "AI Product Management", category: "Certification", school: "Executive Education", duration: "10 weeks", mode: "Online", level: "Professional", description: "Define, evaluate, and responsibly ship AI-enabled products that solve real customer needs.", modules: ["AI foundations", "Opportunity discovery", "Product strategy", "Responsible deployment", "Evaluation", "Product pitch"], outcomes: ["AI product manager", "Product strategist", "Innovation lead", "Founder"] },
];

export type Faculty = { name: string; role: string; school: string; initials: string; expertise: string[] };
export const faculty: Faculty[] = [
  { name: "Dr. Aanya Mehta", role: "Dean & Professor of Strategy", school: "Business", initials: "AM", expertise: ["Strategy", "Innovation"] },
  { name: "Prof. Marcus Chen", role: "Professor of Data Systems", school: "Technology", initials: "MC", expertise: ["Data science", "Responsible AI"] },
  { name: "Leila Okafor", role: "Associate Dean, Design", school: "Design", initials: "LO", expertise: ["Service design", "Public systems"] },
  { name: "Dr. Sofia Alvarez", role: "Professor of Sustainable Enterprise", school: "Business", initials: "SA", expertise: ["ESG", "Leadership"] },
  { name: "Arjun Rao", role: "Director, Executive Education", school: "Executive Education", initials: "AR", expertise: ["Product", "Transformation"] },
  { name: "Dr. Naomi Brooks", role: "Professor of Human-Centred Computing", school: "Technology", initials: "NB", expertise: ["HCI", "Accessibility"] },
];

export type Story = { slug: string; type: "Event" | "News"; category: string; date: string; title: string; excerpt: string };
export const stories: Story[] = [
  { slug: "future-of-responsible-ai", type: "Event", category: "Public lecture", date: "18 Oct 2026", title: "The future of responsible AI", excerpt: "Researchers and industry leaders examine how institutions can build trustworthy intelligent systems." },
  { slug: "innovation-studio-opens", type: "News", category: "Campus", date: "12 Sep 2026", title: "New interdisciplinary innovation studio opens", excerpt: "A flexible new space brings design, technology, and enterprise learners together." },
  { slug: "student-venture-showcase", type: "Event", category: "Showcase", date: "05 Nov 2026", title: "Student venture showcase 2026", excerpt: "Meet the student teams translating bold ideas into viable and responsible ventures." },
  { slug: "community-climate-partnership", type: "News", category: "Research", date: "28 Aug 2026", title: "Institute launches community climate partnership", excerpt: "A three-year collaboration will support locally led resilience projects and applied learning." },
];

export const faqs = [
  { q: "Can I apply before receiving my final results?", a: "Yes. You may submit available transcripts and receive a conditional offer. Final requirements vary by programme and will be confirmed by the admissions team." },
  { q: "Are scholarships available?", a: "Merit and need-based awards are planned. Scholarship names, values, and deadlines shown in the final prospectus should be confirmed by the institute." },
  { q: "Can international learners apply?", a: "International applications are welcome. Visa, language, and document requirements will depend on the final campus location and programme approval." },
  { q: "Can I study while working?", a: "Hybrid, online, and selected evening formats are designed for working professionals. Check each programme card for its study mode." },
];