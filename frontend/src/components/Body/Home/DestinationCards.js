import React from "react";
import { Link } from "react-router-dom";
import {
  Tent,
  Guitar,
  Cross,
  Utensils,
  Clock4,
  CalendarCheck2,
  MapPin,
} from "lucide-react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Carousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

const DestinationCards = () => {
  const data = [
    {
      label: "Camps",
      value: "Camps",
      destinationData: [
        {
          title: "Pawna Dam Camping",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai / Pune",
          time: "1 Day / 1 Night",
          actualPrice: "1200",
          discountedPrice: "900",
        },
        {
          title: "Tung Camping",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai / Pune",
          time: "1 Day / 1 Night",
          actualPrice: "1500",
          discountedPrice: "1000",
        },
        {
          title: "Lake side Camping",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai / Pune",
          time: "1 Day / 1 Night",
          actualPrice: "1500",
          discountedPrice: "1100",
        },
        {
          title: "Table top Camping",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai / Pune",
          time: "1 Day / 1 Night",
          actualPrice: "1000",
          discountedPrice: "800",
        },
        {
          title: "Megh Malhar",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai/Pune",
          time: "1 Day / 1 Night",
          actualPrice: "2000",
          discountedPrice: "1500",
        },
        {
          title: "Megh Malhar",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai/Pune",
          time: "1 Day / 1 Night",
          actualPrice: "2000",
          discountedPrice: "1500",
        },
      ],
    },
    {
      label: "Resorts",
      value: "Resorts",
      destinationData: [
        {
          title: "Megh Malhar",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai/Pune",
          time: "1 Day / 1 Night",
          actualPrice: "2000",
          discountedPrice: "1500",
        },
        {
          title: "Megh Malhar",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai/Pune",
          time: "1 Day / 1 Night",
          actualPrice: "2000",
          discountedPrice: "1500",
        },
        {
          title: "Megh Malhar",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai/Pune",
          time: "1 Day / 1 Night",
          actualPrice: "2000",
          discountedPrice: "1500",
        },
        {
          title: "Megh Malhar",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai/Pune",
          time: "1 Day / 1 Night",
          actualPrice: "2000",
          discountedPrice: "1500",
        },
        {
          title: "Megh Malhar",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai/Pune",
          time: "1 Day / 1 Night",
          actualPrice: "2000",
          discountedPrice: "1500",
        },
        {
          title: "Megh Malhar",
          imgSrc: "",
          date: "21-01-2024",
          place: "Mumbai/Pune",
          time: "1 Day / 1 Night",
          actualPrice: "2000",
          discountedPrice: "1500",
        },
      ],
    },
  ];

  return (
    <div className="mb-8 w-11/12">
      <Tabs
        value="Camps"
        className="w-full bg-gray-200 rounded-xl shadow-inner shadow-gray-500 border-t-4 border-cyan-900 flex flex-col justify-center items-center py-15"
      >
        <TabsHeader className="bg-cyan-700 border-2 border-gray-400 shadow-2xl shadow-gray-700 w-85 lg:w-110 mt-10 h-16">
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="w-full text-black font-bold text-lg"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="my-5 items-center lg:px-10 pb-10">
          <div>
            {data.map(({ destinationData, value }) => {
              return (
                <TabPanel
                  key={value}
                  value={value}
                  className="flex justify-evenly flex-wrap items-center gap-2"
                >
                  {destinationData.map((destinationObject, index) => {
                    return (
                      <Link to="/card-details">
                        <Card
                          key={index}
                          value={index}
                          className="w-80 max-w-[26rem] shadow-xl mt-16 hover:scale-105 transition ease-in-out delay-100 duration-300 hover:shadow-cyan-700 hover:shadow-2xl"
                        >
                          <CardHeader floated={true} color="blue-gray">
                            <img
                              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                              alt="ui/ux review check"
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                          </CardHeader>
                          <CardBody>
                            <div className="mb-3 flex items-center justify-between">
                              <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-bold font-poppins text-2xl"
                              >
                                {destinationObject.title}
                              </Typography>
                            </div>

                            <div className="flex flex-row flex-around">
                              <div className="flex  w-1/2 flex-col justify-center items-start">
                                <Typography
                                  color="gray"
                                  className="line-through text-xl"
                                >
                                  ₹{destinationObject.actualPrice}/-
                                </Typography>
                                <Typography
                                  color="black"
                                  className="text-4xl font-bold text-cyan-900"
                                >
                                  ₹{destinationObject.discountedPrice}/-
                                </Typography>
                              </div>
                              <div className="flex w-1/2 flex-col justify-center items-start">
                                <Typography
                                  color="gray"
                                  className="mt-1 flex flex-row flex-between"
                                >
                                  <CalendarCheck2 />
                                  <p className="pl-1">
                                    {destinationObject.date}
                                  </p>
                                </Typography>
                                <Typography
                                  color="gray"
                                  className="mt-1 flex flex-row flex-between"
                                >
                                  <MapPin />
                                  <p className="pl-1">
                                    {destinationObject.place}
                                  </p>
                                </Typography>
                                <Typography
                                  color="gray"
                                  className="mt-1 flex flex-row flex-between"
                                >
                                  <Clock4 />
                                  <p className="pl-1">
                                    {destinationObject.time}
                                  </p>
                                </Typography>
                              </div>
                            </div>
                            <div className="group mt-5 inline-flex flex-wrap flex-justify-around items-center gap-6">
                              <Tooltip content="Tent">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:!opacity-100 group-hover:opacity-70 hover:bg-cyan-900 hover:text-white">
                                  <Tent />
                                </span>
                              </Tooltip>
                              <Tooltip content="First aid">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-cyan-900 hover:text-white hover:!opacity-100 group-hover:opacity-70">
                                  <Cross />
                                </span>
                              </Tooltip>
                              <Tooltip content="Music & fun">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-cyan-900 hover:text-white hover:!opacity-100 group-hover:opacity-70">
                                  <Guitar />
                                </span>
                              </Tooltip>
                              <Tooltip content="Food">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-cyan-900 hover:text-white hover:!opacity-100 group-hover:opacity-70">
                                  <Utensils />
                                </span>
                              </Tooltip>
                            </div>
                            <Typography className="mt-1 text-start hover:text-cyan-900">
                              +20 items
                            </Typography>
                          </CardBody>
                          <CardFooter className="pt-1 flex justify-between">
                            <Button
                              className="text-cyan-500 border-cyan-500 flex justify-between items-center mr-3"
                              size="sm"
                              variant="outlined"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15"
                                  height="15"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="1"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="lucide lucide-phone-incoming"
                                >
                                  <polyline points="16 2 16 8 22 8" />
                                  <line x1="22" x2="16" y1="2" y2="8" />
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                              </span>
                              <span>Request Callback</span>
                            </Button>
                            <Link to="/card-details">
                              <Button size="sm" className="bg-cyan-700">
                                Book Now
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      </Link>
                    );
                  })}
                </TabPanel>
              );
            })}
          </div>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default DestinationCards;
