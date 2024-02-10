import React from 'react';

const Sponcer = () => {
    return (
        <div id='SPONSORS' className='md:bg-Sponcerimg1 max-md:bg-Sponcerimg2 bg-no-repeat md:bg-cover bg-bgsize max-sm:h-[722px] sm:h-[860px] lg:bg-bgsize mt-[20px] sm:mt-[27px] md:h-[418px]'>
            <div className='container xl:max-w-[1662px] mx-auto lg:px-6 px-[23px]'>
                <div className='flex flex-row flex-wrap '>
                    <div className='xl:w-[53%] w-full' data-aos="fade-right">
                        <div className=' flex justify-center items-center flex-col pt-[50px] sm:pt-[80px] md:pt-[118px]'>
                            <p className='md:text-[36px] text-[20px] font-black leading-[30px] md:leading-[54px] text-center md:max-w-[854px] text-[#fff] mb-[24px] lg:mb-[32px] mt-[25px] lg:mt-[0]'>Interested in becoming a sponsor and getting
                                exposure to our audience?</p>
                            <button className='rounded-[50px] hover:shadow-[0_2px_15px_rgba(0,_0,_0,_0.5)] font-normal text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] text-[#fff] hover:text-[#000] bg-[#000] lg:px-[61px] lg:py-[16px] py-[11px] px-[62px] text-nowrap hover:border-[2px] hover:border-solid hover:border-[#000] hover:bg-transparent border-[2px] border-solid border-[#000] transition-all duration-300 ease-linear'>SPONSOR THE EVENT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponcer
