import React from "react";
import tempImg from "../../../assets/tempDestImg.jpeg";
import {
  Button,
  Input,
  Typography,
  Card,
  Textarea,
  CardHeader,
  Checkbox,
} from "@material-tailwind/react";

const BookNow = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap bg-gray-100 ">
        <div className="lg:w-2/5 px-5 py-5 flex flex-col items-center">
          <div>
            <img src={tempImg} className="w-96 h-80" />
          </div>
          <div className="my-8">
            <Typography variant="h3">Pawna Riverside Camping</Typography>
            <Typography variant="h6" className="font-normal">
              Check-in Date: 17th January 2024 03:00 PM
            </Typography>
            <Typography variant="h6" className="font-normal">
              Check-out Date: 18th January 2024 11:00 AM
            </Typography>
          </div>
          <div className="rounded-lg border-t-4 border-cyan-900 shadow-xl bg-white">
            <div className="bg-cyan-700 rounded-t-lg w-full py-2">
              <Typography variant="h4">Select Count</Typography>
            </div>
            <div>
              <div className="flex flex-row items-center justify-around my-3 py-3">
                <div className="w-2/4">
                  <Typography variant="h5">Adult (10+ years)</Typography>
                  <Typography variant="h6" className="font-normal">
                    ₹999/- per person
                  </Typography>
                </div>
                <div className="flex flex-row items-center bg-gray-300 rounded-lg">
                  <Button size="sm" className="my-2 mx-2 bg-cyan-800">
                    <Typography variant="h5" className="font-bold">
                      -
                    </Typography>
                  </Button>
                  <Typography variant="h6" className="font-normal">
                    500
                  </Typography>
                  <Button size="sm" className="my-2 mx-2 bg-cyan-800">
                    <Typography variant="h5" className="font-bold">
                      +
                    </Typography>
                  </Button>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-around items-center my-3 py-3">
                  <div className="w-2/4">
                    <Typography variant="h5">Child (5-10 years)</Typography>
                    <Typography variant="h6" className="font-normal">
                      ₹999/- per person
                    </Typography>
                  </div>
                  <div className="flex flex-row items-center bg-gray-300 rounded-lg">
                    <Button size="sm" className="my-2 mx-2 bg-cyan-800">
                      <Typography variant="h5" className="font-bold">
                        -
                      </Typography>
                    </Button>
                    <Typography variant="h6" className="font-normal">
                      500
                    </Typography>
                    <Button size="sm" className="my-2 mx-2 bg-cyan-800">
                      <Typography variant="h5" className="font-bold">
                        +
                      </Typography>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 mx-5 my-5 shadow-inner">
                <div className="text-start">
                  <Typography variant="h5" className="pt-5 px-5 font-normal">
                    Total Amount: <b>$5000</b>
                  </Typography>
                  <Typography
                    variant="h6"
                    className="font-thin text-xs text-gray-500 px-5"
                  >
                    *Inclusive all taxes
                  </Typography>
                  <Typography variant="h5" className="py-2 px-5 font-normal">
                    Adavance Amount: <b>$5000</b>
                  </Typography>
                  <Typography variant="h5" className="py-2 px-5 font-normal">
                    Remaining Amount: <b>$5000</b>
                  </Typography>
                </div>
                <div className="px-5 py-5 mb-5 mt-2">
                  <Typography
                    variant="h6"
                    className="text-red-600 italic font-normal text-xs"
                  >
                    We accept UPI, Credit Card, Debit Card, Net Banking, Google
                    Pay, PhonePe. For Google Pay & PhonePe, please select the
                    UPI option and enter your GPay or PhonePe UPI ID. Remaining
                    amount can be paid in cash or UPI only
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* grid part 2 */}
        <div className="lg:w-3/5 px-5 py-5 flex flex-col items-center">
          <div className="bg-white rounded-lg shadow-lg border-t-4 border-cyan-900 w-full">
            <Card
              color="transparent"
              shadow={true}
              className="px-5 py-5 shadow-lg"
            >
              <CardHeader
                floated={false}
                className="bg-cyan-700 text-white shadow-inner"
              >
                <Typography variant="h4" className="mt-1 font-normal">
                  Booking Details
                </Typography>
              </CardHeader>

              <form className="mt-8 mb-2">
                <div className="mb-1 flex flex-col gap-6 items-start">
                  <div className="flex flex-row flex-wrap justify-around w-full ">
                    <div className="w-full lg:w-1/2 lg:px-5">
                      <div className="my-4">
                        <Input
                          size="lg"
                          placeholder="Your Name"
                          variant="outlined"
                          label="Name"
                          color="blue"
                          className="rounded-xl"
                        />
                      </div>

                      <div className="my-4">
                        <Input
                          type="number"
                          size="lg"
                          placeholder="Your Contact Number"
                          variant="outlined"
                          label="Contact No."
                          color="blue"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:px-5">
                      <div className="my-4">
                        <Input
                          size="lg"
                          placeholder="your-mail-id@mail.com"
                          variant="outlined"
                          label="Mail ID"
                          color="blue"
                          className="rounded-xl"
                        />
                      </div>
                      <div className="my-4">
                        <Input
                          type="number"
                          size="lg"
                          placeholder="Your Whatsapp Number"
                          variant="outlined"
                          label="Whatsapp No."
                          color="blue"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:mx-5">
                  <div className="flex flex-row items-center">
                    <Checkbox color="blue" />
                    <Typography variant="h6" className="font-normal">
                      Is Whatsapp number same as Contact number?
                    </Typography>
                  </div>
                  <div className="my-4">
                    <Textarea
                      type="text-box"
                      size="lg"
                      variant="outlined"
                      label="Message or Questions"
                      color="blue"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </form>
              <CardHeader
                floated={false}
                className="bg-cyan-700 text-white shadow-inner"
              >
                <Typography variant="h4" className="mt-1 font-normal">
                  Food Preferences
                </Typography>
              </CardHeader>

              <div className="flex flex-row flex-wrap justify-around">
                <div className="w-full lg:w-1/2 my-5">
                  <div className="flex flex-row justify-around items-center">
                    <Typography variant="h5" className="font-normal text-black">
                      Veg
                    </Typography>
                    <div className="flex flex-row items-center bg-gray-300 rounded-lg">
                      <Button size="sm" className="my-2 mx-2 bg-cyan-800">
                        <Typography variant="h5" className="font-bold">
                          -
                        </Typography>
                      </Button>
                      <Typography variant="h6" className="font-normal">
                        500
                      </Typography>
                      <Button size="sm" className="my-2 mx-2 bg-cyan-800">
                        <Typography variant="h5" className="font-bold">
                          +
                        </Typography>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:my-5">
                  <div className="flex flex-row justify-around items-center">
                    <Typography variant="h5" className="font-normal text-black">
                      Non-Veg
                    </Typography>
                    <div className="flex flex-row items-center bg-gray-300 rounded-lg">
                      <Button size="sm" className="my-2 mx-2 bg-cyan-800">
                        <Typography variant="h5" className="font-bold">
                          -
                        </Typography>
                      </Button>
                      <Typography variant="h6" className="font-normal">
                        500
                      </Typography>
                      <Button size="sm" className="my-2 mx-2 bg-cyan-800">
                        <Typography variant="h5" className="font-bold">
                          +
                        </Typography>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5">
                <Typography
                  variant="h6"
                  className="font-thin italic items-center"
                >
                  <Checkbox color="blue" />I have read, understood and accepted
                  the TERMS & CONDITIONS and I am fully aware of the inclusions,
                  exclusions & cancellation policies. I agree to get updates
                  regarding my booking on WhatsApp.
                </Typography>
              </div>
              <Button size="lg" className="mt-6 bg-cyan-700" fullWidth>
                <Typography variant="h6" className="font-bold">
                  Make Payment $5000/-
                </Typography>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
