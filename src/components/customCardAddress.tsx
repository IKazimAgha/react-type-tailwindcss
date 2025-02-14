import React from 'react';
import HomeIconSVG from '../icons/homeIconAdd.svg';
import HorzSelectIcon from "../icons/horzSelectIcon.svg";
import DummyMapIcon from "../icons/dummyMap.svg";

interface CustomCardInterface{
    onClickMenu: any;
    onClickAddress: any;
}

const CustomCard: React.FC<CustomCardInterface> = ({onClickAddress, onClickMenu}) => {
    return(
        <div className='bg-mainGray border lg:mx-[10rem] border-5 rounded-3xl border-mainGray w-ful h-[17rem] sm:h-[17rem] sm:h-[15rem] lg:h-[30rem] m-5'>
            <div className='flex w-full sm:justify-between lg:sm-justify-start lg:w-max-auto px-5 py-2'>
                <div className='h-[2.5rem] w-[2.5rem] rounded-full bg-iconBG flex items-center justify-center'>
                    <img src={HomeIconSVG} />
                </div>
                <div className='flex flex-col ml-[1rem] mr-[1.5rem] lg:w-2/4'>
                    <h1 className='font-normal font-sf-pro-rounded text-mainBlue'>
                        Home
                    </h1>
                    <h5 className='text-[0.75rem] font-sf-pro-rounded text-mainBlueTint'>
                        21 Al Manashil St, Al Shawamekh, Sector 7...
                    </h5>
                </div>
                <div className='flex lg:w-1/4 sm:w-full lg:justify-end' onClick={() => onClickMenu()}>
                    <img src={HorzSelectIcon} />
                </div>
            </div>
            <div className='flex w-full justify-between px- sm:h-[10rem] lg:h-[24rem] py-2 pr-0'>
                <img src={DummyMapIcon} className='object-cover w-full px-5 rounded-xl' />
            </div>
        </div>
    )
}

export default CustomCard;