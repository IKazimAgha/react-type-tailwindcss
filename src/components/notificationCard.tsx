import React from 'react';
import { useTranslation } from 'react-i18next';
import TalkToUsSVG from "../icons/talkDark.svg";
import AccordianDownSVG from "../icons/accordianDown.svg";
import AccordianUpSVG from "../icons/accordianUp.svg";
import Child1SVG from "../icons/images/child1.svg";
import AddressPinPoint from "../icons/addressPinPoint.svg";
import SchoolSVG from "../icons/school.svg";
import SchoolBusSVG from "../icons/schoolBus.svg";
import HomeSVG from "../icons/home.svg";
import LocationRoundedSVG from "../icons/locationRounded.svg";
import { useLangugageContext } from '../contextAPI/contextAPI';
import { DescType, RoutePatternInterface } from '../pages/notification/notifyInterface';


interface NotificationCard {
    iconType: string;
    notificationStatus: string;
    timeStamp: string;
    lastStatus: string;
    description?: DescType | undefined;
    mainTitle: string | undefined;
    mainDesc: string | undefined;
    relatedTo: string;
    isAccordianOpen: boolean;
    isAccordianOpenIndex: number | null,
    setIsAccordian: (_t: boolean) => void;
    setIsAccordianIndex: (_t: number) => void;
    id: number;
    routePattern: RoutePatternInterface[] | undefined
}

const NotificationCard: React.FC<NotificationCard> = ({ 
    iconType,
    notificationStatus,
    mainTitle,
    timeStamp,
    relatedTo,
    mainDesc,
    id,
    setIsAccordian,
    setIsAccordianIndex,
    isAccordianOpen,
    isAccordianOpenIndex,
    routePattern
}) => {
    const {t} = useTranslation();
    const { localeLang } = useLangugageContext();

    const iconSelection = (value: string) => {
        if (value === 'routeDesc') {
            return <img src={Child1SVG} className="w-[3rem] h-[3rem]"/>
        } else if (value === 'complain') {
            return <img src={TalkToUsSVG} className="w-[1.5rem] h-[1.5rem]"/>
        } else if (value === 'addressChange'){
            return <img src={AddressPinPoint} className="w-[2rem] h-[2rem]"/>
        } else {
            return <img src={LocationRoundedSVG} className="w-[2rem] h-[2rem]"/>
        }
    }

    const handleTitleClass = (value: string) => {
        if (value === 'pending' || value === "boarded") {
            return 'text-[#FFC107]'
        } else if (value === 'rejected' || value === 'notBoarded') {
            return 'text-[#F57070]'
        } if (value === 'arrived') {
            return 'text-[#10E1A5]'
        }
    }

    const handleRouteList = (value: string) => {
        if (value.includes('bus')) {
            return SchoolBusSVG;
        } else if (value.includes('school')) {
            return SchoolSVG
        } else if (value.includes('home')) {
            return HomeSVG
        } else if (value.includes('boarded')) {
            return SchoolBusSVG
        }
    }

    return(
        <div key={id} className="border my-2 border-mainGray bg-mainGray w-full lg:w-[40rem] sm:w-[1rem] px-5 py-5 rounded-3xl">
            <div className="flex justify-between w-full items-center">
                <div className="w-[5rem]">
                    <div className='w-[3rem] h-[3rem] flex justify-center items-center bg-iconBG border-2 rounded-full'>
                        {iconSelection(iconType)}
                    </div>
                </div>
                <div className={`w-[30rem] ${localeLang === 'ar' ? 'mr-5' : 'ml-5'}`}>
                    <div className="flex justify-between h-7">
                        <h1 className="font-sf-pro-rounded font-medium text-base leading-18 tracking-0p text-mainBlue">{mainTitle}</h1>
                        {
                            relatedTo === 'busRoute' && (
                                <div
                                    onClick={() => {
                                        setIsAccordian(!isAccordianOpen)
                                        setIsAccordianIndex(id)
                                    }}
                                    className="w-[3rem] h-[2.5rem] mt-1 justify-end flex">
                                    <img src={(isAccordianOpen && (isAccordianOpenIndex === id)) ? AccordianDownSVG : AccordianUpSVG} className="w-[1rem] h-[1rem]" />
                                </div>
                            )
                        }
                    </div>
                    <div className="flex justify-between">
                        <h1 className={`capitalize-first-letter font-sf-pro-rounded font-semibold text-sm leading-22 tracking-[2%] ${handleTitleClass(notificationStatus)}`}>{mainDesc}</h1>
                        <div className="text-mainBlueTint text-[12px]">
                            {timeStamp}
                        </div>
                    </div>
                </div>
            </div>
            {isAccordianOpen &&
            (isAccordianOpenIndex === id) &&
            (
                routePattern?.map((item: RoutePatternInterface) => (
                    <div className="flex my-1 justify-between">
                        <div className='flex w-64 justify-center items-center'>
                            <img src={handleRouteList(item.title)} className="w-[1rem] h-[1rem] ml-5" />
                            <h1 className={`capitalize-first-letter text-center items-center ml-2 font-sf-pro-rounded font-semibold text-sm leading-22 tracking-[2%] ${handleTitleClass(item.status)}`}>{item.title}</h1>
                        </div>
                        <h5 className='font-sf-pro-rounded text-mainBlueTint font-thin text-xs leading-18 tracking-[2%] text-right'>{item.timeStamp}</h5>
                    </div>
                ))
            )}
        </div>
    )
}

export default NotificationCard;