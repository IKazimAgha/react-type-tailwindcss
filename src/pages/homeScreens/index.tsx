import React from "react";
import BellIcon from "../../icons/bellIcons.svg";
import RouteCards from "../../components/routeCard";

const HomeScreen = () => {
    return(
        <>
            <div className="flex justify-between">
                <h1 className="text-[72px] w-14 font-extrabold text-mainBlue leading-[64px] tracking-0 font-sf-pro-rounded">
                    Route Status
                </h1>
                <div className="h-14 w-14 bg-white flex justify-center items-center rounded-full">
                    <img src={BellIcon} />
                </div>
            </div>
            <RouteCards />
        </>
    )
}

export default HomeScreen;