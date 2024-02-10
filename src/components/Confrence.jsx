import React from 'react'

const Confrence = () => {
    return (
        <div className='lg:translate-y-[66px] relative z-[2]'>
            <div className='lg:max-w-[1435px] lg:container lg:mx-auto lg:px-6 max-lg:bg-[#F59330] max-sm:pt-[33px] max-sm:pb-[50px] max-lg:py-[70px]' data-aos="fade-down">
                <div className='lg:rounded-[100px] bg-[#F59330] max-lg:container px-[23px] lg:pt-[30px] lg:pb-[32px] max-lg:mx-auto lg:pr-[45px] lg:pl-[45px] xl:pl-[96px]'>
                    <div className='flex max-lg:flex-col gap-[8px] items-center justify-between'>
                        <h3 className='text-[30px] leading-[45px] text-[#fff] text-nowrap font-semibold'>Conference Attendee</h3>
                        <div className='flex max-lg:flex-col items-center gap-[17px] lg:gap-[12px]'>
                            <p className='text-[30px] leading-[45px] text-[#fff] font-bold'>$700</p>
                            <button className='rounded-[50px] hover:shadow-[0_2px_15px_rgba(255,_255,_255,_1)] hover:border-[2px] hover:border-[#fff] hover:text-[#fff] hover:border-solid hover:bg-transparent transition-all ease-linear duration-300 text-[20px] md:text-[24px] border-[#fff] border-[2px] border-solid leading-[30px] md:leading-[36px] font-normal text-[#000] bg-[#fff] px-[31px] lg:px-[39px] py-[10px] lg:py-[15px]'>EXPIRED</button>
                            <button className='rounded-[50px] hover:shadow-[0_2px_15px_rgba(0,_0,_0,_0.5)] font-normal text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] text-[#fff] hover:text-[#000] hover:border-solid hover:border-[2px] hover:border-[#000] hover:bg-transparent bg-[#000] lg:px-[53.5px] lg:py-[15px] py-[10px] px-[85px] transition-all ease-linear duration-300  border-solid border-[2px] border-[#000] text-nowrap'>VIEW SCHEDULE</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Confrence
