import React from 'react';
import { Button } from '../components/button';
import KidSVG from "../icons/kid.svg"
import SalamaSVG from "../icons/salama.svg";
import { InputBox } from '../components/inputBox';
import { ButtonIcon } from '../components/buttonIcon';
import SignInSVG from "../icons/signIn.svg";
import ThumbSVG from "../icons/thumb.svg";

const Home = () => {
    return(
        <div >
            <div className="pt-20 border-b-2 bg-mainYellow border-b-2 rounded-b-[5rem]">
                <div className='flex justify-between pr-10'>
                    <div>
                        <img src={KidSVG} />
                    </div>
                    <div className='grid text-right'>
                        <div className="flex justify-center">
                            <img src={SalamaSVG} />
                        </div>
                        <div className="text-mainBlue text-xl">
                            <div>Peace of Mind,</div>
                            <div className="ml-6"> Every Ride!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center m-4'>
                <h5 className='text-mainBlue font-sf-pro-rounded'>Login with mobile number registered in school</h5>
                <div className='mt-5'>
                    <InputBox />
                </div>
                <div>
                    <ButtonIcon title='Sign In' icon={SignInSVG} />
                </div>
                <div>
                    <ButtonIcon title='Sign in with UAE PASS' icon={ThumbSVG} customStyle='bg-white text-mainBlue' />
                </div>
            </div>
        </div>
    )
}

export default Home;