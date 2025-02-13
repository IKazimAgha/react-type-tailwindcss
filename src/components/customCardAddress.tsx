import React from 'react';
import HomeIconSVG from '../icons/homeIconAdd.svg';
import HorzSelectIcon from "../icons/horzSelectIcon.svg";
import DummyMapIcon from "../icons/dummyMap.svg";

const CustomCard = () => {
    return(
        <div className='bg-mainGray border border-5 rounded-3xl border-mainGray w-full h-[15rem] m-5'>
            <div className='flex w-full justify-between px-5 py-2'>
                <div className='h-[2.5rem] w-[2.5rem] rounded-full bg-iconBG flex items-center justify-center'>
                    <img src={HomeIconSVG} />
                </div>
                <div>
                    <h1 className='font-normal font-sf-pro-rounded text-mainBlue'>
                        Home
                    </h1>
                    <h5 className='text-[0.75rem] font-sf-pro-rounded text-mainBlueTint'>
                        21 Al Manashil St, Al Shawamekh, Sector 7...
                    </h5>
                </div>
                <div>
                    <img src={HorzSelectIcon} />
                </div>
            </div>
            <div className='flex w-full justify-between px- h-[10rem] py-2 pr-0'>
                <img src={DummyMapIcon} className='object-cover w-full px-5 rounded-xl' />
            </div>
        </div>
    )
}

export default CustomCard;