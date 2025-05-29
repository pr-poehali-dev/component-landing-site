import {
  Cpu,
  Search,
  ShoppingCart,
  Phone,
  Zap,
  Heart,
  Grid,
  Send,
  Clock,
  Shield,
  Truck,
  MapPin,
  Mail,
} from "lucide-react";

const icons = {
  Cpu,
  Search,
  ShoppingCart,
  Phone,
  Zap,
  Heart,
  Grid,
  Send,
  Clock,
  Shield,
  Truck,
  MapPin,
  Mail,
};

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  className?: string;
  fallback?: keyof typeof icons;
}

const Icon = ({
  name,
  size = 16,
  className = "",
  fallback = "Cpu",
}: IconProps) => {
  const IconComponent = icons[name] || icons[fallback];
  return <IconComponent size={size} className={className} />;
};

export default Icon;
