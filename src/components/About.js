import React from "react";
import lazy from "../assets/images/lazy.png";
const About = () => {
  return (
    <>
      <div className="about mt-0 py-16 lg:py-32 " id="about">
        <div className="container mx-auto">
          <div
            className="about__main px-6 grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-y-6 items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="about__content col-span-2">
              <h1 className="font-bold text-3xl text-center lg:text-left pb-4 lg:pb-8 text-secondary  lg:text-4xl font-heading">
                What is Lazy Boxer ?
              </h1>
              <p
                className="text-center text-default text-base lg:text-left leading-8 lg:text-xl font-body"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <span className="text-2xl font-extrabold text-secondary">
                  The Mission:
                </span>{" "}
                <br /> The lazy boxer development team is a multidimensional
                Multi-purpose team of professionals. We’re like minded and most
                Trusted individuals seeking to bring new products and services
                By engaging in research and development, information system
                Technology, and interactive multimedia programs.
                <br />
              </p>
              <br /> <br />
              <p
                className="text-center text-default text-base lg:text-left leading-8 lg:text-xl font-body"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <span className="text-2xl font-extrabold text-secondary">
                  About Us:
                </span>{" "}
                <br />
                The lazy boxer is the NFT Wallet Champion of the metaverse.{" "}
                <br />
                The lazy boxer believes in doing the right thing and helping
                others. The lazy boxer is eternally fighting for life and
                bridging the gap between the metaverse and the universe.
              </p>
            </div>
            <div
              className="about__image col-span-1 mx-auto w-96 h-96"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src={lazy}
                alt=""
                className="max-w-full rounded-full h-96 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
