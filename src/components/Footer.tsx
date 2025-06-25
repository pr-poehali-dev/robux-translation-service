import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white/20 rounded-lg p-2">
                <span className="text-white font-bold text-lg">FUNPAY</span>
              </div>
            </div>
            <p className="text-blue-100">
              Надежный сервис перевода робуксов с 2015 года
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-blue-100">
                <Icon name="Mail" size={16} />
                <span>support@funpay-robux.com</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <Icon name="MessageCircle" size={16} />
                <span>Telegram: @funpay_support</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Информация</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Правила сервиса
              </a>
              <a
                href="#"
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2024 FUNPAY. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
