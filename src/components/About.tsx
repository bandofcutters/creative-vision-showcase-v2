import { motion } from "framer-motion";
import { Film, Edit, Award, Music } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-dark text-white">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-gray-300 text-lg text-center"
        >
          <p>
            Award-winning picture editor with over two decades of expertise in crafting compelling narratives for unscripted television and documentaries. Recognized by the Canadian Cinema Editors with multiple awards, including honors for work on flagship productions like The Amazing Race Canada and Top Chef Canada. Demonstrated mastery in shaping engaging stories across diverse formats, from high-stakes competition shows to intimate documentaries. Known for bringing a unique creative vision while maintaining authenticity in storytelling, with a proven track record of success in fast-paced, deadline-driven environments. Skilled at managing complex narratives and collaborating effectively with directors, producers, and creative teams to deliver outstanding content that resonates with audiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
              icon: Award,
              title: "Quality",
              description: "Delivering broadcast-ready content that engages and entertains"
            },
            {
              icon: Music,
              title: "Music Design",
              description: "Skilled at selecting and editing music to enhance emotional impact, create atmosphere, and elevate storytelling through thoughtful audio choices"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-dark-lighter"
            >
              <div className="inline-block p-4 rounded-full bg-accent/10 mb-4">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};