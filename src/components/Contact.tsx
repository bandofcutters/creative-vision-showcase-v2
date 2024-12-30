import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-dark-lighter text-white">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get in <span className="text-accent">Touch</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {[
            {
              icon: Mail,
              title: "Email",
              info: "ryan@bandofcutters.com"
            },
            {
              icon: Phone,
              title: "Phone",
              info: "647.273.3154"
            },
            {
              icon: MapPin,
              title: "Location",
              info: "Toronto, Ontario / Remote"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="inline-block p-4 rounded-full bg-accent/10 mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.info}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8"
        >
          <a 
            href="https://www.linkedin.com/in/ryanmonteitheditor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-accent" />
          </a>
          <a 
            href="https://x.com/ryanmonteith_?s=11" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
          >
            <Twitter className="w-6 h-6 text-accent" />
          </a>
          <a 
            href="https://www.facebook.com/share/1ApaPuD6XS/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
          >
            <Facebook className="w-6 h-6 text-accent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};