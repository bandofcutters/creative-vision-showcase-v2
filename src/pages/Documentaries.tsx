import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PortfolioNav } from "@/components/PortfolioNav";
import { VideoModal } from "@/components/VideoModal";

const shows = [
  {
    id: 1,
    title: "Mr. Dressup: The Magic of Make Believe",
    description: "Feature Documentary that premiered at TIFF 2023, winning the People's Choice Documentary Award. A heartwarming exploration of the beloved Canadian children's television host.",
    image: "/lovable-uploads/08d58990-f33e-403c-a06a-58aea28af892.png",
    trailerUrl: "https://www.youtube.com/embed/PnXXEh-S_lQ" // Replace with actual video ID
  },
  {
    id: 2,
    title: "The Passionate Eye - Harder Better Faster Stronger",
    description: "A compelling documentary episode exploring contemporary themes and societal challenges.",
    image: "/lovable-uploads/5095d9b5-387f-4a6b-b88e-89e1342b505b.png",
    trailerUrl: "https://www.youtube.com/embed/nJzHZFv-Ezg" // Replace with actual video ID
  },
  {
    id: 3,
    title: "50K First Dates",
    description: "A touching 2-part documentary series following a couple's journey through real-life memory loss and their unexpected rise to TikTok fame, exploring themes of love, resilience, and the power of social media connection.",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945",
    trailerUrl: "#"
  },
  {
    id: 4,
    title: "At the Table with...",
    description: "A 13-episode documentary series exploring culinary stories and cultural connections.",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945",
    trailerUrl: "#"
  }
];

const Documentaries = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

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

        <h1 className="text-4xl font-bold mb-12">Documentaries</h1>
        
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
                  onClick={() => setSelectedVideo({ url: show.trailerUrl, title: show.title })}
                >
                  <Play className="mr-2" /> Watch
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

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </div>
  );
};

export default Documentaries;
