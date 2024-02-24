import React from "react";
import { Dark } from "../../components";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { loginSchema } from "../../Validation";
import { apple, facebook, google } from "../../assets";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const handleFormSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <section className="flex justify-center items-center h-[100vh]">
      <Dark />

      <div className="w-1/2 bg-white h-[100%] p-[50px]">
        <div className="flex justify-end mb-[150px]">
          <p className="font-normal text-[16px] leading-[21.79px]">
            Don’t have an account?{" "}
            <Link to={"/user-account/signup"} className="font-bold">
              Create account
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
            validationSchema={loginSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="w-full">
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-xs mb-1 font-bold">
                      {errors.email}
                    </p>
                  )}
                  <input
                    type="email"
                    placeholder="Email Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    className="w-[75%] px-[21px] py-[15px] outline-none bg-[#FAFAFA] rounded-[10px] text-[16px] font-normal leading-[20.8px] mb-5"
                  />
                </div>
                <div className="w-full">
                  {errors.password && touched.password && (
                    <p className="text-red-500 text-xs mb-1 font-bold">
                      {errors.password}
                    </p>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    className="w-[75%] px-[21px] py-[15px] outline-none bg-[#FAFAFA] rounded-[10px] text-[16px] font-normal leading-[20.8px] mb-5"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-secondary text-white w-[75%] rounded-[10px] py-[15px] px-[21px] text-[16px] leading-[20.83px] font-normal my-6"
                >
                  {isSubmitting ? "Submitting..." : "Sign in"}
                </button>
              </form>
            )}
          </Formik>
          <p className="w-[75%] underline mb-6">
            <Link>Forgotten password?</Link>
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
              <div className="cursor-pointer">
                <img src={google} alt="google icon" />
              </div>

              <div className="cursor-pointer">
                <img src={apple} alt="google icon" />
              </div>

              <div className="cursor-pointer">
                <img src={facebook} alt="google icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
