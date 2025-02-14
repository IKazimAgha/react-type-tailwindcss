import React from "react";

interface InputBoxTitleInterface {
    title: string;
    className: string;
}

export const InputBoxTitle: React.FC<InputBoxTitleInterface> = ({className, title}) => {
    return(
        <div className="sm:max-w-sm sm:mx-auto">
            <h5 className="text-secBlue font-sf-pro-rounded font-normal ml-5 mb-1">{title}</h5>
            <input type="text" className={`border-2 w-full bg-gray-100 border-secBlue p-2 py-4 pl-5 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} placeholder="Enter text" />
        </div>
    )
}
