import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { CVHeader } from "./cv/CVHeader";
import { CVOrganizations } from "./cv/CVOrganizations";
import { CVSummary } from "./cv/CVSummary";
import { CVExperience } from "./cv/CVExperience";
import { CVEducation } from "./cv/CVEducation";
import { CVSkills } from "./cv/CVSkills";
import { CVAwards } from "./cv/CVAwards";
import { Button } from "./ui/button";

export const CV = () => {
  const handleDownload = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/Ryan-Monteith-CV.pdf'; // This assumes you have a PDF version of the CV in the public folder
    link.download = 'Ryan-Monteith-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-dark/95 overflow-y-auto">
      <div className="container mx-auto py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-lighter rounded-lg p-8 max-w-4xl mx-auto relative"
        >
          <Button
            onClick={handleDownload}
            className="absolute top-4 right-4 flex items-center gap-2"
            variant="outline"
          >
            <Download className="w-4 h-4" />
            Download CV
          </Button>

          <div className="space-y-8">
            <CVHeader />
            <CVOrganizations />
            <CVSummary />
            <CVExperience />
            <CVEducation />
            <CVSkills />
            <CVAwards />
          </div>
        </motion.div>
      </div>
    </div>
  );
};