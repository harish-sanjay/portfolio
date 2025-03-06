import React, { useState } from "react";

const SignUp = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full mx-auto">
      <p className="text-center mb-3">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="grid grid-cols-[1fr_0.4fr] gap-x-2 items-center">
        <div className="relative">
          <input
            type="email"
            id="email"
            className={`w-full text-md px-4 bg-transparent border outline-none rounded-md py-3 }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <label
            htmlFor="email"
            className={`absolute top-1/2 left-2 -translate-y-1/2 text-sm pointer-events-none px-2 transition-all 
            ease-out 
            ${isFocused && "top-2.5 text-[0.70rem]"}
          `}
          >
            Email Address
          </label>
        </div>
        <button className="bg-primary text-white px-3 py-3 rounded-lg text-xl hover:bg-primary/90">
          Get Started &#x3e;
        </button>
      </div>
    </div>
  );
};

export default SignUp;
