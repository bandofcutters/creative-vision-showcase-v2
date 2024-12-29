import { Wrench } from "lucide-react";

export const CVSkills = () => {
  return (
    <section>
      <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Wrench className="text-accent" /> Skills
      </h3>
      <ul className="text-gray-300 space-y-2">
        <li>Avid Media Composer</li>
        <li>Adobe Premiere Pro</li>
        <li>Factual / Unscripted</li>
        <li>Storytelling / Writing</li>
        <li>Documentary / Docu-Series / Reality / Reality Competition</li>
      </ul>
    </section>
  );
};