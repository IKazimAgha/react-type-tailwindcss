import React from 'react';

const CustomCalendar: React.FC = () => {
  // Array of months
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 26 }, (_, index) => (2025 - index).toString());
  return (
    <div>
        <div className="overflow-x-auto whitespace-nowrap px-4 bg-aquaBlueLight mt-20 h-20">
            {/* Container for hour markers and months */}
            <div>
                <div className="inline-flex space-x-4">
                {months.map((month, index) => (
                    <div
                    key={index}
                    className="flex flex-col items-center bg-aquaBlueLight"
                    >
                    <div>|</div>
                    <div
                        className="px-4 py-3 rounded-md text-center text-lg cursor-pointer transition-all duration-300"
                    >
                        {month}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className="overflow-x-auto whitespace-nowrap px-4 bg-aquaBlueLight mt-20 h-20">
            {/* Container for hour markers and months */}
            <div>
                <div className="inline-flex space-x-4">
                {years.map((month, index) => (
                    <div
                    key={index}
                    className="flex flex-col items-center bg-aquaBlueLight"
                    >
                    <div>|</div>
                    <div
                        className="px-4 py-3 rounded-md text-center text-lg cursor-pointer transition-all duration-300"
                    >
                        {month}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default CustomCalendar;
