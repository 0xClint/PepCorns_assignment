import React from "react";
import Details from "../components/Details";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Pitch from "../components/Pitch";
import Updates from "../components/Updates";
import Comment from "../components/Comment";
import { useState } from "react";

const Home = () => {
  const [pitch, setPitch] = useState(true);
  const [details, setDetails] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [commment, setComment] = useState(false);

  const handleClick = (item) => {
    setPitch(false);
    setDetails(false);
    setUpdates(false);
    setComment(false);
    if (item == "pitch") {
      console.log("hello");
      setPitch(true);
    }
    if (item == "details") {
      console.log("hello");
      setDetails(true);
    }
    if (item == "updates") {
      console.log("hello");
      setUpdates(true);
    }
    if (item == "comment") {
      console.log("hello");
      setComment(true);
    }
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="video_section flex mx-[7rem] justify-between">
        <div className="video_container w-[60vw] h-[80vh] flex flex-col justify-start items-start rounded-b-2xl shadow-lg">
          <iframe
            className="rounded-t-2xl"
            width="100%"
            height="80%"
            src="https://www.youtube.com/embed/biGcDeB2PbQ?start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <a
            href="https://www.youtube.com/watch?v=biGcDeB2PbQ&ab_channel=Pepcorns"
            className=" hover:text-[#6001D3] my-1 text-[0.8rem]"
          >
            Unable to view video ? Click here
          </a>
        </div>
        <div className="investment_panel w-[25vw] ml-[1.5rem] px-[1.5rem] rounded-2xl shadow-lg ">
          <div className="container">
            <div className="total_amount bg-[#F5F5F5] rounded-lg px-4 py-1 my-5">
              <h2 className="text-[3rem] font-medium">₹ 0</h2>
              <p className="text-[#7D7D7D]">0 % of minimum goal raised</p>
            </div>
            <div className="investor_number border-l-4 px-4 border-[#6001D3] my-5">
              <h2 className="text-[3rem] font-medium ">0</h2>
              <p className="text-[#7D7D7D]">Total Investors</p>
            </div>
            <div className="days_number border-l-4 px-4 border-[#6001D3] my-5">
              <h2 className="text-[3rem] font-medium ">0 Days</h2>
              <p className="text-[#7D7D7D]">Left to Invest</p>
            </div>
            <div className="expiry flex flex-col justify-center items-center">
              <button className="bg-[#6001D3] hover:scale-105 text-white text-[1.1rem] px-5 py-4 rounded-lg w-[100%] mb-1 hover:bg-[#5A20B9] duration-100 ease-in-out ">
                Campaign Expired
              </button>
              <p className="text-[#7D7D7D] text-center">
                ₹ 1000 Minimum Investment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="menubar h-[10vh] flex justify-center my-[3rem] ">
        <div className="button_container flex justify-center items-center gap-5 bg-[#EFE1FF] rounded-lg p-[2rem]">
          <button
            onClick={() => handleClick("pitch")}
            className="pitch  p-2 w-28 rounded-lg font-semibold  hover:bg-[#6001D3] duration-100 ease-in hover:text-white "
          >
            Pitch
          </button>
          <button
            onClick={() => handleClick("details")}
            className="details p-2 w-28 rounded-lg font-semibold  hover:bg-[#6001D3] duration-100 ease-in hover:text-white"
          >
            Details
          </button>
          <button
            onClick={() => handleClick("updates")}
            className="updates p-2 w-28 rounded-lg font-semibold  hover:bg-[#6001D3] duration-100 ease-in hover:text-white"
          >
            Updates
          </button>
          <button
            onClick={() => handleClick("comment")}
            className="comments p-2 w-28 rounded-lg font-semibold  hover:bg-[#6001D3] duration-100 ease-in hover:text-white"
          >
            Comments
          </button>
        </div>
      </div>
      <div className="main_container mx-[7rem] flex ">
        <div className="left w-[58vw] rounded-3xl shadow-md bg-white">
          {pitch ? <Pitch /> : <></>}
          {details ? <Details /> : <></>}
          {updates ? <Updates /> : <></>}
          {commment ? <Comment /> : <></>}
        </div>
        <div className="right w-[25vw]">
          {/* ************************** invest 1*************************** */}
          <div className="invest_container ml-[1.5rem] p-[1.5rem] rounded-2xl shadow bg-white">
            <h2 className="text-[2.5rem] font-bold">₹ 2000</h2>
            <p className="text-lg">Invest</p>
            <ul className="points">
              <li className="my-15 text-[#7D7D7D] ">
                LetzRent Premium Apparel (T-shirts & Coffee Mug) • Early access
                to new features & promotions
              </li>
              <li className="my-5 text-[#7D7D7D] ">
                TNC : Limited to the first 100
              </li>
            </ul>
            <button className="hover:scale-105  bg-[#6001D3] text-white text-[1.1rem] px-5 py-4 rounded-lg w-[100%] mb-1 my-4 hover:bg-[#5A20B9] duration-100 ease-in-out ">
              Invest
            </button>
          </div>

          {/* ************************** invest 2*************************** */}
          <div className="invest_container ml-[1.5rem] p-[1.5rem] my-[2rem]  rounded-2xl shadow bg-white">
            <h2 className="text-[2.5rem] font-bold">₹ 5000</h2>
            <p className="text-lg">Invest</p>
            <ul className="points">
              <li className="my-5 text-[#7D7D7D] ">
                LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional
                Swag) | • Early access to new features & promotions
              </li>
              <li className="my-5 text-[#7D7D7D] ">
                TNC : Limited to the first 200
              </li>
            </ul>
            <button className="bg-[#6001D3] hover:scale-105 text-white text-[1.1rem] px-5 py-4 rounded-lg w-[100%] mb-1 my-4 hover:bg-[#5A20B9] duration-100 ease-in-out ">
              Invest
            </button>
          </div>

          {/* ************************** invest 3*************************** */}
          <div className="invest_container ml-[1.5rem] p-[1.5rem] my-[2rem] rounded-2xl shadow bg-white">
            <h2 className="text-[2.5rem] font-bold">₹ 10000</h2>
            <p className="text-lg">Invest</p>
            <ul className="points">
              <li className="my-5 text-[#7D7D7D] ">
                Exclusive interest in owning equity with an investment of
                ₹50,000 — ₹2,00,000 | • Invite to exclusive LetzRent team chat |
                • LetzRent Premium Apparel Box (T-shirts, Sweatshirts &
                additional Swag) | • Early access to new features & promotions
              </li>
              <li className="my-5 text-[#7D7D7D] ">
                TNC : Equity benefits with no voting rights. Limited to the
                first 5 investors.
              </li>
            </ul>
            <button className="bg-[#6001D3] hover:scale-105 text-white text-[1.1rem] px-5 py-4 rounded-lg w-[100%] mb-1 my-4 hover:bg-[#5A20B9] duration-100 ease-in-out ">
              Invest
            </button>
          </div>

          {/* ************************** invest 4*************************** */}
          <div className="invest_container ml-[1.5rem] p-[1.5rem] my-[2rem] rounded-2xl shadow bg-white">
            <h2 className="text-[2.5rem] font-bold">₹ 25000</h2>
            <p className="text-lg">Invest</p>
            <ul className="points">
              <li className="my-5 text-[#7D7D7D] ">
                Exclusive interest in owning equity with an investment of
                ₹3,00,000 — ₹10,00,000 • One-on-one 30 minute video call with
                Co-Founders • Invite to exclusive LetzRent team chat • LetzRent
                Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) •
                Early access to new features & promotions
              </li>
              <li className="my-5 text-[#7D7D7D] ">
                TNC : Equity benefits with no voting rights. Limited to the
                first 5 investors.
              </li>
            </ul>
            <button className="bg-[#6001D3] hover:scale-105 text-white text-[1.1rem] px-5 py-4 rounded-lg w-[100%] mb-1 my-4 hover:bg-[#5A20B9] duration-100 ease-in-out ">
              Invest
            </button>
          </div>

          {/* ************************** invest 5*************************** */}
          <div className="invest_container ml-[1.5rem] p-[1.5rem] my-[2rem] rounded-2xl shadow bg-white">
            <h2 className="text-[2.5rem] font-bold">₹ 50000</h2>
            <p className="text-lg">Invest</p>
            <ul className="points">
              <li className="my-5 text-[#7D7D7D] ">
                Exclusive interest in owning equity with an investment of
                ₹11,00,000 — ₹30,00,000 • In-Person dinner with Co-Founder in
                Whitefield, Bangalore • One-on-one 30 minute video call with
                Co-Founders • Invite to exclusive LetzRent team chat • LetzRent
                Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) •
                Early access to new features & <promotions></promotions>
              </li>
              <li className="my-5 text-[#7D7D7D] ">
                TNC : Equity benefits with voting rights. Limited to the first 5
                investors.
              </li>
            </ul>
            <button className="hover:scale-105  bg-[#6001D3] text-white text-[1.1rem] px-5 py-4 rounded-lg w-[100%] mb-1 my-4 hover:bg-[#5A20B9] duration-100 ease-in-out ">
              Invest
            </button>
          </div>

          {/* ************************** invest 6*************************** */}
          <div className="invest_container ml-[1.5rem] p-[1.5rem] my-[2rem] rounded-2xl shadow bg-white">
            <h2 className="text-[2.5rem] font-bold">₹ 100000</h2>
            <p className="text-lg">Invest</p>
            <ul className="points">
              <li className="my-5 text-[#7D7D7D]  text-[]">
                Exclusive interest in owning equity with an investment of above
                ₹40,00,000 • LetzRent Weekend Experience: Flight & Hotel on us •
                In-Person dinner with Co-Founder in Whitefield, Bangalore •
                One-on-one 30 minute video call with Co-Founders • Invite to
                exclusive LetzRent team chat • LetzRent Premium Apparel Box
                (T-shirts, Sweatshirts & additional Swag) • Early access to new
                features & promotions
              </li>
              <li className="my-5 text-[#7D7D7D] ">
                TNC : Equity benefits with voting rights(open for discussion of
                term sheet). Limited to the first 2 investors.
              </li>
            </ul>
            <button className="hover:scale-105 bg-[#6001D3] text-white text-[1.1rem] px-5 py-4 rounded-lg w-[100%] mb-1 my-4 hover:bg-[#5A20B9] duration-100 ease-in-out ">
              Invest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
