import React, { useState } from "react";
const squareFormImage = "/assets/images/square-abstract.webp";
const formimage2 = "/assets/images/formimage2.webp";
const formimage1 = "/assets/images/formimage1.webp";
import { useForm } from "react-hook-form";
import { EqualHeight, EqualHeightElement } from "react-equal-height";
import Swal from "sweetalert2";
export const Form = () => {
  const [emailloading, setemailloading] = useState(' SUBMIT')
  const [loader, setloader] = useState('none')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
const onSubmit = async (reqData) => {
  setemailloading("Email Sending...");
  setloader("");

  try {
    const response = await fetch(
      "https://ewdtech.com/process-contact.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Request failed");
    }

    setemailloading("SUBMIT");
    setloader("none");

    Swal.fire({
      icon: "success",
      text: "MESSAGE SENT. WE WILL CONTACT YOU SOON.",
      timer: 1500,
      showConfirmButton: false,
      background: "#1e1e1e",
      color: "#fff",
    });

    reset();
  } catch (error) {
    console.error("Submission Error:", error);

    setemailloading("SUBMIT");
    setloader("none");

    Swal.fire({
      icon: "error",
      text: error.message || "Error sending email!",
    });
  }
};
  return (
    <React.Fragment>
      <section className="relative mainPaddingTop pb-24">
        <div className="contactusTopBg" />
        <div className="p-8 bg-16A085 md:w-6/12 m-auto relative">
          <h2 className="text-4xl text-white bold-font text-center ">
            Let’s Chat About Your Project
          </h2>
          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <img src={squareFormImage} className="formBottomImage" alt="..." />
            {/* Full Name &  Company Name */}
            <div className="flex mb-6 flex-wrap">
              <div className="lg:w-6/12 md:w-6/12 sm:w-full w-full lg:pr-5 md:pr-0 sm:pr-0 pr-0">
                <div className="flex flex-col">
                  <label className=" mb-3 text-white" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("name", { required: true })}
                    className="border-0 bg-[#fff] inputContact h-14 px-3"
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
                  <label className=" mb-3 text-white" htmlFor="name">
                    Company Name
                  </label>
                  <input
                    name="company_name"
                    id="company_name"
                    type="text"
                    {...register("company_name", { required: false })}
                    className="border-0 bg-[#fff] h-14 px-3"
                  />
                  {errors.company_name && (
                    <span className="text-red-700 pt-2">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* Full Name &  Company Name */}
            {/* Monthly Budget */}
            <div className="flex flex-col mb-6">
              <label className=" mb-3 text-white" htmlFor="name">
                I am Intrested in
              </label>
              <select
                name="budget"
                id="budget"
                defaultValue={""}
                className="select border-0 bg-[#fff]  h-14 px-3"
                {...register("budget", { required: false })}
              >
                <option value="">Please Select</option>
                <option value="500$-1000$">500$ - 1000$</option>
                <option value="1000$-1500$">1000$ - 1500$</option>
                <option value="1500$-2000$">1500$ - 2000$</option>
                <option value="2000$-2500$">2000$ - 2500$</option>
                <option value="2500$-3000$">2500$ - 3000$</option>
              </select>
              {errors.budget && (
                <span className="text-red-700 pt-2">
                  This field is required
                </span>
              )}
            </div>
            {/* Monthly Budget */}
            {/* Email Address &  Phone Number */}
            <div className="flex mb-6 flex-wrap">
              <div className="lg:w-6/12 md:w-6/12 sm:w-full w-full lg:pr-5 md:pr-0 sm:pr-0 pr-0">
                <div className="flex flex-col ">
                  <label className=" mb-3 text-white" htmlFor="name">
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
                    className="border-0 bg-[#fff] h-14 px-3"
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
                  <label className=" mb-3 text-white" htmlFor="name">
                    Phone Number
                  </label>
                  <input
                  className="border-0 bg-[#fff] h-14 px-3"
                    type="number"
                    name="phone"
                    id="phone"
                    {...register("phone", { required: false, maxLength: 12 })}
                  />
                  {errors.number && (
                    <span className="text-red-700 pt-2">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* Message */}

            <div className="flex flex-col mb-6">
              <label className=" mb-3 text-white" htmlFor="message">
                How can we help your business?
              </label>
              <textarea
                name="message"
                id="message"
                {...register("message", { required: false, maxLength: 200 })}
                cols={30}
                rows={8}
                className="border-0 bg-[#fff] px-3 pt-3"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              style={{ height: '70px' }}
              className="px-5 py-5 btnHeight submit_request flex items-center justify-center uppercase w-full  bg-white"
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
                    <circle cx={0} cy={0} r={6} fill="#16A085" fillOpacity={1}>
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
                    <circle cx={0} cy={0} r={6} fill="#16A085" fillOpacity="0.875">
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
                    <circle cx={0} cy={0} r={6} fill="#16A085" fillOpacity="0.75">
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
                    <circle cx={0} cy={0} r={6} fill="#16A085" fillOpacity="0.625">
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
                    <circle cx={0} cy={0} r={6} fill="#16A085" fillOpacity="0.5">
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
                    <circle cx={0} cy={0} r={6} fill="#16A085" fillOpacity="0.375">
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
                    <circle cx={0} cy={0} r={6} fill="#16A085" fillOpacity="0.25">
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
                    <circle cx={0} cy={0} r={6} fill="#16A085" fillOpacity="0.125">
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
        <div className="md:w-6/12 m-auto relative">
          <EqualHeight>
            <div className="mainPaddingTop justify-between mt-12  flex flex-wrap">
              <div className="md:w-5/12 lg:px-0 sm:px-3 px-3 lg:mb-0 md:mb-5 mb-5">
                <img src={formimage2} className="w-full" alt="..." />
                <div className="p-5 bg-efefef">
                  <EqualHeightElement>
                    <h3 className="text-2xl bold-font">Pakistan Office</h3>
                    <p className="opacity-70 pt-4">
                      Office 529, Meezan Executive Tower,
                    </p>
                    <p className="opacity-70 pt-1">Near Chiniot Bazar Faisalabad</p>
                    <p className="opacity-70 pt-1">Email: support@ewdtech.com</p>
                    <p className="opacity-70 pt-9">Tel: +92 333 2793279</p>
                  </EqualHeightElement>
                </div>
              </div>
              <div className="md:w-5/12  lg:px-0 sm:px-3 px-3">
                <img src={formimage1} className="w-full" alt="..." />
                <div className="p-5 bg-efefef ">
                  <EqualHeightElement>
                    <h3 className="text-2xl bold-font">USA Office</h3>

                    <p className="opacity-70 pt-4">
                      6210 Plantation Center Dr Suite 105, Raleigh, NC, 27616 USA
                    </p>
                    <p className="opacity-70 pt-1">Email: maqsood@ewdtech.com </p>
                    <p className="opacity-70 pt-9">Tel: +19193219995</p>
                  </EqualHeightElement>
                </div>
              </div>
            </div>
          </EqualHeight>
        </div>
      </section>
    </React.Fragment>
  );
};
