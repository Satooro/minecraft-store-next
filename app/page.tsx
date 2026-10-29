import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-300">
      {/* Section da promoção */}
      <section
        id="promo"
        className="flex mx-4 px-5 min-h-full h-13 bg-black items-center justify-evenly gap-4 rounded-md"
      >
        <div className="bg-gray-700 flex max-h-full h-8 items-center w-45 justify-center rounded-md border-gray-400 border">
          <span className="flex text-sm">PROMOÇÃO</span>
        </div>
        <p className="text-sm text-white">
          Use o cupom <span className="font-bold text-amber-400">PRIMEIRACOMPRA</span> na sua primeira compra na loja e garanta 20% OFF
        </p>
      </section>
    </div>
  );
}
