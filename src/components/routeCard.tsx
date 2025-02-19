import React from "react";
import Child1SVG from "../icons/images/child1.svg";
import MapSvg from "../icons/map.svg"
import SchoolFill from "../icons/customFill/schoolFill.svg";
import HomeFill from "../icons/customFill/homeFill.svg";
import BusMark from "../icons/customFill/footballFill.svg";
import LocationMark from "../icons/customFill/locationFill.svg";

const RouteCards = () => {
    return(
        <div className="my-5">
            <div className="flex flex-col border-0 border-mainBlue rounded-3xl bg-mainBlue">
                    <div className="h-[10rem] w-full rounded-3xl">
                        <img src={MapSvg} className="h-[10rem] w-full object-cover rounded-t-3xl" />
                    </div>
                    <div className="flex flex-col mx-[2rem]">
                        <p className="my-2 flex justify-end text-bold font-sf-pro-round text-mainYellow leading-[22px] text-[14px]">Australian School of Abu Dhabi</p>
                        <section className="flex my-2 justify-between">
                            <img src={HomeFill} />
                            <img src={SchoolFill} />
                        </section>
                    </div>
                    <div className="flex flex-row items-center mb-5">
                        <img src={Child1SVG} className="w-[4.5rem] h-[4.5rem] ml-[1rem]" />
                        <section className="flex flex-col ml-[2rem] w-[12rem]">
                            <h1 className="text-bold font-sf-pro-round text-white text-[24px] leading-[28px]">Adam Ahmed Fathy Mohamed</h1>
                            <h5 className="text-bold font-sf-pro-round text-mainYellow leading-[22px] text-[14px]">Boarded the bus</h5>
                        </section>
                    </div>
            </div>
            <div className="flex flex-col border-2 border-mainBlue rounded-3xl bg-mainBlue px-5 my-1">
                <div className="flex mx-[2rem] flex-col">
                    <section className="flex my-3 justify-between">
                        <img src={HomeFill} />
                        <img src={SchoolFill} />
                    </section>
                </div>
                <div className="flex flex-row items-center mb-5">
                    <img src={Child1SVG} className="w-[4.5rem] h-[4.5rem] ml-[1rem]" />
                    <section className="flex flex-col ml-[2rem] w-[12rem]">
                        <h1 className="text-bold font-sf-pro-round text-white text-[24px] leading-[28px]">Danielle Fathy Mohamed</h1>
                        <h5 className="text-bold font-sf-pro-round text-mainYellow leading-[22px] text-[14px]">Boarded the bus</h5>
                    </section>
                </div>
            </div>
            <div className="flex flex-col border-2 border-mainBlue rounded-3xl bg-mainBlue px-5 my-1">
                <div className="flex mx-[2rem] flex-col">
                    <section className="flex my-3 justify-between">
                        <img src={LocationMark} />
                        <img src={HomeFill} />
                    </section>
                </div>
                <div className="flex flex-row items-center mb-5">
                    <img src={Child1SVG} className="w-[4.5rem] h-[4.5rem] ml-[1rem]" />
                    <section className="flex flex-col ml-[2rem] w-[12rem]">
                        <h1 className="text-bold font-sf-pro-round text-white text-[24px] leading-[28px]">Muhammad Fathy Mohamed</h1>
                        <h5 className="text-bold font-sf-pro-round text-mainYellow leading-[22px] text-[14px]">Boarded the bus</h5>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default RouteCards;