import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const shows = [
  {
    id: 1,
    title: "The Underground Network",
    description: "An investigative series that delves deep into the hidden world of organized crime networks, exploring their operations, impact on society, and the efforts to dismantle them.",
    image: "/lovable-uploads/a1ab5db7-63b9-40d3-854e-600555069217.png",
    trailerUrl: "#"
  },
  {
    id: 2,
    title: "Cold Case Files",
    description: "A gripping documentary series that reopens unsolved criminal cases, following investigators as they use modern technology and fresh perspectives to shed new light on decades-old mysteries.",
    image: "/images/cold-case.jpg",
    trailerUrl: "#"
  },
  {
    id: 3,
    title: "Digital Forensics",
    description: "Follow cybercrime investigators as they navigate the dark web and digital underworld to track down modern criminals who leave electronic footprints.",
    image: "/images/digital-forensics.jpg",
    trailerUrl: "#"
  }
];

const TrueCrime = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        <Button
          variant="ghost"
          className="text-white mb-8 hover:text-accent"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Button>

        <h1 className="text-4xl font-bold mb-12">True Crime</h1>
        
        <div className="space-y-12">
          {shows.map((show) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-dark-lighter rounded-lg overflow-hidden"
            >
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{show.title}</h2>
                  <p className="text-gray-300 mb-6">{show.description}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-fit border-accent text-accent hover:bg-accent hover:text-dark"
                  asChild
                >
                  <a href={show.trailerUrl} target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2" /> Watch Trailer
                  </a>
                </Button>
              </div>
              <div className="aspect-video md:aspect-auto">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TrueCrime;