import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqsList = [
  {
    title: "Can anyone see my personal YearBlock?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Can I sign anyone’s YearBlock?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "How can I manage my DigiSigs?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "How can I manage my school’s YearBlock?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

function FAQ() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full margins max-w-[850px] py-12 sm:py-16 lg:py-24">
        <div className="text-3xl sm:text-4xl lg:text-6xl leading-[40px] sm:leading-[50px] lg:leading-[80px] font-bold text-service-900 uppercase text-center mb-8 sm:mb-12 lg:mb-20">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <div className="w-full">
          {FaqsList.map((item, index) => (
            <FAQItem data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;

const FAQItem = ({ data }: { data: any }) => {
  const [expend, setExpend] = useState(false);
  return (
    <div className="w-full flex flex-col border-solid border-t-[1px] border-gray-900/10 py-5 sm:py-8">
      <label
        className="w-full flex items-center cursor-pointer gap-x-6"
        onClick={() => setExpend(!expend)}
      >
        <div className="flex-1 font-semibold text-base sm:text-lg text-service-900">
          {data.title}
        </div>
        <div className="text-xl sm:text-2xl text-service-900">
          {expend ? <FiMinus /> : <FiPlus />}
        </div>
      </label>
      {expend && (
        <div className="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-[28px] font-normal text-service-700">
          {data.text}
        </div>
      )}
    </div>
  );
};
