import React from "react";

const Form = () => {
  return (
    <div className="bg-white p-6 rounded-[15px] w-[100%] shadow-lg">
      <h1 className="text-2xl lg:text-3xl font-bold mb-4">
        0% commissions for up to 30 days
      </h1>
      <p className="text-lg mb-6">
        Partner with DoorDash to help drive growth and take your business to the
        next level.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Business Name"
          className="w-full p-3 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="Business Address"
          className="w-full p-3 rounded border border-gray-300"
        />
        <div className="w-full grid grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded border border-gray-300"
          />
          <input
            type="tel"
            placeholder="Business Phone"
            className="w-full p-3 rounded border border-gray-300"
          />
        </div>
        <select className="w-full p-3 rounded border border-gray-300">
          <option>Select your business type</option>
          {/* Add other options as needed */}
        </select>
        <button className="w-full bg-red-600 text-white p-3 rounded">
          Get started
        </button>
      </form>
      <p className="text-sm mt-4 text-gray-600">
        By clicking &quot;Get started,&quot; I agree to receive marketing
        electronic communications from DoorDash.
      </p>
    </div>
  );
};

export default Form;
