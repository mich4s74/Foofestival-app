import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as LinkScroll } from "react-scroll";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
};

const Hero = ({
  listUser = [
    {
      name: "Visitors so far",
      number: "40.000",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Camping Spots",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Bands",
      number: "30",
      icon: "/assets/Icon/guitar-pick-icon.svg",
    },
  ],
}) => {
  const scrollAnimation = (() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}>
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Welcome to <strong>FooFestival 2023!</strong>
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Welcome to Foo Festival: A Celebration of <b>Music</b>, <b>Art</b>
              , and <b>Unforgettable Experiences!</b> Get ready to immerse
              yourself in a world of unparalleled excitement and creative
              brilliance at Foo Festival. <br></br> <br></br>This extraordinary
              event is a <b>one-of-a-kind</b> celebration that brings together
              music, art, and a vibrant community of festival-goers{" "}
              <b>like you</b>.
            </p>
            <LinkScroll
              activeClass="active"
              to="schedule"
              spy={true}
              smooth={true}
              duration={1000}>
              <ButtonPrimary>Buy Tickets</ButtonPrimary>
            </LinkScroll>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                className="rounded-3xl"
                src="/assets/festival.jpeg"
                alt="Foo Festival image"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}>
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-purple-500 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}></div>
      </div>
    </div>
  );
};

export default Hero;
