import React from 'react';
import { isMobile } from 'react-device-detect';
import "./styles.css"

interface Image {
  id: string;
  image: string;
}

interface BannerProps {
  images: Image[];
  speed?: number;
}

const Banner: React.FC<BannerProps> = ({ images, speed = 5000 }) => {
  return (
    <>
    <p className='text-accent-color italic mb-7 sm:text-[36px] text-xl'>Clients I have worked with</p>
      {isMobile?(
        <>
        <div className="banner flex gap-9">
        {images.slice(0, 5).map(({ id, image }) => (
            <div key={id}>
              <img className="" src={image} alt={id} />
            </div>
          ))}
      </div>
      <div className="banner flex gap-9 mt-5">
      {images.slice(5,10).map(({ id, image }) => (
          <div key={id}>
            <img className="" src={image} alt={id} />
          </div>
        ))}
    </div>
    </>
      ):(
        <div className="banner-inner">
<div className="banner-wrapper">
        <div className="banner-section" style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map(({ id, image }) => (
            <div key={id}>
              <img className="banner-image " src={image} alt={id} />
            </div>
          ))}
        </div>
        <div className="banner-section" style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map(({ id, image }) => (
            <div key={id}>
              <img className="banner-image" src={image} alt={id} />
            </div>
          ))}
        </div>
        <div className="banner-section" style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map(({ id, image }) => (
            <div key={id}>
              <img className="banner-image" src={image} alt={id} />
            </div>
          ))}
        </div>
      </div>
      </div>
      )}
      
    </>
  );
};

export { Banner };