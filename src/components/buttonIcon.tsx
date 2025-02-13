import React from 'react'

interface ButtonIconProps {
    title: string;
    icon: any;
    customStyle? : string;
    onPress?: () => void;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({title, icon, customStyle,onPress}) => {
    return (
      <div className="flex justify-center items-center mt-4">
        <button 
        onClick={onPress} 
        className={`flex inline-block h-16 bg-mainBlue align-middle text-white font-semibold py-4 w-full px-4 rounded-full justify-center shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${customStyle}`}>
          <img src={icon} className='h-6 w-10' />
          <h3 className={`ml-2 inline-block align-middle ${customStyle}`}>{title}</h3>
        </button>
      </div>
    );
  }
