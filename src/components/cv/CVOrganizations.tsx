import { Award } from "lucide-react";

export const CVOrganizations = () => {
  return (
    <section>
      <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Award className="text-accent" /> Organizations
      </h3>
      <ul className="text-gray-300 space-y-2">
        <li>Canadian Cinema Editors</li>
        <li>Metis Nation of Ontario</li>
      </ul>
    </section>
  );
};