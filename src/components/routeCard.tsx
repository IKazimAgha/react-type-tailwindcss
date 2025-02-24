import React, { useState } from "react";
import Child1SVG from "../icons/images/child1.svg";
import MapSvg from "../icons/map.svg"
import SchoolFill from "../icons/customFill/schoolFill.svg";
import BusMark from "../icons/customFill/footballFill.svg";
import LocationMark from "../icons/customFill/locationFill.svg";
import HomeFillGreen from "../icons/customFill/homeFillGreen.svg";
import HomeFillRed from "../icons/customFill/homeFillRed.svg";
import HomeFill from "../icons/customFill/homeFill.svg";
import DottedLine from "../icons/customFill/dottedLine.svg";
import GoogleMapComponent from './maps/mapsContainer';
import { useTranslation } from "react-i18next";

interface RouteCards {

}

interface RouteCardLists {
    studentName: string,
    schoolName: string,
    boardedStatus: boolean,
    boardedDesc: string
    currentLocation: string,
    id: number,
}

const RouteCards = () => {

    const {t, i18n} = useTranslation();
    const [routeCardsList, setRouteCardsList] = useState<RouteCardLists[]>([
        {
            studentName: 'Adam Ahmed Fathy Mohamed',
            schoolName: 'Australian School of Abu Dhabi',
            boardedStatus: true,
            boardedDesc: 'Boarded the bus',
            currentLocation: 'school',
            id: 0
        },
        {
            studentName: 'Danielle Fathy Mohamed',
            schoolName: 'Australian School of Abu Dhabi',
            boardedStatus: false,
            boardedDesc: `Hasn't boarded`,
            currentLocation: 'home',
            id: 1
        },
        {
            studentName: 'Muhammad Fathy Mohamed',
            schoolName: 'Australian School of Abu Dhabi',
            boardedStatus: true,
            boardedDesc: 'Arrived at home',
            currentLocation: 'home',
            id: 2
        },
    ])

    const handleSelectedView = (item: RouteCardLists) => {
        let result: RouteCardLists[] = [];
        if (item.id === (routeCardsList.length)) {
            result = routeCardsList.reverse()
            setRouteCardsList(result as any);
        } else {
            const index = routeCardsList.indexOf(item)
            if (index !== -1) {
                let newArr = [routeCardsList[index], ...routeCardsList.slice(0, index), ...routeCardsList.slice(index + 1)];
                result = newArr;
                setRouteCardsList(result)
            }
        }
    }

    const handleNavIcons = (items: RouteCardLists) => {
        if(items.currentLocation === 'home' && items.boardedStatus){
            return (
                <section className="flex my-2 justify-between items-center">
                    <img src={LocationMark} />
                    <img src={DottedLine} />
                    <img src={HomeFillGreen} />
                </section>
            )
        } else if (items.currentLocation === 'school' && items.boardedStatus){
            return (
                <section className="flex my-2 mb-1 justify-between items-center">
                    <img src={HomeFill} />
                    <img src={DottedLine} />
                    <img src={SchoolFill} />
                </section>
            )
        } else {
            return (
                <section className="flex my-2 mb-1 justify-between items-center">
                    <img src={HomeFillRed} />
                    <img src={DottedLine} />
                    <img src={BusMark} />
                </section>
            )
        }
    }

    const handleRouteCardDisplay = (item: RouteCardLists, index: number) => {
        if(index === 0){
            return (
                <div onClick={() => handleSelectedView(item)} className="flex flex-col border-0 border-mainBlue rounded-[48px] bg-mainBlue">
                    <div className="border-b-[4px] rounded-b-[48px] border-b-mainYellow z-10">
                        <div className="h-[7rem] w-full rounded-3xl">
                            {/* <GoogleMapComponent /> */}
                        </div>
                        <div className="flex flex-col mx-[2rem]">
                            <p className="my-2 mt-5 flex justify-end text-bold font-sf-pro-round text-mainYellow leading-[22px] text-[14px]">{item.schoolName}</p>
                            {handleNavIcons(item)}
                        </div>
                        <div className="flex flex-row items-center mb-5">
                            <img src={Child1SVG} className="w-[4.5rem] h-[4.5rem] ml-[1rem]" />
                            <section className="flex flex-col ml-[2rem] w-[12rem]">
                                <h1 className="text-bold font-sf-pro-round text-white text-[24px] leading-[28px]">{item.studentName}</h1>
                                <h5 className="text-bold font-sf-pro-round text-mainYellow leading-[22px] mt-1 text-[14px]">{item.boardedDesc}</h5>
                            </section>
                        </div>
                    </div>
                </div>
            )
        } else if(index !== (routeCardsList.length - 1)) {
            return(
                <div onClick={() => handleSelectedView(item)}  className="flex flex-col mt-[-8rem] rounded-3xl bg-mainBlue z-0">
                    <div className="border-b-[4px] rounded-b-[48px] border-b-mainYellow z-10">
                        <div className="h-[8rem] w-full rounded-3xl" />
                        <div className="flex flex-col my-[1rem] mx-[2rem]">
                            {handleNavIcons(item)}
                        </div>
                        <div className="flex flex-row items-center mb-5">
                            <img src={Child1SVG} className="w-[4.5rem] h-[4.5rem] ml-[1rem]" />
                            <section className="flex flex-col ml-[2rem] w-[12rem]">
                                <h1 className="text-bold font-sf-pro-round text-white text-[24px] leading-[28px]">{item.studentName}</h1>
                                <h5 className="text-bold font-sf-pro-round text-red leading-[22px] mt-1 text-[14px]">{item.boardedDesc}</h5>
                            </section>
                        </div>
                    </div>
                </div>
            )
        } else if (index === (routeCardsList.length - 1)){
            return (
                <div onClick={() => handleSelectedView(item)}  className="flex flex-col mt-[-8rem] rounded-3xl rounded-b-[48px] bg-mainBlue z-0">
                    <div className="h-[8rem] w-full rounded-3xl" />
                    <div className="flex flex-col my-[1rem] mx-[2rem]">
                        {handleNavIcons(item)}
                    </div>
                    <div className="flex flex-row items-center mb-5">
                        <img src={Child1SVG} className="w-[4.5rem] h-[4.5rem] ml-[1rem]" />
                        <section className="flex flex-col ml-[2rem] w-[12rem]">
                            <h1 className="text-bold font-sf-pro-round text-white text-[24px] leading-[28px]">{item.studentName}</h1>
                            <h5 className="text-bold font-sf-pro-round text-green leading-[22px] mt-1 text-[14px]">{item.boardedDesc}</h5>
                        </section>
                    </div>
                </div>
            )
        }
    }

    return(
        <div className="my-5 h-[650px] overflow-y-auto scrollbar-hide">
            {routeCardsList.length > 0 && routeCardsList.map((item: RouteCardLists, index: number) => handleRouteCardDisplay(item, index))}
        </div>
    )
}

export default RouteCards;