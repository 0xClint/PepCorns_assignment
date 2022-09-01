import React from "react";
import { Facebook, Goal, Linkedin, Start, Twitter } from "../assests";

const Details = () => {
  return (
    <div className="details px-[3rem]">
      <p className="py-[3rem]">Meet our strong and visionary team members</p>
      <div className="members flex gap-10">
        <div className="member ">
          {/* <div className="img_container rounded-2xl shadow-violet-900 shadow-sm"> */}
          <img
            src={require("../assests/Details/1.jpg")}
            className="rounded-[30px] w-[150px] "
            alt=""
          />
          {/* </div> */}
          <h2 className="profile text-[1.3rem] ml-[10px] font-semibold mt-[1rem]">
            CoFounder
          </h2>
          <p className="ml-[10px] font-medium my-[0.5rem]">Manish Pratik</p>
          <p className="ml-[10px] text-[#4A4A4A]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            nemo.
          </p>
          <div className="social_media flex gap-5 ml-[10px] my-[1rem] h-[35px] justify-start items-center">
            <a href="" className=" hover:scale-110 my-2 duration-100 ">
              <Facebook className="w-[30px] hover:scale-110 duration-100 ease-in" />
            </a>
            <a href="">
              <Linkedin className="w-[30px] hover:scale-110 duration-100 ease-in" />
            </a>
            <a href="">
              <Twitter className="w-[30px] hover:scale-110 duration-100 ease-in" />
            </a>
          </div>
        </div>
        <div className="member ">
          {/* <div className="img_container rounded-2xl shadow-violet-900 shadow-sm"> */}
          <img
            src={require("../assests/Details/2.jpg")}
            className="rounded-[30px] w-[150px] "
            alt=""
          />
          {/* </div> */}
          <h2 className="profile text-[1.3rem] ml-[10px] font-semibold mt-[1rem]">
            CoFounder
          </h2>
          <p className="ml-[10px] my-[0.5rem]">Gautam Menon</p>
          <p className="ml-[10px] text-[#4A4A4A]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            nemo.
          </p>
          <div className="social_media flex gap-5 ml-[10px] my-[1rem] h-[35px] justify-start items-center">
            <a href="" className=" ">
              <Facebook className="w-[30px] hover:scale-110 duration-100 ease-in " />
            </a>
            <a href="">
              <Linkedin className="w-[30px] hover:scale-110 duration-100 ease-in" />
            </a>
            <a href="">
              <Twitter className="w-[30px] hover:scale-110 duration-100 ease-in" />
            </a>
          </div>
        </div>
      </div>
      {/* *************************Target Section*********************** */}
      <p className="my-[3rem] font-medium">
        How will we use funds : Sales & Marketing - 50% | Human Resource-30% |
        Technology -10% | OPEX-10%
      </p>
      <div className="target flex justify-start items-center gap-8">
        <div className="start_container bg-[#EFE1FF] rounded-2xl flex p-[1.5rem] gap-5">
          <div className="left">
            <h1>START DATE</h1>
            <p className="text-[1.3rem] font-medium my-3">
              2022-06-26 16:38:05
            </p>
            <p> Ends in 0 Days</p>
          </div>
          <Start className="hover:scale-110 duration-100 ease-in" />
        </div>
        <div className="target_container bg-[#EFE1FF] rounded-2xl flex p-[1.5rem] gap-5">
          <div className="left">
            <h1>START DATE</h1>
            <p className="text-[1.3rem] font-medium my-3">
              2022-06-26 16:38:05
            </p>
            <p> Ends in 0 Days</p>
          </div>
          <Goal className="hover:scale-110 duration-100 ease-in" />
        </div>
      </div>

      {/* *************************FAQ*********************** */}
      <h2 className="font-bold text-[2rem] mt-[5rem] mb-[3rem]">FAQ</h2>
      <div className="question my-5">
        <h2 className="text-[1.3rem] font-medium">
          What does your company do ?
        </h2>
        <p className="text-[1.1rem] my-[0.5rem]">
          LetzRent is an online search, compare & booking platform for
          self-drive car rental that rewards users for renting. We aggregate
          rental deals from multiple service providers and present them to users
          with prices, reviews & facts to make an informed decision. Currently
          running a pilot in Bangalore by aggregating Zoomcar, Avis, Mychoize &
          Wowcarz.
        </p>
      </div>
      <div className="question my-5">
        <h2 className="text-[1.3rem] font-medium">
          Where do you want to be in 5 years ?
        </h2>
        <p className="text-[1.1rem] my-[0.5rem]">
          Uber for Self Drive Car Rental
        </p>
      </div>
      <div className="question my-5">
        <h2 className="text-[1.3rem] font-medium">
          Why did you choose this idea, what's your biggest Obstacle?
        </h2>
        <p className="text-[1.1rem] my-[0.5rem] pb-[5rem]">
          Customers want low Prices: And to get low prices 85% of the consumers
          check at least 2 data points (Source: BCG Consumer Trends). In various
          sectors information-centred buying has been made more efficient by
          companies like MMT for Travel, Policy bazaar for Insurance, Myntra or
          Shopperstop for Lifestyle products. However, for rental products,
          there is no one & to fill this need and make the process efficient we
          launched Letzrent, hoping to have a first-mover advantage and dominate
          the market in t
        </p>
      </div>
    </div>
  );
};

export default Details;
