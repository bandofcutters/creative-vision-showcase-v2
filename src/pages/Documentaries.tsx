import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PortfolioNav } from "@/components/PortfolioNav";

const shows = [
  {
    id: 1,
    title: "Mr. Dressup: The Magic of Make Believe",
    description: "Feature Documentary that premiered at TIFF 2023, winning the People's Choice Documentary Award. A heartwarming exploration of the beloved Canadian children's television host.",
    image: "/lovable-uploads/08d58990-f33e-403c-a06a-58aea28af892.png",
    trailerUrl: "#"
  },
  {
    id: 2,
    title: "The Passionate Eye - Harder Better Faster Stronger",
    description: "A compelling documentary episode exploring contemporary themes and societal challenges.",
    image: "/lovable-uploads/08d58990-f33e-403c-a06a-58aea28af892.png",
    trailerUrl: "#"
  },
  {
    id: 3,
    title: "50K First Dates",
    description: "A touching 2-part documentary series following a couple's journey through real-life memory loss and their unexpected rise to TikTok fame, exploring themes of love, resilience, and the power of social media connection.",
    image: "/lovable-uploads/08d58990-f33e-403c-a06a-58aea28af892.png",
    trailerUrl: "#"
  },
  {
    id: 4,
    title: "At the Table with...",
    description: "A 13-episode documentary series exploring culinary stories and cultural connections.",
    image: "/lovable-uploads/08d58990-f33e-403c-a06a-58aea28af892.png",
    trailerUrl: "#"
  }
];

const Documentaries = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            className="text-white hover:bg-accent/20 hover:text-white"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2" /> Back to Home
          </Button>
          <PortfolioNav />
        </div>
        
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
              <div className="flex items-center justify-center p-4">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-[300px] h-[300px] object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Documentaries;