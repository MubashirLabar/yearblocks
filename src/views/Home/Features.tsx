import React from "react";

function Features() {
  return (
    <div className="w-full flex justify-center bg-gray-50">
      <div className="w-full margins max-w-8xl py-12 sm:py-16 lg:py-24 flex flex-col gap-y-10 sm:gap-y-0">
        <div className="flex flex-col-reverse sm:grid grid-cols-2 items-center gap-y-3 sm:gap-x-12">
          <div
            className="bgImage min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]"
            style={{ backgroundImage: `url(/images/create.webp)` }}
          />
          <div className="w-full flex flex-col items-center">
            <div className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-[40px] sm:leading-[50px] lg:leading-[80px] text-service-900 uppercase">
              CREATE
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:grid grid-cols-2 items-center gap-y-3 sm:gap-x-12">
          <div className="w-full flex flex-col items-center">
            <div className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-[40px] sm:leading-[50px] lg:leading-[80px] text-service-900 uppercase">
              DISTRIBUTE
            </div>
          </div>
          <div
            className="bgImage min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]"
            style={{ backgroundImage: `url(/images/distribute.jpeg)` }}
          />
        </div>
        <div className="flex flex-col-reverse sm:grid grid-cols-2 items-center gap-y-3 sm:gap-x-12">
          <div
            className="bgImage min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]"
            style={{ backgroundImage: `url(/images/sign.webp)` }}
          />
          <div className="w-full flex flex-col items-center">
            <div className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-[40px] sm:leading-[50px] lg:leading-[80px] text-service-900 uppercase">
              SIGN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
