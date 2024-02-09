import React from 'react';
import Typewriter from 'typewriter-effect';
import Preloaderimg from '../assets/images/png/nav-logo.png';

const Preloader = () => {
    return (
        <div>
            <div className='flex items-center justify-center flex-col min-h-screen bg-[#EE612F]'>
                <div className='flex justify-center items-center'>
                    <img src={Preloaderimg} alt="Preloaderimg" className='max-w-[200px] w-full image_animation' />
                </div>
                <h2 className='text-[50px] font-bold text-[#fff] text-center mt-[20px]'>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            deletespeed: true,
                            delay: 90,
                            strings: ['PHPTEK']

                        }}
                    />
                </h2>
            </div>
        </div>
    )
}

export default Preloader;
