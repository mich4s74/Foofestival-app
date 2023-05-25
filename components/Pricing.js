import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useRouter } from "next/router";

const Events = () => {
  const scrollAnimation = (() => getScrollAnimation(), []);

  const router = useRouter();

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="events">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
              Check who are playing on which months
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
              Let's see which best bands for you are playing when and explore it
              happily and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}>
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/1.png"
                    width={185}
                    height={185}
                    alt="event1"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Junky June
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">FunkFlow</li>
                  <li className="relative check custom-list my-2">
                    GreetGroot
                  </li>
                  <li className="relative check custom-list my-2">
                    Sweet Dreams
                  </li>
                  <li className="relative check custom-list my-2">Drools</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 "></p>
                  <ButtonOutline>Check dates</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}>
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/2.png"
                    width={185}
                    height={185}
                    alt="event2"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Julius July{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">Mimosa</li>
                  <li className="relative check custom-list my-2">
                    Black Pink
                  </li>
                  <li className="relative check custom-list my-2">Dominus</li>
                  <li className="relative check custom-list my-2">EyeQ </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    <span className="text-black-500"></span>
                  </p>
                  <ButtonOutline>Check Dates</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}>
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/3.png"
                    width={185}
                    height={185}
                    alt="event3"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Awe August{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">Toy-Box</li>
                  <li className="relative check custom-list my-2">Frisbee</li>
                  <li className="relative check custom-list my-2">Volbeat</li>
                  <li className="relative check custom-list my-2">Zididada</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    <span className="text-black-500"></span>
                  </p>

                  <ButtonOutline>Check Dates</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="schedule">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-8/12 mx-auto">
              Choose a date for your festival experience!{" "}
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}>
              Pick your date from the Festival Schedule below & we'll see you at
              the party!
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <div
              className="py-12 w-full px-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6
              justify-center items-center border-2 border-gray-500 rounded-xl"
              variants={scrollAnimation}>
              <motion.div
                className="justify-center items-center border-2 border-gray-500 rounded-xl leading-relaxed p-6 cursor-pointer"
                onClick={() => router.push("/tickets")}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}>
                <p>Monday:</p> <p>Band 1, band 2, band 3</p>
              </motion.div>
              <motion.div
                className="justify-center items-center border-2 border-gray-500 rounded-xl leading-relaxed p-6 cursor-pointer"
                onClick={() => router.push("/tickets")}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}>
                <p>Tuesday:</p> <p>Band 1, band 2, band 3</p>
              </motion.div>
              <motion.div
                className="justify-center items-center border-2 border-gray-500 rounded-xl leading-relaxed p-6 cursor-pointer"
                onClick={() => router.push("/tickets")}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}>
                <p>Wednesday:</p> <p>Band 1, band 2, band 3</p>
              </motion.div>
              <motion.div
                className="justify-center items-center border-2 border-gray-500 rounded-xl leading-relaxed p-6 cursor-pointer"
                onClick={() => router.push("/tickets")}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}>
                <p>Thursday:</p> <p>Band 1, band 2, band 3</p>
              </motion.div>
              <motion.div
                className="justify-center items-center border-2 border-gray-500 rounded-xl leading-relaxed p-6 cursor-pointer"
                onClick={() => router.push("/tickets")}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}>
                <p>Friday:</p> <p>Band 1, band 2, band 3</p>
              </motion.div>
              <motion.div
                className="flex bg-cover bg-center justify-center items-center border-2 border-gray-500 rounded-xl leading-relaxed p-6 cursor-pointer"
                onClick={() => router.push("/tickets")}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}>
                <p className="absolute z-10 justify-self-center text-white-500">
                  Saturday:
                </p>
                <p className="absolute z-10 pt-10 justify-self-center text-white-500">
                  Band 1, band 2, band 3
                </p>
                <Image
                  className="absolute -z-1"
                  src="/assets/2.png"
                  alt="event1"
                  height={200}
                  width={500}
                  objectFit="cover"
                  quality={100}
                />
              </motion.div>
              <motion.div
                className="flex bg-cover bg-center justify-center items-center border-2 border-gray-500 rounded-xl leading-relaxed p-6 cursor-pointer"
                onClick={() => router.push("/Tickets")}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}>
                <p className="absolute z-10 justify-self-center text-white-500">
                  Sunday:
                </p>
                <p className="absolute z-10 pt-10 justify-self-center text-white-500">
                  Band 1, band 2, band 3
                </p>
                <Image
                  className="absolute -z-1"
                  src="/assets/1.png"
                  alt="event1"
                  height={200}
                  width={500}
                  objectFit="cover"
                  quality={100}
                />
              </motion.div>
            </div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 lg:w-8/12 mx-auto">
              Hear from Our Ecstatic Festival-Goers{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
              Discover the Unforgettable Memories and Activity Reviews from Foo
              Festival Attendees
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now to get
                    <br /> <b>Early Access News!</b>
                  </h5>
                  <p>Trust us, you do not want to miss out!</p>
                </div>
                <form
                  action="/send-data-here"
                  method="post"
                  className="bg-white shadow-md rounded px-4 pt-4 pb-4 mb-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                  />
                </form>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Events;
