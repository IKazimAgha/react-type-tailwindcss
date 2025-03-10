import React from "react";
import Navbar from "../navBar/navbar";
import { useNavigate } from "react-router-dom";
import CustomCalendar from "../../components/calendars/index";
import NotificationCenter from "./notificationCenter";

const NotificationScreen = () => {
    const navigate = useNavigate();
    return(
        <>
            <Navbar title="Notifications" onClickArrow={() => navigate('/routeStatus')} isFilterIcon={true} />
            <NotificationCenter />
            <div className="absolute bottom-0 left-0 w-full text-white text-center">
                <CustomCalendar />
            </div>
            {/* <CustomCalendar /> */}
        </>
    )
}

export default NotificationScreen