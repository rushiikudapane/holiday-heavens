import React from "react";

const PriceCard = () => {
  return (
    <div>
      <div className="flex flex-row justify-around shadow-lg rounded-xl px-5 py-3 my-10 bg-white w-96 border-t-4 border-cyan-900">
        <div className="flex flex-col items-start my-3">
          <p className="text-cyan-600 font-normal text-lg">Veg</p>

          <p>
            <strike>₹ 1500/- </strike>
          </p>
          <h1 className="text-cyan-600 font-bold text-4xl">₹ 999/-</h1>
          <p className="text-sm">per Adult</p>
        </div>
        <div className="flex flex-col items-start my-3">
          <p className="text-cyan-600 font-normal text-lg">Non-Veg</p>

          <p>
            <strike>₹ 1500/- </strike>
          </p>
          <h1 className="text-cyan-600 font-bold text-4xl">₹ 999/-</h1>
          <p className="text-sm">per Adult</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
