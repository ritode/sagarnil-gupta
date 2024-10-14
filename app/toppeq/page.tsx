'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect';
import "./styles.css"

const images = [
  {
    mobileImage: '/images/toppeq/mobile/1.png',
    desktopImage: '/images/toppeq/desktop/1.png',
    subtext: '1. Digital Tax Form',
  },
  {
    mobileImage: '/images/toppeq/mobile/2.png',
    desktopImage: '/images/toppeq/desktop/2.png',
    subtext: '2. Funding Round Dashboard',
  },
  {
    mobileImage: '/images/toppeq/mobile/3.png',
    desktopImage: '/images/toppeq/desktop/3.png',
    subtext: '3. Scenario Modelling (Clearlist)',
  },
];

const Toppeq = () => {
  const [showImage, setShowImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imageCount, setImageCount] = useState<number>(0);

  useEffect(() => {
    if (showImage !== null) {
      // Fetch the number of images in the folder
      fetch(`/images/toppeq/${showImage + 1}/count.json`)
        .then(response => response.json())
        .then(data => setImageCount(data.count))
        .catch(error => console.error('Error fetching image count:', error));
    }
  }, [showImage]);

  const handleCloseOverlay = () => {
    setShowImage(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageCount) % imageCount);
  };

  return (
    <main className=" bg-bg sm:px-[60px] px-5">
      <header className="w-full sm:py-8 py-3 mb-[68px] flex">
        <Link href={'/'} className='flex'>
          <Image src={'/images/home.png'} width={100} height={100} alt="toppeq" className="w-6 h-6 sm:w-10 sm:h-10 m-auto"/>
        </Link>
        <span className='font-extrabold italic sm:text-[40px] text-2xl ml-auto'>Toppeq</span>
      </header>
      <div className='md:px-[10%] px-0'>
        <h1 className='font-semibold sm:text-[36px] text-2xl mb-12'>01. UX/UI Strategist</h1>
        <div className="bg-[#EC821F] bg-cover p-14 mb-10 sm:mb-[80px] md:h-[600px] sm:h-[200px] h-[156px] flex transition-all ease-in-out duration-300 rounded-lg">
          <Image src={'/images/toppeq.png'} width={1000} height={1000} alt="toppeq" className="object-contain h-full m-auto"/>
        </div>
        <p className=' sm:text-center text-text-gray'>
          At Toppeq, Asia&apos;s first 360-degree cap table and working capital management platform, I had the opportunity to be part of a groundbreaking team. Our mission was to bring transparency to equity management, using AI and expertise from seasoned hedge fund professionals. 
        </p>
        <br/>
        <p className=' sm:text-center mb-12'>
          We built a cloud-based platform that provided startups and venture capitalists with real-time financial and regulatory insights. I worked on creating a seamless user experience that allowed clients to extract actionable data, manage cash flow, and make informed decisions with accurate, reconciled information. Though Toppeq has since closed, it was an exciting and innovative journey where I learned a great deal about designing impactful financial solutions.
        </p>
        <h1 className='text-accent-color mt-[60px] mb-[40px] font-medium text-4xl'>Features I worked on</h1>
        <div className='flex gap-[40px] pb-32 flex-wrap'>
          {images.map(({ mobileImage, desktopImage, subtext}, index) => (
            <div key={subtext} className="image-container cursor-pointer" onClick={()=>{setShowImage(index)}}>
              <p className='font-light text-text-white text-xl truncate mb-5 w-full'>{subtext}</p>
              <div>
                <Image src={isMobile?mobileImage: desktopImage} width={1000} height={1000} alt="toppeq" className="responsive-image object-contain h-full m-auto"/>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showImage !== null && (
        <div className='overlay bg-opacity-70 bg-black h-screen w-screen fixed top-0 left-0 flex justify-center items-center'>
          <div className='max-h-[85vh] max-w-[85vw] overflow-scroll'>
            <button
              className='absolute top-0 right-0 m-4 text-white text-2xl'
              onClick={handleCloseOverlay}
            >
              &times;
            </button>
            {imageCount > 1 && (
              <button
                className='absolute sm:left-8 left-[40%] bottom-0 sm:top-1/2 transform -translate-y-1/2 text-white text-2xl'
                onClick={handlePrevImage}
                disabled={currentImageIndex === 0}
              >
                &lt;
              </button>
            )}
            <Image
              src={`/images/toppeq/${showImage + 1}/${currentImageIndex + 1}.png`}
              width={1000}
              height={1000}
              alt="toppeq"
              className="object-contain h-full m-auto p-2"
            />
            {imageCount > 1 && (
              <button
                className='absolute sm:right-8 sm:top-1/2 right-[40%] bottom-0 transform -translate-y-1/2 text-white text-2xl'
                onClick={handleNextImage}
              >
                &gt;
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Toppeq;