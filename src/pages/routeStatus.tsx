import React, { useState } from "react";
import Support from "../icons/support.svg";
import Menu from "../icons/menu.svg";
import Route from "../icons/route.svg";
import Add from "../icons/add.svg";
import { Drawer } from "../components/drawer";

const RouteStatus = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="relative h-screen bg-mainYellow flex flex-col justify-end items-center p-6">
      <Drawer isDrawerOpen={ isDrawerOpen } onClose={() => setIsDrawerOpen(false)}></Drawer>
      {/* Bottom Custom Widget */}
      <div className="absolute bottom-6 left-4 flex items-center  bg-white shadow-lg rounded-full  ">
        {/* Menu Icon */}
        <button className="p-6 rounded-full" onClick={() => setIsDrawerOpen(true)}>
          <img src={Menu} />
        </button>

        {/* Center Circular Container */}
        <div className="flex flex-row items-center justify-center space-x-4 bg-mainBlue text-white rounded-full p-4 shadow-lg">
          <img src={Route} />
          <span className="text-sm font-semibold mt-1">Routes</span>
        </div>

        {/* Messages Icon */}
        <button className="p-6 rounded-full ">
          <img src={Support} />
        </button>
      </div>

      {/* Floating Action Button (FAB) */}
      <button className="absolute bottom-6 right-4 bg-mainBlue text-white p-5 rounded-full shadow-lg border-4 border-white">
      <img src={Add} />
      </button>
    </div>
  );
};

export default RouteStatus;
