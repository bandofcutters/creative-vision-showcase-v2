import { Award } from "lucide-react";

export const CVAwards = () => {
  return (
    <section>
      <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Award className="text-accent" /> Awards
      </h3>
      <ul className="text-gray-300 space-y-2">
        <li>3 X Winner, Canadian Cinema Editor Award for The Amazing Race Canada, Top Chef Canada & Best in Miniature S2</li>
        <li>12 X Canadian Screen Award Nominee for Best Picture Editing in a Reality / Competition Program or Series</li>
        <li>3 X Canadian Cinema Editors Award Nominee for Best Picture Editing in a Reality / Competition Program or Series</li>
      </ul>
    </section>
  );
};