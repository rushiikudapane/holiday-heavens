import { React, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Carousel,
} from "@material-tailwind/react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Testimonials = () => {
  return (
    <div className="my-10">
      <Typography variant="h2" className="my-10">
        Testimonials
      </Typography>
      <div className="mx-8">
        {window.innerWidth < 960 ? (
          <Carousel
            className=""
            autoplay={true}
            autoplayDelay={3000}
            loop={true}
          >
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col justify-start gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography className="flex justify-start" color="blue-gray">
                    Traveller
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;I found solution to all my design needs from Creative
                  Tim. I use them as a freelancer in my hobby projects for fun!
                  And its really affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>

            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography className="flex justify-start" color="blue-gray">
                    Traveller
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;I found solution to all my design needs from Creative
                  Tim. I use them as a freelancer in my hobby projects for fun!
                  And its really affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>

            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography className="flex justify-start" color="blue-gray">
                    Traveller
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;I found solution to all my design needs from Creative
                  Tim. I use them as a freelancer in my hobby projects for fun!
                  And its really affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>
          </Carousel>
        ) : (
          <div className="flex justify-around flex-wrap gap-3">
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col justify-start gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography className="flex justify-start" color="blue-gray">
                    Traveller
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;I found solution to all my design needs from Creative
                  Tim. I use them as a freelancer in my hobby projects for fun!
                  And its really affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>

            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography className="flex justify-start" color="blue-gray">
                    Traveller
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;I found solution to all my design needs from Creative
                  Tim. I use them as a freelancer in my hobby projects for fun!
                  And its really affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>

            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography className="flex justify-start" color="blue-gray">
                    Traveller
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;I found solution to all my design needs from Creative
                  Tim. I use them as a freelancer in my hobby projects for fun!
                  And its really affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;