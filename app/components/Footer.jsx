// import React from "react";

// function Footer() {
//   return (
//     <div className="w-full  px-4 pt-8 max-w-6xl mx-auto">
//       <div>
//         <div className="border dark:border-neutral-700 border-neutral-200" />
//         <div className="flex justify-between  py-5 items-center text-neutral-600 text-sm">
//           {/* <div className="flex ">
//             <span>©</span>
//             <p>Decipher</p>
//           </div> */}

//           <p>Created by Maanik Sharma</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
// export default Footer;
import { Twitter, Linkedin, Github, Heart, Coffee } from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Twitter size={20} />,
      url: "https://x.com/yi_Decipher",
      label: "Twitter"
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/maaniksharma/",
      label: "LinkedIn"
    },
    {
      icon: <Github size={20} />,
      url: "https://github.com/Maanik-Sharma",
      label: "GitHub"
    }
  ];

  return (
    <footer className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 text-slate-50 py-4 mt-8 shadow-xl relative rounded-lg sm:h-40">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center gap-2">
         
          <div className="flex items-center gap-2 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>by</span>
            <span className="font-medium">Decipher</span>
          </div>

          {/* Support Section */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium text-gray-400">You can support my work!</p>
            <a
              href="https://buymeacoffee.com/yi_decipher" // Replace with your Buy Me a Coffee link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#FFDD00] text-black rounded-lg hover:bg-[#FFDD00]/90 transition-colors"
            >
              <Coffee size={18} />
              <span className="font-medium">Buy me a coffee</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
