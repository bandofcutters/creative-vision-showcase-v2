import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-dark">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Get in <span className="text-accent">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <Mail className="text-accent" />
            <div>
              <h3 className="text-white font-semibold">Email</h3>
              <a href="mailto:ryan@bandofcutters.com" className="text-gray-300 hover:text-accent">
                ryan@bandofcutters.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <Phone className="text-accent" />
            <div>
              <h3 className="text-white font-semibold">Phone</h3>
              <a href="tel:647.273.3154" className="text-gray-300 hover:text-accent">
                647.273.3154
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <MapPin className="text-accent" />
            <div>
              <h3 className="text-white font-semibold">Location</h3>
              <p className="text-gray-300">Toronto, Ontario / Remote</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4"
        >
          <a
            href="https://www.linkedin.com/in/ryanmonteitheditor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/ryanmonteith_?s=11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-white transition-colors"
          >
            <Twitter size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};