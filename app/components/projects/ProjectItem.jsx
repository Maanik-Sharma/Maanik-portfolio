// // components/projects/ProjectItem.jsx
// import Image from "next/image";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import Link from "next/link";

// const linkClass = "flex items-center gap-2 text-sm text-[#25dde5] hover:text-[#1fa8af] transition-colors";

// const ProjectItem = ({
//   title,
//   description,
//   deployedURL,
//   imagePath,
//   stacks,
//   isRepo,
//   repoUrl,
// }) => {
//   return (
//     <li className="bg-[#0a0a0a] rounded-xl overflow-hidden">
//       <div className="flex flex-col">
//         {/* Image Container */}
//         <div className="relative h-48"> {/* Fixed height for consistency */}
//           <Image
//             src={imagePath}
//             alt={`${title} preview`}
//             fill
//             className="object-cover"
//             style={{ objectPosition: 'center' }}
//           />
//         </div>

//         {/* Content Container */}
//         <div className="p-4 space-y-2">
//           <h2 className="text-xl font-medium text-white">{title}</h2>
//           <p className="text-sm text-[#25dde5]" aria-label="project stacks">
//             {stacks.join(" / ")}
//           </p>
//           <p className="text-sm text-gray-300 line-clamp-2">
//             {description}
//           </p>
//           <div className="flex items-center gap-4 pt-2">
//             {deployedURL && (
//               <Link
//                 href={deployedURL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={linkClass}
//               >
//                 <FaExternalLinkAlt size={12} />
//                 <span>Live Preview</span>
//               </Link>
//             )}
//             {isRepo && (
//               <Link
//                 href={repoUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={linkClass}
//               >
//                 <FaGithub />
//                 <span>Repo Url</span>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default ProjectItem;
// components/projects/ProjectItem.jsx
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from 'react-icons/fi';
import Link from "next/link";

const linkClass = "flex items-center gap-2 text-sm text-[#25dde5] hover:text-[#1fa8af] transition-colors";

const ProjectItem = ({
  title,
  description,
  deployedURL,
  imagePath,
  stacks,
  isRepo,
  repoUrl,
}) => {
  return (
    <li className="bg-[#0a0a0a] rounded-xl overflow-hidden">
      <div className="flex flex-col">
        {/* Image Container */}
        <div className="relative h-48">
          <Image
            src={imagePath}
            alt={`${title} preview`}
            fill
            className="object-cover"
            style={{ objectPosition: 'center' }}
          />
        </div>

        {/* Content Container */}
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-medium text-white">{title}</h2>
          <p className="text-sm text-[#25dde5]" aria-label="project stacks">
            {stacks.join(" / ")}
          </p>
          <p className="text-sm text-gray-300 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-4 pt-2">
            {isRepo && (
              <Link
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <FaGithub />
                <span>Repo Url</span>
              </Link>
            )}
            {deployedURL && (
              <Link
                href={deployedURL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <FiArrowUpRight className="text-lg" />
                <span>Live</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;