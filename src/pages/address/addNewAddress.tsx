import React, { useState } from "react";
import MapSvg from "../../icons/map.svg"
import { InputBoxTitle } from "../../components/inputBoxTitle";
import { RoundButton } from "../../components/roundButton";
import CustomCheckboxSingle from "../../components/customCheckboxSingle";
import { useTranslation } from "react-i18next"
import CustomSelect from "../../components/customSelect";
import { useNavigate } from "react-router-dom";
import { useLangugageContext } from "../../contextAPI/contextAPI";
// import GoogleMapComponent from "../../components/mapsContainer";

const AddNewAddress = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const { localeLang } = useLangugageContext();
    const [primaryAddress, setPrimaryAddress] = useState<boolean>(false)
    const [sameAddress, setSameAddress] = useState<boolean>(false)
    const [options] = useState([
        'Home',
        'Pick Up'
    ]);

    const handleEventPrimary = () => {
        setPrimaryAddress(!primaryAddress)
    }

    const handleEventSame = () => {
        setSameAddress(!sameAddress)
    }

    const handleEvenClick = () => {
        console.log("Click")
        const data = {
            "address": "21 Al Manashil St, Al Shawamekh, Sector 7...",
            "pickUpType": 'Home'
        }
        navigate('/address', {state: data});
    }

    return(
        <div>
            <div className="w-full lg:h-screen sm:h-64 bg-mainBlue">
                <img src={MapSvg} className="w-full lg:h-[40rem] sm:h-80 object-cover" />
                {/* <GoogleMapComponent /> */}
            </div>
            <div className="bg-gray-100 fixed mt-10 inset-x-0 bottom-[0rem] w-full height:auto py-5 pb-10 border-t-2xl lg:rounded-t-[3rem] sm:rounded-t-[36px] px-5">
                <div className="my-4 mb-5">
                    <InputBoxTitle title={t('enterLocation')} className="border-1" />
                </div>
                <div className="my-4 mb-5 sm:max-w-sm sm:mx-auto">
                    <h1 className={`${localeLang === 'en' ? 'ml-2' : 'mr-2'} my-2`}>{t('selectType')}</h1>
                    <CustomSelect options={options} value="" onChange={() => {}} />
                    <CustomCheckboxSingle onClick={handleEventPrimary} title={t('primaryAddress')} checked={primaryAddress} />
                </div>
                <div className="my-4 mb-10 sm:max-w-sm sm:mx-auto">
                    <h1 className={`${localeLang === 'en' ? 'ml-2' : 'mr-2'} my-2`}>{t('locationType')}</h1>
                    <CustomSelect options={options} value="" onChange={() => {}} />
                    <CustomCheckboxSingle onClick={handleEventSame} title={t('sameAddress')} checked={sameAddress} />
                </div>
                <div className="mb-10">
                    <RoundButton title={t('saveText')} onClick={() => handleEvenClick()} />
                </div>
            </div>
        </div>
    )
}

export default AddNewAddress