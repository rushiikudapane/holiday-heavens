import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const Itinerary = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="my-7 rounded-xl shadow-lg border-t-4 border-cyan-900">
        <div className="bg-cyan-700 rounded-t-xl py-4">
          <h1 className="font-bold text-xl">Itinerary</h1>
        </div>
        <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="font-bold text-cyan-700 flex flex-col items-center"
          >
            <p> Day 1 </p>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-calendar-check-2"
                >
                  <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="m16 20 2 2 4-4" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div>
                  <p className="text-lg text-cyan-700">4pm</p>
                </div>
                <div>
                  <p className="text-xl text-cyan-700 font-bold">
                    Reach the campsite and have a welcome drink
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-tent-tree"
                >
                  <circle cx="4" cy="4" r="2" />
                  <path d="m14 5 3-3 3 3" />
                  <path d="m14 10 3-3 3 3" />
                  <path d="M17 14V2" />
                  <path d="M17 14H7l-5 8h20Z" />
                  <path d="M8 14v8" />
                  <path d="m9 14 5 8" />
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <p className="text-lg text-cyan-700">4pm</p>
                </div>
                <div>
                  <p className="text-xl text-cyan-700 font-bold">
                    Make the most of your leisure hours by embarking on a
                    journey of exploration through the scenic campsite and
                    tranquil lake until 5 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-tent"
                >
                  <path d="M3.5 21 14 3" />
                  <path d="M20.5 21 10 3" />
                  <path d="M15.5 21 12 15l-3.5 6" />
                  <path d="M2 21h20" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div>
                  <p className="text-lg text-cyan-700">5pm</p>
                </div>
                <div>
                  <p className="text-xl text-cyan-700 font-bold">
                    Embark on an Exciting Orientation Journey and Secure Your
                    Exclusive Tent Allotment Experience!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-coffee"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <line x1="6" x2="6" y1="2" y2="4" />
                  <line x1="10" x2="10" y1="2" y2="4" />
                  <line x1="14" x2="14" y1="2" y2="4" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div>
                  <p className="text-lg text-cyan-700">5:30pm</p>
                </div>
                <div>
                  <p className="text-xl text-cyan-700 font-bold">
                    Indulge in a delightful affair of elevated tea and
                    delectable snacks while immersing yourself in a medley of
                    engaging games.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-coffee"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <line x1="6" x2="6" y1="2" y2="4" />
                  <line x1="10" x2="10" y1="2" y2="4" />
                  <line x1="14" x2="14" y1="2" y2="4" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div>
                  <p className="text-lg text-cyan-700">8:30 PM</p>
                </div>
                <div>
                  <p className="text-xl text-cyan-700 font-bold">
                    Indulge in a tantalizing array of culinary delights with our
                    BBQ offerings, where both vegetarians and non-vegetarians
                    alike can savor a symphony of flavors.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-utensils"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div>
                  <p className="text-lg text-cyan-700">10:00pm - 11:00pm</p>
                </div>
                <div>
                  <p className="text-lg text-cyan-700 font-bold">
                    Savor an enchanting evening with flavors, melodies, and a
                    crackling bonfire
                  </p>
                </div>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="font-bold text-cyan-700 flex flex-col items-center"
          >
            <p> Day 2 </p>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-calendar-check-2"
                >
                  <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="m16 20 2 2 4-4" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div>
                  <p className="text-lg text-cyan-700">4pm</p>
                </div>
                <div>
                  <p className="text-xl text-cyan-700 font-bold">
                    Reach the campsite and have a welcome drink
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-calendar-check-2"
                >
                  <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="m16 20 2 2 4-4" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div>
                  <p className="text-lg text-cyan-700">4pm</p>
                </div>
                <div>
                  <p className="text-xl text-cyan-700 font-bold">
                    Reach the campsite and have a welcome drink
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-calendar-check-2"
                >
                  <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="m16 20 2 2 4-4" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div>
                  <p className="text-lg text-cyan-700">4pm</p>
                </div>
                <div>
                  <p className="text-xl text-cyan-700 font-bold">
                    Reach the campsite and have a welcome drink
                  </p>
                </div>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default Itinerary;
