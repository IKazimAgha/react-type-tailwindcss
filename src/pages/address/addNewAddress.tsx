import React from "react";
import MapSvg from "../../icons/map.svg"
import { InputBoxTitle } from "../../components/inputBoxTitle";
import { RoundButton } from "../../components/roundButton";
import CustomCheckboxSingle from "../../components/customCheckboxSingle";

const AddNewAddress = () => {
    return(
        <div>
            <div className="w-full h-64 bg-mainBlue">
                <img src={MapSvg} className="w-full object-cover" />
            </div>
            <div className="bg-gray-100 fixed inset-x-0 bottom-[8rem] w-full height:auto py-5 pb-10 border-t-2xl rounded-t-[36px] px-5">
                <div className="my-4 mb-5">
                    <InputBoxTitle title="Enter Location" className="border-1" />
                </div>
                <div className="my-4 mb-5">
                    <InputBoxTitle title="Select Type" className="border-1" />
                    <CustomCheckboxSingle title="Primary Address" />
                </div>
                <div className="my-4 mb-5">
                    <InputBoxTitle title="Loation Type" className="border-1" />
                    <CustomCheckboxSingle title="Same address for drop off" />
                </div>
                <div>
                    <RoundButton />
                </div>
            </div>
        </div>
    )
}

export default AddNewAddress