import "./globals.css";
// import { Inter } from "next/font/google";
import Theming from "../components/providers/Theme";
// import UiProvider from "@/components/providers/UiProvider";

import HeaderPage from "./(Header)/Header/Page";
import Footer from "./components/Footer";


// import { ProjectList, projects } from "./components/projects";

// const inter = Inter({ subsets: ["latin"] });

// import { Inter } from "next/font/google";

// const font = Inter({
//   subsets: ["latin"],
//   weight: ["400", "600", "100"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <body className={`${font.className} `}> */}
        <Theming>
        
          <HeaderPage/>
          {children}
          {/* <main className="container mx-auto px-4 py-8">
      <ProjectList projects={projects} metadata={true} />
    </main> */}
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
