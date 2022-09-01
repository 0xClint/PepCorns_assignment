import React from "react";

const Pitch = () => {
  return (
    <div className="pitch px-[3rem]">
      <div className="deck flex justify-between items-center p-[2rem] mt-[2rem]">
        <p className="font-bold text-[1.5rem]">DECK</p>
        <button className="bg-[#6001D3] text-white font-medium px-7 py-3 rounded-lg ">
          DOWNLOAD PITCH DECK
        </button>
      </div>
      <div className="10_sec text-[1.1rem] pb-[1rem] pt-[5rem]">
        <p className="font-bold text-[2rem] my-[0.5rem]">10 Seconds Pitch</p>
        <p>
          Online search, compare & booking platform for self-drive cars, charter
          flights, living space & more that rewards users
        </p>
      </div>
      <div className="deck_info py-[1rem] my-[0.5rem]">
        <p className="font-bold text-[2rem]">Deck Info</p>
        <p>LetzRent</p>
      </div>
      <div className="highlights py-[1rem]">
        <h2 className="font-bold text-[2rem] my-[0.5rem]">Highlights</h2>
        <ul className="text-[1.1rem] my-[0.5rem]">
          <li>Running profitable pilot in Bengaluru.</li>
          <li>
            20k+ registered users, 4.2 app rating and 10k+ social media
            following
          </li>
          <li>Company is projecting 100cr+ transaction volume in 5 years</li>
          <li>
            Founder with the marketing expertise of 17+ years in Reliance,
            Naaptol, Tv9 and Zee and more.
          </li>
          <li>GenZ CTO and co-founder.</li>
          <li>Expansion is easy and the untapped customer base is huge.</li>
          <li>Been in news articles, already making buzz.</li>
        </ul>
      </div>

      {/* ********************Traction********************** */}

      <div className="sec_1 mt-[2rem] mb-[5rem]">
        <div className="heading flex justify-center items-center ">
          <h2 className="font-bold text-[1.5rem]">Traction</h2>
          <div className="h-[1px] mx-[1rem] bg-black w-[100%] "></div>
        </div>
        <div className="image p-[2rem] flex justify-center items-center ">
          <img
            src={require("../assests/pitch/1.png")}
            className="rounded-[30px] w-[90%] "
            alt=""
          />
        </div>
      </div>

      {/* ********************Smarter Way To Rent********************** */}
      <div className="sec_2 my-[5rem]">
        <div className="heading flex justify-center items-center ">
          <h2 className="font-bold text-[1.5rem]">Smarter Way To Rent</h2>
          <div className="h-[1px] mx-[0.8rem] bg-black w-[100%] "></div>
        </div>
        <div className="image p-[2rem] flex justify-center items-center ">
          <img
            src={require("../assests/pitch/2.png")}
            className="rounded-[30px] w-[90%] "
            alt=""
          />
        </div>
      </div>
      {/* ********************Customers Want Low Prices********************** */}
      <div className="sec_2 my-[5rem]">
        <div className="heading flex justify-center items-center my-[0.5rem] ">
          <h2 className="font-bold text-[1.5rem]">Customers Want Low Prices</h2>
          <div className="h-[1px] mx-[0.8rem] bg-black w-[100%] "></div>
        </div>
        <p className="text-[1.1rem]">
          To get low prices 85% of the consumers check at least 2 data points
          (Source: BCG Consumer Trends). In various sectors information centred
          buying has been made more efficient by companies like MMT for Travel,
          Policy bazaar for Insurance, Myntra or Shopperstop for Lifestyle
          products. However for rental products, there is no one & to fill this
          need and make the process efficient we launched LetzRent, hoping to
          have a first-mover advantage and dominate the market in the coming
          future.
        </p>
        <div className="image p-[2rem] flex justify-center items-center ">
          <img
            src={require("../assests/pitch/3.png")}
            className="rounded-[20px] w-[90%] border-[1px] border-neutral-600"
            alt=""
          />
        </div>
      </div>

      {/* ********************Single KYC********************** */}
      <div className="sec_2 my-[5rem]">
        <div className="heading flex justify-center items-center ">
          <h2 className="font-bold text-[1.5rem]">Single KYC</h2>
          <div className="h-[1px] mx-[0.8rem] bg-black w-[100%] "></div>
        </div>
        <p className="text-[1.1rem] my-[0.5rem]">
          Renting is a KYC dependent process, every time a customer books a
          service from a different service provider he/she will have to get a
          new KYC done. With Letzrent, the hassle of multiple KYC gets removed
          and with a single KYC, customers can rent from multiple brands.
        </p>
      </div>

      {/* ********************Vast Selection********************** */}
      <div className="sec_2 my-[5rem]">
        <div className="heading flex justify-center items-center ">
          <h2 className="font-bold text-[1.5rem]">Vast Selection</h2>
          <div className="h-[1px] mx-[0.8rem] bg-black w-[100%] "></div>
        </div>
        <p className="text-[1.1rem] my-[0.5rem]">
          Being an aggregator Letzrent offers more options than category
          leaders.
        </p>
        <div className="image p-[2rem] flex justify-center items-center ">
          <img
            src={require("../assests/pitch/4.png")}
            className="rounded-[20px] w-[90%] border-[1px] border-neutral-600"
            alt=""
          />
        </div>
      </div>

      {/* ********************Why Renting? ********************** */}
      <div className="sec_2 my-[5rem]">
        <div className="heading flex justify-center items-center ">
          <h2 className="font-bold text-[1.5rem]">Why Renting? </h2>
          <div className="h-[1px] mx-[0.8rem] bg-black w-[100%] "></div>
        </div>
        <ol className="text-[1.1rem] my-[0.5rem]">
          <li>
            Demographic Twist: Commitment phobic millennials prefer an asset
            lite life with a bias toward renting rather than buying.
          </li>
          <li>
            lexibility: Renting allows people to upgrade or change assets
            easily.
          </li>
          <li>
            Convenience: With the rental customers dispense with the headache of
            down payment, maintenance, insurance etc.
          </li>
        </ol>
        <div className="image p-[2rem] flex justify-center items-center ">
          <img
            src={require("../assests/pitch/5.png")}
            className="rounded-[20px] w-[90%] border-[1px] border-neutral-600"
            alt=""
          />
        </div>
      </div>

      {/* ********************Market Size********************** */}
      <div className="sec_2 my-[5rem]">
        <div className="heading flex justify-center items-center ">
          <h2 className="font-bold text-[1.5rem]">Market Size</h2>
          <div className="h-[1px] mx-[0.8rem] bg-black w-[100%] "></div>
        </div>
        <div className="image p-[2rem] flex justify-center items-center ">
          <img
            src={require("../assests/pitch/6.png")}
            className="rounded-[20px] w-[90%] border-[1px] border-neutral-600"
            alt=""
          />
        </div>
      </div>

      {/* ********************Competitors********************** */}
      <div className="sec_2 my-[5rem]">
        <div className="heading flex justify-center items-center ">
          <h2 className="font-bold text-[1.5rem]">Competitors</h2>
          <div className="h-[1px] mx-[0.8rem] bg-black w-[100%] "></div>
        </div>
        <ul className="text-[1.1rem] my-[0.5rem]">
          <li>
            Competition-,<b>OLA, UBER, TURO, ZYPPYS, Kayak.com, ZOPRENT</b>
          </li>
          <li>
            Why LetzRent- <b>MAXIMUM OPTIONS AT BEST PRICE.</b>
          </li>
          <li>
            Why do you have a chance to be a dominant player?{" "}
            <b>Market Gap, Customer Need & First Mover Advantage.</b>
          </li>
        </ul>
      </div>

      {/* ********************Feedback: People love us********************** */}
      <div className="sec_2 my-[5rem]">
        <div className="heading flex justify-center items-center ">
          <h2 className="font-bold text-[1.5rem]">Feedback: People love us</h2>
          <div className="h-[1px] mx-[0.8rem] bg-black w-[100%] "></div>
        </div>
        <div className="image p-[2rem] flex justify-center items-center ">
          <img
            src={require("../assests/pitch/7.png")}
            className="rounded-[20px] w-[90%] border-[1px] border-neutral-600"
            alt=""
          />
        </div>
      </div>
      {/* ********************Future and growth********************** */}
      <div className="sec_2 my-[5rem]">
        <div className="heading flex justify-center items-center ">
          <h2 className="font-bold text-[1.5rem]">Future and growth</h2>
          <div className="h-[1px] mx-[0.8rem] bg-black w-[100%] "></div>
        </div>
        <p className="text-[1.1rem] my-[0.5rem]">
          Launch: P2P Self Drive Car Rental Uber for Self Drive Car Rental
        </p>
        <div className="image p-[2rem] flex justify-center items-center ">
          <img
            src={require("../assests/pitch/8.png")}
            className="rounded-[20px] w-[90%] border-[1px] border-neutral-600"
            alt=""
          />
        </div>
      </div>

      {/* ********************Core Team********************** */}
      <div className="sec_2 my-[5rem]">
        <div className="heading flex justify-center items-center ">
          <h2 className="font-bold text-[1.5rem]">Core Team</h2>
          <div className="h-[1px] mx-[0.8rem] bg-black w-[100%] "></div>
        </div>
        <p className="text-[1.1rem] my-[0.5rem]">
          Being an aggregator Letzrent offers more options than category
          leaders.
        </p>
        <div className="image p-[2rem] flex justify-center items-center ">
          <img
            src={require("../assests/pitch/9.png")}
            className="rounded-[20px] w-[90%] border-[1px] border-neutral-600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Pitch;
