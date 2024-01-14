import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQsection = () => {
  const [open2, setOpen2] = useState(0);
  const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);
  return (
    <div>
      <div className="mx-10 mb-20 rounded-lg shadow-lg border-t-4 border-cyan-900">
        <Accordion open={open2 === 1}>
          <AccordionHeader
            onClick={() => handleOpen2(1)}
            className="bg-blue-200 rounded-t-lg text-black flex flex-col items-center"
          >
            Frequently Asked Questions (FAQ)
          </AccordionHeader>
          <AccordionBody className="text-start">
            <h1>How to reach the campsite?</h1>
            <ul className="list-disc">
              <li>
                Take a train from Mumbai or Pune to Lonavla or Kamshet station.
              </li>
              <li>Hire a private cab or connect with a recommended driver.</li>
              <li>
                Select the 'Cab Details' add-on at the time of booking for
                driver information.
              </li>
              <li>
                From Lonavla Station: Rs. 2400 (up to 6 people), Rs. 3000 (7-14
                adults).
              </li>
              <li>
                From Kamshet Station: Rs. 2000 (up to 6 people), Rs. 2400 (7-14
                adults).
              </li>
              <li>
                Public bus available to Kale Colney from Kamshet; campsite is a
                5-min walk from Kale Colney.
              </li>
              <li>Common autos are available from Kamshet.</li>
            </ul>

            <h1>Is washroom available at the campsite?</h1>
            <p>Washroom facilities (common) are available during the stay.</p>

            <h1>Is the campsite safe for women?</h1>
            <p>
              The campsite is completely safe for women & children. The campsite
              staff is present at all times to assist you.
            </p>

            <h1>Is Jain food available?</h1>
            <p>
              Yes, Jain food is available. Just select Jain food at the time of
              booking.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open2 === 2}>
          <AccordionHeader
            onClick={() => handleOpen2(2)}
            className="bg-blue-200 text-black flex flex-col items-center"
          >
            Things to carry
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open2 === 3}>
          <AccordionHeader
            onClick={() => handleOpen2(3)}
            className="bg-blue-200 text-black flex flex-col items-center"
          >
            Advisory
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open2 === 4}>
          <AccordionHeader
            onClick={() => handleOpen2(4)}
            className="bg-blue-2  00 rounded-b-lg text-black flex flex-col items-center"
          >
            Cancellation Policy
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQsection;
