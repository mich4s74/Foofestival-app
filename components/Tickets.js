import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Tickets = () => {
  const router = useRouter();
  const [regularTicketQuantity, setRegularTicketQuantity] = useState(0);
  const [vipTicketQuantity, setVipTicketQuantity] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (regularTicketQuantity < 0) {
      setRegularTicketQuantity(0);
    }
    if (vipTicketQuantity < 0) {
      setVipTicketQuantity(0);
    }
  }, [regularTicketQuantity, vipTicketQuantity]);

  const handleRegularTicketIncrement = () => {
    setRegularTicketQuantity(regularTicketQuantity + 1);
  };

  const handleRegularTicketDecrement = () => {
    if (regularTicketQuantity >= 1) {
      setRegularTicketQuantity(regularTicketQuantity - 1);
    }
  };

  const handleVipTicketIncrement = () => {
    setVipTicketQuantity(vipTicketQuantity + 1);
  };

  const handleVipTicketDecrement = () => {
    if (vipTicketQuantity >= 1) {
      setVipTicketQuantity(vipTicketQuantity - 1);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const regularTicketPrice = 799;
  const vipTicketPrice = 1299;
  const BookingFee = 99;
  const GreenFee = isChecked ? 249 : 0;

  // Calculate the subtotal based on the quantities and prices
  const subtotal =
    regularTicketPrice * regularTicketQuantity +
    vipTicketPrice * vipTicketQuantity;

  const total = subtotal + BookingFee + GreenFee;

  return (
    <div class="h-screen bg-gray-100 pt-20 mt-24">
      <h1 class="mb-10 text-center text-2xl font-bold">Buy Tickets</h1>
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div class="rounded-lg md:w-2/3">
          <p>Tickets</p>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">Regular Ticket</h2>
                <p class="mt-1 text-xs text-gray-700">Price: 799</p>
              </div>
              <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <span
                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    onClick={handleRegularTicketDecrement}>
                    {" "}
                    -{" "}
                  </span>
                  <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value={regularTicketQuantity}
                    min="1"
                    readOnly
                  />
                  <span
                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    onClick={handleRegularTicketIncrement}>
                    {" "}
                    +{" "}
                  </span>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">
                    {regularTicketPrice * regularTicketQuantity},-
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">VIP ticket</h2>
                <p class="mt-1 text-xs text-gray-700">Price: 1299</p>
              </div>
              <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <span
                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    onClick={handleVipTicketDecrement}>
                    {" "}
                    -{" "}
                  </span>
                  <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value={vipTicketQuantity}
                    min="1"
                    readOnly
                  />
                  <span
                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    onClick={handleVipTicketIncrement}>
                    {" "}
                    +{" "}
                  </span>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">{vipTicketPrice * vipTicketQuantity},-</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p>Add-ons</p>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">VIP ticket</h2>
                <p class="mt-1 text-xs text-gray-700">Price: 1299</p>
              </div>
              <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {" "}
                    -{" "}
                  </span>
                  <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value="2"
                    min="1"
                  />
                  <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {" "}
                    +{" "}
                  </span>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">1299,-</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">Green Fee</h2>
                <p class="mt-1 text-xs text-gray-700">Price: 249</p>
              </div>
              <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <input
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    type="checkbox"></input>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">249 ,-</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">{subtotal} ,-</p>
          </div>
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Booking Fee</p>
            <p class="text-gray-700">{BookingFee} ,-</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Green Fee</p>
            <p class="text-gray-700">{GreenFee} ,-</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">{total} ,-</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <ButtonPrimary onClick={() => router.push("/checkout")}>
            Check out
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
