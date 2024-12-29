import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-dark-lighter text-white">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get in <span className="text-accent">Touch</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Mail,
              title: "Email",
              info: "hello@example.com"
            },
            {
              icon: Phone,
              title: "Phone",
              info: "+1 234 567 890"
            },
            {
              icon: MapPin,
              title: "Location",
              info: "New York, USA"
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
      </div>
    </section>
  );
};