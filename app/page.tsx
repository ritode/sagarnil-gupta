import Image from "next/image";
import TimeoutText from "./components/TimeoutText";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-bg sm:px-[60px] px-5">
      <header className="w-full sm:py-8 py-3 mb-[68px]">
        <div className="sm:w-[58px] sm:h-[58px] w-10 h-10 bg-accent-color ml-auto"/>
      </header>
      <section className="sm:mb-[200px] sm:h-auto h-screen">
        <p className="text-text-gray text-2xl mb-[40px]">00. facts</p>
        <h1 className="text-text-white sm:text-8xl text-6xl font-bold mb-1">Sagarnil Gupta,</h1>
        <TimeoutText/>
      </section>
      <section className="lg:flex mb-[111px]">
        <p className="text-text-white lg:w-1/2 text-2xl lg:mb-0 mb-7">Sagarnil Gupta may be a Bengaluru-based visual designer known for user-centric product design and branding. He firmly believes in sleeping with his socks on.</p>
        <div className="lg:w-1/2 w-64 flex lg:flex-row flex-col items-end justify-end gap-8 text-xl">
          <Link href={'#work'} className=" lg:w-24 p-2 mx-2 hover:font-bold hover:text-accent-color transition-all ease-in-out duration-300 hover:scale-105">01.Work</Link>
          <Link href={'#play'}className=" lg:w-24 p-2 mx-2 hover:font-bold hover:text-accent-color transition-all ease-in-out duration-300 hover:scale-105">02.Play</Link>
          <Link href={'#about'}className=" lg:w-24 p-2 mx-2 hover:font-bold hover:text-accent-color transition-all ease-in-out duration-300 hover:scale-105">03.About</Link>
          <Link href={'#resume'}className=" lg:w-24 p-2 mx-2 hover:font-bold hover:text-accent-color transition-all ease-in-out duration-300 hover:scale-105">04.Resume</Link>
        </div>
      </section>
      <section className="my-[68px]">
        <div className="flex gap-3 items-center mb-10 sm:mb-[80px]">
          <svg width="100%" height="2">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="#CCC5B9" strokeWidth={2} />
          </svg>
          <h2 className=" whitespace-nowrap text-2xl"><i>01.</i> Work</h2>
        </div>
        <h3 className="sm:text-[40px] text-2xl mb-[20px]"><i>Quilio</i>- Product and Visual Design Consultant</h3>
        <Link href={'/quilio'}>
          <div className="bg-[url('/images/quilioBg.png')] bg-cover p-14 mb-10 sm:mb-[80px] h-[600px] flex transition-all ease-in-out duration-300 hover:scale-95 rounded-lg">
            <Image src={'/images/quilio.png'} width={1000} height={1000} alt="quilio" className="object-contain h-full m-auto "/>
          </div></Link>
        <h3 className="sm:text-[40px] text-2xl mb-[20px]"><i>HealthifyMe</i>- Visual Designer (Corporate)</h3>
        <Link href={'/healthifyme'}>
        <div className="bg-[#21695c] bg-cover p-14 mb-10 sm:mb-[80px] h-[600px] flex transition-all ease-in-out duration-300 hover:scale-95 rounded-lg">
            <Image src={'/images/healthify.png'} width={1000} height={1000} alt="healthify" className="object-contain h-full m-auto"/>
            </div>
            </Link>
        <h3 className="sm:text-[40px] text-2xl mb-[20px]"><i>Toppeq</i>- UI/UX strategist</h3>
        <Link href={'/toppeq'}><div className="bg-[#EC821F] bg-cover p-14 mb-10 sm:mb-[80px] h-[600px] flex transition-all ease-in-out duration-300 hover:scale-95 rounded-lg">
        <Image src={'/images/toppeq.png'} width={1000} height={1000} alt="toppeq" className="object-contain h-full m-auto"/>
        </div></Link>
        <h3 className="sm:text-[40px] text-2xl mb-[20px]"><i>Freelance</i> Projects- Max freedom. Unlimited possibilites</h3>
        <Link href={'/freelance'}><div className="bg-[url('/images/freelanceBg.png')] bg-cover p-14 mb-10 sm:mb-[80px] h-[600px] flex transition-all ease-in-out duration-300 hover:scale-95 rounded-lg">
        <Image src={'/images/freelance.png'} width={1000} height={1000} alt="freelance" className="object-contain h-full m-auto"/>
        </div></Link>
      </section>
      <section className="mt-[68px]">
        <div className="flex gap-3 items-center mb-[40px]">
          <svg width="100%" height="2">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="#CCC5B9" strokeWidth={2} />
          </svg>
          <h2 className=" whitespace-nowrap text-2xl"><i>XX</i> - Socials</h2>
          </div>
          <div className="text-xl flex md:flex-row flex-col items-center justify-between px-24 pb-20">
            <a className="md:w-24 p-2 mx-2 hover:font-bold hover:text-accent-color transition-all ease-in-out duration-300 hover:scale-105">Facebook</a>
            <a className="md:w-24 p-2 mx-2 hover:font-bold hover:text-accent-color transition-all ease-in-out duration-300 hover:scale-105">Instagram</a>
            <a className="md:w-24 p-2 mx-2 hover:font-bold hover:text-accent-color transition-all ease-in-out duration-300 hover:scale-105">LinkedIn</a>
            <a className="md:w-24 p-2 mx-2 hover:font-bold hover:text-accent-color transition-all ease-in-out duration-300 hover:scale-105">Discord</a>
          </div>
          </section>
    </main>
  );
}
