import React from "react";
import ArrowLeft from "../../icons/arrowLeft.svg";
import ArrowRight from "../../icons/arrowRightWhite.svg";
import FilterIconBell from "../../icons/filterIcons.svg";
import { useLangugageContext } from "../../contextAPI/contextAPI";

interface NavbarType {
    title: string;
    onClickArrow: () => void;
    isFilterIcon?: boolean;
}

const Navbar: React.FC<NavbarType> = ({title, onClickArrow, isFilterIcon}) => {

    const { localeLang } = useLangugageContext();

    return(
        <div className="w-full  h-[5rem] sm:h-[5rem] bg-none items-center flex">
            <div onClick={() => onClickArrow()} className={`${localeLang === 'en' ? 'ml-2' : 'mr-2' } w-15`}>
                <div className="h-10 w-10 flex justify-center items-center border rounded-full bg-mainBlueTint">
                    <img src={ localeLang === 'en' ? ArrowLeft : ArrowRight} />
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <h1 className="font-sf-pro-rounded text-mainBlue text-[24px] leading-[48px] tracking-[0%] font-semibold">{title}</h1>
            </div>
            {
                isFilterIcon && (
                    <div onClick={() => onClickArrow()} className={`${localeLang === 'en' ? 'mr-2' : 'ml-2' } w-15`}>
                        <div className="h-10 w-10 flex justify-center items-center border rounded-full bg-white">
                            <img src={FilterIconBell} className="h-6 w-6" />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar;