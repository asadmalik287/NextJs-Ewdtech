
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const PopupWidget = dynamic(
  () => import('react-calendly').then(mod => mod.PopupWidget),
  { ssr: false }
);


const logo = '/assets/images/logo.webp';

export const Navbar = ({ navClass }) => {
  const [backgroundColor, setBackgroundColor] = useState('bg-transparent');
  const [showDropDown, setShowDropDown] = useState('hidden');
  const [menu, setMenu] = useState('hidden');

  const pathname = usePathname();

  useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY > 20) {
        setBackgroundColor('bg-black');
      } else {
        setBackgroundColor('bg-transparent');
      }
    };

    window.addEventListener('scroll', scrollFunction);
    return () => window.removeEventListener('scroll', scrollFunction);
  }, []);
  return (
    <React.Fragment>
      <nav
        className={`lg:px-12 ${navClass} md:px-3 sm:px-3 px-3 ${backgroundColor}   py-5   bg-dark  fixed w-full z-20 top-0 left-0 `}
      >
        <div className=" flex flex-wrap justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src={logo} className="mr-3" alt="EWD Logo" />
          </Link>
          <div className="flex md:order-2 h-11">
            <div className="sm-hidden md:show">
              <button
                type="button"
                className=" bg-16A085 uppercase text-white h-full flex items-center font-semibold  px-7 py-2.5 text-center"
              >
                <PopupWidget
                  url="https://calendly.com/faisaal-279/30min"
                  rootElement={typeof window !== 'undefined' ? document.body : undefined}
                  text="Let’s Talk"
                  textColor="#ffffff"
                  color="#16A085"
                />
              </button>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none   "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                onClick={() => {
                  menu === 'hidden' ? setMenu('show') : setMenu('hidden');
                }}
                className="w-6 h-6"
                aria-hidden="true"
                fill="#fff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h22a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h22a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h22a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${menu} justify-between items-center w-full lg:flex md:flex md:w-auto md:order-1 navDiv`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8">

              {/* About */}
              <li>
                <Link
                  href="/about"
                  className={`uppercase px-2 text-base font-medium ${pathname === '/about' ? 'text-[#16A085]' : 'text-white'
                    }`}
                >
                  About
                </Link>
              </li>

              {/* Blogs */}
              <li>
                <Link
                  href="/blogs"
                  className={`uppercase px-2 text-base font-medium ${pathname === '/blogs' ? 'text-[#16A085]' : 'text-white'
                    }`}
                >
                  Blogs
                </Link>
              </li>

              {/* Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setShowDropDown('block')}
                onMouseLeave={() => setShowDropDown('hidden')}
              >
                <button className="flex items-center text-white uppercase px-2">
                  Services
                  <span className="ml-1">+</span>
                </button>

                <div className={`absolute pt-4 ${showDropDown}`}>
                  <ul className="bg-white text-black p-3 shadow-lg">

                    <li><Link href="/seo-services">SEO</Link></li>
                    <li><Link href="/ecommerce-development">Ecommerce</Link></li>
                    <li><Link href="/shopify-development-agency">Shopify</Link></li>
                    <li><Link href="/branding-services">Branding</Link></li>
                    <li><Link href="/social-media-marketing">Social</Link></li>
                    <li><Link href="/web-development-services">Website Design
                      & Development
                    </Link></li>
                    <li><Link href="/ppc-management-services">PPC MANAGEMENT</Link></li>
                    <li><Link href="/lead-generation-services">LEAD GENERATION</Link></li>

                  </ul>
                </div>
              </li>

              {/* Portfolio */}
              <li>
                <Link
                  href="/portfolio"
                  className={`uppercase px-2 text-base font-medium ${pathname === '/portfolio' ? 'text-[#16A085]' : 'text-white'
                    }`}
                >
                  Our Work
                </Link>
              </li>

              {/* Clients */}
              <li>
                <Link href="/clients" className="uppercase px-2 text-white">
                  Clients
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link
                  href="/contact-us"
                  className={`uppercase px-2 text-base font-medium ${pathname === '/contact-us' ? 'text-[#16A085]' : 'text-white'
                    }`}
                >
                  Contact Us
                </Link>
              </li>

              {/* Mobile CTA */}
              <div className="md:hidden mt-4">
                <PopupWidget
                  url="https://calendly.com/faisaal-279/30min"
                  rootElement={typeof window !== 'undefined' ? document.body : undefined}
                  text="Let’s Talk"
                  textColor="#ffffff"
                  color="#16A085"
                />
              </div>

            </ul>
          </div>
        </div>
      </nav>

    </React.Fragment>
  );
};
export default Navbar;
