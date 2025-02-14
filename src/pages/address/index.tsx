import React, { useEffect, useState } from "react";
import AddIcon from "../../icons/addNewIcon.svg"
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"
import CustomCard from "../../components/customCardAddress";

interface AddressListProps{
    pickUpType: string,
    address: string
}

const Address = () => {
    const {t} = useTranslation();
    const location = useLocation();
    const [addressList, setAddressList] = useState<AddressListProps[]>([])
    const propsData = location.state;
    const navigate = useNavigate();
    const handleEvent = () => {
        navigate('/addAddress')
    }

    useEffect(() => {
        if(!!propsData){
            const {pickUpTpe, address} = propsData;
            setAddressList([{pickUpType: pickUpTpe, address: address}])
        }
    }, [propsData])

    const onClickEdit = () => {

    }

    const onClickDelete = () => {

    }

    const onClickOpenMenu = () => {
        console.log("open menu")
    }

    return(
        <div>
            {!!addressList && !(addressList.length > 0) && (
                <div className="h-screen flex items-center justify-center bg-gray-100">
                    <div onClick={() => handleEvent()} className="fixed bottom-0 right-5 text-white bg-opacity-60 p-3 rounded">
                        <img src={AddIcon} />
                    </div>
                </div>
            )}
            <div className="h-screen flex justify-center bg-gray-100">
                {
                    addressList && addressList.length > 0 && (
                        <CustomCard onClickAddress={() => {}}  onClickMenu={() => onClickOpenMenu()}/>
                    )
                }
            </div>
        </div>
    )
}

export default Address