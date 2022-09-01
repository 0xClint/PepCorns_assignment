import React from "react";

const Invest = (data) => {
  let details = 0;
  console.log(data.length);
  return (
    <div className="invest_container ml-[1.5rem] p-[1.5rem] rounded-2xl shadow bg-white">
      {/* {data.dat.} */}
      <h2 className="text-[2.5rem] font-bold"></h2>
      <p className="text-lg">Invest</p>
      <ul className="points">
        <li className="my-1.5">
          LetzRent Premium Apparel (T-shirts & Coffee Mug) • Early access to new
          features & promotions
        </li>
        <li className="my-1.5">TNC : Limited to the first 100</li>
      </ul>
      <button className="bg-[#6001D3] text-white text-[1.1rem] px-5 py-4 rounded-lg w-[100%] mb-1 my-4 hover:bg-[#5A20B9] duration-100 ease-in-out ">
        Campaign Expired
      </button>
    </div>
  );
};

export default Invest;
