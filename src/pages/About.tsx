import React from "react";
// import { Link } from "react-router-dom";
import deka from "../img/dekaFarms.png";
import campus from "../img/campusrunzLogo.svg";
import busbuzzer from "../img/busbuzzer.png";
import prism from "../img/prism.png";
import tems from "../img/tems.png";
import { addMetaData } from "../core/seoHelpers";

const About = () => {
  return (
    <>
      {addMetaData({
        title: "About | Elvis Okolosio",
        description:
          "Elvis is a seasoned developer focused on frontend web development.",
        keywords: "Web design and development",
        locale: "en_CA",
        path: "about",
      })}

      <section className="bg-home flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-60 text-gray-50">
          <div className="mx-auto mt-[24vh] w-[90%] md:mt-[14vh] md:w-[70%]">
            <h1 className="font-orbitron text-xl uppercase md:text-2xl">
              About
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-[90%] items-center justify-start py-20 md:w-[70%]">
          <div className="w-full">
            <h1 className="mb-3 uppercase text-primary">
              Okolosio Oghenekaro Elvis
            </h1>
            <p className="mb-10">
              A Frontend Developer with experience in creating responsive and
              user-friendly web applications. With expertise in HTML, CSS,
              Javascript, and modern frameworks like React and Vue.js, I strive
              to bring intuitive digital experiences to life including BusBuzzer
              Admin, Prism and Deka Farms. My focus is on clean, efficient code,
              accessibility, and seamless user interaction. Explore my projects
              to see how I blend creativity with technology to solve real-world
              problems and craft digital solutions.
            </p>

            <div>
              <h1 className="mb-3 uppercase text-primary">Experience</h1>
              <div className="mb-16">
                <h3 className="mb-1 text-lg font-medium">
                  Lead Frontend Developer
                </h3>
                <p className="text-md font-medium">Mar 2025 - present</p>
                <div className="text-md mb-5 flex w-full justify-between">
                  <p className="font-semibold">
                    <a
                      href="https://www.usewebeffects.tech"
                      className="underline"
                    >
                      UseWebEffects Agency
                    </a>
                  </p>
                  <p className="font-medium">Lagos, Nigeria</p>
                </div>

                <p className="mb-5">
                  Full-service e-commerce web agency. Lead developers across all
                  client engagements, from architecture through to delivery.
                </p>

                <div className="mb-5">
                  <div className="pl-5">
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Architect scalable, responsive storefronts with React,
                      Next.js, and Vite.js optimized for SEO, Core Web Vitals,
                      and conversion.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Built and maintain a shared component library and design
                      system, reducing new project setup time by 40%+.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Integrate headless commerce APIs and third-party services
                      (payments, logistics, analytics) across client
                      deployments.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Drive rigorous testing and automation practices, achieving
                      a 90% reduction in reported bugs and a 50% improvement in
                      client satisfaction scores.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Lead client discovery sessions and translate business
                      requirements directly into high-converting UI/UX
                      solutions.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Provided ongoing technical support, including debugging,
                      troubleshooting, and feature enhancements, maintaining
                      strong client relationships.
                    </p>

                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Notable project -
                      <a
                        href="https://temsfashion.usewebeffects.tech/"
                        className="px-1 font-semibold italic underline"
                      >
                        Tems Fashion:
                      </a>{" "}
                      Led end-to-end frontend development for a full clothing
                      e-commerce platform, integrating a .NET (C#) backend API
                      with storefront, cart, and checkout flows built in Vite.js
                      and React.
                    </p>
                  </div>
                </div>

                <p className="text-md text-xs font-semibold italic">
                  React, Next.js, Vite.js, TypeScript, Tailwind CSS, Zustand,
                  React Query, System Design
                </p>
              </div>
              <div className="mb-16">
                <h3 className="mb-1 text-lg font-medium">Frontend Developer</h3>
                <p className="text-md font-medium">May 2022 - Feb 2025</p>
                <div className="text-md mb-5 flex w-full justify-between">
                  <p className="font-semibold">
                    <a href="https://www.campusrunz.com" className="underline">
                      Campusrunz.com
                    </a>
                  </p>
                  <p className="font-medium">Lagos, Nigeria</p>
                </div>

                <p className="mb-5">
                  Student services marketplace offering transportation,
                  accommodation, laundry, groceries, and campus delivery.
                </p>

                <div className="mb-5">
                  <div className="pl-5">
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Led the frontend team in a full revamp of the admin portal
                      and{" "}
                      <a
                        href="https://campusrunz.com"
                        className="font-semibold italic underline"
                      >
                        business website
                      </a>
                      , delivering a modern, performant experience.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Designed a decoupled frontend architecture with lazy
                      loading and client-side caching, cutting page load times
                      by 10+ seconds.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Implemented Zustand for state management, reducing
                      redundant API calls, and improving data consistency across
                      the platform.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Improved modularity and maintainability, enabling faster
                      feature development and seamless scalability across
                      multiple apps.
                    </p>
                    {/* <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Lead client discovery sessions and translate business
                      requirements directly into high-converting UI/UX
                      solutions.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Provided ongoing technical support, including debugging,
                      troubleshooting, and feature enhancements, maintaining
                      strong client relationships.
                    </p> */}

                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Built three companion applications:
                      <a
                        href="https://onefinancemanager.com/"
                        className="px-1 font-semibold italic underline"
                      >
                        One Finance Manager
                      </a>{" "}
                      (account management portal),
                      <a
                        href="https://veloceety.com/"
                        className="px-1 font-semibold italic underline"
                      >
                        Veloceety
                      </a>{" "}
                      (PWA for delivery agents),
                      <a
                        href="https://app.campusrunz.com"
                        className="px-1 font-semibold italic underline"
                      >
                        Campusrunz PWA
                      </a>{" "}
                      (web replica of the mobile app).
                    </p>
                  </div>
                </div>

                <p className="text-md text-xs font-semibold italic">
                  React, TypeScript, Tailwind CSS, Zustand, AWS
                </p>
              </div>
              <div className="mb-16">
                <h3 className="mb-1 text-lg font-medium">Frontend Developer</h3>
                <p className="text-md font-medium">Jan 2021 - March 2022</p>
                <div className="text-md mb-5 flex w-full justify-between">
                  <p className="font-semibold">Matrix Web Agency</p>
                  <p className="font-medium">Lagos, Nigeria</p>
                </div>

                {/* <p className="mb-5">
                  Full-service e-commerce web agency. Lead developers across all
                  client engagements, from architecture through to delivery.
                </p> */}

                <div className="mb-5">
                  <div className="pl-5">
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Designed and built fully responsive, accessible websites
                      for clients using React, Bootstrap, Tailwind CSS.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Applied modern UI/UX principles to improve navigation,
                      visual hierarchy, and cross-browser compatibility.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Optimized frontend performance through code splitting,
                      lazy loading, and reusable component architecture.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Collaborated with stakeholders to translate brand goals
                      into polished, engaging web experiences.
                    </p>
                    {/* <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Lead client discovery sessions and translate business
                      requirements directly into high-converting UI/UX
                      solutions.
                    </p>
                    <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Provided ongoing technical support, including debugging,
                      troubleshooting, and feature enhancements, maintaining
                      strong client relationships.
                    </p> */}

                    {/* <p className="mb-3">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Notable project -
                      <a
                        href="https://temsfashion.usewebeffects.tech/"
                        className="px-1 font-semibold italic underline"
                      >
                        Tems Fashion:
                      </a>{" "}
                      Led end-to-end frontend development for a full clothing
                      e-commerce platform, integrating a .NET (C#) backend API
                      with storefront, cart, and checkout flows built in Vite.js
                      and React.
                    </p> */}
                  </div>
                </div>

                <p className="text-md text-xs font-semibold italic">
                  JavaScript, Node.js, React, TypeScript, Tailwind CSS,
                  Bootstrap
                </p>
              </div>
            </div>
            <div>
              <h1 className="mb-3 uppercase text-primary">Projects</h1>
              <div className="mb-16">
                {/* <h3 className="mb-1 text-lg font-medium">Frontend Developer</h3>
                <p className="text-md mb-1 font-medium">Nov 2023</p> */}
                <div className="text-md mb-5 flex w-full justify-between">
                  <a
                    href="https://admin.busbuzzer.com"
                    target="_blank"
                    className="flex items-center gap-2 font-semibold italic underline"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={busbuzzer}
                      alt="busbuzzer"
                      className="h-[24px] w-auto"
                      loading="lazy"
                    />
                    <p>Busbuzzer Admin</p>
                  </a>
                  {/* <p className="font-medium">Remote - Lagos, Nigeria</p> */}
                </div>

                <p className="mb-5">
                  Admin panel for a school transport platform. Built with
                  Next.js with real-time geolocation tracking and route
                  optimization, in collaboration with design and backend teams.
                </p>

                {/* <div className="mb-5">
                  <div className="pl-5">
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Revamped the
                      <a
                        href="https://www.campusrunz.com"
                        target="_blank"
                        className="px-1 font-semibold italic underline"
                        rel="noopener noreferrer"
                      >
                        business website
                      </a>
                      delivering a modern, user-friendly experience.
                    </p>
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Designed a decoupled frontend architecture, improving
                      performance with a 10+ second reduction in loading times
                      through lazy loading and client-side caching.
                    </p>
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Implemented state management using Zustand, ensuring
                      enhanced data consistency, reduced API calls, and
                      optimized frontend-backend communication.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Improved modularity and maintainability, enabling faster
                      feature development and seamless scalability.
                    </p>
                  </div>
                </div> */}

                <p className="text-md text-xs font-semibold italic">
                  React, Typescript, TailwindCSS
                </p>
              </div>
              <div className="mb-16">
                {/* <h3 className="mb-1 text-lg font-medium">Frontend Developer</h3>
                <p className="text-md mb-1 font-medium">Nov 2024</p> */}
                <div className="text-md mb-5 flex w-full justify-between">
                  <a
                    href="http://useprism.co/"
                    target="_blank"
                    className="flex items-center gap-2 font-semibold italic underline"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={prism}
                      alt="prism"
                      className="h-[24px] w-auto"
                      loading="lazy"
                    />
                    <p>Prism</p>
                  </a>
                  {/* <p className="font-medium">Remote - Lagos, Nigeria</p> */}
                </div>

                <p className="mb-5">
                  Fraud reporting platform enabling users to file detailed
                  reports with business information, supporting documents, and
                  access to law enforcement and consumer protection resources.
                </p>

                {/* <div className="mb-5">
                  <div className="pl-5">
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Designed and built a fully responsive and user-friendly
                      website layout to enhance customer engagement across
                      devices.
                    </p>
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Collaborated closely with stakeholders to understand
                      business goals and translate them into a visually
                      appealing web experience.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Implemented modern UI/UX design principles using React,
                      Typescript, and TailwindCSS for seamless navigation and
                      accessibility.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Optimized website performance to enhance fast loading
                      times and a smooth user experience.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Integrated reusable components for scalability and easier
                      future updates.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Ensured cross-browser compatibility and adherence to web
                      standards for a wider audience reach.
                    </p>
                  </div>
                </div> */}

                <p className="text-md text-xs font-semibold italic">
                  React, Typescript, TailwindCSS
                </p>
              </div>
              <div className="mb-16">
                {/* <h3 className="mb-1 text-lg font-medium">Frontend Developer</h3>
                <p className="text-md mb-1 font-medium">Nov 2024</p> */}
                <div className="text-md mb-5 flex w-full justify-between">
                  <a
                    href="https://temsfashion.usewebeffects.tech/"
                    target="_blank"
                    className="flex items-center gap-2 font-semibold italic underline"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={tems}
                      alt="tems"
                      className="h-[24px] w-auto"
                      loading="lazy"
                    />
                    <p>Tems Fashion</p>
                  </a>
                  {/* <p className="font-medium">Remote - Lagos, Nigeria</p> */}
                </div>

                <p className="mb-5">
                  Tems Fashion is an online store for a fashion brand. The
                  website is a full ecommerce online store which display
                  clothes, with a shopping cart to store selected items and
                  payment options at checkout.
                </p>

                {/* <div className="mb-5">
                  <div className="pl-5">
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Designed and built a fully responsive and user-friendly
                      website layout to enhance customer engagement across
                      devices.
                    </p>
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Collaborated closely with stakeholders to understand
                      business goals and translate them into a visually
                      appealing web experience.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Implemented modern UI/UX design principles using React,
                      Typescript, and TailwindCSS for seamless navigation and
                      accessibility.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Optimized website performance to enhance fast loading
                      times and a smooth user experience.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Integrated reusable components for scalability and easier
                      future updates.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Ensured cross-browser compatibility and adherence to web
                      standards for a wider audience reach.
                    </p>
                  </div>
                </div> */}

                <p className="text-md text-xs font-semibold italic">
                  React, Typescript, TailwindCSS
                </p>
              </div>
              <div className="mb-16">
                {/* <h3 className="mb-1 text-lg font-medium">Frontend Developer</h3>
                <p className="text-md mb-1 font-medium">Nov 2023</p> */}
                <div className="text-md mb-5 flex w-full justify-between">
                  <a
                    href="https://campusrunz.com/"
                    target="_blank"
                    className="flex items-center gap-2 font-semibold italic underline"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={campus}
                      alt="CampusRunz"
                      className="h-[24px] w-auto"
                      loading="lazy"
                    />
                    <p>CampusRunz</p>
                  </a>
                  {/* <p className="font-medium">Remote - Lagos, Nigeria</p> */}
                </div>

                <p className="mb-5">
                  Campusrunz is a platform designed to simplify student life by
                  offering convenient, affordable services such as
                  transportation, accommodation, laundry, groceries, and a
                  vibrant marketplace.
                </p>

                {/* <div className="mb-5">
                  <div className="pl-5">
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Revamped the
                      <a
                        href="https://www.campusrunz.com"
                        target="_blank"
                        className="px-1 font-semibold italic underline"
                        rel="noopener noreferrer"
                      >
                        business website
                      </a>
                      delivering a modern, user-friendly experience.
                    </p>
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Designed a decoupled frontend architecture, improving
                      performance with a 10+ second reduction in loading times
                      through lazy loading and client-side caching.
                    </p>
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Implemented state management using Zustand, ensuring
                      enhanced data consistency, reduced API calls, and
                      optimized frontend-backend communication.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Improved modularity and maintainability, enabling faster
                      feature development and seamless scalability.
                    </p>
                  </div>
                </div> */}

                <p className="text-md text-xs font-semibold italic">
                  React, Typescript, TailwindCSS
                </p>
              </div>
              <div className="mb-16">
                {/* <h3 className="mb-1 text-lg font-medium">Frontend Developer</h3>
                <p className="text-md mb-1 font-medium">Nov 2024</p> */}
                <div className="text-md mb-5 flex w-full justify-between">
                  <a
                    href="https://dekafarms.com/"
                    target="_blank"
                    className="flex items-center gap-2 font-semibold italic underline"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={deka}
                      alt="Deka Farms"
                      className="h-[24px] w-auto"
                      loading="lazy"
                    />
                    <p>Deka Farms</p>
                  </a>
                  {/* <p className="font-medium">Remote - Lagos, Nigeria</p> */}
                </div>

                <p className="mb-5">
                  Deka Farm is a website designed for an agriculural firm,
                  showcasing services, food crops, and livestock to attract and
                  engage potential customers effectively.
                </p>

                {/* <div className="mb-5">
                  <div className="pl-5">
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Designed and built a fully responsive and user-friendly
                      website layout to enhance customer engagement across
                      devices.
                    </p>
                    <p className="mb-1">
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Collaborated closely with stakeholders to understand
                      business goals and translate them into a visually
                      appealing web experience.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Implemented modern UI/UX design principles using React,
                      Typescript, and TailwindCSS for seamless navigation and
                      accessibility.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Optimized website performance to enhance fast loading
                      times and a smooth user experience.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Integrated reusable components for scalability and easier
                      future updates.
                    </p>
                    <p>
                      <span className="mr-1 inline-block h-[8px] w-[8px] bg-primary hover:bg-dark"></span>
                      Ensured cross-browser compatibility and adherence to web
                      standards for a wider audience reach.
                    </p>
                  </div>
                </div> */}

                <p className="text-md text-xs font-semibold italic">
                  React, Typescript, TailwindCSS
                </p>
              </div>
            </div>
            <div>
              <h1 className="mb-3 uppercase text-primary">Education</h1>
              <div className="w-full md:w-3/4 lg:w-2/4">
                <div className="mb-16">
                  <h3 className="mb-1 text-lg font-medium">
                    Bachelor of Engineering, Electrical and Electronics
                    Engineering
                  </h3>
                  <p className="text-md mb-1 font-medium">Jan 2017</p>
                  <div className="text-md mb-5 flex w-full justify-between">
                    <a
                      href="https://fupre.edu.ng/"
                      target="_blank"
                      className="flex items-center gap-2 font-semibold italic underline"
                      rel="noopener noreferrer"
                    >
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
