import React from 'react';
import { Button } from '../components/button';
import KidSVG from "../icons/kid.svg"
import SalamaSVG from "../icons/salama.svg";

const Home = () => {
    return(
        <div >
            <div className="pt-10 border-b-2 border-blue-500 rounded-lg bg-yellow-500 border-b-2 border-blue-500 rounded-b-[5rem]">
                <div className="">
                    <div className="flex justify-center">
                        <img src={SalamaSVG} />
                    </div>
                    <div>Peace of Mind, Every Ride!</div>
                    <div>
                        <img src={KidSVG} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;