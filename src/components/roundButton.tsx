import React from 'react'

interface RoundButtonInterface {
  title: string;
  onClick: any;
}

export const RoundButton:React.FC<RoundButtonInterface> = ({title, onClick}) => {
    return (
      <div onClick={() => onClick()} className="flex justify-center items-center">
        <button className="bg-mainYellow text-mainBlue w-3/4 rounded-3xl font-semibold py-3 px-4 rounded-full font-sf-pro-rounded text-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          {title}
        </button>
      </div>
    );
  }
