import React from "react";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <>
      <div
        className="mt-8 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-24 lg:mb-24 text-center "
        id="faq"
      >
        <div className="container mx-auto">
          <h2 className="text-primary sm:text-center text-2xl sm:text-4xl tracking-wide leading-normal font-bold mb-6 sm:mb-10 uppercase text-secondary py-8">
            Faq
          </h2>
          <div className="px-4 pt-4 sm:pt-8 font-body">
            <div
              className="text-left border-b-2 border-[#c7ecff] border-opacity-30"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="HOW DO I MINT A LAZY BOXER?"
                  content="You will be able to mint directly from the website after the launch. We will announce our whitelist mint and public mint on our discord server. "
                />
              </div>
            </div>

            <div
              className="text-left border-b-2 border-[#c7ecff] border-opacity-30"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="WHAT ARE THE ADVANTAGES OF WHITELISTING?"
                  content="Whitelist members will get access to our exclusive channel, First access to mint, More Nft Giveaways, and more!"
                />
              </div>
            </div>

            <div
              className="text-left border-b-2 border-[#c7ecff] border-opacity-30"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="HOW CAN I GET WHITELISTED?"
                  content="Join Our Discord to find information on how to get whitelist"
                />
              </div>
            </div>

            <div
              className="text-left border-b-2 border-[#c7ecff] border-opacity-30"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="HOW CAN I GET LAZY BOXER NFT MERCH?"
                  content="We plan on launching our merchandise store at 30% mint"
                />
              </div>
            </div>

            <div
              className="text-left border-b-2 border-[#c7ecff] border-opacity-30"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="HOW CAN I GET MORE INFORMATION?"
                  content="Join us on our discord channel or on our twitter page and Instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
