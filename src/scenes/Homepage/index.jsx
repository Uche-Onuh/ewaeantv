import React, { useState } from "react";

import {
  phone1,
  phone2,
  download,
  tab,
  vr,
  phone3,
  vector,
  store,
  screen,
  icon,
} from "../../assets";

import { faqs } from "../../constants";

const Homepage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="w-full h-[80vh] bg-hero-image bg-cover bg-no-repeat bg-center relative">
        <div className="bg-gradient-to-b from-black-opacity-50 to-black absolute h-full w-full"></div>

        <div className="absolute top-[70%] left-[50%] text-center translate-x-[-50%] translate-y-[-50%] text-white w-[60%] mx-auto">
          <h1 className="font-bold text-[69.73px] leading-[76.15px] mb-7">
            Escape Reality, Binge Your <br /> Dreams
          </h1>
          <p className="font-normal text-[24px] leading-[31.25px] mb-7">
            Get ready for exclusive content. Our visionary creators are crafting
            groundbreaking <br /> series and films that leave you craving for
            more.
          </p>
        </div>
      </section>

      <section className="py-5 overflow-hidden whitespace-nowrap">
        <div class="marquee ">
          <p className="inline-block text-[#101010] text-[104.12px] leading-[124.95px] font-medium mx-[70px]">
            Unlimited
          </p>
          <p className="inline-block text-[#101010] text-[104.12px] leading-[124.95px] font-medium mx-[70px]">
            Movie
          </p>
          <p className="inline-block text-[#101010] text-[104.12px] leading-[124.95px] font-medium mx-[70px]">
            Entertainment
          </p>
        </div>
      </section>

      <section className="w-[90%] mx-auto">
        <div className="flex justify-center items-center ">
          <div className="w-[50%] flex justify-start gap-0">
            <img
              src={phone1}
              alt="mobile"
              className="w-[100%] mr-[-325px] h-[909px]"
            />
            <img
              src={phone2}
              alt="mobile app"
              className="w-[100%] ml-[-325px] mt-[150px] h-[909px]"
            />
          </div>
          <div className="text-white w-[50%]">
            <div className="rounded-[100px] px-[16px] py-[10px] font-normal text-[16.71px] leading-[20.7px] bg-[#070707] mb-10 w-[238px]">
              On Our mobile application
            </div>

            <div className="w-[181px]">
              <img src={download} alt="download" className="w-[100%]" />
            </div>
            <div className="w-[65%]">
              <h1 className="font-bold text-[48px] leading-[62.5px] mb-10">
                Enjoy your offline download
              </h1>
              <p className="font-normal text-[24px] leading-[31.25px] text-[#B8B8B8]">
                Download shows for offline viewing. Look for the download option
                in the app. Enjoy your shows anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full pb-[-200px] z-[-10]">
        <div className="flex justify-center items-center  w-[90%] mx-auto">
          <div className="w-[50%]">
            <div className="w-[25.76px] h-[23.15px] mx-auto mb-[100px]">
              <img src={vector} alt="vector" className="w-full" />
            </div>
            <h1 className="font-bold text-[48px] leading-[62.5px] mb-10">
              Get to watch all your favourite movies on any device
            </h1>
            <p className="font-normal text-[24px] leading-[31.25px] mb-20">
              Stream Your Favourites, Anywhere, Anytime, <br /> on any device.
            </p>
            <div>
              <img src={store} alt="store" />
            </div>
          </div>
          <div className="w-[50%] flex justify-center ml-[-200px] mt-40">
            <img
              src={vr}
              alt="mobile"
              className="w-[100%] h-[417.06px] mt-[400px]"
            />
            <img
              src={phone3}
              alt="mobile"
              className="w-[100%] h-[885.18px] ml-[-550px]  mt-[200px] z-[1]"
            />
            <img
              src={tab}
              alt="mobile"
              className="w-[200%]  h-[885.18px] ml-[-600px] mb-[200px]"
            />
          </div>
        </div>
      </section>

      <section className="mt-[-265px] w-full bg-primary z-[-10] py-[200px]">
        <div className="flex justify-center items-center  w-[90%] mx-auto ">
          <div className=" w-[914px] h-[685.5px]">
            <img src={screen} alt="screen" className="w-full" />
          </div>
          <div className=" w-[50%] text-white">
            <div className="w-[60%]">
              <h1 className="font-bold text-[48px] leading-[62.5px] mb-10">
                Enjoy On your TV
              </h1>
              <p className="font-normal text-[24px] leading-[31.25px] mb-20">
                Watch your favourite cartoon channel with your kids.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-40">
        <div className="w-[90%] text-white mx-auto text-center">
          <h1 className="font-bold text-[48px] leading-[62.5px] mb-5">
            Frequently Asked Questions
          </h1>
          <p className="font-normal text-[16px] leading-[22px] mb-20">
            Here are some questions that have been frequently asked.
          </p>
        </div>
        <div className="w-[50%] text-white mx-auto">
          {faqs.map((faq, i) => (
            <div
              className="p-[40px] rounded-[8px] bg-[#090909] mb-3"
              key={faq.id}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggleAnswer(i)}
              >
                <p className="font-bold text-[16px] leading-[22px]">
                  {i + 1}.  {faq.question}
                </p>
                <img
                  src={icon}
                  alt="faq icon"
                  className={`transform transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-300 ${
                  openIndex === i ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <div className="mt-4 text-[14px]  text-[#f5f5f5]">
                  <p className="font-medium">{faq.reply}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Homepage;
