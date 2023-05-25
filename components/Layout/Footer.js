import React from "react";
import Logo from "../../public/assets/foo_festival.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <div className="sm:pb-130 bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <a href="#" title="">
            {" "}
            <Logo className="h-16 w-auto mb-6" />
          </a>
          <p className="mb-4">
            <strong className="font-medium">FooFestival</strong> is a festival
            that brings people together and provides joy to the people
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                href="https://www.facebook.com"
                target="_blank"
                title="FooFestival Facebook">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                href="https://www.twitter.com"
                target="_blank"
                title="FooFestival Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                href="https://www.instagram.com"
                target="_blank"
                title="FooFestival Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - FooFestival
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Buy Tickets</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all">
              Non-Profit{" "}
            </li>
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            The Festival
          </p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all">
              FooFestival ?{" "}
            </li>
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">About</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all">
              Booking spots{" "}
            </li>
            <li className="my-2 hover:text-purple-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
