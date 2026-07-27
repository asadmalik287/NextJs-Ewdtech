import React from "react";
const fb = "/assets/images/fb.svg";
const linkdin = "/assets/images/linkdin.svg";
const insta = "/assets/images/insta.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";

export const CareerForm = ({ desc }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (reqData) => {
    // console.log (reqData);
    let reqUrl = `https://fal.ixs.mybluehost.me/mail.php?sender_name=${reqData.sender_name}&sender_email=${reqData.sender_email}&company_name=${reqData.company_name}&number=${reqData.number}&budget=${reqData.budget}&message=${reqData.message}`;
    axios
      .get(reqUrl)
      .then(function (response) {
        const Toast = Swal.mixin({
          position: "center",
          icon: "success",
          theme: "dark",
          showConfirmButton: false,
          timer: 1500,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          text: "MASSAGE SEND. WE WILL CONTACT WITH YOU SOON.",
        });
        reset();
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  return (
    <React.Fragment>
      <section className="mainMarginTop maindPadding bg-efefef py-12" id="applynow">
        <div className="flex flex-wrap pb-12 mb-12 items-center">
          <div className="md:w-6/12 lg:pr-5 md:pr-3 sm:pr-0 pr-0">
            <h2 className="lg:text-4xl sm:text-3xl bold-font  md:w-11/12 sm:w-full w-full">
              Even if you don’t find a suitable position, you can still send your resume to
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
              Apply Now
            </h2>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name &  Company Name */}
              <div className="mb-6 ">
                <div className="sm:w-full w-full lg:pr-5 md:pr-0 sm:pr-0 pr-0">
                  <div className="flex flex-col">
                    <label className="font-semibold mb-3" htmlFor="sender_name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="sender_name"
                      name="sender_name"
                      {...register("sender_name", { required: true })}
                      className="border-0 bg-[#fff] h-14"
                    />
                    {errors.sender_name && (
                      <span className="text-red-700 pt-2">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {/* Full Name &  Company Name */}
              {/* Email Address &  Phone Number */}
              <div className="">
                <div className="mb-6 sm:w-full w-full lg:pr-5 md:pr-0 sm:pr-0 pr-0">
                  <div className="flex flex-col ">
                    <label
                      className="font-semibold mb-3"
                      htmlFor="sender_email"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="sender_email"
                      id="sender_email"
                      {...register("sender_email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="border-0 bg-[#fff] h-14"
                    />
                    {errors.sender_email?.type === "required" && (
                      <span className="text-red-700 pt-2">
                        This field is required
                      </span>
                    )}
                    {errors.sender_email?.type === "pattern" && (
                      <span className="text-red-700 pt-2">
                        Invalid email address
                      </span>
                    )}
                  </div>
                </div>
                <div className="lg:mt-0 mb-6 sm:w-full w-full">
                  <div className="flex flex-col">
                    <label className="font-semibold mb-3" htmlFor="number">
                      Phone Number
                    </label>
                    <input
                      {...register("number", { required: true })}
                      type="number"
                      name="number"
                      id="number"
                      className="border-0 bg-[#fff] h-14"
                    />
                    {errors.number && (
                      <span className="text-red-700 pt-2">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="lg:mt-0 mb-6 sm:w-full w-full">
                  <div className="flex flex-col">
                    <label className="font-semibold mb-3" htmlFor="number">
                      Uplaod CV
                    </label>
                    <input
                      {...register("number", { required: true })}
                      type="file"
                      name="cv"
                      id="cv"
                      className="bg-white bg-whit py-2 px-4 rounded fileCareer" />
                    {errors.number && (
                      <span className="text-red-700 pt-2">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="px-5 py-5 uppercase w-full font-semibold bg-black text-white"
              >
                Submit application
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
