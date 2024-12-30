import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Documentaries = () => {
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

        <h1 className="text-4xl font-bold mb-8">Documentaries</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Documentary list will be added here in the next prompt */}
          <div className="text-white/60">
            Documentary list coming soon...
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Documentaries;