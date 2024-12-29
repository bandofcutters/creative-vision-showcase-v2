import { motion } from "framer-motion";

export const CVHeader = () => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-2">Ryan Monteith</h2>
      <p className="text-xl text-accent mb-4">Senior Picture Editor / Story Editor</p>
      <div className="flex justify-center gap-4 text-gray-300">
        <a href="mailto:ryan@bandofcutters.com" className="hover:text-accent">ryan@bandofcutters.com</a>
        <span>647.273.3154</span>
      </div>
    </div>
  );
};