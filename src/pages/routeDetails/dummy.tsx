import React from 'react';
import Navbar from '../navBar/navbar';
import { useNavigate } from 'react-router-dom'

import AbsencePerson from "../../icons/absencePerson.svg";
import CallSVG from "../../icons/callSVG.svg";
import EmailSVG from "../../icons/emailSolid.svg";
import TripHistory from "../../icons/tripHistorySvg.svg";
import UserProfile from "../../icons/userProfile.svg";
import ViberSVG from "../../icons/viber.svg";
import MaleSVG from "../../icons/male.svg";
import MainBusSVG from "../../icons/mainBusBig.svg";
import GoogleMapComponent from '../../components/maps/mapContianerCover';

const RouteDetails = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Navbar title='' onClickArrow={() => navigate('/routeStatus')} />
            <div className='h-screen'>
                <GoogleMapComponent />
            </div>
            <div className=" border-2 h-1/2 rounded-tl-3xl rounded-tr-3xl bg-white border-mainBlue px-2">
                <section className='w-full bg-mainYellowTint border-2 border-mainYellowTint pl-3 py-3 my-4 rounded-3xl flex justify-between items-center'>
                    <section className='w-2/4'>
                        <section className='flex my-2'>
                            <img src={MaleSVG} />
                            <div className='flex flex-col ml-2'>
                                <h1 className='font-sf-pro-rounded font-semibold text-2xl leading-24 tracking-0 text-mainBlue'>Shriharsha</h1>
                                <h5 className='text-mainBlueTint'>Bus Driver</h5>
                            </div>
                        </section>
                        <section className='flex justify-between'>
                            <div className='border-2 bg-mainYellow border-mainYellow rounded-full py-2 w-[8rem] flex justify-center items-center'>
                                <img src={UserProfile} />
                                <h1 className='ml-2 font-sf-pro-rounded text-sm font-normal leading-22 text-mainBlue'>Driver Profile</h1>
                            </div>
                            <img src={ViberSVG} className='' />
                        </section>
                    </section>
                    <section className='w-[15rem] flex justify-end'>
                        <img src={MainBusSVG} className='object-cover w-[12rem] h-full' />
                    </section>
                </section>
                <h1 className='font-sf-pro-rounded font-bold text-lg leading-24 tracking-0.8p text-center text-mainBlue'>Quick Actions</h1>
                <div className='flex flex-row flex-wrap justify-between space-x5'>
                    <div className='flex w-[12rem] border bg-grayDark px-[1rem] py-[1rem] flex justify-start items-center rounded-3xl my-2'>
                        <div className='w-10 h-10 border bg-white rounded-full flex justify-center items-center'>
                            <img src={AbsencePerson} className='w-5 h-5' />
                        </div>
                        <h5 className='font-sf-pro-rounded text-base ml-2'>Absence</h5>
                    </div>
                    <div className='flex w-[12rem] border bg-mainBlueMid px-[1rem] py-[1rem] flex justify-start items-center rounded-3xl my-2'>
                        <div className='w-10 h-10 border bg-white rounded-full flex justify-center items-center'>
                            <img src={CallSVG} className='w-5 h-5' />
                        </div>
                        <h5 className='font-sf-pro-rounded text-base ml-2'>Call</h5>
                    </div>
                    <div className='flex w-[12rem] border bg-mainBlueNormal px-[1rem] py-[1rem] flex justify-start items-center rounded-3xl my-2'>
                        <div className='w-10 h-10 border bg-white rounded-full flex justify-center items-center'>
                            <img src={EmailSVG} className='w-5 h-5' />
                        </div>
                        <h5 className='font-sf-pro-rounded text-base ml-2'>Email</h5>
                    </div>
                    <div className='flex w-[12rem] border bg-mainBlueThin px-[1rem] py-[1rem] flex justify-start items-center rounded-3xl my-2'>
                        <div className='w-10 h-10 border bg-white rounded-full flex justify-center items-center'>
                            <img src={TripHistory} className='w-8 h-8' />
                        </div>
                        <h5 className='font-sf-pro-rounded text-base ml-2'>Trip History</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteDetails;