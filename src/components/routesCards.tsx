import React from "react";
import Child1SVG from "../icons/images/child1.svg";
import MapSvg from "../icons/map.svg"
import SchoolFill from "../icons/customFill/schoolFill.svg";
import HomeFill from "../icons/customFill/homeFill.svg";
import BusMark from "../icons/customFill/footballFill.svg";
import LocationMark from "../icons/customFill/locationFill.svg";

const RouteCards = () => {
    return(
        <div className="my-5 ">
            <div className="flex flex-col border-0 border-mainBlue rounded-3xl bg-mainBlue">
                <div className="border-b-[4px] rounded-b-[48px] border-b-mainYellow z-10">
                    <div className="h-[8rem] w-full rounded-3xl">
                        <img src={MapSvg} className="h-[8rem] w-full object-cover rounded-t-3xl" />
                    </div>
                    <div className="flex flex-col mx-[2rem]">
                        <p className="my-2 flex justify-end text-bold font-sf-pro-round text-mainYellow leading-[22px] text-[14px]">Australian School of Abu Dhabi</p>
                        <section className="flex my-2 justify-between items-center">
                            <img src={HomeFill} />
                            <div className="flex-grow border-t border-dotted mx-4 w-[20rem]" />
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
            </div>
            <div className="flex flex-col mt-[-8rem] rounded-3xl bg-mainBlue z-0">
                <div className="border-b-[4px] rounded-b-[48px] border-b-mainYellow z-10">
                    <div className="h-[8rem] w-full rounded-3xl">
                        {/* <img src={MapSvg} className="h-[10rem] w-full object-cover rounded-t-3xl" /> */}
                    </div>
                    <div className="flex flex-col my-[1rem] mx-[2rem]">
                        {/* <p className="my-2 flex justify-end text-bold font-sf-pro-round text-mainYellow leading-[22px] text-[14px]">Australian School of Abu Dhabi</p> */}
                        <section className="flex my-2 justify-between items-center">
                            <img src={HomeFill} />
                            <div className="flex-grow border-t border-dotted mx-4 w-[20rem]" />
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
            </div>
            <div className="flex flex-col mt-[-8rem] rounded-3xl bg-mainBlue z-0">
                    <div className="h-[8rem] w-full rounded-3xl">
                        {/* <img src={MapSvg} className="h-[10rem] w-full object-cover rounded-t-3xl" /> */}
                    </div>
                    <div className="flex flex-col my-[1rem] mx-[2rem]">
                        {/* <p className="my-2 flex justify-end text-bold font-sf-pro-round text-mainYellow leading-[22px] text-[14px]">Australian School of Abu Dhabi</p> */}
                        <section className="flex my-2 justify-between items-center">
                            <img src={HomeFill} />
                            <div className="flex-grow border-t border-dotted mx-4 w-[20rem]" />
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
        </div>
    )
}

export default RouteCards;