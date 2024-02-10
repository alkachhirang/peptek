import React from 'react';
import { useState } from 'react';
import Headerimg from '../assets/images/png/header-img.png';
import Headerimg2 from '../assets/images/png/header-img2.png';
import Navlogo from '../assets/images/png/nav-logo.png';
import Corner1 from '../assets/images/png/hero-corner1.png';
import Corner2 from '../assets/images/png/header-corner2.png';
import Corner3 from '../assets/images/png/hero-corner3.png';
import Corner4 from '../assets/images/png/hero-corner4.png';

const Header = () => {
    const [nav, setNav] = useState(true)
    if (nav === false) {
        document.body.classList.add("max-xl:overflow-hidden");
    } else {
        document.body.classList.remove("max-xl:overflow-hidden");
    }
    return (
        <div className='relative'>
            <img src={Corner1} alt="Corner1" className='absolute top-0 left-[-27%] sm:left-[-13%] md:left-0 max-w-[230px] sm:max-w-[330px] md:max-w-[365px] lg:max-w-[470px] xl:max-w-[500px] 3xl:max-w-[580px] w-full' />
            <img src={Corner2} alt="Corner2" className='absolute top-0 right-[-27%] sm:right-[-13%] lg:right-0 lg:z-[2] max-w-[218px] sm:max-w-[300px] md:max-w-[365px] lg:max-w-[393px] xl:max-w-[466px] 3xl:max-w-[630px] w-full' />
            <img src={Corner3} alt="Corner3" className='absolute left-0 bottom-0 max-w-[180px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[880px] 3xl:max-w-[1126px] w-full' />
            <img src={Corner4} alt="Corner4" className='absolute  right-0 bottom-0 max-w-[200px] sm:max-w-[250px] md:max-w-[330px] lg:max-w-[450px] xl:max-w-[660px] 3xl:max-w-[816px] w-full' />
            <div className='container xl:max-w-[1662px] mx-auto xl:px-6 px-[23px]'>
                <div className='flex justify-between items-center relative z-[4] sm:pt-[24px] pt-[8px] xl:pt-[0]'>
                    <div className='2xl:translate-y-[80px] xl:translate-y-[42px]'>
                        <img src={Navlogo} alt="Navlogo" className='2xl:max-w-[301px] xl:max-w-[250px] md:max-w-[110px] sm:max-w-[100px] max-w-[52.32px] w-full cursor-pointer' />
                    </div>
                    <div>
                        <ul className={`${nav ? "left-[-100%]" : "left-0 bg-orange-300 "} flex items-center  gap-[50px] 2xl:gap-[72px] z-[11] flex-row max-xl:fixed max-xl:flex-col top-0 max-xl:w-full max-xl:h-full max-xl:min-h-screen max-xl:justify-center transition-all ease-linear duration-300}`}>
                            <li ><a onClick={() => setNav(!nav)} href='#SEHEDULE' className='m-0 font-normal text-[24px] text-[#1A1A1A] leading-[36px] hover:after:w-[72%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#1A1A1A] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>SEHEDULE</a></li>
                            <li ><a onClick={() => setNav(!nav)} href='#SPEAKERS' className='m-0 font-normal text-[24px] text-[#1A1A1A] leading-[36px] hover:after:w-[72%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#1A1A1A] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>SPEAKERS</a></li>
                            <li ><a onClick={() => setNav(!nav)} href='#SPONSORS' className='m-0 font-normal text-[24px] text-[#1A1A1A] leading-[36px] hover:after:w-[72%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#1A1A1A] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>SPONSORS</a></li>
                            <li ><a onClick={() => setNav(!nav)} href='#VENUE' className='m-0 font-normal text-[24px] text-[#1A1A1A] leading-[36px] hover:after:w-[72%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#1A1A1A] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>VENUE</a></li>
                            <li ><a onClick={() => setNav(!nav)} href='' className='m-0 2xl:ml-[-32px] hover:shadow-[0_2px_15px_rgba(255,_255,_255,_1)] hover:text-black hover:bg-white hover:border-[2px] hover:border-solid hover:border-[#000] border-solid border-[2px] border-[#EE612F] font-normal text-[24px] text-[#F0F0F0] leading-[36px] bg-[#EE612F] px-[62px] transition-all ease-linear duration-300 py-[15px] text-nowrap rounded-[50px]'>REGISTER NOW</a></li>
                        </ul>
                        <div onClick={() => setNav(!nav)} className='xl:hidden w-[32px] sm:h-[26px] h-[22px] relative z-[13] flex justify-between flex-col cursor-pointer'>
                            <span className={`${nav ? '' : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"} bg-[#fff] h-[4px] max-sm:max-w-[26px] w-full duration-300 ease-linear transition-all`}></span>
                            <span className={`${nav ? '' : "hidden"} bg-[#fff] h-[4px] w-full duration-300 ease-linear transition-all max-sm:max-w-[26px]`}></span>
                            <span className={`${nav ? '' : "rotate-[-50deg] translate-y-[-50%]"} bg-[#fff] h-[4px] max-sm:max-w-[26px] w-full duration-300  ease-linear transition-all`}></span>
                        </div>
                    </div>
                </div>
                <div id='SEHEDULE' className='relative xl:translate-y-[-10%] pt-[28px] sm:pt-[30px] md:pt-[20px] xl:pt-[0] pb-10'>
                    <img src={Headerimg} alt="Headerimg" className='!lg:max-w-[1614px] w-full sm:block hidden ' data-aos="fade-up" />
                    <img src={Headerimg2} alt="Headerimg2" className=' w-full sm:hidden block' data-aos="fade-up" />
                    <p className='font-black text-[48px] md:text-[60px] lg:text-[90px] leading-[72px] md:leading-[80px] lg:leading-[135px] text-[#FFFFFF] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center'>PHP[TEK] 2024</p>
                </div>
            </div >
        </div>
    )
}


export default Header;