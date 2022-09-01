import React from "react";

const Comment = () => {
  return (
    <div className="Comment px-[3rem] py-[3rem]">
      <div className="sign_up text-[2rem] font-semibold">
        Sign Up to join conversation
      </div>
      <p className="text-[1.1rem] my-3">
        Add your feedback for Bsite Agency's project by signing in or signing
        up.
      </p>
      <button className="bg-[#6001D3] text-white text-[1.1rem] px-8 py-3 hover:bg-[#5A20B9] duration-100 ease-in-out rounded-lg my-4">
        Sign Up
      </button>

      <div className="line_break bg-[#4A4A4A] h-[1px] w-[100%] my-[2rem]"></div>
      <div className="comment_container ">
        <div className="comment flex items-center my-[2rem]">
          <img
            src={require("../assests/comment.png")}
            alt=""
            className="w-[70px]"
          />
          <div className="right mx-5">
            <div className="upper">
              <span className=" font-medium my-6 mr-3">Rupesh Gaud </span>
              <span className="text-[#7D7D7D] text-sm"> a month ago</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                doloribus!
              </p>
            </div>
          </div>
        </div>
        <div className="comment flex items-center my-[2rem]">
          <img
            src={require("../assests/comment.png")}
            alt=""
            className="w-[70px]"
          />
          <div className="right mx-5">
            <div className="upper">
              <span className=" font-medium my-6 mr-3">Rupesh Gaud </span>
              <span className="text-[#7D7D7D] text-sm"> a month ago</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                doloribus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
