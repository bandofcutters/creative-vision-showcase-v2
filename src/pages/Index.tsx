import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default Index;