import React from "react";
import { useLangugageContext } from "../contextAPI/contextAPI";

interface CustomCheckboxInterface{
    title: string;
    checked?: boolean;
    onClick: any
}

const CustomCheckboxSingle: React.FC<CustomCheckboxInterface> = ({title, checked, onClick}) => {

    const {localeLang} = useLangugageContext();

    return(
        <div className={`flex flex-row mt-4 ${localeLang === 'en' ? 'ml-5': 'mr-5'} lg:justify-center justify-start items-center`}>
            <div onClick={onClick} className={`h-5 w-5 flex rounded-full border-2 ${checked ? 'border-mainYellow' : 'border-mainBlue'} justify-center items-center`}>
                <div className={`h-3 w-3 rounded-full border-2 ${checked ? 'border-mainYellow bg-mainYellow' : 'border-none'}`} />
            </div>
            <h5 className={`text-mainBlue tracking-[2%] ${localeLang === 'en' ? 'ml-5' : 'mr-5'} font-sf-pro-rounded text-s leading-[16px]`}>{title}</h5>
        </div>
    )
}

export default CustomCheckboxSingle;