import React, { useState } from "react";
import AddIcon from "../../icons/addNewIcon.svg"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"

const Address = () => {
    const {t} = useTranslation();
    const [addressList, setAddressList] = useState([])
    const navigate = useNavigate();

    const handleEvent = () => {
        navigate('/addAddress')
    }

    return(
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div  className="text-mainBlue text-center font-sf-pro-rounded font-normal text-normal">
                <h5>
                    There are no addresses added yet.
                </h5>
                <h5>
                    To add one, click Plus (+)
                </h5>
            </div>
            <div onClick={() => handleEvent()} className="fixed bottom-0 right-5 text-white bg-opacity-60 p-3 rounded">
                <img src={AddIcon} />
            </div>
        </div>
    )
}

export default Address