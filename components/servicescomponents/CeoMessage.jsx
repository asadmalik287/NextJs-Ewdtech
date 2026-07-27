
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const PopupWidget = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupWidget),
  { ssr: false }
);

export const CeoMessage = ({
  title,
  desc,
  desc2,
  hidden,
  image,
  buttonText,
}) => {
  const pathname = usePathname();

  const [showmodal, setshowmodal] = useState('hidden');
  const [emailloading, setemailloading] = useState('Hear From An Expert');
  const [loader, setloader] = useState('none');

  const myPopupModal = () => {
    setshowmodal((prev) => (prev === 'hidden' ? 'flex' : 'hidden'));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (reqData) => {
    setemailloading('Email Sending...');
    setloader('');

    try {
      const response = await fetch('/api/proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqData),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setshowmodal('hidden');
      setemailloading('Hear From An Expert');
      setloader('none');

      Swal.fire({
        icon: 'success',
        text: 'MESSAGE SENT. WE WILL CONTACT YOU SOON.',
        timer: 1500,
        showConfirmButton: false,
        background: '#1e1e1e',
        color: '#fff',
      });

      reset();
    } catch (error) {
      setemailloading('Hear From An Expert');
      setloader('none');

      Swal.fire({
        icon: 'error',
        text: 'Error sending email!',
      });
    }
  };

  const proposalPages = [
    '/seo-services',
    '/ecommerce-development',
    '/shopify-development-agency',
    '/branding-services',
    '/social-media-marketing',
    '/web-development-services',
    '/ppc-management-services',
    '/lead-generation-services',
    '/clients',
  ];

  return (
    <React.Fragment>
      <section className="relative mainPaddingTop maindPadding">
        <div className="contactusTopBg left-0" />

        <div className="flex justify-end book-meeting-flex relative">
          <div className="book-meeting-home-col-1">
            <div className="bg-F5F7FA book-meeting-home lg:px-8 px-4 lg:py-12 py-7 mt-20">
              <h2 className="book-meeting-title book-meeting-title-ser bold-font font-black">
                {title}
              </h2>

              <div className="leading-6 pt-6">{desc}</div>

              <p className={`leading-6 pt-6 ${hidden}`}>{desc2}</p>

              <div className="pt-12">
                <div className="flex pt-12">
                  {proposalPages.includes(pathname) ? (
                    <button
                      onClick={myPopupModal}
                      className="bg-16A085 text-white uppercase w-full font-semibold px-7 py-3 text-center"
                    >
                      Get Free Proposal
                    </button>
                  ) : (
                    <button className="bg-16A085 text-white uppercase w-full font-semibold px-7 text-center">
                      <PopupWidget
                        url="https://calendly.com/faisaal-279/30min?month=2023-03"
                        rootElement={
                          typeof window !== 'undefined'
                            ? document.body
                            : undefined
                        }
                        text={buttonText}
                        textColor="#ffffff"
                        color="#16A085"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="book-meeting-home-col-2 relative mt-0">
            <Image
              src={image}
              alt="CEO Message"
              width={700}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* MODAL */}
        <div
          id="staticModal"
          tabIndex="-1"
          aria-hidden="true"
          className={`fixed shadow backdrop-blur-sm top-0 left-0 right-0 z-50 ${showmodal} items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}
        >
          <div className="relative w-full h-full max-w-2xl md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold dark:text-white">
                  Get Free Proposal
                </h3>

                <button
                  type="button"
                  onClick={myPopupModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex mb-6 flex-wrap">
                    <div className="lg:w-6/12 md:w-6/12 sm:w-full w-full lg:pr-5">
                      <div className="flex flex-col">
                        <label className="font-semibold mb-3" htmlFor="name">
                          Full Name
                        </label>

                        <input
                          type="text"
                          id="name"
                          {...register('name', {
                            required: true,
                          })}
                          className="h-14 inputpopup border px-3"
                        />

                        {errors.name && (
                          <span className="text-red-700 pt-2">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="lg:w-6/12 md:w-6/12 sm:w-full w-full">
                      <div className="flex flex-col">
                        <label className="font-semibold mb-3" htmlFor="email">
                          Email Address
                        </label>

                        <input
                          type="email"
                          id="email"
                          {...register('email', {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                          className="h-14 inputpopup border px-3"
                        />

                        {errors.email?.type === 'required' && (
                          <span className="text-red-700 pt-2">
                            This field is required
                          </span>
                        )}

                        {errors.email?.type === 'pattern' && (
                          <span className="text-red-700 pt-2">
                            Invalid email address
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mb-6">
                    <label className="font-semibold mb-3" htmlFor="budget">
                      Estimated budget
                    </label>

                    <select
                      id="budget"
                      defaultValue=""
                      {...register('budget')}
                      className="select h-14 border px-3 inputpopup"
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

                  <div className="flex flex-col mb-6">
                    <label className="font-semibold mb-3" htmlFor="message">
                      Project Description
                    </label>

                    <textarea
                      id="message"
                      cols={20}
                      rows={3}
                      {...register('message')}
                      className="inputpopup border px-3"
                    />
                  </div>

                  <button
                    style={{ height: '70px' }}
                    type="submit"
                    className="px-5 btnHeight py-4 flex items-center justify-center uppercase w-full font-semibold bg-16A085 text-white"
                  >
                    {emailloading}

                    <svg
                      style={{ display: loader }}
                      className={loader}
                      xmlns="http://www.w3.org/2000/svg"
                      width="40px"
                      height="40px"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="xMidYMid"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="32"
                        stroke="#fff"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="50.265 50.265"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          repeatCount="indefinite"
                          dur="1s"
                          keyTimes="0;1"
                          values="0 50 50;360 50 50"
                        />
                      </circle>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};