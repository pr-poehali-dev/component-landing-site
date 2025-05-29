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
    name: "XC7VX690T-2FFG1761I",
    category: "FPGA Xilinx",
    price: "285,000₽",
    stock: "Под заказ",
    description: "Virtex-7 FPGA с 693K логическими ячейками",
    image:
      "https://www.xilinx.com/content/dam/xilinx/imgs/products/virtex-7-fpga.jpg",
    datasheet: "https://docs.xilinx.com/v/u/en-US/ds183_Virtex_7_Data_Sheet",
    specs: ["693K Logic Cells", "1760-pin BGA", "28nm"],
  },
  {
    id: 2,
    name: "TMS320C6678ACYP",
    category: "DSP Texas Instruments",
    price: "45,500₽",
    stock: "В наличии",
    description: "8-ядерный DSP процессор KeyStone",
    image:
      "https://www.ti.com/content/dam/ticom/images/products/ic/processors/dsp/c6000/tms320c6678-processor.jpg",
    datasheet: "https://www.ti.com/lit/ds/symlink/tms320c6678.pdf",
    specs: ["8x C66x Cores", "1.25 GHz", "324-pin BGA"],
  },
  {
    id: 3,
    name: "AD9680BCPZ-1000",
    category: "АЦП Analog Devices",
    price: "38,200₽",
    stock: "Мало в наличии",
    description: "14-битный АЦП 1 GSPS с JESD204B",
    image:
      "https://www.analog.com/media/en/technical-documentation/product-images/ad9680.jpg",
    datasheet:
      "https://www.analog.com/media/en/technical-documentation/data-sheets/AD9680.pdf",
    specs: ["14-bit", "1 GSPS", "JESD204B"],
  },
  {
    id: 4,
    name: "LMX2594RHAT",
    category: "PLL Texas Instruments",
    price: "12,800₽",
    stock: "В наличии",
    description: "15 ГГц синтезатор частот с низким джиттером",
    image:
      "https://www.ti.com/content/dam/ticom/images/products/ic/clock-timing/lmx2594-pll-synthesizer.jpg",
    datasheet: "https://www.ti.com/lit/ds/symlink/lmx2594.pdf",
    specs: ["15 GHz", "Low Jitter", "48-pin QFN"],
  },
  {
    id: 5,
    name: "BGA3018,115",
    category: "RF Nexperia",
    price: "8,900₽",
    stock: "В наличии",
    description: "SiGe:C МШУ для 5G приложений",
    image: "https://assets.nexperia.com/documents/product-image/BGA3018.jpg",
    datasheet: "https://assets.nexperia.com/documents/data-sheet/BGA3018.pdf",
    specs: ["50 MHz-6 GHz", "22 dB gain", "SOT363"],
  },
  {
    id: 6,
    name: "ADG5412BCPZ",
    category: "Коммутаторы Analog Devices",
    price: "15,400₽",
    stock: "В наличии",
    description: "Прецизионный 4-канальный SPST коммутатор",
    image:
      "https://www.analog.com/media/en/technical-documentation/product-images/adg5412.jpg",
    datasheet:
      "https://www.analog.com/media/en/technical-documentation/data-sheets/ADG5412.pdf",
    specs: ["4-Channel SPST", "±15V", "LFCSP-24"],
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
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={product.datasheet}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="FileText" size={16} />
                    </a>
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
