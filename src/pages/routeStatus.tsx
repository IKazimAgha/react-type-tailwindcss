import React, { useState } from "react";
import Support from "../icons/support.svg";
import Menu from "../icons/menu.svg";
import Route from "../icons/route.svg";
import Add from "../icons/add.svg";
import { Drawer } from "../components/drawer";
import { useTranslation } from "react-i18next";
import HomeScreen from "./homeScreens";

const RouteStatus = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="relative h-screen bg-mainYellow flex flex-col p-6">
        <Drawer isDrawerOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        <HomeScreen />

        {/* Bottom Custom Widget Container */}
        <div className="absolute bottom-0 left-0 w-full flex items-center px-5 pb-6">
          {/* Bottom Navigation Bar */}
          <div className="flex flex-1 items-center justify-between bg-white shadow-lg rounded-full px-6 py-3">
            {/* Menu Icon */}
            <button className={`${i18n.language === "ar" ? "pl-6 pr-0" : "pr-6 pl-0"} rounded-full`} onClick={() => setIsDrawerOpen(true)}>
              <img src={Menu} alt="Menu" />
            </button>
            
            {/* Center Circular Container */}
            <div className="flex flex-row items-center justify-center space-x-3 bg-mainBlue text-white rounded-full px-6 py-3 shadow-lg">
              <img src={Route} alt="Route" />
              <span className="text-sm font-semibold">Routes</span>
            </div>
            
            {/* Support Icon */}
            <button className={`${i18n.language === "ar" ? "pl-0 pr-6" : "pr-0 pl-6"} rounded-full`}>
              <img src={Support} alt="Support" />
            </button>
          </div>

          {/* Floating Action Button (FAB) */}
          <button className={`${i18n.language === "ar" ? "mr-6" : "ml-6"}  bg-mainBlue text-white p-5 rounded-full shadow-lg border-8 border-white`}
          >
            <img src={Add} alt="Add" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RouteStatus;






// import React, { useState } from "react";
// import Support from "../icons/support.svg";
// import Menu from "../icons/menu.svg";
// import Route from "../icons/route.svg";
// import Add from "../icons/add.svg";
// import { Drawer } from "../components/drawer";
// import { useTranslation } from "react-i18next";


// const RouteStatus = () => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     const { t, i18n } = useTranslation();
//   return (
//     <div className={i18n.language === "ar" ? "rtl" : "ltr"}>
//     <div className="relative h-screen bg-mainYellow flex flex-col p-6">
//       <Drawer isDrawerOpen={ isDrawerOpen } onClose={() => setIsDrawerOpen(false)}></Drawer>
//       <span>Route status screen</span>
//       {/* Bottom Custom Widget */}
//       <div className="absolute bottom- left-4 flex items-center  bg-white shadow-lg rounded-full  ">
//         {/* Menu Icon */}
//         <button className="p-6 rounded-full" onClick={() => setIsDrawerOpen(true)}>
//           <img src={Menu} />
//         </button>

//         {/* Center Circular Container */}
//         <div className="flex flex-row items-center justify-center space-x-4 bg-mainBlue text-white rounded-full p-4 shadow-lg">
//           <img src={Route} />
//           <span className="text-sm font-semibold mt-1">Routes</span>
//         </div>

//         {/* Messages Icon */}
//         <button className="p-6 rounded-full ">
//           <img src={Support} />
//         </button>
//       </div>

//       {/* Floating Action Button (FAB) */}
//       <button className="absolute bottom-6 right-4 bg-mainBlue text-white p-5 rounded-full shadow-lg border-4 border-white">
//       <img src={Add} />
//       </button>
//     </div>
//     </div>
//   );
// };

// export default RouteStatus;
