import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsGithub } from "react-icons/bs"
import { FaTelegram } from "react-icons/fa"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/xasan.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import Logo from "../public/logo.png"
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import uzLeng from "../public/uz-lang.svg"
import ruLeng from "../public/ru-lang.svg"
import usLeng from "../public/us-lang.svg"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [iconLang , setIconLeng] = useState(false)
  const changeLeng =()=>{
    setIconLeng(!iconLang)
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-5 dark:bg-gray-900 md:px-20 lg:px-40 ">
        <section className="min-h-screen">
          <nav className="py-10 sx:py-6  xr:py-5 sm:py-8 xr:mb-6 sx:mb-8 sm:mb-12 mb-12 flex justify-between dark:text-white">
            <Image src={Logo} alt="logo" className="logo" />
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 xr:ml-4 sx:ml-4 sm:ml-6 md:ml-8 xs:ml-3"
                  href={"Resume"}
                >
                  Resume
                </a>
              </li>
              <div className="header nav">
                <div className="head-languages">
                  <button className={`head-lang lang-uz ${!iconLang && 'active'}`} onClick={()=>changeLeng()}>
                    <span className="text-white font-semibold text-xl mr-1">UZ</span>
                    <Image src={uzLeng} alt="UzLang"/>
                  </button>
                  <button className={`head-lang lang-ru ${iconLang && 'active'}`} onClick={()=>changeLeng()}>
                    <span className="text-white font-semibold text-xl mr-1">RU</span>
                    <Image src={ruLeng} alt="usLang"/>
                  </button>
                  <button className={`head-lang lang-us ${iconLang && 'active'}`} onClick={()=>changeLeng()}>
                    <span className="text-white font-semibold text-xl mr-1">US</span>
                    <Image src={usLeng} alt="usLang"/>
                  </button>
                </div>
              </div>
            </ul>
          </nav>
          <div className="text-center p-10 xr:p-0 sm:p-7 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Xasan Djuraev
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and frontend content needs. Join me down below and
              lets get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 sm:gap-16 xs:gap-10 sx:gap-8 xr:gap-6 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://web.telegram.org/k/" className=""><FaTelegram /></a>
              <a href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit"><AiFillLinkedin />
              </a>
              <a href="https://www.youtube.com/channel/UCRPRZJbj9RnPxY0ntrM0bgA"><AiFillYoutube /></a>
              <a href="https://github.com/xasandj1?tab=repositories"><BsGithub /></a>
            </div>
            <div className="flex items-center justify-center mx-auto bg-gradient-to-b from-teal-500 rounded-full 
             w-96 h-96 relative overflow-hidden mt-20 sm:h-96 sm:w-96 xr:h-52 xr:w-52">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div className="sm:py-3 xr:py-4 py-0">
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance frontend and
              developer, Ive done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Next.JS
              </h3>
              <p className="py-2">
                Creating an elegant website that suits your needs according to the basic theory of the visual
                interface.
              </p>
              <h4 className="py-4 text-teal-600">Next Tools I JS</h4>
              <p className="text-gray-800 py-1">Clients Interface</p>
              <p className="text-gray-800 py-1">API</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adaptive</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                React.JS your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Lets make it a
                reality.You tell me what to do and leave it to me.
              </p>
              <h4 className="py-4 text-teal-600">React Tools I JS</h4>
              <p className="text-gray-800 py-1">Clients Interface</p>
              <p className="text-gray-800 py-1">API</p>
              <p className="text-gray-800 py-1">Hooks</p>
              <p className="text-gray-800 py-1">Adaptive</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Tailwind.CSS</h3>
              <p className="py-2">This language is important for your website to avoid website crashes, thinking
                of you and me.</p>
              <h4 className="py-4 text-teal-600">Tailwind Tools I CSS</h4>
              <p className="text-gray-800 py-1">Adaptive</p>
              <p className="text-gray-800 py-1">Responsive</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance frontend and
              developer, Ive done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand frontend,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://riksha.vercel.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://rhinos.vercel.app/" >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
