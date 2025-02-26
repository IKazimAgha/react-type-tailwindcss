import React, { useEffect, useRef, useState } from "react";

const MonthlyScroll: React.FC = () => {
  // Array of months
  const months: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Array of years (2018-2025)
  const years: number[] = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  // Get current month and year index
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(new Date().getMonth());
  const [currentYearIndex, setCurrentYearIndex] = useState<number>(years.indexOf(new Date().getFullYear()));

  // References to the scroll containers
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const yearScrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the selected month and center it
  const scrollToMonth = (index: number) => {
    setCurrentMonthIndex(index);
    if (scrollContainerRef.current) {
      const currentMonthElement = scrollContainerRef.current.children[index] as HTMLElement;
      const offset = currentMonthElement.offsetLeft - (scrollContainerRef.current.offsetWidth / 2) + (currentMonthElement.offsetWidth / 2);
      scrollContainerRef.current.scrollLeft = offset;
    }
  };

  // Function to select a year and scroll it into view
  const selectYear = (index: number) => {
    setCurrentYearIndex(index);
    if (yearScrollContainerRef.current) {
      const currentYearElement = yearScrollContainerRef.current.children[index] as HTMLElement;
      const offset = currentYearElement.offsetLeft - (yearScrollContainerRef.current.offsetWidth / 2) + (currentYearElement.offsetWidth / 2);
      yearScrollContainerRef.current.scrollLeft = offset;
    }
  };

  // Scroll to the current month on initial render
  useEffect(() => {
    if (scrollContainerRef.current) {
      const currentMonthElement = scrollContainerRef.current.children[currentMonthIndex] as HTMLElement;
      const offset = currentMonthElement.offsetLeft - (scrollContainerRef.current.offsetWidth / 2) + (currentMonthElement.offsetWidth / 2);
      scrollContainerRef.current.scrollLeft = offset;
    }
  }, [currentMonthIndex]);

  // Scroll to the current year on initial render
  useEffect(() => {
    if (yearScrollContainerRef.current) {
      const currentYearElement = yearScrollContainerRef.current.children[currentYearIndex] as HTMLElement;
      const offset = currentYearElement.offsetLeft - (yearScrollContainerRef.current.offsetWidth / 2) + (currentYearElement.offsetWidth / 2);
      yearScrollContainerRef.current.scrollLeft = offset;
    }
  }, [currentYearIndex]);

  return (
    <div className="relative flex flex-col items-center w-full">
      {/* Months - Upper Curve */}
      <div className="relative h-[7rem] w-full overflow-hidden rounded-tl-[50%] rounded-tr-[50%] bg-aquaBlueLight">
        <div ref={scrollContainerRef} className="flex overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 h-[7rem]">
          {months.map((month, index) => (
            <div
              key={index}
              onClick={() => scrollToMonth(index)}
              className={`flex-shrink-0 w-[calc(100%/5)] sm:w-[calc(100%/3)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)] xl:w-[calc(100%/5)] flex justify-center text-center px-4 py-2 cursor-pointer 
                transition-all duration-300
                ${
                  index === currentMonthIndex
                    ? "translate-y-[-5px] text-[#003B5B] font-bold text-[16px]"
                    : index === currentMonthIndex - 1 || index === currentMonthIndex + 1
                    ? "translate-y-[5px] text-[#00557A] font-medium text-[14px]"
                    : "translate-y-[30px] text-[#809DAD] font-light text-[12px]"
                }
              `}
            >
              {month}
            </div>
          ))}
        </div>
      </div>

      {/* Year - Lower Curve */}
      <div className="relative h-[5rem] w-full overflow-hidden rounded-tl-[50%] rounded-tr-[50%] mt-[-50px] bg-white flex justify-center items-end bg-mainGray">
        <div ref={yearScrollContainerRef} className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-3">
          {years.map((year, index) => (
            <div
              key={year}
              onClick={() => selectYear(index)}
              className={`cursor-pointer px-6 py-2 text-center transition-all duration-300 rounded-full flex-shrink-0 w-[calc(100%/3)]
                ${
                  index === currentYearIndex
                    ? "translate-y-[-10px] text-[#003B5B] font-bold text-[16px]"
                    : index === currentYearIndex - 1 || index === currentYearIndex + 1
                    ? "translate-y-[-0px] text-[#00557A] font-medium text-[14px]"
                    : "translate-y-[25px] text-[#809DAD] font-light text-[12px]"
                }
              `}
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
