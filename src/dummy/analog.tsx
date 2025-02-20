import React from "react";

const CustomCalendar: React.FC = () => {
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const getPosition = (index: number) => {
    const angle = (index * 30) - 90; // 30 degrees per month, starting from 12 o'clock
    const x = Math.cos((angle * Math.PI) / 180) * 80; // radius for months (26 is a value within the circle)
    const y = Math.sin((angle * Math.PI) / 180) * 80;
    return { x, y };
  };
  
  const getPositionAnalog = (index: number) => {
    const angle = (index * 30) - 90; // 30 degrees per month, starting from 12 o'clock
    const x = Math.cos((angle * Math.PI) / 180) * 110; // radius for months (26 is a value within the circle)
    const y = Math.sin((angle * Math.PI) / 180) * 110;
    return { x, y };
  };
  // Function to draw the hour markers
  const renderHourMarkers = () => {
    const markers = [];
    for (let i = 0; i < 12; i++) {
      const { x, y } = getPositionAnalog(i);
      markers.push(
        <div
          key={i}
          className="absolute bg-black"
          style={{
            width: "2px",
            height: "12px", // Length of hour markers
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: "translate(-50%, -50%) rotate(" + (i * 30) + "deg)",
            transformOrigin: "0% 100%",
          }}
        />
      );
    }
    return markers;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[64rem] h-96 border-2 border-black rounded-full bg-white shadow-lg">
        {/* Hour Markers */}
        {renderHourMarkers()}

        {/* Month Names Around the Watch Face */}
        {months.map((month, index) => {
          const { x, y } = getPosition(index);
          return (
            <div
              key={month}
              className="absolute text-xs font-semibold text-black"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)", // Center the text
              }}
            >
              {month}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCalendar;
