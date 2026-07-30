import React from 'react';
import Link from 'next/link';
const watsappImage = '/assets/images/watsapp.svg';
export const Footer = () => {
  const phoneNumber = '19193219995'; // replace with your phone number

  function handleClick() {
    window.location.href = `https://wa.me/${phoneNumber}`;
  }
  return (
    <React.Fragment>

      <section className=" maindPadding  bg-black pb-12">
        <div className="bg-16A085 flex flex-wrap lg:justify-between sm:justify-center justify-center items-center p-7 mb-3 relative footerTop">
          <div className="lg:text-2xl text-xl font-black text-white bold-font lg:text-start sm:text-center text-center">
            One-Step Solution bringing Data & Strategy Boosted in No time.
          </div>
          <div onClick={handleClick} className="flex items-center lg:mt-0 sm:mt-5 mt-5 cursor-pointer">
            <div><img src={watsappImage} alt="..." /></div>
            <div className="lg:text-2xl text-xl font-black text-white bold-font pl-4">
              +19193219995
            </div>
          </div>
        </div>
        <footer className="flex flex-wrap justify-between pb-9">
          <div className="footer-col">
            <div className="text-847F7F">Services</div>
            <Link href="/seo-services" className="text-white block pt-4">Search Engin Optimization</Link>
            <Link href='/social-media-marketing' className="text-white block pt-2">Social Media Marketing</Link>
            <Link href='/ppc-management-services' className="text-white block pt-2">PPC Management</Link>
            <Link href='/web-development-services' className="text-white block pt-2">
              Website Design & Development
            </Link>
            <Link href='/lead-generation-services' className="text-white block pt-2">Lead Generation</Link>
          </div>
          <div className="footer-col">
            <div className="text-847F7F">Learn</div>
            <Link href="/about" className="text-white block pt-4">About</Link>
            <Link href="/clients" className="text-white block pt-2">Testimonials</Link>
            <Link href="/faqs" className="text-white block pt-2">
              FAQs
            </Link>
            <Link href="/blogs" className="text-white block pt-2">Blog</Link>
          </div>
          <div className="footer-col">
            <div className="text-847F7F">Explore</div>
            <Link href="/" className="text-white block pt-4">Home</Link>
            <Link href="/portfolio/" className="text-white block pt-2">Work</Link>
            <Link href="/services" className="text-white block pt-2">Services</Link>
            <Link href="/careers" className="text-white block pt-2">
              Careers
            </Link>
            <Link href="/contact-us" className="text-white block pt-2">Contact</Link>
          </div>
          <div className="footer-col">
            <div className="text-847F7F">KNOWLEDGE BASE
            </div>
            <Link href="/seo-services" className="text-white block pt-4">Seo</Link>
            <Link href="/ecommerce-development" className="text-white block pt-2">Ecommerce</Link>
            <Link href="/shopify-development-agency" className="text-white block pt-2">Shopify</Link>
            <Link href="/branding-services" className="text-white block pt-2">
              Branding
            </Link>
            <Link href="/web-development-services" className="text-white block pt-2">Website Design</Link>
          </div>
          <div className="footer-col">
            <div className="text-847F7F">Headquarter:</div>
            <div className="text-white block pt-4">
              6210 Plantation Center Dr
              Suite 105, Raleigh, NC, 27616 USA

            </div>
            <div className="text-847F7F pt-8">Other Offices</div>
            <div className="text-white block pt-2">
              5th Floor Mezan Executive Tower, Liaquat Road, Faisalabad Pakistan
            </div>
          </div>
        </footer>

        <div className="flex pt-9 lg:justify-end justify-between sm:justify-between">
          <Link href="/privacy-policy" className="text-white block">Privacy Policy </Link>
          <Link href="/terms-of-use" className="text-white block pl-7">Terms of Use </Link>
          {/* <Link href="##" className="text-white block"> Press Kit</Link> */}
        </div>
      </section>
    </React.Fragment>
  );
};
