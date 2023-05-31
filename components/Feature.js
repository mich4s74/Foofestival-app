import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Interactive Workshops",
  "Food and Beverage Delights.",
  "Family-Friendly Activities.",
  "Fantastic music.",
];

const Feature = () => {
  const scrollAnimation = (() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto shadow"
      id="feature">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12 lg:items-center">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              className="rounded-3xl"
              src="/assets/festival_concert.jpeg"
              alt="Girls at a festival"
              layout="responsive"
              quality={100}
              width={612}
              height={383}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col justify-center ml-auto w-full lg:w-9/12 my-8"
            variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600;">
              Why attend Foo?
            </h3>
            <p className="my-2 text-black-500">
              A festival which provides a wide range of activites and a diverse
              range of music.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature) => (
                <motion.li
                  className="relative circle-check custom-list"
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
