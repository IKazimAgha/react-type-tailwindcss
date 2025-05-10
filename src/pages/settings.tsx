import AppBar from "../components/appbar";
import { useNavigate } from "react-router-dom";
import CancelSVG from "../icons/cancel.svg";
import { useState } from "react";
import UpdateSVG from "../icons/update.svg";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const navigate = useNavigate();
  const {t,i18n} = useTranslation();
  const [toggles, setToggles] = useState({
    bus: true,
    school: false,
    home: true,
    notBoarded: false,
  });

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white min-h-screen">
      <AppBar
        title={"Settings"}
        isProfile={false}
        customBackIcon={
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full transition pb-4"
          >
            <img src={CancelSVG} />
          </button>
        }
      />
      <div className="max-w-md mx-auto space-y-4 p-4">
        {[
          { key: "bus", label: "Child is on the bus" },
          { key: "school", label: "Child got off the bus at school" },
          { key: "home", label: "Child got off the bus at home" },
          { key: "notBoarded", label: "Child did not board when expected" },
        ].map(({ key, label }) => (
          <div
            key={key}
            className="flex justify-between items-center bg-[#F8F8F8] p-5 rounded-3xl"
          >
            <span className="text-[#003B5B] font-medium text-[16px] font-spProRounded">
              {label}
            </span>
            <button
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                toggles[key as keyof typeof toggles]
                  ? "bg-yellow-400"
                  : "bg-blue-200"
              }`}
              onClick={() => handleToggle(key as keyof typeof toggles)}
            ><div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
              toggles[key as keyof typeof toggles]
                ? i18n.language === "ar"
                  ? "-translate-x-6" // Move left for Arabic (RTL)
                  : "translate-x-6"  // Move right for LTR
                : "translate-x-0"
            }`}
          />
          
            </button>
          </div>
        ))}
      </div>
      <div className="fixed bottom-6 left-0 right-0 flex justify-center">
        <button className="bg-[#FFBA1B] text-[#003B5B] font-semibold text-[16px] font-spProRounded px-12 py-3 rounded-full flex items-center">
          <span className="text-[16px] font-semibold text-mainBlue pl-3 pr-3">
            {"Update"}
          </span>
          <img src={UpdateSVG} className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
export default Settings;
