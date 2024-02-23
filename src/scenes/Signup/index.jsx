import React from "react";
import { Dark } from "../../components";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { signupSchema } from "../../Validation";
import { apple, facebook, google } from "../../assets";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confPassword: "",
};

const handleFormSubmit = (values) => {
  console.log(values);
};

const Signup = () => {
  return (
    <section className="flex justify-center items-center h-[100vh]">
      <Dark />

      <div className="w-1/2 bg-white h-[100%] p-[50px]">
        <div className="flex justify-end mb-[150px]">
          <p className="font-normal text-[16px] leading-[21.79px]">
            Already have an account?{" "}
            <Link to={"/user-account/login"} className="font-bold">
              Log in
            </Link>
          </p>
        </div>
        <div className="w-1/2 mx-auto">
          <div className="mb-10">
            <h1 className="font-bold text-[24px] leading-[35.25px] mb-1">
              Hey 👋 , User
            </h1>
            <p className="font-normal text-[16px] leading-[21.79px]">
              Welcome back! Please, sign in to continue
            </p>
          </div>

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={signupSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={!!touched.name && errors.name}
                    helperText={touched.name && errors.name}
                    className="w-[75%] px-[21px] py-[15px] outline-none bg-[#FAFAFA] rounded-[10px] text-[16px] font-normal leading-[20.8px] mb-5"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Email Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && errors.email}
                    helperText={touched.email && errors.email}
                    className="w-[75%] px-[21px] py-[15px] outline-none bg-[#FAFAFA] rounded-[10px] text-[16px] font-normal leading-[20.8px] mb-5"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="name"
                    error={!!touched.password && errors.password}
                    helperText={touched.password && errors.password}
                    className="w-[75%] px-[21px] py-[15px] outline-none bg-[#FAFAFA] rounded-[10px] text-[16px] font-normal leading-[20.8px] mb-5"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.confPassword}
                    name="name"
                    error={!!touched.confPassword && errors.confPassword}
                    helperText={touched.confPassword && errors.confPassword}
                    className="w-[75%] px-[21px] py-[15px] outline-none bg-[#FAFAFA] rounded-[10px] text-[16px] font-normal leading-[20.8px]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-secondary text-white w-[75%] rounded-[10px] py-[15px] px-[21px] text-[16px] leading-[20.83px] font-normal my-6"
                >
                  Get started
                </button>
              </form>
            )}
          </Formik>
          <p className="w-[75%] font-bold mb-6">
            By clicking get started, you agree to{" "}
            <Link className="text-secondary font-normal">Terms of Service</Link>{" "}
            and{" "}
            <Link className="text-secondary font-normal">Privacy Policies</Link>
          </p>

          <div className="w-[70%] mb-7">
            <div className="flex justify-center items-center gap-4 w-[40%] mx-auto">
              <div className="w-[50px] h-[1px] bg-[#979797]"></div>
              <p className="mb-1 text-[14px] font-normal leading-4 text-[#979797]">
                or
              </p>
              <div className="w-[50px] h-[1px] bg-[#979797]"></div>
            </div>
          </div>

          <div className="w-[70%]">
            <div className="flex justify-center items-center gap-10">
              <div>
                <img src={google} alt="google icon" />
              </div>

              <div>
                <img src={apple} alt="google icon" />
              </div>

              <div>
                <img src={facebook} alt="google icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
