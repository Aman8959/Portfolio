export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Responsive interfaces and web experiences built for clarity and usability.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Web Development", "React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Application logic, APIs, and server-side workflows designed around practical requirements.",
    skills: ["Python", "Node.js", "REST API Development", "API Integration", "Backend Application Development", "Authentication & Authorization", "Server-Side Logic"],
  },
  {
    title: "Database & Data Management",
    description: "Structured data foundations for reliable applications and useful analysis.",
    skills: ["SQL", "MySQL", "Database Design", "DBMS", "Data Modeling", "CRUD Operations", "Query Writing & Optimization"],
  },
  {
    title: "Data Science & Analytics",
    description: "Turning raw data into useful findings through cleaning, analysis, and visualization.",
    skills: ["Python for Data Science", "Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "Statistical Analysis", "Feature Engineering", "Matplotlib", "Seaborn"],
  },
  {
    title: "Machine Learning",
    description: "Practical model development, evaluation, and performance analysis.",
    skills: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Classification", "Regression", "Model Training & Evaluation", "Model Performance Analysis", "Scikit-learn"],
  },
  {
    title: "Artificial Intelligence",
    description: "Applied AI capabilities for detection, automation, and intelligent applications.",
    skills: ["Artificial Intelligence", "Computer Vision", "Image Processing", "AI Model Integration", "AI-based Detection Systems", "OpenCV", "YOLO"],
  },
  {
    title: "Programming & Computer Science",
    description: "Core programming and problem-solving foundations behind dependable software.",
    skills: ["Python", "JavaScript", "Object-Oriented Programming", "Data Structures & Algorithms", "Problem Solving", "Computer Networks", "Software Development Fundamentals"],
  },
  {
    title: "Developer Tools & Deployment",
    description: "Tools and workflows that support version control, testing, and delivery.",
    skills: ["Git", "GitHub", "Visual Studio Code", "Jupyter Notebook", "Google Colab", "Postman", "npm", "Vercel", "Web Deployment", "API Deployment", "Environment Configuration", "Version Control"],
  },
  {
    title: "Software Engineering",
    description: "Reliable delivery practices for maintainable and well-documented projects.",
    skills: ["Debugging", "Code Optimization", "Project Development", "Technical Documentation", "API Integration", "Automation"],
  },
];
