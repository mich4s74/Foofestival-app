import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { useRouter } from "next/router";
import { useState } from "react";

const Checkout = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
        body: JSON.stringify({ name, email, phone }),
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

  return (
    <div className="bg-gray-100 pt-20 mt-24">
      <h1 className="mb-10 text-center text-2xl font-bold">Buy Tickets</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div>
          <h1>Booking Form</h1>
          <form id="form1" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <br />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <br />
            <br />
            <ButtonPrimary type="submit">Buy Now</ButtonPrimary>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
