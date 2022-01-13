import React from "react";
import image1 from "../assets/images/team/3874.png";
import image2 from "../assets/images/team/3781.png";
import image3 from "../assets/images/team/384.png";
import image4 from "../assets/images/team/523.png";
import image5 from "../assets/images/team/2602.png";
import image6 from "../assets/images/team/2977.png";
import image7 from "../assets/images/team/3048.png";
import image8 from "../assets/images/team/536.png";
import image9 from "../assets/images/team/3387.png";
import image10 from "../assets/images/team/3874.png";

const Team = () => {
  return (
    <>
      <div className="team py-20 bg-[#c7ecff]" id="team">
        <div className="container mx-auto">
          <div
            className="team__inner px-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1
              className="font-extrabold text-2xl text-center pb-6 lg:pb-12 text-secondary lg:text-center lg:text-3xl uppercase "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              The lazy boxer team
            </h1>
            <div className="team__wrapper grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
              <div
                className="team__content bg-white border-2 border-gray-100 py-4 px-4 rounded-lg "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={image1} alt="" className="max-w-full   mx-auto" />
                <h3 className="text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-default">
                  Williams James
                </h3>
                <p className="text-center text-default font-body">Founder(s)</p>
              </div>
              <div
                className="team__content bg-white border-2 border-gray-100 py-4 px-4 rounded-lg "
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img src={image2} alt="" className="max-w-full   mx-auto" />
                <h3 className="text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-default">
                  Ceasar Delgadillo
                </h3>
                <p className="text-center text-default font-body">
                  Co-Founder aka Heavyweight Champ
                </p>
              </div>
              <div
                className="team__content bg-white border-2 border-gray-100 py-4 px-4 rounded-lg "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <img src={image3} alt="" className="max-w-full   mx-auto" />
                <h3 className="text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-default">
                  Brett Johnson
                </h3>
                <p className="text-center text-default font-body">
                  Pound of Pound Champ
                </p>
              </div>

              <div
                className="team__content bg-white border-2 border-gray-100 py-4 px-4 rounded-lg "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <img src={image4} alt="" className="max-w-full   mx-auto" />
                <h3 className="text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-default">
                  Peter Proctor
                </h3>
                <p className="text-center text-default font-body">
                  Crulserweight Champ
                </p>
              </div>

              <div
                className="team__content bg-white border-2 border-gray-100 py-4 px-4 rounded-lg "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <img src={image5} alt="" className="max-w-full   mx-auto" />
                <h3 className="text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-default">
                  Jeanna Pretty
                </h3>
                <p className="text-center text-default font-body">
                  (w) Fly weight Champ
                </p>
              </div>

              <div
                className="team__content bg-white border-2 border-gray-100 py-4 px-4 rounded-lg "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <img src={image6} alt="" className="max-w-full   mx-auto" />
                <h3 className="text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-default">
                  Christian Alvarez
                </h3>
                <p className="text-center text-default font-body">
                  Light Weight Champ
                </p>
              </div>

              <div
                className="team__content bg-white border-2 border-gray-100 py-4 px-4 rounded-lg "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <img src={image7} alt="" className="max-w-full   mx-auto" />
                <h3 className="text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-default">
                  Angel Thomas
                </h3>
                <p className="text-center text-default font-body">
                  (w) Light Weight Champ
                </p>
              </div>

              <div
                className="team__content bg-white border-2 border-gray-100 py-4 px-4 rounded-lg "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <img src={image8} alt="" className="max-w-full   mx-auto" />
                <h3 className="text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-default">
                  Wayne Nixon
                </h3>
                <p className="text-center text-default font-body">
                  Middle Weight Champ
                </p>
              </div>

              <div
                className="team__content bg-white border-2 border-gray-100 py-4 px-4 rounded-lg "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <img src={image9} alt="" className="max-w-full   mx-auto" />
                <h3 className="text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-default">
                  Floyd Maywheather Sr
                </h3>
                <p className="text-center text-default font-body">
                  OG Trainer{" "}
                </p>
              </div>

              <div
                className="team__content bg-white border-2 border-gray-100 py-4 px-4 rounded-lg "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <img src={image10} alt="" className="max-w-full   mx-auto" />
                <h3 className="text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-default">
                  James Williams
                </h3>
                <p className="text-center text-default font-body">
                  Founder aka Super Heavy Weight Champ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
