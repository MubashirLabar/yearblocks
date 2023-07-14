import React from "react";

interface YearBlockCardTypes {
  name: string;
  description: string;
  image: string;
}

function YearBlockCard({ data }: { data: YearBlockCardTypes }) {
  return (
    <div className="w-full flex flex-col">
      <div
        className="bgImage !h-[250px]  md:!h-[270px] mb-3 lg:mb-5"
        style={{ backgroundImage: `url(${data.image})` }}
      />
      <div className="font-bold text-lg lg:text-[22px] leading-7 lg:leading-8 mb-1 lg:mb-3 text-center">
        {data.name}
      </div>
      <div className="text-sm lg:text-base text-gray-600 ellipsis-3 text-center">
        {data.description}
      </div>
    </div>
  );
}

export default YearBlockCard;
