import React,{useState, useEffect} from 'react'
import useFadeInOnScroll from '@/app/hooks/useFadeInOnScroll'
import useWindowWidth from '@/app/hooks/useWindowWidth';

interface Props {
    texts:string[],
    className?:string
}
const FadeInP = ({texts, className=''}:Props) => {
    const [isMounted, setIsMounted] = useState(false);
  const textRefs = useFadeInOnScroll();
  const windowWidth = useWindowWidth();

  const isSmallScreen = windowWidth < 1024;
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    !isSmallScreen?
        <p ref={(el) => {
            textRefs.current[0] = el;
          }} className="fade-in text-text-white lg:w-1/2 text-2xl lg:mb-0 mb-7">Sagarnil Gupta may be a Bengaluru-based visual designer known for user-centric product design and branding.</p>:
        
    <div className={className}>
    {texts.map((text,index)=><p ref={(el) => {
        textRefs.current[index] = el;
      }} key={index} className='fade-in text-text-white lg:w-1/2 sm:text-2xl text-xl lg:mb-0' dangerouslySetInnerHTML={{ __html: text }}/>)}
      </div>
  )
}

export default FadeInP