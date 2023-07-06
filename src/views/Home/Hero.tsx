import Link from "next/link";

function Hero() {
  return (
    <div className="w-full h-[680px] relative">
      <div className="w-full h-10 bg-service-900 flex items-center justify-center">
        <Link href="/" className="font-[500] text-base text-white underline">
          Order Your Yearbook Today!
        </Link>
      </div>
      <div
        className="bg-image flex flex-col justify-center px-12"
        style={{ backgroundImage: `url(/images/homeHero.jpeg)` }}
      >
        <div className="w-[42%] bg-white p-12">
          <div className="font-[600] text-[44px] leading-[54px] tracking-[-1px] text-service-700 mb-4">
            LAST CHANCE TO BUY YOUR YEARBLOCK!
          </div>
          <div className="text-base text-service-700 mb-6">
            {` Supplies are running low, so get your yearbook ASAP! Once they're
            gone, they're gone.`}
          </div>
          <button className="bg-service-900 rounded-full text-white uppercase py-2.5 px-4 text-sm font-[600] tracking-[-0.2px]">
            Get Your YearBlock
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
