import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "STM32F407VGT6",
    category: "Микроконтроллеры",
    price: "1,200₽",
    stock: "В наличии",
    description: "32-битный ARM Cortex-M4 микроконтроллер",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    specs: ["168 MHz", "1MB Flash", "192KB RAM"],
  },
  {
    id: 2,
    name: "ESP32-WROOM-32",
    category: "Wi-Fi модули",
    price: "850₽",
    stock: "В наличии",
    description: "Wi-Fi + Bluetooth модуль с двухъядерным процессором",
    image: "https://images.unsplash.com/photo-1573888516863-3d83b20abe87?w=400",
    specs: ["240 MHz", "Wi-Fi", "Bluetooth"],
  },
  {
    id: 3,
    name: "ATMEGA328P-PU",
    category: "Микроконтроллеры",
    price: "320₽",
    stock: "Мало в наличии",
    description: "8-битный микроконтроллер для Arduino",
    image: "https://images.unsplash.com/photo-1567594311919-0c3e25b6a5e0?w=400",
    specs: ["20 MHz", "32KB Flash", "DIP-28"],
  },
  {
    id: 4,
    name: "LM2596S-ADJ",
    category: "Стабилизаторы",
    price: "180₽",
    stock: "В наличии",
    description: "Понижающий DC-DC преобразователь",
    image: "https://images.unsplash.com/photo-1574031971403-6ee74b299c93?w=400",
    specs: ["3A", "1.23-37V", "150 kHz"],
  },
  {
    id: 5,
    name: "74HC595N",
    category: "Логические ИС",
    price: "45₽",
    stock: "В наличии",
    description: "8-битный сдвиговый регистр",
    image: "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=400",
    specs: ["16-DIP", "74HC", "Serial-to-Parallel"],
  },
  {
    id: 6,
    name: "NE555P",
    category: "Таймеры",
    price: "35₽",
    stock: "В наличии",
    description: "Универсальный таймер 555",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    specs: ["8-DIP", "Astable", "Monostable"],
  },
];

const ProductCatalog = () => {
  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярные компоненты
          </h2>
          <p className="text-xl text-gray-600">
            Самые востребованные электронные компоненты в наличии
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-all duration-300 hover-scale"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge
                  variant={
                    product.stock === "В наличии" ? "default" : "secondary"
                  }
                  className="absolute top-2 right-2"
                >
                  {product.stock}
                </Badge>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Icon name="ShoppingCart" size={16} />В корзину
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            <Icon name="Grid" size={20} />
            Посмотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
