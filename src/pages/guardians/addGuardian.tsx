import React from "react";
import AppBar from "../../components/appbar";
import { useNavigate } from "react-router-dom";
import CancelSVG from "../../icons/cancel.svg";
import ProfileAvatar from "../../components/profileAvatar";
import DownloadSVG from "../../icons/download.svg";
import DropdownSVG from "../../icons/dropdown.svg";
import { useTranslation } from "react-i18next";
const AddGuardian = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const onSaveGuardian = () => {
    console.log("Click")
    const data = {
        "name": "Omar Al-Mansouri Mohamed",
        "phoneNumber": '+971 50 665 55 69',
        "profileImage":'https://s3-alpha-sig.figma.com/img/d548/e2a2/ad89f9ffc35f73453e57e3faadf5a376?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZX3L0swupym0uc4lQEKtb0B3U4AB8y8QW51HeZ8iix6O1VVdS-kbcUOApoAsWIrV9tcxiTEN1DWCNI837QDgixB3VZQJNf3cuG793EvRgxpsQP9sy~M7FIsCRJDCBKysPlcyku-c1ytevE6jU4kshVTsAQ1pF67CKCtqQxp4azi63lXcXlWF3yMXuztYN0qX3LIvjEQBKRiI-teACLxRDW9N-cQlMU-B030sq5BqXqsvYoObXJZvTzjHNl3yF2wGi2XEKzBRoBnTEOEjlSw-Z1ez-gyk9zzpE44kVCc90jxhQU5sl5AfWQ54RBHgoQ5sQiBeiCO7dA7sTNWlOKXlaw__',
        "status": "Assigned"
    }
    navigate('/guardians', {state: data});
}
  return (
    <div className="bg-white min-h-screen">
      <AppBar
        title= {t("newGuardian")}
        bgColor="bg-[#F8F8F8]"
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

      {/* Profile Image Section */}
      <div className="relative flex flex-col items-center justify-center min-h-fit bg-[#F8F8F8] pb-5">
        {/* Profile Avatar */}
        <div className="relative">
          <ProfileAvatar
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            size={150}
          />

          {/* Edit Button (Positioned at Bottom-Right of Avatar) */}
          <button className="absolute bottom-0 right-0  p-2 rounded-full  transform translate-x-1/16 translate-y-1/16">
            <img src={DownloadSVG} />
          </button>
        </div>
      </div>
      {/* Relation */}
      <div className="flex flex-col w-full px-6 pt-4">
        <label className="text-mainBlue text-[14px] font-normal font-[sf-pro-rounded] mb-1">
        {t("relation")}
        </label>
        <div className="relative w-full">
          {/* Select Dropdown */}
          <select className="appearance-none w-full bg-[#F8F8F8] border border-gray-300 text-mainBlue text-[14px] font-normal font-[sf-pro-rounded] rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-mainBlue">
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="guardian">Guardian</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <img src={DropdownSVG} />
          </div>
        </div>
      </div>

      {/* First name */}
      <div className="flex flex-col space-y-2 px-6 pt-4">
        <label className="text-mainBlue text-[14px] font-normal font-[sf-pro-rounded]">
        {t("firstName")}
        </label>
        <input
          type="text"
          className="w-full bg-[#F8F8F8] border border-gray-300 text-mainBlue text-[14px] font-normal font-[sf-pro-rounded] rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-mainBlue"
        />
      </div>
      {/* middle name */}
      <div className="flex flex-col space-y-2 px-6 pt-4 pt-4">
        <label className="text-mainBlue text-[14px] font-normal font-[sf-pro-rounded]">
        {t("middleName")}
        </label>
        <input
          type="text"
          className="w-full bg-[#F8F8F8] border border-gray-300 text-mainBlue text-[14px] font-normal font-[sf-pro-rounded] rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-mainBlue"
        />
      </div>
      {/* Last name */}
      <div className="flex flex-col space-y-2 px-6 pt-4 ">
        <label className="text-mainBlue text-[14px] font-normal font-[sf-pro-rounded]">
        {t("lastName")}
        </label>
        <input
          type="text"
          className="w-full bg-[#F8F8F8] border border-gray-300 text-mainBlue text-[14px] font-normal font-[sf-pro-rounded] rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-mainBlue"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col space-y-2 px-6 pt-4">
        <label className="text-mainBlue text-[14px] font-normal font-[sf-pro-rounded]">
        {t("phoneNumber")}
        </label>
        <div className="w-full flex items-center bg-[#F8F8F8] border border-gray-300 text-mainBlue text-[14px] font-normal font-[sf-pro-rounded] rounded-full px-4 py-2 focus-within:ring-1 focus-within:ring-mainBlue">
          <span className="text-mainBlue text-[14px] px-3">+971</span>
          <input
            type="tel"
            className="bg-transparent flex-1 focus:outline-none"
          />
        </div>
      </div>
      {/* Save guardian */}
      <div className="flex justify-center mt-6">
        <button className="w-1/2 bg-mainYellow text-mainBlue text-lg font-semibold font-[sf-pro-rounded] rounded-full py-3 shadow-md" onClick={onSaveGuardian}>
        {t("save")}
        </button>
      </div>
    </div>
  );
};
export default AddGuardian;
