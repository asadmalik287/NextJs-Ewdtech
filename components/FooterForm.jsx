import React, { useState } from "react";
const fb = "/assets/images/fb.svg";
const linkdin = "/assets/images/linkdin.svg";
const insta = "/assets/images/insta.svg";
import { useForm } from "react-hook-form";
import Link from "next/link";

import Swal from "sweetalert2";
export const FooterForm = ({ desc }) => {
  const [emailloading, setemailloading] = useState(' Hear From An Expert')
  const [loader, setloader] = useState('none')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
const onSubmit = async (reqData) => {
  setemailloading('Email Sending');
  setloader('');

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // ✅ important
      },
      body: JSON.stringify(reqData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    setemailloading('Hear From An Expert');
    setloader('none');

    Swal.fire({
      icon: "success",
      text: "MESSAGE SENT. WE WILL CONTACT YOU SOON.",
      timer: 1500,
      showConfirmButton: false,
    });

    reset();
  } catch (error) {
    setemailloading('Hear From An Expert');
    setloader('none');

    Swal.fire({
      icon: "error",
      text: "Error sending email!",
    });
  }
};

  return (
    <React.Fragment>
      <section className="mainMarginTop maindPadding bg-efefef py-12">
        <div className="flex flex-wrap pb-12 mb-12 items-center">
          <div className="md:w-6/12 lg:pr-5 md:pr-3 sm:pr-0 pr-0">
            <h2 className="lg:text-4xl sm:text-3xl bold-font  md:w-11/12 sm:w-full w-full">
              We look forward to help your business thrive in the digital world.
            </h2>
            <p className="md:w-9/12 pt-4 sm:w-full w-full">{desc}</p>
            <div className="flex mt-5">
              <Link
                href="https://www.facebook.com/EWDTech/?view_public_for=104030004688550"
                target="_blank"
                className="lg:w-44 sm:w-36 w-36 bg-black p-5"
              >
                <img src={fb} className="m-auto" alt="..." />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ewdtech/mycompany/"
                target="_blank"
                className="lg:w-44 sm:w-36 w-36 bg-black ml-5 p-5"
              >
                <img src={linkdin} className="m-auto" alt="..." />
              </Link>
            </div>
            <div className="flex mt-5">
              <Link
                href="https://www.instagram.com/ewdtech/"
                target="_blank"
                className="lg:w-44 sm:w-36 w-36 bg-black p-5"
              >
                <img src={insta} className="m-auto" alt="..." />
              </Link>
              <Link
                href="https://twitter.com/EWDTECHCompany"
                target="_blank"
                className="lg:w-44 justify-center flex  m-auto sm:w-36 w-36 bg-black ml-5 p-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="#fff"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="md:w-6/12 lg:pl-5 md:pl-3 sm:pl-0 pl-0 lg:mt-0 sm:mt-10 mt-10">
            <h2 className="text-3xl bold-font ">
              Discover how we can help your business grow
            </h2>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name &  Company Name */}
              <div className="flex mb-6 flex-wrap">
                <div className="lg:w-6/12 md:w-6/12 sm:w-full w-full lg:pr-5 md:pr-0 sm:pr-0 pr-0">
                  <div className="flex flex-col">
                    <label className="font-semibold mb-3" htmlFor="sender_name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="sender_name"
                      name="name"
                      {...register("name", { required: true })}
                      className="border-0 bg-[#fff] h-14"
                    />
                    {errors.name && (
                      <span className="text-red-700 pt-2">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="lg:w-6/12 md:w-6/12 lg:mt-0 mt-6 sm:mt-6 sm:w-full w-full lg:pl-5 md:pl-0 sm:pl-0 pl-0">
                  <div className="flex flex-col">
                    <label
                      className="font-semibold mb-3"
                      htmlFor="company_name"
                    >
                      Company Name
                    </label>
                    <input
                      name="company_name"
                      id="company_name"
                      {...register("company_name", {
                        required: false,
                      })}
                      type="text"
                      className="border-0 bg-[#fff] h-14"
                    />
                  </div>
                </div>
              </div>
              {/* Full Name &  Company Name */}
              {/* Email Address &  Phone Number */}
              <div className="flex mb-6 flex-wrap">
                <div className="lg:w-6/12 md:w-6/12 sm:w-full w-full lg:pr-5 md:pr-0 sm:pr-0 pr-0">
                  <div className="flex flex-col ">
                    <label
                      className="font-semibold mb-3"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="border-0 bg-[#fff] h-14"
                    />
                    {errors.email?.type === "required" && (
                      <span className="text-red-700 pt-2">
                        This field is required
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="text-red-700 pt-2">
                        Invalid email address
                      </span>
                    )}
                  </div>
                </div>
                <div className="lg:w-6/12 md:w-6/12 lg:mt-0 mt-6 sm:mt-6 sm:w-full w-full lg:pl-5 md:pl-0 sm:pl-0 pl-0">
                  <div className="flex flex-col">
                    <label className="font-semibold mb-3" htmlFor="number">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      {...register("number", {
                        required: false,
                      })}
                      className="border-0 bg-[#fff] h-14"
                    />
                  </div>
                </div>
              </div>
              {/* Message */}
              {/* Monthly Budget */}
              <div className="flex flex-col mb-6">
                <label className="font-semibold mb-3" htmlFor="budget">
                  What is your project monthly budget for this project?
                </label>
                <select
                  name="budget"
                  id="budget"
                  defaultValue={""}
                  {...register("budget", {
                    required: false,
                  })}
                  className="select border-0 bg-[#fff]  h-14"
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="500$-1000$">500$ - 1000$</option>
                  <option value="1000$-1500$">1000$ - 1500$</option>
                  <option value="1500$-2000$">1500$ - 2000$</option>
                  <option value="2000$-2500$">2000$ - 2500$</option>
                  <option value="2500$-3000$">2500$ - 3000$</option>
                </select>
              </div>
              {/* Monthly Budget */}
              <div className="flex flex-col mb-6">
                <label className="font-semibold mb-3" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={8}
                  {...register("message", {
                    required: false,
                  })}
                  className="border-0 bg-[#fff]"
                  defaultValue={""}
                />
              </div>
              <button
                style={{ height: '70px' }}
                type="submit"
                className="px-5 flex items-center justify-center btnHeight  py-5 uppercase w-full font-semibold bg-black text-white"
              >
                {emailloading} <svg
                  style={{ display: `${loader}` }}
                  className={`${loader}`}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="40px"
                  height="40px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <g transform="translate(80,50)">
                    <g transform="rotate(0)">
                      <circle cx={0} cy={0} r={6} fill="#ffffff" fillOpacity={1}>
                        <animateTransform
                          attributeName="transform"
                          type="scale"
                          begin="-0.875s"
                          values="1.5 1.5;1 1"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                          values="1;0"
                          begin="-0.875s"
                        />
                      </circle>
                    </g>
                  </g>
                  <g transform="translate(71.21320343559643,71.21320343559643)">
                    <g transform="rotate(45)">
                      <circle cx={0} cy={0} r={6} fill="#ffffff" fillOpacity="0.875">
                        <animateTransform
                          attributeName="transform"
                          type="scale"
                          begin="-0.75s"
                          values="1.5 1.5;1 1"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                          values="1;0"
                          begin="-0.75s"
                        />
                      </circle>
                    </g>
                  </g>
                  <g transform="translate(50,80)">
                    <g transform="rotate(90)">
                      <circle cx={0} cy={0} r={6} fill="#ffffff" fillOpacity="0.75">
                        <animateTransform
                          attributeName="transform"
                          type="scale"
                          begin="-0.625s"
                          values="1.5 1.5;1 1"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                          values="1;0"
                          begin="-0.625s"
                        />
                      </circle>
                    </g>
                  </g>
                  <g transform="translate(28.786796564403577,71.21320343559643)">
                    <g transform="rotate(135)">
                      <circle cx={0} cy={0} r={6} fill="#ffffff" fillOpacity="0.625">
                        <animateTransform
                          attributeName="transform"
                          type="scale"
                          begin="-0.5s"
                          values="1.5 1.5;1 1"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                          values="1;0"
                          begin="-0.5s"
                        />
                      </circle>
                    </g>
                  </g>
                  <g transform="translate(20,50.00000000000001)">
                    <g transform="rotate(180)">
                      <circle cx={0} cy={0} r={6} fill="#ffffff" fillOpacity="0.5">
                        <animateTransform
                          attributeName="transform"
                          type="scale"
                          begin="-0.375s"
                          values="1.5 1.5;1 1"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                          values="1;0"
                          begin="-0.375s"
                        />
                      </circle>
                    </g>
                  </g>
                  <g transform="translate(28.78679656440357,28.786796564403577)">
                    <g transform="rotate(225)">
                      <circle cx={0} cy={0} r={6} fill="#ffffff" fillOpacity="0.375">
                        <animateTransform
                          attributeName="transform"
                          type="scale"
                          begin="-0.25s"
                          values="1.5 1.5;1 1"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                          values="1;0"
                          begin="-0.25s"
                        />
                      </circle>
                    </g>
                  </g>
                  <g transform="translate(49.99999999999999,20)">
                    <g transform="rotate(270)">
                      <circle cx={0} cy={0} r={6} fill="#ffffff" fillOpacity="0.25">
                        <animateTransform
                          attributeName="transform"
                          type="scale"
                          begin="-0.125s"
                          values="1.5 1.5;1 1"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                          values="1;0"
                          begin="-0.125s"
                        />
                      </circle>
                    </g>
                  </g>
                  <g transform="translate(71.21320343559643,28.78679656440357)">
                    <g transform="rotate(315)">
                      <circle cx={0} cy={0} r={6} fill="#ffffff" fillOpacity="0.125">
                        <animateTransform
                          attributeName="transform"
                          type="scale"
                          begin="0s"
                          values="1.5 1.5;1 1"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          keyTimes="0;1"
                          dur="1s"
                          repeatCount="indefinite"
                          values="1;0"
                          begin="0s"
                        />
                      </circle>
                    </g>
                  </g>
                </svg>

              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
