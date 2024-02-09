import React from 'react';
import { TwitterIcon, FacebookIcon, InIcon, Mail } from './Iconimg';

const Footer = () => {
    return (
        <div className='flex justify-center items-center flex-col pt-[93px] md:pt-[124px] pb-[21px] sm:pb-[60px]'>
            <div className='flex gap-[21px] pb-[19px] md:pb-[25.49px]'>
                <TwitterIcon />
                <FacebookIcon />
                <InIcon />
                <Mail />
            </div>
            <ul className='flex md:flex-row flex-col items-center gap-[15px] md:gap-[40px] lg:gap-[50px] md:pb-[25.49px] pb-[40px]'>
                <li>
                    <a href='' className='xl:text-[30px] text-[16px] sm:text-[27px] text-nowrap text-[#F59330] font-bold leading-[45px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#F59330] after:h-[4px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Code of Conduct</a>
                </li>
                <li>
                    <a href='' className='xl:text-[30px] text-[16px] sm:text-[27px] text-nowrap text-[#F59330] font-bold leading-[45px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#F59330] after:h-[4px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Privacy Policy</a>
                </li>
                <li>
                    <a href='' className='xl:text-[30px] text-[16px] sm:text-[27px] text-nowrap text-[#F59330] font-bold leading-[45px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#F59330] after:h-[4px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Refund Policy</a>
                </li>
            </ul>
            <p className='font-normal xl:text-[30px] text-[16px] sm:text-[27px] text-[#26221D] text-center leading-[45px]'>© 2024 PHP Architect, LLC</p>
        </div>
    )
}

export default Footer;
