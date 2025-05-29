import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Электронные компоненты
              <span className="text-purple-400"> нового поколения</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Микросхемы, процессоры, чипы и другие компоненты от ведущих
              производителей. Быстрая доставка и гарантия качества.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Icon name="Zap" size={20} />
                Посмотреть каталог
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                <Icon name="Phone" size={20} />
                Получить консультацию
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white/20 rounded-lg p-4 flex items-center justify-center"
                  >
                    <Icon name="Cpu" size={24} className="text-white" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm animate-pulse">
              🔥 ХИТ ПРОДАЖ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
