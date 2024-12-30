import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const shows = [
  {
    id: 1,
    title: "The Amazing Race Canada",
    description: "Teams race across Canada, completing challenges and navigating through various locations while competing for a grand prize. This high-stakes competition tests contestants' physical and mental abilities as they travel through urban centers and remote locations.",
    image: "/lovable-uploads/1121b8e0-e73c-4072-832d-25d77a4e7260.png",
    trailerUrl: "#"
  },
  {
    id: 2,
    title: "Top Chef Canada",
    description: "Professional chefs compete in culinary challenges, showcasing their skills and creativity while being judged by renowned culinary experts. Each episode brings new challenges and eliminations until one chef is crowned the winner.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
    trailerUrl: "#"
  },
  {
    id: 3,
    title: "Big Brother Canada",
    description: "Contestants live together in a custom-built house, isolated from the outside world while competing in challenges and strategizing to avoid elimination. Weekly evictions and dramatic twists keep viewers on the edge of their seats.",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80",
    trailerUrl: "#"
  }
];

const CompetitionReality = () => {
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

        <h1 className="text-4xl font-bold mb-12">Competition Reality TV</h1>
        
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

export default CompetitionReality;