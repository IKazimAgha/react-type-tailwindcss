import React, { useEffect, useRef, useState } from "react";

const MonthlyScroll: React.FC = () => {
  const months: string[] = [ 
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const years: number[] = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(new Date().getMonth());
  const [currentYearIndex, setCurrentYearIndex] = useState<number>(years.indexOf(new Date().getFullYear()));

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const yearScrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToMonth = (index: number) => {
    setCurrentMonthIndex(index);
    if (scrollContainerRef.current) {
      setTimeout(() => {
        const currentMonthElement = scrollContainerRef.current!.children[index] as HTMLElement;
        const offset = currentMonthElement.offsetLeft - (scrollContainerRef.current!.offsetWidth / 2) + (currentMonthElement.offsetWidth / 2);
        scrollContainerRef.current!.scrollLeft = offset;
      }, 100);
    }
  };

  const selectYear = (index: number) => {
    setCurrentYearIndex(index);
    if (yearScrollContainerRef.current) {
      setTimeout(() => {
        const currentYearElement = yearScrollContainerRef.current!.children[index] as HTMLElement;
        const offset = currentYearElement.offsetLeft - (yearScrollContainerRef.current!.offsetWidth / 2) + (currentYearElement.offsetWidth / 2);
        yearScrollContainerRef.current!.scrollLeft = offset;
      }, 100);
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative h-[4rem] w-full overflow-hidden bg-[#E4F5FF]">
        <div ref={scrollContainerRef} className="flex overflow-x-auto w-full h-[4rem] items-center no-scrollbar">
          {months.map((month, index) => (
            <div
              key={index}
              onClick={() => scrollToMonth(index)}
              className={`flex-shrink-0 w-[calc(100%/5)] sm:w-[calc(100%/3)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)] xl:w-[calc(100%/5)] flex justify-center text-center px-4 py-2 cursor-pointer transition-all duration-300 
                ${
                  index === currentMonthIndex
                    ? "text-[#003B5B] font-bold text-[16px]"
                    : index === (currentMonthIndex - 1 + months.length) % months.length || index === (currentMonthIndex + 1) % months.length
                    ? "text-[#00557A] font-medium text-[14px]"
                    : "text-[#809DAD] font-light text-[12px]"
                }`
              }
            >
              {month}
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[4rem] w-full overflow-hidden flex justify-center items-center bg-[#F4FAFD]">
        <div ref={yearScrollContainerRef} className="flex overflow-x-auto items-center no-scrollbar bg-[#F4FAFD] px-4 py-2 rounded-lg">
          {years.map((year, index) => (
            <div
              key={year}
              onClick={() => selectYear(index)}
              className={`cursor-pointer px-6 py-2 text-center transition-all duration-300
                ${
                  index === currentYearIndex
                    ? "text-[#003B5B] font-bold text-[16px]"
                    : "text-[#809DAD] font-light text-[12px]"
                }`
              }
            >
              {year}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyScroll;
