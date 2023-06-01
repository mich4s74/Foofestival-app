import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { useRouter } from "next/router";
import { useState } from "react";

const Checkout = () => {
  const router = useRouter();
  const [formData, setFormData] = useState([]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index] = { ...updatedFormData[index], [name]: value };
    setFormData(updatedFormData);
  };

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
        body: JSON.stringify(formData),
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

  const {
    regularTicketQuantity,
    vipTicketQuantity,
    tentRegularQuantity,
    tentVipQuantity,
    selectedCampingSpot,
  } = router.query;

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
    regularTicketPrice * regularTickets +
    vipTicketPrice * vipTickets +
    299 * tentRegularQuantity +
    399 * tentVipQuantity;

  const total = subtotal + BookingFee + GreenFee;

  return (
    <div className="bg-gray-100 pt-20 mt-24">
      <h1 className="mb-10 text-center text-2xl font-bold">
        Fill in your information
      </h1>
      <form
        className="mx-auto max-w-5xl justify-center px-6 md:space-x-6 xl:px-0"
        onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 auto-cols-max gap-6">
          {[...Array(totalTickets)].map((item, index) => (
            <div className="mb-6 rounded-lg bg-white p-6 shadow-md" key={index}>
              <h3 className="text-xl font-bold mb-2">
                Ticket Owner {index + 1}
              </h3>
              <div className="mb-4">
                <label htmlFor={`firstname${index}`}>First name:</label>
                <input
                  type="text"
                  id={`firstname${index}`}
                  name="firstname"
                  value={formData[index]?.firstname || ""}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`lastname${index}`}>Last name:</label>
                <input
                  type="text"
                  id={`lastname${index}`}
                  name="lastname"
                  value={formData[index]?.lastname || ""}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`email${index}`}>Email:</label>
                <input
                  type="email"
                  id={`email${index}`}
                  name="email"
                  value={formData[index]?.email || ""}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`phone${index}`}>Phone Number:</label>
                <input
                  type="text"
                  id={`phone${index}`}
                  name="phone"
                  value={formData[index]?.phone || ""}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:w-2/3 m-auto pb-10">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Tickets</p>
            <p className="text-gray-700">
              {regularTicketPrice + vipTicketPrice},-
            </p>
          </div>

          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Tents</p>
            <p className="text-gray-700">
              {299 * tentRegularQuantity + 399 * tentVipQuantity} ,-
            </p>
          </div>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">{subtotal} ,-</p>
          </div>
          <hr className="my-4" />
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Camping Spot</p>
            <p className="text-gray-700">{selectedCampingSpot}</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Booking Fee</p>
            <p className="text-gray-700">{BookingFee} ,-</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Green Fee</p>
            <p className="text-gray-700">{GreenFee} ,-</p>
          </div>
          <hr className="my-4" />
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700 font-bold">Total</p>
            <p className="text-gray-700 font-bold">{total} ,-</p>
          </div>
          <div className="flex justify-center">
            <ButtonPrimary
              text="Confirm Order"
              onClick={handleCheckout}
              disabled={totalTickets === 0}>
              Buy now
            </ButtonPrimary>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
