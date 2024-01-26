import React from "react";
import {
  CardHeader,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import logo from "../../assets/holiday-heavens-logo.png";
// import logo2 from "../../assets/holiday-heavens-logo2.png";
// shadow-[rgba(0,0,15,0.5)_0px_1px_50px_10px]
const Footer = () => {
  return (
    <div>
      <Card className="bg-gray-900 rounded-none mt-32">
        <CardHeader
          floated={true}
          className="bg-white shadow-inner shadow-gray-500 border-2 border-gray-100 mb-12 mx-5 px-10 py-10 lg:mx-28"
        >
          <div className="flex flex-row flex-wrap items-center gap-y-6 gap-x-1 text-center justify-between">
            <img src={logo} alt="logo-ct" className="w-72" />
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 justify-center">
              <li className="flex-col gap-y-2 lg:border-r-2 lg:pr-5 lg:py-5 lg:border-gray-300">
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-bold font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  VILLAS & RESORTS
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-bold text-sm pt-2 text-gray-600 hover:scale-110 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  KESHAR AGRO TOURISM
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-bold text-sm pt-2 text-gray-600 hover:scale-110 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  MEGH MALHAR
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-bold text-sm pt-2 text-gray-600 hover:scale-110 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  KESHAR AGRO TOURISM
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-bold text-sm pt-2 text-gray-600 hover:scale-110 transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  MEGH MALHAR
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-bold text-sm pt-2 text-gray-600 hover:scale-110 transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  SANGAURI FARM
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-bold text-sm pt-2 text-gray-600 hover:scale-110 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  MALHAR MOUNT VILLA
                </Typography>
              </li>
              <li className="flex-col lg:border-r-2 lg:pr-5 py-5 lg:border-gray-300">
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-bold font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500 "
                >
                  CAMPS
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-bold text-sm pt-2 text-gray-600 hover:scale-110 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  PAWANA ADVENTURE CAMP
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-bold text-sm pt-2 text-gray-600 hover:scale-110 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  PAWANA COTTAGE
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-bold text-sm pt-2 text-gray-600 hover:scale-110 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  PAWANA DAM CAMP
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-bold text-sm pt-2 text-gray-600 hover:scale-110 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  PAWANA MACHI CAMPING
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-bold text-sm pt-2 text-gray-600 hover:scale-110 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  PAWANA STAY CAMPING
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-bold text-sm pt-2 text-gray-600 hover:scale-110 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  SWARG RESORT PAWANA DAM
                </Typography>
              </li>
              <li className="flex-col">
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-bold font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  CONTACT INFO
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-bold text-sm pt-2 text-gray-600 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  WE ARE AVAILABLE MON-SAT 10AM-5PM
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-bold text-sm pt-2 text-gray-600 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  <hr className="text-black border-gray-600 my-4" />
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-normal font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  support@holidayheavens.com
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className=" font-bold text-sm pt-1 text-gray-600 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                >
                  9130003737
                </Typography>
              </li>
            </ul>
          </div>
        </CardHeader>
        <CardBody>
          <hr className="mb-8 mx-16 border-blue-gray-50" />
          <div className="flex gap-4 text-blue-gray-900 justify-center">
            <Typography
              as="a"
              href="#"
              className="text-blue-900 opacity-80 transition-opacity hover:opacity-100 hover:text-blue-900"
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="#"
              className="text-pink-700 opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="#"
              className="text-red-700 opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M21.35 3.54c-0.18-0.68-0.72-1.22-1.41-1.4C18.96 2 12 2 12 2S5.04 2 3.06 2.14C2.37 2.32 1.83 2.86 1.65 3.54 1.26 5.23 1 7.03 1 9v6c0 1.97 0.26 3.77 0.65 5.46 0.18 0.68 0.72 1.22 1.41 1.4C5.04 22 12 22 12 22s6.96 0 8.94-0.14c0.69-0.18 1.23-0.72 1.41-1.4 0.39-1.69 0.65-3.49 0.65-5.46v-6c0-1.97-0.26-3.77-0.65-5.46zM9.91 15V8.99L15.88 12 9.91 15z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
          </div>
          <Typography
            color="blue-gray"
            className="text-white mt-7 text-center font-normal"
          >
            &copy; 2024 Holiday Heavens
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Footer;
