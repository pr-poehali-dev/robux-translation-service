import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="inline-block bg-white/20 rounded-full px-6 py-2 mb-6">
            <span className="text-white text-sm font-medium">
              Работаем с 2015 года. Более 1000 положительных отзывов!
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Перевод Робуксов
            <br />
            <span className="text-blue-200">FUNPAY</span>
          </h1>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Надежный сервис для мгновенного перевода робуксов на ваш аккаунт
            Roblox
          </p>
        </div>

        <Link to="/auth">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Icon name="Zap" className="mr-2" size={20} />
            Получить от аккаунта Havertz валюту Robux
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
