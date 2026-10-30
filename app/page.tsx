import PromotionCard from "@/components/ui/PromotionCard/page";
import ServerStatusComponent from "@/components/ui/ServerStatus/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-300 gap-4">
      {/* Section da promoção */}
      <PromotionCard cupom=""/>
      <ServerStatusComponent />
    </div>
  );
}
