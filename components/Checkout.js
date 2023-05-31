import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { useRouter } from "next/router";
import { useState } from "react";

const Checkout = () => {
  const router = useRouter();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  console.log(router.query);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://noysqwjlhgkcqjbzcpab.supabase.co/rest/v1/FooFestivalForm",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5veXNxd2psaGdrY3FqYnpjcGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNTc2NzIsImV4cCI6MjAwMDgzMzY3Mn0.7inyTil_iIexxv1tHjfqBzybKxspJIFqd9kvGFHWIlw",
        },
        body: JSON.stringify({ firstname, lastname, email, phone }),
      }
    );

    // Handle the response data or perform any necessary actions
    if (response.ok) {
      console.log("Form submitted successfully");
      router.push("/Thank_you"); // Redirect to the thank you page
    } else {
      console.error("Error submitting the form");
    }
  };

  const handleCheckout = async (e) => {
    if (e) {
      e.preventDefault();
    }
    await handleSubmit(e);
  };

  // How many tickets and tents

  const { regularTicketQuantity, vipTicketQuantity } = router.query;
  const { tentRegularQuantity, tentVipQuantity } = router.query;

  // Convert the retrieved values to numbers if necessary
  const regularTickets = parseInt(regularTicketQuantity) || 0;
  const vipTickets = parseInt(vipTicketQuantity) || 0;

  // Perform any calculations or operations using the ticket quantities
  const totalTickets = regularTickets + vipTickets;

  // TOTAL
  const regularTicketPrice = 799;
  const vipTicketPrice = 1299;
  const BookingFee = 99;
  const GreenFee = 249;

  // Calculate the subtotal based on the quantities and prices
  const subtotal =
    regularTicketPrice * regularTicketQuantity +
    vipTicketPrice * vipTicketQuantity +
    299 * tentRegularQuantity +
    399 * tentVipQuantity;

  return (
    <div className="bg-gray-100 pt-20 mt-24">
      <h1 className="mb-10 text-center text-2xl font-bold">Buy Tickets</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div>
          <h1 className="mb-8">Your personal information:</h1>
          {[...Array(totalTickets)].map((item) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstname" className="block mb-1 font-bold">
                  First name:
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastname" className="block mb-1 font-bold">
                  Last name:
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-bold">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-1 font-bold">
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                style={{ display: "none" }}
                className="hidden"></button>
            </form>
          ))}
        </div>
        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Booking Fee</p>
            <p class="text-gray-700"> {BookingFee},-</p>
          </div>
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Tents</p>
            <p class="text-gray-700">
              {299 * tentRegularQuantity + 399 * tentVipQuantity} ,-
            </p>
          </div>
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Green Fee</p>
            <p class="text-gray-700"> ,-</p>
          </div>
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Camping Spot</p>
            <p class="text-gray-700"></p>
          </div>
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">{subtotal},-</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold"> ,-</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <div className="m-8">
            <button
              className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-purple-500 hover:shadow-purple-md transition-all outline-none"
              type="button"
              onClick={handleCheckout}>
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
