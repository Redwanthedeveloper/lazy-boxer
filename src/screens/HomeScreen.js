import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Championships from "../components/Championships";
import CountDown from "../components/CountDown";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import OurStory from "../components/OurStory";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
const HomeScreen = () => {
  return (
    <>
      <div className="">
        <Header />
        <Banner />
      </div>
      <CountDown />
      <About />
      <ImageSlider />
      <OurStory />
      <Roadmap />
      <Championships />
      <Team />
      <Faq />
      <Footer />
    </>
  );
};

export default HomeScreen;
