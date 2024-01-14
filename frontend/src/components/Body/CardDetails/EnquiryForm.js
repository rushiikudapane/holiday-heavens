import React, { useState } from "react";
import {
  Button,
  Card,
  Input,
  Typography,
  Textarea,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EnquiryForm = () => {
  const [enquiryDate, setEnquiryDate] = useState(new Date());

  const changeDate = (e) => {
    setEnquiryDate(e);
  };

  return (
    <div>
      <div className="my-10 bg-white rounded-lg shadow-lg border-t-4 border-cyan-900">
        <Card color="transparent" shadow={true} className="px-5 py-5 shadow-lg">
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
                    value={enquiryDate}
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
                  This data will only be used by our team to contact you and no
                  other purposes.
                </Typography>
              </div>
            </div>

            <Button size="lg" className="mt-6 bg-cyan-700" fullWidth>
              Send Enquiry
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default EnquiryForm;
