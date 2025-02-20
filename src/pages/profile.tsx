import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/appbar";
import ProfileAvatar from "../components/profileAvatar";
import EditSVG from "../icons/edit.svg";
import UserSVG from "../icons/user.svg";
import EmailSVG from "../icons/email.svg";
import TelephoneSVG from "../icons/telephone.svg";
import MobileSVG from "../icons/mobile.svg";
import NationSVG from "../icons/nation.svg";
import { useTranslation } from "react-i18next";


const ProfileScreen = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const user = {
    name: "Parvathy Guardian",
    email: "john.doe@example.com",
    profileImage:
      "https://s3-alpha-sig.figma.com/img/44e1/0dbd/f47f8b2405057fd92348a0f698c5fee3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BJfAZbCUKhadnLuyuvPTw5R6-djDPOCCzJVhLvm~inhKB~UXpFVaew10I10chHdwj-MMEakq398yc5DNUoev9QXHcnBGJTrY76s9ZA~LZrOC5jxBLDglpUCZIbfpNc-o~Uy6U8jCYtax26LUtHzp64VtsFLE1ydlBiSPoU6YhAXTRFHaBl0za~TRfbx4FD4tbP1WSAAYHR2csS2Qd6Ie-km68fkZ~89OTgE25ZHvlBqOfE12l7POdV8p8Qp9d0El3kcqtO152AcJzy-JBLEDbbctnU1X3o0gnnCmefwmhhM9A-sr6OY3cB6R~3MdPVst5DIaqWOROcp6tnROdaCFBQ__",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* App Bar */}
      <AppBar
        title="Profile"
        bgColor="bg-white"
        onBack={() => navigate(-1)}
        trailingIcon={
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full transition pb-4"
          >
            <img src={EditSVG} alt="Edit" />
          </button>
        }
        isProfile={true}
      />

      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center min-h-fit">
        {/* Profile Avatar */}
        <ProfileAvatar src={user.profileImage} size={150} />

        {/* User Name */}
        <h2 className="mt-2 text-[24px] font-semibold text-mainBlue font-sfpro">
          {user.name}
        </h2>

        {/* User Email */}
        <p className="text-[14px] font-normal text-mainBlue font-sfpro mt-1">
          johndoe@email.com
        </p>
      </div>
      {/* User Info section */}
      <div className="pl-6 pr-6">
        {/*  First and Last Name */}
        <div className="my-5  bg-[#F8F8F8] px-5 py-5 rounded-3xl">
          <div className={`flex items-start space-x-4 ${i18n.language === "ar" ? "space-x-reverse" : ""}`}>
            <img src={UserSVG} />
            <div className="flex flex-col">
              {/* First Name */}
              <div className="flex flex-col">
                <span className="text-[14px] font-medium font-sfpro text-gray-400">
                {t("firstName")}
                </span>
                <span className="text-[16px] font-semibold font-sfpro text-mainBlue">
                  Parvathy
                </span>
              </div>
              <div className="h-4"></div>
              {/* Last Name */}
              <div className="flex flex-col">
                <span className="text-[14px] font-medium font-sfpro text-gray-400">
                {t("lastName")}
                </span>
                <span className="text-[16px] font-semibold font-sfpro text-mainBlue">
                  Guardian
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Email, Home ,Mobile */}
        <div className="my-5  bg-[#F8F8F8] px-5 py-5 rounded-3xl">
          {/* Email */}
          <div className={`flex items-start space-x-4 ${i18n.language === "ar" ? "space-x-reverse" : ""}`}>
            <img src={EmailSVG} />
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-[14px] font-medium font-sfpro text-gray-400">
                {t("email")}
                </span>
                <span className="text-[16px] font-semibold font-sfpro text-mainBlue">
                  p.guardian@email.com
                </span>
              </div>
              <div className="h-4"></div>
            </div>
          </div>
          {/* Home */}
          <div className={`flex items-start space-x-4 ${i18n.language === "ar" ? "space-x-reverse" : ""}`}>
            <img src={TelephoneSVG} />
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-[14px] font-medium font-sfpro text-gray-400">
                {t("home")}
                </span>
                <span className="text-[16px] font-semibold font-sfpro text-mainBlue">
                  05 369 54 55
                </span>
              </div>
              <div className="h-4"></div>
            </div>
          </div>
          {/* Mobile */}
          <div className={`flex items-start space-x-4 ${i18n.language === "ar" ? "space-x-reverse" : ""}`}>
            <img src={MobileSVG} />
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-[14px] font-medium font-sfpro text-gray-400">
                {t("mobile")}
                </span>
                <span className="text-[16px] font-semibold font-sfpro text-mainBlue">
                  55 054 54 65
                </span>
              </div>
              <div className="h-4"></div>
            </div>
          </div>
        </div>
        {/*  Nationality */}
        <div className="my-5  bg-[#F8F8F8] px-5 py-5 rounded-3xl">
          <div className={`flex items-start space-x-4 ${i18n.language === "ar" ? "space-x-reverse" : ""}`}>
            <img src={NationSVG} />
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-[14px] font-medium font-sfpro text-gray-400">
                {t("nationality")}
                </span>
                <span className="text-[16px] font-semibold font-sfpro text-mainBlue">
                  IN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
