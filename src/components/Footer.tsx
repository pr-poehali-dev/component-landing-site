import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Cpu" size={28} className="text-purple-400" />
              <span className="text-2xl font-bold">ChipStore</span>
            </div>
            <p className="text-gray-400 mb-4">
              Надежный поставщик электронных компонентов для профессионалов и
              энтузиастов.
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" size={20} className="text-purple-400" />
              <span>+7 (495) 123-45-67</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Микроконтроллеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Процессоры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Память
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Датчики
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span className="text-sm">Москва, ул. Электронная, 25</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span className="text-sm">info@chipstore.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span className="text-sm">Пн-Пт: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 ChipStore. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
