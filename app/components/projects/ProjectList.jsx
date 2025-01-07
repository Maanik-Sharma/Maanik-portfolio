// components/projects/ProjectList.jsx
"use client"

import { useState } from 'react';
import ProjectItem from "./ProjectItem";
import Link from "next/link";
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectList = ({ projects, metadata }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.stacks.some(stack => stack.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section aria-label="projects" className="space-y-4 mt-10" id="main-content">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-slate-200 hover:text-blue-400 transition-colors">
            {/* <FaArrowLeft className="mr-2" /> */}
            <FiArrowUpRight className="text-xl" />
            <span className="text-xl">Home</span>
          </Link>
        </div>
        
        {/* Search Box */}
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 dark:bg-[#1E1E1E] bg-white border border-neutral-400/60 rounded-lg text-gray-200 focus:outline-none focus:border-gray-400"
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {metadata && <h2 className="text-2xl font-bold mt-8 mb-16">Featured Projects</h2>}
      
      <div className="mt-6">
        {filteredProjects.length > 0 ? (
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {filteredProjects.map(project => (
              <ProjectItem key={project.id} {...project} />
            ))}
          </ol>
        ) : (
          <div className="text-center py-8">No Projects Found</div>
        )}
      </div>
    </section>
  );
};

export default ProjectList;