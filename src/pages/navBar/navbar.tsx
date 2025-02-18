import React from "react";
import ArrowLeft from "../../icons/arrowLeft.svg";
import ArrowRight from "../../icons/arrowRightWhite.svg";
import { useLangugageContext } from "../../contextAPI/contextAPI";

interface NavbarType {
    title: string;
    onClickArrow: () => void;
}

const Navbar: React.FC<NavbarType> = ({title, onClickArrow}) => {

    const { localeLang } = useLangugageContext();

    return(
        <div className="w-full border border-2 h-[5rem] sm:h-[5rem] bg-mainYellow items-center flex">
            <div onClick={() => onClickArrow()} className={`${localeLang === 'en' ? 'ml-2' : 'mr-2' } w-15`}>
                <div className="h-10 w-10 flex justify-center items-center border rounded-full bg-mainBlue">
                    <img src={ localeLang === 'en' ? ArrowLeft : ArrowRight} />
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <h1 className="font-sf-pro-rounded text-[24px] leading-[48px] tracking-[0%] font-semibold">{title}</h1>
            </div>
        </div>
    )
}

export default Navbar;