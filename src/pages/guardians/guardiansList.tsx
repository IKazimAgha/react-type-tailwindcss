import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppBar from "../../components/appbar";
import i18n from "../../configure/i18n/i18n";
import AddIcon from "../../icons/addNewIcon.svg";
import DeleteNewIcon from "../../icons/deleteNew.svg";
import ProfileAvatar from "../../components/profileAvatar";

interface Guardian {
  name: string;
  phoneNumber: string;
  profileImage: string;
  status: string;
}

const GuardiansList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [guardianList, setGuardianList] = useState<Guardian[]>(
    location.state ? [location.state] : []
  );

  const handleAddGuardian = () => {
    navigate("/addGuardian");
  };

  const handleDelete = (index: number) => {
    setGuardianList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white min-h-screen">
      <AppBar title={t("Guardians")} />

      {guardianList.length === 0 ? (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
          <h2 className="text-mainBlue font-sf-pro-rounded text-center mx-10">
            {t("addGuardianText")}
          </h2>
        </div>
      ) : (
        <div className="px-5 py-4 overflow-y-auto max-h-[calc(100vh-64px)]">
          {guardianList.map((guardian, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 rounded-3xl p-4 mb-4"
            >
              {/* Profile Image */}
              <ProfileAvatar src={guardian.profileImage} size={70}></ProfileAvatar>

              {/* Guardian Details */}
              <div className="flex-1 flex flex-col ml-4 mr-4">
                <span className="text-lg font-semibold text-gray-900">
                  {guardian.name}
                </span>
                <span className="text-sm text-gray-600">
                  {guardian.phoneNumber}
                </span>
                {/* Status & Delete Button in the same row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-600">
                    {guardian.status}
                  </span>

                  {/* Delete Button */}
                  <button onClick={() => handleDelete(index)} className="ml-4">
                    <img src={DeleteNewIcon} className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating Add Button */}
      <div
        onClick={handleAddGuardian}
        className={`fixed bottom-5 ${
          i18n.language === "ar" ? "left-5" : "right-5"
        } text-white bg-opacity-60 p-3 rounded-full shadow-md cursor-pointer`}
      >
        <img src={AddIcon} alt="Add" />
      </div>
    </div>
  );
};

export default GuardiansList;
