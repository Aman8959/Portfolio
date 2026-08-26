export type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  status: "Concept / In development" | "Completed" | "Client project";
  featured: boolean;
  caseStudy?: boolean;
  isClientProject?: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
  image?: string;
  date?: string;
  caseStudyReference?: string;
  metrics?: { label: string; value: string }[];
};

const projectEntries: Project[] = [
  // Concept & Featured Projects
  {
    title: "Recall AI",
    slug: "recall-ai",
    category: "AI Product Concept",
    description: "An intelligent task, study, and project-management concept focused on helping people complete meaningful work.",
    problem: "Important work can be lost in overloaded task lists, repetitive reminders, and competing priorities.",
    features: ["Behavior-aware recommendations", "Adaptive reminders", "Next Best Action scoring"],
    technologies: ["AI Product Design", "Recommendation Systems", "Full-Stack Architecture"],
    status: "Concept / In development",
    featured: true,
    caseStudy: true,
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    category: "Developer Website",
    description: "A professional portfolio foundation built to clearly present AI/ML and full-stack development work.",
    problem: "A focused online presence is needed to show technical work and enable project inquiries.",
    features: ["Centralized content", "Responsive design", "Dark and light themes"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Concept / In development",
    featured: false,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/Portfolio",
  },
  
  // AI/ML & Data Science
  {
    title: "Heart Disease Prediction Using Machine Learning",
    slug: "heart-disease-prediction",
    category: "AI/ML & Data Science",
    description: "Predictive machine learning model for early heart disease detection using patient health metrics.",
    problem: "Early detection of heart disease requires analyzing complex patient data efficiently.",
    features: ["Classification model", "Patient data analysis", "Risk prediction"],
    technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
    status: "Completed",
    featured: false,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/Heart-Disease-Prediction-Using-Machine-Learning",
  },
  {
    title: "Uber Trips Analysis",
    slug: "uber-trips-analysis",
    category: "Data Analytics",
    description: "Comprehensive analysis of Uber trip data to uncover patterns, trends, and insights.",
    problem: "Understanding ride-sharing patterns requires processing and analyzing large datasets.",
    features: ["Data exploration", "Pattern recognition", "Trend visualization"],
    technologies: ["Python", "Data Analysis", "Machine Learning", "Pandas", "Matplotlib"],
    status: "Completed",
    featured: false,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/Uber-Trips-Analysis-using-machine-learning-",
  },
  {
    title: "Zomato Data Analysis Using Python",
    slug: "zomato-analysis",
    category: "Data Analytics",
    description: "In-depth analysis of Zomato restaurant data to identify market trends and business insights.",
    problem: "Restaurant industry stakeholders need actionable insights from complex food delivery data.",
    features: ["Market analysis", "Restaurant insights", "Data visualization"],
    technologies: ["Python", "Data Analysis", "Pandas", "Matplotlib", "Seaborn"],
    status: "Completed",
    featured: false,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/Zomato-Data-Analysis-Using-Python",
  },
  {
    title: "Spam Email Detection Using NLP & Naive Bayes",
    slug: "spam-email-detection",
    category: "AI/ML & Data Science",
    description: "Natural language processing model for accurate spam email classification.",
    problem: "Email systems need intelligent filtering to separate legitimate messages from spam.",
    features: ["NLP processing", "Text classification", "Naive Bayes classifier"],
    technologies: ["Python", "NLP", "Natural Language Processing", "Naive Bayes", "NLTK"],
    status: "Completed",
    featured: false,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/Spam-Email-Detection-Using-NLP-Naive-Bayes-Algorithm",
  },
  {
    title: "AI-Based Recommendation System",
    slug: "ai-recommendation-system",
    category: "AI/ML & Data Science",
    description: "Intelligent recommendation engine using collaborative filtering and machine learning.",
    problem: "Users need personalized recommendations based on preferences and behavior patterns.",
    features: ["Collaborative filtering", "Personalization", "Real-time recommendations"],
    technologies: ["Python", "Machine Learning", "Recommendation Systems", "Data Science"],
    status: "Completed",
    featured: false,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/AI-Recommendation-System",
  },
  {
    title: "Accident Detection System",
    slug: "accident-detection-system",
    category: "AI/ML & Data Science",
    description: "Computer vision system for real-time accident detection and emergency response.",
    problem: "Quick accident detection is critical for timely emergency response and traffic management.",
    features: ["Real-time detection", "Video analysis", "Alert system"],
    technologies: ["Python", "Computer Vision", "Deep Learning", "OpenCV", "YOLO"],
    status: "Completed",
    featured: false,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/AccidentDetectionSystem",
  },

  // Full-Stack Development
  {
    title: "Support Ticket Intelligence & Automation",
    slug: "support-ticket-automation",
    category: "Full-Stack Development",
    description: "Intelligent support ticket system with automation and AI-powered routing.",
    problem: "Support teams struggle with ticket volume, prioritization, and efficient resolution.",
    features: ["Ticket automation", "Intelligent routing", "Priority classification"],
    technologies: ["Full-Stack Development", "AI/ML", "Automation", "Backend Systems"],
    status: "Client project",
    featured: false,
    isClientProject: true,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/Support-Ticket-Intelligence-Automation",
  },
  {
    title: "WasteNot - Empowering Rural Commerce",
    slug: "wastenot",
    category: "Full-Stack Development",
    description: "Platform empowering rural entrepreneurs to reduce waste and maximize commercial opportunities.",
    problem: "Rural communities lack efficient channels to monetize resources and reduce waste.",
    features: ["Marketplace", "Community engagement", "Resource optimization"],
    technologies: ["Full-Stack Development", "Web Application", "E-commerce"],
    status: "Client project",
    featured: false,
    isClientProject: true,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/wastenot",
  },
  {
    title: "Riddhi Dance Studio",
    slug: "riddhi-dance-studio",
    category: "Web Development",
    description: "Professional website for dance studio showcasing classes, instructors, and booking system.",
    problem: "Dance studios need an online presence for class promotion and student engagement.",
    features: ["Class showcase", "Instructor profiles", "Student portal"],
    technologies: ["Web Development", "Responsive Design", "Frontend Development"],
    status: "Client project",
    featured: false,
    isClientProject: true,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/riddhi-dance-studio",
  },

  // Concept Projects
  {
    title: "AI Road Accident Detection",
    slug: "accident-detection-concept",
    category: "Computer Vision System",
    description: "An AI-assisted emergency-response system concept for detecting potential road accidents from CCTV and video streams.",
    problem: "Manual monitoring can delay the recognition and routing of potential road incidents.",
    features: ["Video-stream monitoring", "Vehicle/person detection", "Incident workflow concept"],
    technologies: ["Computer Vision", "OpenCV", "YOLO", "Deep Learning"],
    status: "Concept / In development",
    featured: true,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/AccidentDetectionSystem",
  },
  {
    title: "Localink",
    slug: "localink",
    category: "Web Application",
    description: "A local discovery platform concept that helps people find useful services, places, and opportunities around them.",
    problem: "Local information is often scattered across search results, social posts, and word of mouth, making trusted discovery harder.",
    features: ["Location-based discovery", "Useful local categories", "Clear provider and place information"],
    technologies: ["Next.js", "TypeScript", "Location-aware UX"],
    status: "Concept / In development",
    featured: false,
    caseStudy: true,
    githubUrl: "https://github.com/Aman8959/LocalLink",
  },
];

export const projects: Project[] = projectEntries.map((project) => ({
  ...project,
  caseStudyReference: project.caseStudyReference ?? `content/case-studies/${project.slug}.md`,
}));
