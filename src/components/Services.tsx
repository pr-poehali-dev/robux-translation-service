import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "User",
      title: "Покупка аккаунтов Roblox",
      description: "Готовые аккаунты с различным уровнем и достижениями",
    },
    {
      icon: "Gamepad2",
      title: "Покупка игр",
      description: "Широкий выбор игр и контента для Roblox",
    },
    {
      icon: "Zap",
      title: "Мгновенный перевод робуксов",
      description: "Быстрое зачисление валюты на ваш игровой аккаунт",
      featured: true,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Наши услуги
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                service.featured
                  ? "bg-white/20 border-white/40 shadow-2xl"
                  : "bg-white/10 border-white/20 hover:bg-white/15"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  service.featured ? "bg-white/30" : "bg-white/20"
                }`}
              >
                <Icon name={service.icon} size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-blue-100">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
