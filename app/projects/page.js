import React from 'react';
import { ProjectList, projects } from '../components/projects'; // Adjust the path as needed


const ProjectsPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold mt-8 mb-4">Projects</h1> */}
      <h1 className="text-2xl font-bold mt-8 mb-4"></h1>
      <ProjectList projects={projects} metadata={true} />
    </main>
  );
};

export default ProjectsPage;
