import React from "react";
import Child1SVG from "../icons/images/child1.svg";
import MapSvg from "../icons/map.svg"
import SchoolFill from "../icons/customFill/schoolFill.svg";
import BusMark from "../icons/customFill/footballFill.svg";
import LocationMark from "../icons/customFill/locationFill.svg";
import HomeFillGreen from "../icons/customFill/homeFillGreen.svg";
import HomeFillRed from "../icons/customFill/homeFillRed.svg";
import HomeFill from "../icons/customFill/homeFill.svg";
import DottedLine from "../icons/customFill/dottedLine.svg";
import GoogleMapComponent from "./mapsContainer";

const RouteCards = () => {
    return(
        <div className="my-5 ">
            <div className="flex flex-col border-0 border-mainBlue rounded-[48px] bg-mainBlue">
                <div className="border-b-[4px] rounded-b-[48px] border-b-mainYellow z-10">
                    <div className="h-[7rem] w-full rounded-3xl">
                        <GoogleMapComponent />
                    </div>
                    <div className="flex flex-col mx-[2rem]">
                        <p className="my-2 mt-5 flex justify-end text-bold font-sf-pro-round text-mainYellow leading-[22px] text-[14px]">Australian School of Abu Dhabi</p>
                        <section className="flex my-2 justify-between items-center">
                            <img src={HomeFill} />
                            <img src={DottedLine} />
                            <img src={SchoolFill} />
                        </section>
                    </div>
                    <div className="flex flex-row items-center mb-5">
                        <img src={Child1SVG} className="w-[4.5rem] h-[4.5rem] ml-[1rem]" />
                        <section className="flex flex-col ml-[2rem] w-[12rem]">
                            <h1 className="text-bold font-sf-pro-round text-white text-[24px] leading-[28px]">Adam Ahmed Fathy Mohamed</h1>
                            <h5 className="text-bold font-sf-pro-round text-mainYellow leading-[22px] mt-1 text-[14px]">Boarded the bus</h5>
                        </section>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-[-8rem] rounded-3xl bg-mainBlue z-0">
                <div className="border-b-[4px] rounded-b-[48px] border-b-mainYellow z-10">
                    <div className="h-[8rem] w-full rounded-3xl" />
                    <div className="flex flex-col my-[1rem] mx-[2rem]">
                        <section className="flex my-2 mb-1 justify-between items-center">
                            <img src={HomeFillRed} />
                            <img src={DottedLine} />
                            <img src={BusMark} />
                        </section>
                    </div>
                    <div className="flex flex-row items-center mb-5">
                        <img src={Child1SVG} className="w-[4.5rem] h-[4.5rem] ml-[1rem]" />
                        <section className="flex flex-col ml-[2rem] w-[12rem]">
                            <h1 className="text-bold font-sf-pro-round text-white text-[24px] leading-[28px]">Adam Ahmed Fathy Mohamed</h1>
                            <h5 className="text-bold font-sf-pro-round text-red leading-[22px] mt-1 text-[14px]">Hasn't boarded</h5>
                        </section>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-[-8rem] rounded-3xl rounded-b-[48px] bg-mainBlue z-0">
                    <div className="h-[8rem] w-full rounded-3xl" />
                    <div className="flex flex-col my-[1rem] mx-[2rem]">
                        <section className="flex my-2 mb-1 justify-between items-center">
                            <img src={LocationMark} />
                            <img src={DottedLine} />
                            <img src={HomeFillGreen} />
                        </section>
                    </div>
                    <div className="flex flex-row items-center mb-5">
                        <img src={Child1SVG} className="w-[4.5rem] h-[4.5rem] ml-[1rem]" />
                        <section className="flex flex-col ml-[2rem] w-[12rem]">
                            <h1 className="text-bold font-sf-pro-round text-white text-[24px] leading-[28px]">Adam Ahmed Fathy Mohamed</h1>
                            <h5 className="text-bold font-sf-pro-round text-green leading-[22px] mt-1 text-[14px]">Arrived at home</h5>
                        </section>
                    </div>
            </div>
        </div>
    )
}

export default RouteCards;