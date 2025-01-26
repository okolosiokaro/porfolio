import React from "react";
import { addMetaData } from "../core/seoHelpers";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      {addMetaData({
        title: "Page Not Found | Zorg Financial Group",
        description:
          "The page you are looking for might have been moved, removed, or is temporarily unavailable. Visit Zorg Financial Group's homepage to continue exploring.",
        keywords: "Zorg Financial Group 404 page, page not found, error page",
        path: "404",
        locale: "en_CA",
      })}

      <section className="bg-silos flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[14vh] w-[90%] md:mt-[10vh]">
            <h1 className="font-orbitron text-3xl uppercase leading-none">
              404 Page Not Found
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[90%]">
        <div className="w-full py-20 lg:w-1/2">
          <div className="mb-10">
            <h5 className="mb-3">
              The page you are looking for does not exist or may have been
              moved. Please use the links below to explore other sections of our
              website.
            </h5>

            <div className="mt-4 flex flex-col gap-4 text-gray-700">
              <Link to="/home" className="hover:text-dark hover:underline">
                <span className="iconify mr-2 mdi--menu-right"></span>
                Return to the homepage
              </Link>

              <Link to="/about" className="hover:text-dark hover:underline">
                <span className="iconify mr-2 mdi--menu-right"></span>
                Learn more about us and our financial solutions
              </Link>

              <Link
                to="/services"
                className="hover:text-dark hover:underline"
              >
                <span className="iconify mr-2 mdi--menu-right"></span>
                Discover the financial services we offer
              </Link>

              <Link
                to="/resources"
                className="hover:text-dark hover:underline"
              >
                <span className="iconify mr-2 mdi--menu-right"></span>
                Explore our educational resources and tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-hero flex h-[60vh] w-full justify-end">
        <div className="flex w-full flex-col justify-center bg-black bg-opacity-70 p-0 text-white md:w-1/2 md:p-10">
          <div className="mx-auto w-[90%] text-center md:text-start">
            <h1 className="py-5 font-orbitron text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
              Need Assistance?
            </h1>

            <p className="mb-8 mt-5">
              Have questions about our financial products or services? Please
              contact us, and our team will be happy to assist you.
            </p>

            <Link
              to="/contact"
              className="inline-block rounded-md w-full items-center justify-center gap-2 bg-primary px-[26px] py-[10px] font-mont text-[14px] uppercase !opacity-100 transition duration-300 ease-in-out hover:bg-dark disabled:cursor-not-allowed sm:w-2/3 md:flex lg:w-1/3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
