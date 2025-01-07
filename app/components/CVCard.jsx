import React from 'react';
import { FileText } from 'lucide-react';

const CVCard = ({ pdfUrl }) => {
  return (
    <div className="mt-0 mb-1 px-1">
      <div className="w-full">
        <div className="mr-2 ml-0">
          <div className="relative h-20 w-full overflow-hidden rounded-lg border dark:border-neutral-600 border-neutral-400/60">
            <iframe 
              src="/Maanik-Resume.pdf"
              className="h-90 w-full"
              title="CV Preview"
            />
          </div>
          {/* <p className="text-xs text-neutral-500">
            View and download my resume using the buttons below
          </p>
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => window.open(pdfUrl, '_blank')}
              className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60 rounded-full p-2 dark:bg-neutral-700/40"
            >
              <span>View CV</span>
              <FileText size={14} />
            </button>
            <a 
              href={pdfUrl} 
              download
              className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60 rounded-full p-2 dark:bg-neutral-700/40"
            >
              <span>Download CV</span>
              <FileText size={14} />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CVCard;  