// import { AnimatedTestimonials } from "./components/animated-testimonials";
// app\components\AnimatedTestimonialsCard.jsx
import { AnimatedTestimonials } from "./animated-testimonials";

export function AnimatedTestimonialsCard() {
  const testimonials = [
    {
      quote:
        "Working with Maanik was a fantastic experience. He transformed our vision into a seamless, user-friendly website. His attention to detail and creativity are unmatched! – Gaurav(Founder)",
      name: "pyjamawala.com",
      designation: "(Website Development & Operations)",
      src: "/pyjamawalaTesti.png",
    },
    {
      quote:
        "The results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "freshlifebites.com",
      designation: "(Website Developments)", 
      src: "/freshlifebiteTesti.png",
    },
    {
      quote:
        "Maanik delivered a precise, user-friendly website that met all our requirements. Great work!",
      name: "bookmypg.com",
      designation: "(Website Development & Operations)",
      src: "/bookmypgTesti.jpeg",
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
  return <AnimatedTestimonials testimonials={testimonials} />;
}
