import React from "react";

import CardDetailsCarousel from "./CardDetailsCarousel";
import IncludesTable from "./IncludesTable";
import Itinerary from "./Itinerary";
import PhotoGrid from "./PhotoGrid";
import PriceCard from "./PriceCard";
import BookNow from "./BookNow";
import EnquiryForm from "./EnquiryForm";
import InfoCard from "./InfoCard";
import FAQsection from "./FAQsection";

const CardDetails = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-wrap">
        <div className="lg:w-3/5 bg-gray-100 px-5 py-5 items-center">
          <CardDetailsCarousel />
          <IncludesTable />
          <Itinerary />
          <PhotoGrid />
        </div>

        <div className="lg:w-2/5 bg-gray-100 flex flex-col items-center lg:py-10">
          <PriceCard />
          <BookNow />
          <EnquiryForm />
          {/* <MapComponent className="w-10 h-10" /> */}
          <InfoCard />
        </div>
      </div>

      {/* FAQ, Advisory, return Policy Accordian */}
      <FAQsection />
    </div>
  );
};

export default CardDetails;
