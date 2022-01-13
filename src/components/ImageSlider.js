import React from "react";
import Slider from "react-slick";
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

const ImageSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="rarity" className=" bg-[#c7ecff]">
        <div className="container mx-auto px-4 lg:px-0">
          <div
            className="gallery py-8 lg:py-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="text-center text-4xl font-extrabold text-secondary uppercase font-heading">
              INSPIRED TO WIN
            </h1>
            <p className="text-center text-xl font-normal text-default py-4 font-body">
              The Lazy Boxer is the first Nft crypto fighter for a cause. All
              Lazy boxer(s) are uniquely different in style and nature. Owners
              can own the Lazy Boxer lifestyle, skins, traits and accessories
              can be unique & profitable. Collectors can anticipate unmeasurable
              value while sharing their goodwill and serving a great cause.
            </p>
          </div>
        </div>
        <div className="" data-aos="fade-left" data-aos-duration="1000">
          <Slider {...settings}>
            <div className="mx-2">
              <img src={image1} alt="" className="max-w-full" />
            </div>

            <div className="mx-2">
              <img src={image2} alt="" className="max-w-full" />
            </div>

            <div className="mx-2">
              <img src={image3} alt="" className="max-w-full" />
            </div>
            <div className="mx-2">
              <img src={image4} alt="" className="max-w-full" />
            </div>
            <div className="mx-2">
              <img src={image5} alt="" className="max-w-full" />
            </div>

            <div className="mx-2">
              <img src={image10} alt="" className="max-w-full" />
            </div>
            <div className="mx-2">
              <img src={image6} alt="" className="max-w-full" />
            </div>
            <div className="mx-2">
              <img src={image7} alt="" className="max-w-full" />
            </div>
            <div className="mx-2">
              <img src={image8} alt="" className="max-w-full" />
            </div>
            <div className="mx-2">
              <img src={image9} alt="" className="max-w-full" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
