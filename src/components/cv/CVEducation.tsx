import { GraduationCap } from "lucide-react";

export const CVEducation = () => {
  return (
    <section>
      <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <GraduationCap className="text-accent" /> Education
      </h3>
      <div className="border-l-2 border-accent pl-4">
        <h4 className="text-white font-semibold">Sheridan College</h4>
        <p className="text-accent">School of Arts, Animation & Design</p>
        <p className="text-gray-300">Media Arts Diploma</p>
        <p className="text-gray-400">1997 - 2000</p>
      </div>
    </section>
  );
};