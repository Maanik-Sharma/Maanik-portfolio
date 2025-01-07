// import { AnimatedTestimonials } from "./components/animated-testimonials";
// app\components\AnimatedTestimonialsCard.jsx
import { AnimatedProject } from "./animated-project";

export function ProjectsCarousel() {
  const Projects = [
    {
      quote:
    " AI-Driven Marketing Platform: Offering AI tools for businesses, to enhance brand visibility and automate personalized marketing.",
      name: "AdVanatge AI",
      designation: "(ReactJs, Tailwind CSS, JavaScript,Flask.)",
    //   src: "/AdvantageAiLogo.jpg",
    },
    {
      quote:
        " A free, instant code editor for crafting HTML, CSS, and JavaScript. Perfect for quick edits, prototyping, and learning, all in one seamless environment",
      name: "InstaCodeStudio",
      designation: "(Html, Css, JavaScript)", 
    //   src: "/freshlifebiteTesti.png",
    },
    {
      quote:
       "Developed a web application that allows users to extract bathymetric data by selecting specific points on an interactive map using a pointer.",
      name: "Bathym",
      designation: "(ReactJs, Python, Flask , NetCdf handler, Leaflet)",
    //   src: "/bookmypgTesti.jpeg",
    },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  return <AnimatedProject testimonials={Projects} />;
}
