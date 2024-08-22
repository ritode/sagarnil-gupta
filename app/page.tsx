import Image from "next/image";
import TimeoutText from "./components/TimeoutText";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-bg px-[60px]">
      <header className="w-full py-8 mb-[68px]">
        <div className="w-[58px] h-[58px] bg-accent-color ml-auto"/>
      </header>
      <section className="mb-[200px]">
        <p className="text-text-gray text-2xl mb-[40px]">00. facts</p>
        <h1 className="text-text-white text-8xl font-bold">Sagarnil Gupta,</h1>
        <TimeoutText/>
      </section>
      <section className="sm:flex mb-[111px]">
        <p className="text-text-white w-1/2 text-2xl">Sagarnil Gupta may be a Bengaluru-based visual designer known for user-centric product design and branding. He firmly believes in sleeping with his socks on.</p>
        <div className="w-1/2 flex items-end justify-end gap-8 text-xl">
          <Link href={'#work'} className=" w-24 p-2 mx-2 hover:font-bold transition-all ease-in-out duration-300 hover:scale-105">01.Work</Link>
          <Link href={'#play'}className=" w-24 p-2 mx-2 hover:font-bold transition-all ease-in-out duration-300 hover:scale-105">02.Play</Link>
          <Link href={'#about'}className=" w-24 p-2 mx-2 hover:font-bold transition-all ease-in-out duration-300 hover:scale-105">03.About</Link>
          <Link href={'#resume'}className=" w-24 p-2 mx-2 hover:font-bold transition-all ease-in-out duration-300 hover:scale-105">04.Resume</Link>
        </div>
      </section>
      <section className="my-[68px]">
        <div className="flex gap-3 items-center mb-[80px]">
          <svg width="100%" height="2">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="#CCC5B9" strokeWidth={2} />
          </svg>
          <h2 className=" whitespace-nowrap text-2xl"><i>01.</i> Work</h2>
        </div>
        <h3 className="text-[40px] mb-[20px]"><i>Quilio</i>- Product and Visual Design Consultant</h3>
        <Link href={'/quilio'}><Image src={'/images/quilio.png'} width={1000} height={1000} alt="quilio" className="object-cover w-full h-[600px] mb-[80px] transition-all ease-in-out duration-300 hover:scale-95"/></Link>
        <h3 className="text-[40px] mb-[20px]"><i>HealthifyMe</i>- Visual Designer (Corporate)</h3>
        <Link href={'/healthifyme'}><Image src={'/images/healthify.png'} width={1000} height={1000} alt="healthify" className="object-cover w-full h-[600px] mb-[80px] transition-all ease-in-out duration-300 hover:scale-95"/></Link>
        <h3 className="text-[40px] mb-[20px]"><i>Toppeq</i>- UI/UX strategist</h3>
        <Link href={'/toppeq'}><Image src={'/images/toppeq.png'} width={1000} height={1000} alt="toppeq" className="object-cover w-full h-[600px] mb-[80px] transition-all ease-in-out duration-300 hover:scale-95"/></Link>
        <h3 className="text-[40px] mb-[20px]"><i>Freelance</i> Projects- Max freedom. Unlimited possibilites</h3>
        <Link href={'/freelance'}><Image src={'/images/freelance.png'} width={1000} height={1000} alt="freelance" className="object-cover w-full h-[600px] mb-[80px] transition-all ease-in-out duration-300 hover:scale-95"/></Link>
      </section>
      <section className="mt-[68px]">
        <div className="flex gap-3 items-center mb-[40px]">
          <svg width="100%" height="2">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="#CCC5B9" strokeWidth={2} />
          </svg>
          <h2 className=" whitespace-nowrap text-2xl"><i>XX</i> - Socials</h2>
          </div>
          <div className="text-xl flex justify-between px-24 pb-20">
            <a className="w-24 p-2 mx-2 hover:font-bold transition-all ease-in-out duration-300 hover:scale-105">Facebook</a>
            <a className="w-24 p-2 mx-2 hover:font-bold transition-all ease-in-out duration-300 hover:scale-105">Instagram</a>
            <a className="w-24 p-2 mx-2 hover:font-bold transition-all ease-in-out duration-300 hover:scale-105">LinkedIn</a>
            <a className="w-24 p-2 mx-2 hover:font-bold transition-all ease-in-out duration-300 hover:scale-105">Discord</a>
          </div>
          </section>
    </main>
  );
}
