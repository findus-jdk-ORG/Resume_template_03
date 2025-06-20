// Portfolio Configuration Data
const portfolioConfig = {
    // Personal Information
    personalInfo: {
        name: "Meet Kasodariya",
        title: "FULL-STACK DEVELOPER",
        description: "Crafting <span class='highlight'>digital experiences</span> that blend <span class='highlight'>innovation</span> with <span class='highlight'>functionality</span>.",
        email: "mbhavsar590@gmail.com",
        phone: "+91 9104036363",
        location: "Ahmedabad, India",
        experienceYears: 5,
        projectsCompleted: 50,
        clientSatisfaction: 100,
        resumeFile: "resume/meet_cv2.pdf",
        socialLinks: [
            { name: "Facebook", icon: "fab fa-facebook-f", url: "#" },
            { name: "Twitter", icon: "fab fa-twitter", url: "#" },
            { name: "Instagram", icon: "fab fa-instagram", url: "#" },
            { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "#" },
            { name: "GitHub", icon: "fab fa-github", url: "#" }
        ],
        education: [
            {
                degree: "Master's in Computer Science",
                institution: "Gujarat University",
                years: "2018-2020"
            },
            {
                degree: "Bachelor's in Information Technology",
                institution: "Gujarat University",
                years: "2015-2018"
            }
        ],
        certifications: [
            "Full Stack Web Development - Udemy",
            "React Specialist - Coursera",
            "Node.js Certified Developer"
        ]
    },

    // Skills
    technicalSkills: [
        { name: "HTML5", percent: 95 },
        { name: "CSS3", percent: 90 },
        { name: "JavaScript", percent: 85 },
        { name: "React", percent: 80 }
    ],
    professionalSkills: [
        { name: "Creativity", percent: 95 },
        { name: "Teamwork", percent: 90 },
        { name: "Communication", percent: 85 },
        { name: "Project Management", percent: 80 }
    ],

    // Portfolio Projects
        // ... (keep your existing config)
    
        // Portfolio Projects
        projects: [
            {
                title: "E-commerce Platform",
                category: "web",
                description: "Full-stack development with React & Node.js",
                imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                links: [
                    { type: "view", icon: "fas fa-eye", url: "#", label: "View project" },
                    { type: "code", icon: "fab fa-github", url: "#", label: "View code" }
                ]
            },
            {
                title: "Fitness Tracker App",
                category: "app",
                description: "React Native application with health API integration",
                imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                links: [
                    { type: "view", icon: "fas fa-eye", url: "#", label: "View project" },
                    { type: "code", icon: "fab fa-github", url: "#", label: "View code" }
                ]
            },
            {
                title: "Corporate Branding",
                category: "graphic",
                description: "Complete visual identity for tech startup",
                imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                links: [
                    { type: "view", icon: "fas fa-eye", url: "#", label: "View project" },
                    { type: "details", icon: "fas fa-info-circle", url: "#", label: "View details" }
                ]
            },
            {
                title: "Analytics Dashboard",
                category: "uiux",
                description: "User experience design & prototyping",
                imageUrl: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                links: [
                    { type: "view", icon: "fas fa-eye", url: "#", label: "View project" },
                    { type: "case-study", icon: "fas fa-book-open", url: "#", label: "View case study" }
                ]
            },
            {
                title: "Blog Platform",
                category: "web",
                description: "Headless CMS with Gatsby frontend",
                imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                links: [
                    { type: "view", icon: "fas fa-eye", url: "#", label: "View project" },
                    { type: "code", icon: "fab fa-github", url: "#", label: "View code" }
                ]
            },
            {
                title: "Travel Planner",
                category: "app",
                description: "Flutter application with Firebase backend",
                imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                links: [
                    { type: "view", icon: "fas fa-eye", url: "#", label: "View project" },
                    { type: "code", icon: "fab fa-github", url: "#", label: "View code" }
                ]
            }
        ],
    
        // Services
        services: [
            {
                title: "Web Development",
                icon: "fas fa-code",
                description: "Custom website development with modern technologies and responsive design for all devices."
            },
            {
                title: "Web Design",
                icon: "fas fa-paint-brush",
                description: "Beautiful, user-friendly designs that enhance user experience and engagement."
            },
            {
                title: "Responsive Design",
                icon: "fas fa-mobile-alt",
                description: "Websites that look great and function perfectly on any device or screen size."
            },
            {
                title: "SEO Optimization",
                icon: "fas fa-search",
                description: "Optimizing your website to rank higher in search engine results and attract more visitors."
            },
            {
                title: "Digital Marketing",
                icon: "fas fa-chart-line",
                description: "Comprehensive digital marketing strategies to grow your online presence."
            },
            {
                title: "Support",
                icon: "fas fa-headset",
                description: "Ongoing maintenance and support to keep your website running smoothly."
            }
        ],
    
        // ... (rest of your config)

    // Contact Information
    contact: {
        formAccessKey: "a2710f77-4610-4beb-9ae9-893489bf6c56",
        formSubject: "New Contact Form Submission"
    },

    // Tech Stack Icons
    techStack: [
        { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        // Add more tech stack items as needed
    ]
};

// Initialize the portfolio when the DOM is loaded


// Make config available globally
window.portfolioConfig = portfolioConfig;