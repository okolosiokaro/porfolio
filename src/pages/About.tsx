import React from "react";
// import { Link } from "react-router-dom";
import deka from "../img/dekaFarms.png";
import campus from "../img/campusrunzLogo.svg";
import { addMetaData } from "../core/seoHelpers";

const About = () => {
  return (
    <>
      {addMetaData({
        title: "About | Elvis Okolosio",
        description:
          "Elvis is a seasoned developer focused on frontend web development.",
        keywords:
          "Web design and development",
        locale: "en_CA",
        path: "about",
      })}

      <section className="bg-white flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[24vh] w-[90%] md:w-[70%] md:mt-[14vh]">
            <h1 className="font-orbitron text-xl uppercase md:text-2xl">
              About
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-[90%] md:w-[70%] items-center justify-start py-20">
          <div className="w-full">
            <h1 className="mb-3 uppercase text-primary">
              Okolosio Oghenekaro Elvis
            </h1>
            <p className="mb-10">
            A Frontend Developer with experience in creating responsive and user-friendly web applications. With expertise in HTML, CSS, Javascript, and modern frameworks like React and Vue.js, I strive to bring intuitive digital experiences to life including Campusrunz and Deka Farms. My focus is on clean, efficient code, accessibility, and seamless user interaction. Explore my projects to see how I blend creativity with technology to solve real-world problems and craft digital solutions.
            </p>

            <div>
              <h1 className="mb-3 uppercase text-primary">
              Experience
              </h1>
              <div className="mb-16">
               <h3 className="mb-1 text-lg font-medium">
                 Frontend Developer
               </h3>
               <p className="text-md font-medium">Dec 2022 - present</p>
                <div className="text-md mb-5 flex w-full justify-between">
                 <p className="font-semibold">Use Web Effects Web Agency</p>
                 <p className="font-medium">Edo, Nigeria</p>
               </div>

                <p className="mb-3">
                <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                  Successfully designed and developed full-stack applications for over
                  10 businesses utilizing JavaScript, while consistently achieving 100% client
                  satisfaction and meeting project deadlines.
                </p>
                <p className="mb-3">
                <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                  Develop dynamic, responsive user interface using React, ensuring an enhanced user eperience across devices.  
                </p>
                <p className="mb-3">
                <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                  Built and maintained server-side functionalities with Node.js, ensuring robust and scalable solutions.                  
                </p>
                <p className="mb-3">
                <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                  Implemented rigorous testing and automation practices that resulted in
                  a remarkable 90% decrease in reported software bugs and a 50% rise in
                  customer ratings.
                </p>
                <p className="mb-3">
                <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                  Explored and interated emerging technologies to enhance application performance and ensure future scalability.
                </p>
                <p className="mb-3">
                <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                  Provided ongoing technical support, including debugging, troubleshooting, and feature enhancements, maintaining strong client relationships.
                </p>
                <p className="mb-5">
                <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                  Created reusable code and components, reducing development time for future projects.
                </p>
                <p className="text-md text-xs font-semibold italic">
                  Javascript, Typescript, Figma, Node Js, React, Bootstrap, TailwindCSS
                </p>
              </div>
            </div>
            <div>
              <h1 className="mb-3 uppercase text-primary">
              Projects
              </h1>
              <div className="mb-16">
                <h3 className="mb-1 text-lg font-medium">
                  Frontend Developer
                </h3>
                <p className="text-md mb-1 font-medium">Nov 2023</p>
                <div className="text-md mb-5 flex w-full justify-between">
                 <a href="https://campusrunz.com/" target="_blank" className="flex items-center gap-2 font-semibold italic underline" rel="noopener noreferrer">
                 <img src={campus} alt="CampusRunz" className="h-[24px] w-auto" loading="lazy" />
                  <p>CampusRunz</p>
                  </a>
                  <p className="font-medium">Remote - Lagos, Nigeria</p>
               </div>

                <p className="mb-5">
                  Campusrunz is a platform designed to simplify student life by offering
                  convenient, affordable services such as transportation, accommodation,
                  laundry, groceries, and a vibrant marketplace.
                </p>

                <div className="mb-5">
                  <div className="pl-5">
                    <p className="mb-1">
                    <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                      Revamped the
                      <a href="https://www.campusrunz.com" target="_blank" className="font-semibold italic underline px-1" rel="noopener noreferrer">business website</a>
                      delivering a modern, user-friendly experience.
                    </p>
                    <p className="mb-1">
                      <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                      Designed a decoupled frontend architecture, improving performance
                      with a 10+ second reduction in loading times through lazy loading
                      and client-side caching.
                    </p>
                    <p className="mb-1">
                      <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                      Implemented state management using Zustand, ensuring enhanced data
                      consistency, reduced API calls, and optimized frontend-backend
                      communication.
                    </p>
                    <p>
                      <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                      Improved modularity and maintainability, enabling faster feature
                      development and seamless scalability.
                    </p>
                  </div>
                </div>

                <p className="text-md text-xs font-semibold italic">
                  React, Typescript, TailwindCSS
                </p>
              </div>
              <div className="mb-16">
                <h3 className="mb-1 text-lg font-medium">
                  Frontend Developer
                </h3>
                <p className="text-md mb-1 font-medium">Nov 2024</p>
                <div className="text-md mb-5 flex w-full justify-between">
                  <a href="https://dekafarms.com/" target="_blank" className="flex items-center gap-2 font-semibold italic underline" rel="noopener noreferrer">
                    <img src={deka} alt="Deka Farms" className="h-[24px] w-auto" loading="lazy" />
                    <p>Deka Farms</p>
                  </a>
                  <p className="font-medium">Remote - Lagos, Nigeria</p>
                </div>

                <p className="mb-5">
                  Deka Farms is a website designed for an agriculural firm, showcasing services, food crops, and livestock to attract and engage potential customers effectively.
                </p>

                <div className="mb-5">
                  <div className="pl-5">
                    <p className="mb-1">
                      <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                      Designed and built a fully responsive and user-friendly website layout to enhance customer engagement across devices.
                    </p>
                    <p className="mb-1">
                      <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                      Collaborated closely with stakeholders to understand business goals and translate them into a visually appealing web experience.
                    </p>
                    <p>
                      <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                        Implemented modern UI/UX design principles using React, Typescript, and TailwindCSS for seamless navigation and accessibility.
                    </p>
                    <p>
                      <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                      Optimized website performance to enhance fast loading times and a smooth user experience.
                    </p>
                    <p>
                      <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                        Integrated reusable components for scalability and easier future updates.
                    </p>
                    <p>
                      <span className="inline-block h-[8px] w-[8px] bg-primary hover:bg-dark mr-1"></span>
                      Ensured cross-browser compatibility and adherence to web standards for a wider audience reach.
                    </p>
                  </div>
                </div>

                <p className="text-md text-xs font-semibold italic">
                  React, Typescript, TailwindCSS
                </p>
              </div>
            </div>
            <div>
              <h1 className="mb-3 uppercase text-primary">
              Education
               </h1>
                <div className="w-full md:w-3/4 lg:w-2/4">
                 <div className="mb-16">
                  <h3 className="mb-1 text-lg font-medium">
                   Bachelor of Engineering, Electrical and Electronics Engineering
                 </h3>
                 <p className="text-md mb-1 font-medium">Jan 2017</p>
                  <div className="text-md mb-5 flex w-full justify-between">
                  <a href="https://fupre.edu.ng/" target="_blank" className="flex items-center gap-2 font-semibold italic underline" rel="noopener noreferrer">
                  Federal University of Petroleum Resources
                 </a>
                  <p className="font-medium">Delta, Nigeria</p>
                  </div>
                  </div>
               </div>
            </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
