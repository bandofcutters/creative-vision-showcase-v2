import { motion } from "framer-motion";
import { Film, Edit, Award, Music } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-dark text-white">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
        >
          About <span className="text-accent">Ryan</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12 md:mb-16 text-gray-300 text-base md:text-lg text-left"
        >
          <p className="mb-4 md:mb-6">
            Ryan is an award-winning picture editor with an innate ability to craft stories that captivate and engage audiences. With over two decades of experience, he has honed his expertise across a wide range of projects, from the high-stakes drama of The Amazing Race Canada to heartfelt stories through documentaries like Mr. Dressup: The Magic of Make-Believe to cutting-edge true crime series such as United Gangs of America. His work has been recognized with multiple Canadian Cinema Editors awards, underscoring his commitment to excellence in storytelling.
          </p> 
          <p className="mb-4 md:mb-6">
            Ryan's passion lies in uncovering the core of every story and presenting it with precision and impact. He thrives in fast-paced, deadline-driven environments, where his collaborative approach sets him apart. Whether partnering with directors, producers, or fellow editors, Ryan is known for managing complex narratives with creativity and professionalism, while fostering a cohesive and dynamic team atmosphere. His unique vision and dedication to his craft have established him as a trusted leader in the worlds of unscripted television and documentary filmmaking.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Film,
              title: "Story Crafting",
              description: "Weaving compelling narratives from raw footage for documentaries and unscripted TV"
            },
            {
              icon: Edit,
              title: "Visual Storytelling",
              description: "Expert in shot selection, pacing, and visual flow. Crafting seamless transitions and maintaining narrative continuity while making impactful creative choices that enhance the story"
            },
            {
              icon: Music,
              title: "Music Design",
              description: "Skilled at selecting and editing music to enhance emotional impact, create atmosphere, and elevate storytelling through thoughtful audio choices"
            },
            {
              icon: Award,
              title: "Quality",
              description: "Delivering broadcast-ready content that engages and entertains"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-4 md:p-6 rounded-lg bg-dark-lighter"
            >
              <div className="inline-block p-3 md:p-4 rounded-full bg-accent/10 mb-3 md:mb-4">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
