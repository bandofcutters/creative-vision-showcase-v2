import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const PortfolioNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/documentaries", label: "Documentaries" },
    { path: "/competition-reality", label: "Competition Reality" },
    { path: "/true-crime", label: "True Crime" }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 px-4 mb-8">
      {navItems.map((item) => (
        <Button
          key={item.path}
          variant="outline"
          className={`border-accent text-accent hover:bg-accent hover:text-dark transition-colors whitespace-nowrap ${
            location.pathname === item.path ? "bg-accent/20" : ""
          }`}
          onClick={() => navigate(item.path)}
          disabled={location.pathname === item.path}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};