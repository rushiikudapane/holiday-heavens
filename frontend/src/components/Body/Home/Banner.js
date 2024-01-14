import React from "react";
import offerBanner from "../../../assets/offer-banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative w-auto h-auto">
        <div>
          <img src={offerBanner} className="w-full h-auto" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
