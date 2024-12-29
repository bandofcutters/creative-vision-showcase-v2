import { motion } from "framer-motion";
import { Calendar, Award, Briefcase, GraduationCap } from "lucide-react";

export const CV = () => {
  return (
    <div className="fixed inset-0 z-50 bg-dark/95 overflow-y-auto">
      <div className="container mx-auto py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-lighter rounded-lg p-8 max-w-4xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-2">Ryan Monteith</h2>
            <p className="text-xl text-accent mb-4">Senior Picture Editor / Story Editor</p>
            <div className="flex justify-center gap-4 text-gray-300">
              <a href="mailto:ryan@bandofcutters.com" className="hover:text-accent">ryan@bandofcutters.com</a>
              <span>647.273.3154</span>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Award className="text-accent" /> Organizations
              </h3>
              <ul className="text-gray-300">
                <li>Canadian Cinema Editors</li>
                <li>Metis Nation of Ontario</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Briefcase className="text-accent" /> Experience
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "50K First Dates (Prime Video)",
                    company: "Peacock Alley",
                    role: "Picture Editor, Docu-Series",
                    date: "July 2024 - Current",
                    details: "2 x Episodes: Edited on Premiere, Director: Brent Hodge"
                  },
                  {
                    title: "Mr. Dressup: Doc (Prime Video)",
                    company: "marblemedia",
                    role: "Picture Editor, Feature Documentary",
                    date: "Nov 2022 - Jan 2023",
                    details: "Mr. Dressup: The Magic of Make Believe premiered at TIFF 2023 winning the People's Choice Documentary Award"
                  },
                  {
                    title: "The Amazing Race Canada (CTV)",
                    company: "Insight Productions",
                    role: "Senior Editor /Lead Editor, Competition Reality",
                    date: "May 2014 - Aug 2023",
                    details: "Lead Editor: 12 x Episodes, 7 x Seasons\nSenior/Supervising Editor: 11 x Episodes, Season 9"
                  }
                ].map((job, index) => (
                  <div key={index} className="border-l-2 border-accent pl-4">
                    <h4 className="text-white font-semibold">{job.title}</h4>
                    <p className="text-accent">{job.role}</p>
                    <p className="text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {job.date}
                    </p>
                    <p className="text-gray-300 mt-2">{job.details}</p>
                  </div>
                ))}
                <p className="text-gray-400 italic">
                  Complete linear work history available at: 
                  <a href="https://linkedin.com/in/ryanmonteitheditor" className="text-accent ml-1 hover:underline" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/ryanmonteitheditor
                  </a>
                </p>
              </div>
            </section>

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

            <section>
              <h3 className="text-2xl font-semibold text-white mb-4">Awards</h3>
              <ul className="text-gray-300 space-y-2">
                <li>3 X Winner, Canadian Cinema Editor Award for The Amazing Race Canada, Top Chef Canada & Best in Miniature S2</li>
                <li>12 X Canadian Screen Award Nominee for Best Picture Editing in a Reality / Competition Program or Series</li>
                <li>3 X Canadian Cinema Editors Award Nominee for Best Picture Editing in a Reality / Competition Program or Series</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};