"use client";
import React, { useEffect, useState } from "react";
import { sendCost } from "./option";

const PriceForm = () => {
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    service: "house",
    cleanType: "full",
    floorArea: "",
    name: "",
    zip: "",
    email: "",
  });

  useEffect(() => {
    const storedDetails = localStorage.getItem("details");
    if (storedDetails) {
      setDetails(JSON.parse(storedDetails));
      setFormValues(JSON.parse(storedDetails));
    }
  }, []);

  const getEstimate = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const floorArea = formData.get("floorArea") as string;
    const service = formData.get("service") as string;
    const cleanType = formData.get("cleanType") as string;
    const name = formData.get("name") as string;

    setLoading(true);
    await sendCost(name, service, email, floorArea);
    setLoading(false);

    setFormValues({
      service: "house",
      cleanType: "full",
      floorArea: "",
      name: "",
      zip: "",
      email: "",
    });
    localStorage.removeItem("details");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <section className="w-full py-12 flex flex-col items-center">
      <div className="w-full max-w-6xl mt-8 px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getEstimate(new FormData(e.currentTarget));
          }}
          className="bg-white shadow-xl rounded-lg p-4 mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Service Selection */}
            <div>
              <label
                htmlFor="service"
                className="block text-left text-gray-600 font-semibold"
              >
                Choose a Service
              </label>
              <select
                name="service"
                value={formValues.service}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              >
                <option value="house">House Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="move-out">Move-out Cleaning</option>
                <option value="construction">Construction Cleaning</option>
              </select>
            </div>

            {/* Type of Clean Selection */}
            <div>
              <label
                htmlFor="cleanType"
                className="block text-left text-gray-600 font-semibold"
              >
                Type of Clean
              </label>
              <select
                name="cleanType"
                value={formValues.cleanType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              >
                <option value="full">Full Cleaning</option>
                <option value="partial">Partial Cleaning</option>
                <option value="deep">Deep Cleaning</option>
              </select>
            </div>
          </div>

          {/* Total Floor Area Input */}
          <div className="mt-4">
            <label
              htmlFor="floorArea"
              className="block text-left text-gray-600 font-semibold"
            >
              Total Floor Area (sq ft)
            </label>
            <input
              name="floorArea"
              type="text"
              value={formValues.floorArea}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter total floor area"
            />
          </div>

          {/* Name and ZIP Code Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="name"
                className="block text-left text-gray-600 font-semibold"
              >
                Your Name
              </label>
              <input
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="zip"
                className="block text-left text-gray-600 font-semibold"
              >
                ZIP Code
              </label>
              <input
                name="zip"
                type="text"
                value={formValues.zip}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your area code"
              />
            </div>
          </div>

          {/* Email Address Input */}
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-left text-gray-600 font-semibold"
            >
              Email Address
            </label>
            <input
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email address"
            />
          </div>

          {/* Submission Button and Description */}
          <div className="mt-8 flex justify-start items-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white mr-3"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Get Cost Estimate"
              )}
            </button>
            <p className="ml-4 text-gray-600 italic">
              Submit this information and we will send you the cost
              <br />
              for the service.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PriceForm;
