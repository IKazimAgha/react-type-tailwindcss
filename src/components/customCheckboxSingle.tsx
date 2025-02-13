import React from "react";

interface CustomCheckboxInterface{
    title: string;
    checked?: boolean;
}

const CustomCheckboxSingle: React.FC<CustomCheckboxInterface> = ({title, checked}) => {
    return(
        <div className="flex flex-row mt-2 ml-5 justify-start items-center">
            <div className="h-5 w-5 flex rounded-full border-2 border-mainYellow justify-center items-center">
                <div className="h-3 w-3 rounded-full bg-mainYellow" />
            </div>
            <h5 className="text-mainBlue tracking-[2%] ml-5 font-sf-pro-rounded text-s leading-[16px]">{title}</h5>
        </div>
    )
}

export default CustomCheckboxSingle;