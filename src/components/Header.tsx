import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Icon name="Cpu" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-gray-900">
                ChipStore
              </span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#catalog"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Каталог
              </a>
              <a
                href="#order"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Заказать
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                О нас
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex relative">
              <Input
                placeholder="Поиск компонентов..."
                className="pl-10 w-64"
              />
              <Icon
                name="Search"
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
            >
              <Icon name="ShoppingCart" size={16} />
              Корзина
            </Button>
            <Button size="sm">Связаться</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
