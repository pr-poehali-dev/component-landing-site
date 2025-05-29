import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const OrderForm = () => {
  return (
    <section id="order" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Быстрый заказ
          </h2>
          <p className="text-xl text-gray-600">
            Оставьте заявку и мы свяжемся с вами в течение 15 минут
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Zap" size={24} />
              Форма заказа
            </CardTitle>
            <CardDescription className="text-purple-100">
              Заполните форму для получения персонального предложения
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Компания
                  </label>
                  <Input placeholder="Название компании" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Нужные компоненты *
                </label>
                <Input placeholder="Например: STM32F407, ESP32, резисторы 10кОм..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Комментарий
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={4}
                  placeholder="Укажите технические требования, количество, сроки..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" size={20} />
                  Позвонить сейчас
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Icon name="Clock" size={16} />
                  <span className="text-sm">Ответ за 15 мин</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Icon name="Shield" size={16} />
                  <span className="text-sm">Гарантия качества</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Icon name="Truck" size={16} />
                  <span className="text-sm">Быстрая доставка</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;
