import React, { useState } from "react";
import {
  Button,
  Carousel,
  Card,
  Input,
  Typography,
  Textarea,
  Popover,
  PopoverHandler,
  PopoverContent,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import grill from "../../assets/grill.png";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const CardDetails = () => {
  const [dateState, setDateState] = useState(new Date());
  const [enquiryDate, setEnquiryDate] = useState(new Date());
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const changeDate = (e) => {
    setDateState(e);
    setEnquiryDate(e);
  };

  const [open2, setOpen2] = useState(0);
  const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);

  return (
    <div className="bg-gray-100">
      <div className="flex flex-wrap">
        <div className="lg:w-3/5 bg-gray-100 px-5 py-5 items-center">
          <Carousel
            autoplay={true}
            autoplayDelay={3000}
            loop={true}
            transition={{ type: "spring", duration: 0.9 }}
            className="rounded-xl h-96 mb-8"
          >
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
          <div className="flex-col shadow-lg rounded-xl border-t-4 border-cyan-900">
            <div className="bg-cyan-700 py-4 font-bold rounded-t-xl text-xl">
              Includes
            </div>
            <div className="bg-gray-50 flex flex-wrap justify-around rounded-b-xl shadow-inner">
              <div className="w-1/4 p-4 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-tent"
                >
                  <path d="M3.5 21 14 3" />
                  <path d="M20.5 21 10 3" />
                  <path d="M15.5 21 12 15l-3.5 6" />
                  <path d="M2 21h20" />
                </svg>
                <p>Tent (Twin sharing)</p>
              </div>
              <div className="w-1/4 p-4 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-salad"
                >
                  <path d="M7 21h10" />
                  <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                  <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
                  <path d="m13 12 4-4" />
                  <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
                </svg>
                <p>Breakfast (Limited)</p>
              </div>
              <div className="w-1/4 p-4 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-sandwich"
                >
                  <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
                  <path d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83" />
                  <path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" />
                  <path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" />
                </svg>
                <p>Evening Snacks (Limited)</p>
              </div>
              <div className="w-1/4 p-4 flex flex-col items-center">
                <img src={grill} className="w-16 h-16" />
                <p>Barbeque</p>
              </div>
              <div className="w-1/4 p-4 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-utensils-crossed"
                >
                  <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
                  <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
                  <path d="m2.1 21.8 6.4-6.3" />
                  <path d="m19 5-7 7" />
                </svg>
                <p>Dinner (Unlimited)</p>
              </div>
              <div className="w-1/4 p-4 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-book-image"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  <circle cx="10" cy="8" r="2" />
                  <path d="m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17" />
                </svg>
                <p>Guide</p>
              </div>
              <div className="w-1/4 p-4 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-parking-circle"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
                </svg>
                <p>Free Parking</p>
              </div>
              <div className="w-1/4 p-4 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-cross"
                >
                  <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
                </svg>
                <p>First Aid</p>
              </div>
            </div>
          </div>
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
                        Embark on an Exciting Orientation Journey and Secure
                        Your Exclusive Tent Allotment Experience!
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
                        delectable snacks while immersing yourself in a medley
                        of engaging games.
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
                        Indulge in a tantalizing array of culinary delights with
                        our BBQ offerings, where both vegetarians and
                        non-vegetarians alike can savor a symphony of flavors.
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
                        Savor an enchanting evening with flavors, melodies, and
                        a crackling bonfire
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

          {/* Photo Gallery Grid */}

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://docs.material-tailwind.com/img/team-3.jpg"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://docs.material-tailwind.com/img/team-3.jpg"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                  alt="gallery-photo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 bg-gray-100 flex flex-col items-center lg:py-10">
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
          <Calendar
            value={dateState}
            onChange={changeDate}
            className="border-white"
          />
          {/* <p> 
          Current selected date is{" "}
          <b>{moment(dateState).format("MMMM Do YYYY")}</b>
        </p> */}

          <Button size="lg" className="my-5 bg-cyan-700">
            Book Now
          </Button>
          <p className="font-bold text-xs">
            Need assistance? Call us on +91 9130003737{" "}
          </p>

          <div className="my-10 bg-white rounded-lg shadow-lg border-t-4 border-cyan-900">
            <Card
              color="transparent"
              shadow={true}
              className="px-5 py-5 shadow-lg"
            >
              <Typography color="gray" className="mt-1 font-normal">
                Get Exclusive Offers!!! Fill the Enquiry Form
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6 items-start">
                  <Input
                    size="lg"
                    placeholder="Your Name"
                    variant="outlined"
                    label="Name"
                    color="blue"
                    className="rounded-xl"
                  />

                  <Input
                    size="lg"
                    placeholder="your-mail-id@mail.com"
                    variant="outlined"
                    label="Mail ID"
                    color="blue"
                    className="rounded-xl"
                  />
                  <Input
                    type="number"
                    size="lg"
                    placeholder="Your Contact Number"
                    variant="outlined"
                    label="Contact No."
                    color="blue"
                    className="rounded-xl"
                  />
                  <Input
                    type="number"
                    size="lg"
                    placeholder="Count"
                    variant="outlined"
                    label="Total People"
                    color="blue"
                    className="rounded-xl"
                  />
                  <Popover placement="bottom">
                    <PopoverHandler>
                      <Input
                        label="Select a Date"
                        onChange={changeDate}
                        value={enquiryDate}
                        className="rounded-xl"
                      />
                    </PopoverHandler>
                    <PopoverContent>
                      <Calendar
                        value={dateState}
                        onChange={changeDate}
                        className="border-white rounded-xl"
                      />
                    </PopoverContent>
                  </Popover>
                  <Textarea
                    type="text-box"
                    size="lg"
                    variant="outlined"
                    label="Message"
                    color="blue"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-row justify-around">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-green-800 lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="mt-2font-normal"
                    >
                      We assure the privacy of your contact data.
                    </Typography>
                  </div>
                </div>

                <div className="flex flex-row justify-around">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-green-800 lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="mt-2 font-normal"
                    >
                      This data will only be used by our team to contact you and
                      no other purposes.
                    </Typography>
                  </div>
                </div>

                <Button size="lg" className="mt-6 bg-cyan-700" fullWidth>
                  Send Enquiry
                </Button>
              </form>
            </Card>
          </div>

          {/* <MapComponent className="w-10 h-10" /> */}
          <div className="flex flex-col mx-10 my-10 rounded-lg shadow-lg border-t-4 border-cyan-900">
            <div className="bg-blue-600 py-2 font-bold rounded-t-lg">
              <h1>Why Holiday Heavens?</h1>
            </div>
            <div className="flex flex-col px-3 py-3 rounded-b-lg shadow-inner">
              <div className="flex flex-row my-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <div className="px-2">
                  <p>
                    Breathtaking Scenery <br />
                    Immerse yourself in the beauty of nature with panoramic
                    views and stunning landscapes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row my-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <div className="px-2">
                  <p>
                    Exclusive Camping Spots:
                    <br />
                    Discover unique and secluded camping spots for a more
                    intimate and personalized experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-row my-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <div className="px-2">
                  <p>
                    Family-Friendly Environment:
                    <br />
                    Enjoy a safe and welcoming atmosphere suitable for families,
                    including kid-friendly activities.
                  </p>
                </div>
              </div>
              <div className="flex flex-row my-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <div className="px-2">
                  <p>
                    Eco-Friendly Practices:
                    <br />
                    Support sustainable tourism with our commitment to
                    eco-friendly and responsible camping practices.
                  </p>
                </div>
              </div>
              <div className="flex flex-row my-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <div className="px-2">
                  <p>
                    Star-Gazing Nights:
                    <br />
                    Experience the magic of starry nights in clear skies away
                    from city lights.
                  </p>
                </div>
              </div>
              <div className="flex flex-row my-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <div className="px-2">
                  <p>
                    Campfire Gatherings:
                    <br />
                    Create lasting memories around the campfire with
                    storytelling, music, and delicious treats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ, Advisory, return Policy Accordian */}
      <div className="mx-10 mb-20 rounded-lg shadow-lg border-t-4 border-cyan-900">
        <Accordion open={open2 === 1}>
          <AccordionHeader
            onClick={() => handleOpen2(1)}
            className="bg-cyan-700 rounded-t-lg text-black flex flex-col items-center"
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
            className="bg-cyan-700 text-black flex flex-col items-center"
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
            className="bg-cyan-700 text-black flex flex-col items-center"
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
            className="bg-cyan-700 rounded-b-lg text-black flex flex-col items-center"
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

export default CardDetails;
