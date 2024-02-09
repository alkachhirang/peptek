import React from 'react';
import Commaimg from '../assets/images/png/comma-img.webp';

const BlueSection = () => {
    return (
        <div className='bg-Bgblue lg:bg-bgsize bg-cover'>
            <div className='container xl:max-w-[1662px] mx-auto lg:px-6 px-[23px] max-sm:pt-[53px] max-sm:pb-[79px] py-[60px] md:pb-[100px]  md:pt-[150px] lg:pb-[116px]' data-aos="zoom-in">
                <div className='lg:border-[2px] lg:border-solid lg:border-[#fff] lg:max-w-[1306px] mx-auto rounded-[111px] lg:pt-[58px] lg:pr-[103px] lg:pb-[35px] lg:pl-[93px] relative '>
                    <img src={Commaimg} alt="Commaimg" className='md:absolute max-md:mb-[10px] mx-auto max-w-[73px] top-[-12%] lg:top-[-5%] left-[46%] xl:top-[-7%] xl:left-[47%]' />
                    <div className='flex justify-center items-center flex-col lg:pt-[0]'>
                        <p className='lg:max-w-[1109px] text-[#fff] mb-[36px] lg:mb-[25px] text-[20px] md:text-[39px] font-black text-center leading-[30px] md:leading-[58px]'>This was my first introduction to php[architect]’s conferences, and they’ve quickly become my favorites. A great balance of fun and education, structured and social. The organizers obviously care about the conference and the enjoyment of everyone who attends, and I can’t wait for the next one!</p>
                        <p className='text-[#fff] text-[20px] md:text-[36px] font-bold leading-[30px] md:leading-[54px] text-center'>― Previous Attendee</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlueSection;
