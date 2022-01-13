import React from "react";
// import Countdown from 'react-countdown';

const CountDown = () => {
  // const renderer = ({ days, hours, minutes }) => {
  //   return (
  //     <div className="CountDown__timer px-4 md:px-0 flex gap-16 items-center justify-center py-12 text-default">
  //       <div className="text-center">
  //         <p className="CountDown__timer-main text-3xl lg:text-7xl font-medium mb-1">
  //           {days}
  //         </p>
  //         <p className="uppercase text-xs md:text-base font-light gray-100">
  //           Days
  //         </p>
  //       </div>
  //       <div className="text-center">
  //         <p className="CountDown__timer-main text-3xl lg:text-7xl font-medium mb-1">
  //           {hours}
  //         </p>
  //         <p className="uppercase text-xs md:text-base font-light gray-100">
  //           hours
  //         </p>
  //       </div>

  //       <div className="text-center">
  //         <p className="CountDown__timer-main text-3xl lg:text-7xl font-medium mb-1">
  //           {minutes}
  //         </p>
  //         <p className="uppercase text-xs md:text-base font-light gray-100">
  //           minutes
  //         </p>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <>
      <div
        className="py-20 bg-[#c7ecff]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container mx-auto px-4 lg:px-0">
          <div className="md:px-8">
            <p className="text-center  text-3xl lg:text-5xl font-extrabold tracking-wide uppercase mb-6 text-secondary font-heading">
              "metaverse champion"
            </p>
            <p className="text-center text-xl lg:text-2xl font-bold text-default mb-4 font-body">
              Bridging the gap between the metaverse and the universe, Just
              Be-Cause... ...
            </p>
            <p className="text-center text-md lg:text-xl font-bold text-default font-body">
              The lazy boxer is fighting for life. He is the NFT Champion of the
              metaverse. The lazy boxer believes in doing the right thing and
              helping others.
            </p>
            {/* <Countdown date={Date.now() + 100} renderer={renderer} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDown;
