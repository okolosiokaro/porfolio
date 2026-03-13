import React from "react";
import { Link } from "react-router-dom";
import { addMetaData } from "../core/seoHelpers";

const Home = () => {
  return (
    <>
      {addMetaData({
        title: "Elvis Okolosio",
        description:
          "Elvis is a seasoned developer focused on frontend web development.",
        keywords: "Web design and development",
        locale: "en_CA",
        path: "home",
      })}

      <section className="md:bg-home bg-home flex h-screen w-full">
        <div className="mt-20 flex w-full flex-col justify-center bg-black bg-opacity-55 p-0 text-gray-50">
          <div className="mx-auto w-[90%] md:w-[70%]">
            <h1 className="font-orbitron border-l py-5 pl-5 text-2xl font-extrabold uppercase tracking-wide sm:pl-8 sm:text-3xl">
              Elvis Okolosio <br /> Frontend Developer
            </h1>

            <p className="mb-8 mt-5 md:w-[60%]">
              Welcome to my portfolio. I'm a passionate Frontend Developer with
              a keen eye for creating engaging, responsive, and user-friendly
              web applications.
            </p>

            <Link
              to="/contacts"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-[10px] py-[10px] font-mont text-[14px] uppercase text-white !opacity-100 transition duration-300 ease-in-out hover:bg-dark disabled:cursor-not-allowed sm:w-1/3"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="h-auto w-full bg-white">
        <div className="mx-auto flex h-full w-[90%] flex-col items-center py-20 md:w-[70%]">
          <div className="w-full">
            <h5 className="mb-3 text-lg uppercase text-primary">About</h5>

            <p className="">
              A Frontend Developer with experience in creating responsive and
              user-friendly web applications. With expertise in HTML, CSS,
              Javascript, and modern frameworks like React and Vue.js, I strive
              to bring intuitive digital experiences to life including BusBuzzer
              Admin, Prism and Deka Farm. My focus is on clean, efficient code,
              accessibility, and seamless user interaction. Explore my projects
              to see how I blend creativity with technology to solve real-world
              problems and craft digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="h-auto w-full bg-white lg:h-[70vh]">
        <div className="mx-auto flex h-full w-[90%] flex-col items-center justify-between gap-5 py-20 md:w-[70%] lg:flex-row-reverse">
          <div className="w-full">
            <h5 className="mb-3 text-lg uppercase text-primary">Projects</h5>

            <div className="w-full">
              <div className="group mb-5">
                <div>
                  <div className="inline-block h-[8px] w-[8px] bg-primary group-hover:bg-dark"></div>
                  <a
                    href="https://admin.busbuzzer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pl-1 font-medium italic underline"
                  >
                    BusBuzzer Admin
                  </a>
                </div>
                <p>
                  Admin panel for a school transport platform. Built with
                  Next.js with real-time geolocation tracking and route
                  optimization, in collaboration with design and backend teams.
                </p>
              </div>

              <div className="group mb-5">
                <div>
                  <div className="inline-block h-[8px] w-[8px] bg-primary group-hover:bg-dark"></div>
                  <a
                    href="http://useprism.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pl-1 font-medium italic underline"
                  >
                    Prism
                  </a>
                </div>
                <p>
                  Fraud reporting platform enabling users to file detailed
                  reports with business information, supporting documents, and
                  access to law enforcement and consumer protection resources.
                </p>
              </div>

              <div className="group mb-5">
                <div>
                  <div className="inline-block h-[8px] w-[8px] bg-primary group-hover:bg-dark"></div>
                  <a
                    href="https://dfarms.netlify.app/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pl-1 font-medium italic underline"
                  >
                    Deka Farm
                  </a>
                </div>
                <p>
                  Deka Farm is a website designed for an agriculural firm,
                  showcasing services, food crops, and livestock to attract and
                  engage potential customers effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
