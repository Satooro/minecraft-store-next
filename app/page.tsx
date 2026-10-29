import PromotionCard from "@/components/ui/PromotionCard/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-300">
      {/* Section da promoção */}
      <PromotionCard cupom=""/>
    </div>
  );
}
