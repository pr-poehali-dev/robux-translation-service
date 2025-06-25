import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-white/20 rounded-lg p-2">
            <span className="text-white font-bold text-xl">FUNPAY</span>
          </div>
        </Link>

        <nav className="flex items-center space-x-4">
          <Link to="/auth">
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Авторизация
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
