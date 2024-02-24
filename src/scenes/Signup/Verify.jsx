import React, { useState } from "react";
import { Dark } from "../../components";
import { Link } from "react-router-dom";

const Verify = () => {
  const [codes, setCodes] = useState(["", "", "", ""]);

  const handleChange = (index, e) => {
    const { value } = e.target;
    if (value.length <= 1) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      // Move focus to the next input if the current input is filled
      if (value.length === 1 && index < 3) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        nextInput && nextInput.focus();
      }
    }
  };

  return (
    <section className="flex justify-center items-center h-[100vh]">
      <Dark />
      <div className="w-1/2 bg-[#F5F5F5] h-[100%] p-[50px]">
        <div className="flex justify-end mb-[150px]">
          <p className="font-normal text-[16px] leading-[21.79px]">
            Already have an account?{" "}
            <Link to={"/user-account/login"} className="font-bold">
              Log in
            </Link>
          </p>
        </div>

        <div className="w-[547px] h-[587px] mx-auto bg-[#fff] px-11 py-24 rounded-[32px] text-center">
          <h1 className="mb-10 font-bold text-[24px] leading-[31.25px]">
            Verify your mail
          </h1>
          <form action="">
            <div className="flex justify-center items-center space-x-4 mb-10">
              {codes.map((code, index) => (
                <input
                  key={index}
                  id={`code-input-${index}`}
                  type="text"
                  maxLength={1}
                  value={code}
                  onChange={(e) => handleChange(index, e)}
                  className="w-[39px] h-[39px] text-center border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
                />
              ))}
            </div>

            <p className="w-4/5 mx-auto font-normal text-[16px] leading-5 mb-6">
              We have sent a 4 - digit verification pin to your mail. Please,
              provide the digits to continue!
            </p>

            <button
              type="submit"
              //   disabled={isSubmitting}
              className="bg-secondary text-white w-[70%] rounded-[10px] py-[15px] px-[21px] text-[16px] leading-[20.83px] font-normal my-6"
            >
              {/* {isSubmitting ? "Submitting..." : "Get started"} */}
              Verify
            </button>
          </form>

          <p className="w-4/5 mx-auto font-normal text-[16px] leading-5 mt-6 text-left pl-6">
            Didn’t get pin? <span className="font-bold cursor-pointer">Resend</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Verify;
