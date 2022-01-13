import React from "react";

const Roadmap = () => {
  return (
    <>
      <section className="bg-[#c7ecff] py-20" id="roadmap">
        <div className="container px-4 lg:px-0 mx-auto">
          <h2 className="text-primary sm:text-center text-2xl sm:text-4xl tracking-wide leading-normal font-extrabold mb-6 sm:mb-10 uppercase text-secondary pb-8">
            Roadmap
          </h2>
          <div className="roadmap__wrapper">
            <div
              className="roadmap__items text-center lg:text-left font-heading text-white relative flex items-center flex-col pb-20 lg:flex-row "
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {/* <div className="line__holder hidden lg:block lg:w-[1px] lg:h-full bg-default absolute top-0 left-2/4 -translate-x-2/4"></div> */}
              <div className="hidden lg:block icon__holder lg:w-16 lg:h-16 bg-[#ffffff00] absolute top-2/4 left-2/4 transform rounded-full -translate-x-2/4 -translate-y-full rotate-45 before:h-8 before:w-8 before:content-[''] before:bg-secondary before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"></div>
              <div className="left__item lg:pr-20 flex-1 overflow-hidden flex bg-secondary items-center gap-10 relative rounded-r-full lg:rounded-r-none pr-12 rounded-l-full ">
                <div className="bg-default p-8 rounded-full">
                  {" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="unlock"
                    className="h-16 w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                </div>
                <div className="">
                  <h1 className="text-3xl font-bold text-white">
                    Lazy Boxer Open
                  </h1>
                </div>
              </div>
              <div className="right__item  lg:pl-20 flex-1">
                <div className="">
                  <h2 className="text-4xl font-extrabold text-default uppercase">
                    MARKET 40%
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="roadmap__items text-center lg:text-left font-heading text-white relative flex items-center flex-col pb-20 lg:flex-row-reverse "
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {/* <div className="line__holder hidden lg:block lg:w-[1px] lg:h-full bg-default absolute top-0 left-2/4 -translate-x-2/4"></div> */}
              <div className="hidden lg:block icon__holder lg:w-16 lg:h-16 bg-[#ffffff00] absolute top-2/4 left-2/4 transform rounded-full -translate-x-2/4 -translate-y-full rotate-45 before:h-8 before:w-8 before:content-[''] before:bg-secondary before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"></div>
              <div className="left__item lg:pl-20 flex-1 justify-between overflow-hidden flex flex-row-reverse bg-secondary items-center gap-10 relative rounded-r-full lg:rounded-l-none pl-12 rounded-l-full ">
                <div className="bg-default p-8 rounded-full">
                  {" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="boxes"
                    className="h-16 w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M560 288h-80v96l-32-21.3-32 21.3v-96h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16zm-384-64h224c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16h-80v96l-32-21.3L256 96V0h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16zm64 64h-80v96l-32-21.3L96 384v-96H16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16z"
                    ></path>
                  </svg>
                </div>
                <div className="">
                  <h1 className="text-3xl font-bold text-white">Lazy Boxers</h1>
                </div>
              </div>
              <div className="right__item  lg:pl-20 flex-1">
                <div className="">
                  <h2 className="text-4xl font-extrabold text-default uppercase">
                    Host Minting Event 9%
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="roadmap__items text-center lg:text-left font-heading text-white relative flex items-center flex-col pb-20 lg:flex-row "
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {/* <div className="line__holder hidden lg:block lg:w-[1px] lg:h-full bg-default absolute top-0 left-2/4 -translate-x-2/4"></div> */}
              <div className="hidden lg:block icon__holder lg:w-16 lg:h-16 bg-[#ffffff00] absolute top-2/4 left-2/4 transform rounded-full -translate-x-2/4 -translate-y-full rotate-45 before:h-8 before:w-8 before:content-[''] before:bg-secondary before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"></div>
              <div className="left__item lg:pr-20 flex-1 overflow-hidden flex bg-secondary items-center gap-10 relative rounded-r-full lg:rounded-r-none pr-12 rounded-l-full ">
                <div className="bg-default p-8 rounded-full">
                  {" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="trophy"
                    className="h-16 w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"
                    ></path>
                  </svg>
                </div>
                <div className="">
                  <h1 className="text-3xl font-bold text-white">
                    Lazy Boxers League 30%
                  </h1>
                </div>
              </div>
              <div className="right__item  lg:pl-20 flex-1">
                <div className="">
                  <h2 className="text-4xl font-extrabold text-default uppercase">
                    Lazy Boxer 1st public fight 1%
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="roadmap__items text-center lg:text-left font-heading text-white relative flex items-center flex-col lg:flex-row-reverse "
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {/* <div className="line__holder hidden lg:block lg:w-[1px] lg:h-full bg-default absolute top-0 left-2/4 -translate-x-2/4"></div> */}
              <div className="hidden lg:block icon__holder lg:w-16 lg:h-16 bg-[#ffffff00] absolute top-2/4 left-2/4 transform rounded-full -translate-x-2/4 -translate-y-2/4 rotate-45 before:h-8 before:w-8 before:content-[''] before:bg-secondary before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"></div>
              <div className="left__item lg:pl-20 flex-1 justify-between overflow-hidden flex flex-row-reverse bg-secondary items-center gap-10 relative rounded-r-full lg:rounded-l-none pl-12 rounded-l-full ">
                <div className="bg-default p-8 rounded-full">
                  {" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chalkboard-teacher"
                    className="h-16 w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"
                    ></path>
                  </svg>
                </div>
                <div className="">
                  <h1 className="text-3xl font-bold text-white">
                    Lazy Boxer Training
                  </h1>
                </div>
              </div>
              <div className="right__item  lg:pl-20 flex-1">
                <div className="">
                  <h2 className="text-4xl font-extrabold text-default uppercase">
                    Creating Camp 20%
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
