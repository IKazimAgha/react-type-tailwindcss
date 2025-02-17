import React, { useEffect } from 'react';
import { Button } from '../components/button';
import KidSVG from "../icons/kid.svg"
import SalamaSVG from "../icons/salama.svg";
import { useNavigate } from "react-router"

const Home = () => {
    const navigation = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigation("/login")
        }, 5000)
    }, [])

    return(
        <div >
            <div className="pt-20 border-b-2 bg-mainYellow border-b-2 border-blue-500 rounded-b-[5rem]">
                <div className="">
                    <div className="flex justify-center">
                        <img src={SalamaSVG} />
                    </div>
                    <div className="float-right text-mainBlue pr-10 text-2xl">
                        <div>Peace of Mind,</div>
                        <div className="ml-6"> Every Ride!</div>
                    </div>
                    <div className="">
                        <img src={KidSVG} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;