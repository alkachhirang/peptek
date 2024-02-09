import './App.css';
import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './components/About';
import BlueSection from './components/BlueSection';
import Confrence from './components/Confrence';
import Footer from './components/Footer';
import Header from './components/Header';
import MaySection from './components/MaySection';
import Sponcer from './components/Sponcer';
import BackToTop from './assets/images/png/back-to-top.png';
import Preloader from './components/Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 800,
      }
    );
    Aos.refresh()
  });
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3700);
  }, []);
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div>
      {screenLoading ? (
        <Preloader />
      ) : (
        <>
          <div className='overflow-x-hidden'>
            <Header />
            <MaySection />
            <Confrence />
            <BlueSection />
            <Sponcer />
            <About />
            <Footer />
          </div>
          <div onClick={() => top()} className={backToTop ? "back_to_top shadow-[0_5px_16px_rgba(245,147,48,1)] border-solid border-[2px] border-[#F59330] overflow-hidden fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center rounded-[50px] bg-[#EE612F] cursor-pointer transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
            <img src={BackToTop} alt='BackToTop' className='max-w-[20px]' />
          </div>
        </>
      )
      }
    </div >



  );
}

export default App;
