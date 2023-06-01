import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Events = () => {
  const scrollAnimation = (() => getScrollAnimation(), []);

  const router = useRouter();

  const [scheduleData, setScheduleData] = useState({});

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const response = await fetch("http://localhost:8080/schedule");
        const data = await response.json();
        console.log(data);
        setScheduleData(data);
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      }
    };

    fetchScheduleData();
  }, []);

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
              Check out some of the top names visiting FooFestival!
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
              Let's see which best bands for you are playing and explore it
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
                  Rock bands
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Led Zeppelin
                  </li>
                  <li className="relative check custom-list my-2">
                    The Beatles
                  </li>
                  <li className="relative check custom-list my-2">Queen</li>
                  <li className="relative check custom-list my-2">Metallica</li>
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
                  Folk{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Zboncak - Haag
                  </li>
                  <li className="relative check custom-list my-2">Kunde LLC</li>
                  <li className="relative check custom-list my-2">
                    West and Sons
                  </li>
                  <li className="relative check custom-list my-2">
                    Wehner Inc{" "}
                  </li>
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
                  Hip Hop{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    DuBuque and Sons
                  </li>
                  <li className="relative check custom-list my-2">
                    Gislason, Skiles and Schneider
                  </li>
                  <li className="relative check custom-list my-2">
                    Herman and Sons
                  </li>
                  <li className="relative check custom-list my-2">
                    Russel Inc
                  </li>
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
              See the schedule for your festival experience!{" "}
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12 mb-12"
              variants={scrollAnimation}>
              Pick your date from the Festival Schedule below & we'll see you at
              the party!
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <div>
              <Tabs>
                <TabList className="flex justify-center">
                  {Object.keys(scheduleData).map((stage) => (
                    <Tab
                      key={stage}
                      className="mr-4 bg-gray-200 cursor-pointer hover:bg-gray-300 font-medium tracking-wide py-2 px-5 sm:px-8 border border-purple-500 text-purple-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-purple-500 hover:text-white-500 transition-all hover:shadow-purple-500 active:bg-black-600">
                      {stage}
                    </Tab>
                  ))}
                </TabList>

                {Object.keys(scheduleData).map((stage) => (
                  <TabPanel key={stage} className="flex flex-col">
                    <div className="shadow py-12 w-full px-8 mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-stretch rounded-xl">
  {Object.keys(scheduleData[stage]).map((day) => (
    <div key={day} className="flex flex-col">
      <h2 className="text-xl font-bold mb-4">{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
      {scheduleData[stage][day].map((item, index) => (
        <motion.div
          key={index}
          className="mb-4 justify-center items-center shadow rounded-xl leading-relaxed p-6 cursor-pointer w-74 h-46 overflow-hidden hover:shadow-purple-md"
          onClick={() => router.push("/tickets")}
          whileHover={{
            scale: 1.1,
            transition: {
            duration: 0.2,
            },
          }}
        >
          <p className="mb-2 truncate"><b>Start Time:</b> <br />{item.start}</p>
          <p className="mb-2 truncate"><b>End Time:</b> <br />{item.end}</p>
          <p className="truncate"><b>Act:</b> <br />{item.act.charAt(0).toUpperCase() + item.act.slice(1)}</p>
        </motion.div>
      ))}
    </div>
  ))}
</div>
                  </TabPanel>
                ))}
              </Tabs>
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
