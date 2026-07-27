// pages/404.js
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
const Speech_Bubble = "/assets/images/Speech_Bubble.webp";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center h-full w-full">
      <Navbar navClass="bg-1D1C1C" />
      <div className="container m-auto h-full centered-axis-xy flex justify-center p-3">
        <div className="flex flex-wrap items-center">
          <div className="lg:w-6/12 sm:w-full">
            <h2 className="text-5xl bold-font pb-4">Ooops...</h2>
            <div className="text-4xl pt-2 pb-3 font-light">Page not found</div>
            <p>
              The page you are looking for doesn't exist or another error
              occurred, go back to home page.
            </p>
            <Link href="/">
              <button className="bg-16A085 uppercase text-white font-semibold px-14 py-2.5 text-center mt-12">
                Back to Home
              </button>
            </Link>
          </div>
          <div className="lg:w-6/12 text-center">
            <img
              src={Speech_Bubble}
              alt="Page not found"
              className="ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}