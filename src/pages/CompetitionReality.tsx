import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PortfolioNav } from "@/components/PortfolioNav";

const shows = [
  {
    id: 1,
    title: "The Amazing Race Canada",
    description: "Lead Editor for 12 episodes across 7 seasons, and Senior/Supervising Editor for 11 episodes in Season 9. A high-stakes competition where teams race across Canada, completing challenges and navigating through various locations.",
    image: "/lovable-uploads/1121b8e0-e73c-4072-832d-25d77a4e7260.png",
    trailerUrl: "#"
  },
  {
    id: 2,
    title: "Best in Miniature",
    description: "Supervising Editor / Story Editor for Season 2 (8 episodes) and Lead Editor for Season 1 (2 episodes). A unique competition showcasing incredible miniature creations.",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945",
    trailerUrl: "#"
  },
  {
    id: 3,
    title: "Drink Masters",
    description: "Picture Editor for Episode 3. An innovative competition series featuring skilled mixologists creating extraordinary cocktails.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    trailerUrl: "#"
  },
  {
    id: 4,
    title: "Top Chef Canada",
    description: "Picture Editor for 2 episodes of Season 6. A culinary competition showcasing Canada's top chefs competing in challenging cooking battles.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    trailerUrl: "#"
  },
  {
    id: 5,
    title: "MasterChef Canada",
    description: "Lead Editor for 3 episodes across Seasons 1 & 2. Amateur chefs compete to prove their culinary skills and win the prestigious title.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    trailerUrl: "#"
  },
  {
    id: 6,
    title: "All Round Champion",
    description: "Picture Editor for 5 episodes. A competition reality series showcasing young athletes competing across various sports disciplines.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    trailerUrl: "#"
  },
  {
    id: 7,
    title: "Race Against the Tide",
    description: "Picture Editor for 2 episodes of Season 1. A unique competition where contestants race against time and tides.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    trailerUrl: "#"
  }
];

const CompetitionReality = () => {
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
        <Button
          variant="ghost"
          className="text-white mb-8 hover:bg-accent/20 hover:text-white"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Button>

        <h1 className="text-4xl font-bold mb-12">Competition Reality TV</h1>
        
        <PortfolioNav />
        
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

export default CompetitionReality;
