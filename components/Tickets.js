import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Tickets = () => {
  const router = useRouter();
  const [regularTicketQuantity, setRegularTicketQuantity] = useState(1);
  const [vipTicketQuantity, setVipTicketQuantity] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [tentRegularQuantity, setTentRegularQuantity] = useState(0);
  const [tentVipQuantity, setTentVipQuantity] = useState(0);
  const [campingSpots, setCampingSpots] = useState([]);
  const [selectedCampingSpot, setSelectedCampingSpot] = useState("Svartheim");

  // TICKETS
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

  // TENTS
  const totalTickets = regularTicketQuantity + vipTicketQuantity;
  const maxTents = totalTickets; // Maximum number of tents based on total tickets

  const handleTentRegularIncrement = () => {
    if (tentRegularQuantity + tentVipQuantity < maxTents) {
      setTentRegularQuantity(tentRegularQuantity + 1);
    }
  };

  const handleTentRegularDecrement = () => {
    if (tentRegularQuantity > 0) {
      setTentRegularQuantity(tentRegularQuantity - 1);
    }
  };

  const handleTentVipIncrement = () => {
    if (tentRegularQuantity + tentVipQuantity < maxTents) {
      setTentVipQuantity(tentVipQuantity + 1);
    }
  };

  const handleTentVipDecrement = () => {
    if (tentVipQuantity > 0) {
      setTentVipQuantity(tentVipQuantity - 1);
    }
  };

  // CAMMPING SPOTS
  useEffect(() => {
    fetchAvailableCampingSpots();
  }, []);

  const handleCampingSpotSelection = (spot) => {
    setSelectedCampingSpot(spot);
  };

  const fetchAvailableCampingSpots = async () => {
    try {
      const response = await fetch("http://localhost:8080/available-spots");
      const data = await response.json();
      setCampingSpots(data);
    } catch (error) {
      console.error("Error fetching camping spots:", error);
    }
  };

  // TOTAL
  const regularTicketPrice = 799;
  const vipTicketPrice = 1299;
  const BookingFee = 99;
  const GreenFee = isChecked ? 249 : 0;

  // Calculate the subtotal based on the quantities and prices
  const subtotal =
    regularTicketPrice * regularTicketQuantity +
    vipTicketPrice * vipTicketQuantity +
    299 * tentRegularQuantity +
    399 * tentVipQuantity;

  const total = subtotal + BookingFee + GreenFee;

  // Reserve spot and amount of tickets
  const reserveSpot = async () => {
    const url = "http://localhost:8080/reserve-spot";
    const data = {
      area: String(selectedCampingSpot),
      amount: Number(totalTickets), // Example value for the amount of total tickets
    };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const reservationId = await response.json(); // Parse the response JSON
        console.log("Spot reservation successful.");
        console.log("Reservation ID:", reservationId);

        return reservationId.id; // Return the reservationId value
      } else {
        console.error("Spot reservation failed.");
        throw new Error("Spot reservation failed.");
      }
    } catch (error) {
      console.error("Spot reservation failed.", error);
      throw error;
    }
  };
  // Call the reserveSpot function when needed, for example, in an event handler

  const handleCheckout = async () => {
    try {
      const reservationId = await reserveSpot(); // Call the reserveSpot function and await the result
      router.push(
        `/checkout?reservationId=${reservationId}&regularTicketQuantity=${regularTicketQuantity}&vipTicketQuantity=${vipTicketQuantity}&tentRegularQuantity=${tentRegularQuantity}&tentVipQuantity=${tentVipQuantity}&BookingFee=${BookingFee}&selectedCampingSpot=${selectedCampingSpot}&GreenFee=${GreenFee}`
      );
    } catch (error) {
      console.error("Spot reservation failed.", error);
      // Handle the error or display an error message
    }
  };

  return (
    <div class="bg-gray-100 pt-20 mt-24">
      <h1 class="mb-10 text-center text-2xl font-bold">Buy Tickets & More</h1>
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div class="rounded-lg md:w-2/3">
          <p>Tickets</p>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./assets/icon/regular_ticket.png"
              alt="product-image"
              class="w-full rounded-lg sm:w-32"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">Regular Ticket</h2>
                <p class="mt-1 text-xs text-gray-700">
                  Get your ticket to FooFestival and immerse yourself in an
                  unforgettable celebration of music, art, and culture.
                </p>
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
                    Price: {regularTicketPrice * regularTicketQuantity},-
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./assets/icon/vip_ticket.png"
              alt="product-image"
              class="w-full rounded-lg sm:w-32"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">VIP ticket</h2>
                <p class="mt-1 text-xs text-gray-700">
                  Elevate your FooFestival experience with our exclusive VIP
                  ticket, granting you access to premium perks, exclusive areas,
                  and unforgettable moments.
                </p>
              </div>
              <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
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
                  <p class="text-sm">
                    Price: {vipTicketPrice * vipTicketQuantity},-
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>Add-ons</p>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./assets/tent_regular.jpeg"
              alt="product-image"
              class="w-full rounded-lg sm:w-32"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">
                  2 person tent (includes setup)
                </h2>
                <p class="mt-1 text-xs text-gray-700">
                  Experience comfort and convenience with the Foofestival
                  2-Person Festival Tent—a compact, lightweight shelter designed
                  for outdoor adventures.
                </p>
              </div>
              <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <span
                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    onClick={handleTentRegularDecrement}>
                    {" "}
                    -{" "}
                  </span>
                  <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value={tentRegularQuantity}
                    min="0"
                    readOnly
                  />
                  <span
                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    onClick={handleTentRegularIncrement}>
                    {" "}
                    +{" "}
                  </span>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">Price: {299 * tentRegularQuantity} ,-</p>
                </div>
              </div>
            </div>
          </div>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./assets/tent_vip.jpeg"
              alt="product-image"
              class="w-full rounded-lg sm:w-32"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">
                  3 person tent (includes setup)
                </h2>
                <p class="mt-1 text-xs text-gray-700">
                  Experience luxury and comfort at FooFestival with our
                  exclusive 3-Person Tent. Spacious, durable, and easy to set
                  up, it's the perfect shelter for a memorable festival
                  experience.
                </p>
              </div>
              <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <span
                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    onClick={handleTentVipDecrement}>
                    -{" "}
                  </span>
                  <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value={tentVipQuantity}
                    min="0"
                    readOnly
                  />
                  <span
                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    onClick={handleTentVipIncrement}>
                    +{" "}
                  </span>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">Price: {399 * tentVipQuantity} ,-</p>
                </div>
              </div>
            </div>
          </div>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./assets/icon/green-love.png"
              alt="product-image"
              class="w-full rounded-lg sm:w-32"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">Green Fee</h2>
                <p class="mt-1 text-xs text-gray-700">
                  Make a positive impact at FooFestival with our optional
                  payable green initiative, offsetting CO2 emissions and
                  promoting a sustainable future.
                </p>
              </div>
              <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <input
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    className="w-6 h-6"></input>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">249 ,-</p>
                </div>
              </div>
            </div>
          </div>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <div class="sm:ml-4 sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">
                  Available Camping Spots
                </h2>
                <p class="mt-1 text-xs text-gray-700">
                  Choose your ideal camping spot at the festival for a
                  comfortable and enjoyable experience.
                </p>
              </div>
              <h4
                className="font-bold mb-4 mt-4
                    ">
                Camping Spot:
              </h4>{" "}
              <ul className="mt-6 flex mr-12 gap-4">
                {campingSpots.map((spot) => (
                  <li key={spot.area}>
                    {spot.area}
                    <br />
                    Spots: {spot.spots}
                    <br />
                    Available: {spot.available}
                    <br />
                    <input
                      checked={selectedCampingSpot === spot.area}
                      onChange={() => handleCampingSpotSelection(spot.area)}
                      type="checkbox"
                      required
                      className="w-6 h-6"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Tickets</p>
            <p className="text-gray-700">
              {799 * regularTicketQuantity + 1299 * vipTicketQuantity} ,-
            </p>
          </div>

          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Tents</p>
            <p class="text-gray-700">
              {299 * tentRegularQuantity + 399 * tentVipQuantity} ,-
            </p>
          </div>
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">{subtotal} ,-</p>
          </div>
          <hr class="my-4" />
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Camping Spot</p>
            <p class="text-gray-700">{selectedCampingSpot}</p>
          </div>
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Green Fee</p>
            <p class="text-gray-700">{GreenFee} ,-</p>
          </div>
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Booking Fee</p>
            <p class="text-gray-700">{BookingFee} ,-</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">{total} ,-</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <div className="m-8" onClick={handleCheckout}>
            <ButtonPrimary>Check out</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
