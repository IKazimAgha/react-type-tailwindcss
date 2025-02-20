import React from "react";
import { useNavigate } from "react-router-dom"; // Change this if using React Native
import BackSVG from "../icons/back.svg";
import BackArSVG from "../icons/backAr.svg";
import i18n from "../configure/i18n/i18n";
import ProfileBackArSVG from "../icons/profileBackAr.svg";
import ProfileBackAEnSVG from "../icons/profileBackEn.svg";

interface AppBarProps {
  title: string;
  subtitle?: string;
  trailingIcon?: React.ReactNode;
  onBack?: () => void;
  bgColor?: string;
  isProfile?: boolean;
}

const AppBar: React.FC<AppBarProps> = ({
  title,
  subtitle,
  trailingIcon,
  onBack,
  bgColor = "bg-mainYellow",
  isProfile = false,
}) => {
  const navigate = useNavigate(); // React Router for navigation

  return (
    <div className={`flex items-center justify-between ${bgColor} px-4 py-3`}>
      {/* Back Button */}
      <button
        onClick={onBack || (() => navigate(-1))}
        className="pt-6 rounded-full transition"
      >
        {isProfile ? (
          i18n.language === "ar" ? (
            <img src={ProfileBackArSVG} />
          ) : (
            <img src={ProfileBackAEnSVG} />
          )
        ) : i18n.language === "ar" ? (
          <img src={BackArSVG} />
        ) : (
          <img src={BackSVG} />
        )}
      </button>

      {/* Title & Subtitle */}
      <div className="flex flex-col items-center flex-1 pt-6">
        <h1 className="text-[24px] font-semibold font-[SF Pro Rounded] text-mainBlue">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[12px] font-medium font-[SF Pro Rounded] text-mainBlue">
            {subtitle}
          </p>
        )}
      </div>

      {/* Trailing Icon (optional) */}
      <div className="pt-6">{trailingIcon}</div>
    </div>
  );
};

export default AppBar;
