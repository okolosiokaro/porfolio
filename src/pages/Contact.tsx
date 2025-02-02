import React from "react";
// import client from "../img/shakingclient.jpg";
import { addMetaData } from "../core/seoHelpers";
// import { contacts } from "../core/systemConst";

const Contact = () => {
  return (
    <>
      {addMetaData({
        title: "Contact | Elvis Okolosio - Get in Touch",
        description:
          "Elvis is a seasoned developer focused on frontend web development.",
        keywords:
          "Web design and development",
        locale: "en_CA",
        path: "contact",
      })}

      <section className="bg-white flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[24vh] w-[90%] md:w-[70%] md:mt-[14vh]">
            <h1 className="md:2xl font-orbitron text-xl uppercase">Contact</h1>
          </div>
        </div>
      </section>

      <section className="h-auto bg-white">
        <div className="mx-auto h-full w-[90%] md:w-[70%] py-20">
          <div className="w-full">
             <div className="mb-3">
             <h1 className="mb-3 uppercase text-primary">
              Get in touch
            </h1>

        <p className="mb-2">
          I'd love to hear from you. Whether you have a project in mind, a question, or just want to connect, feel free to reach out. Let's collaborate and build something amazing together. Drop me a message, and I'll get back to you as soon as possible.
        </p>

        <p className="mb-2">
          Whether you're a startup seeking a reliable partner or an established
          company aiming to enhance your digital presence, I'm here to help.
        </p>

        <p className="mb-5">
          Let's collaborate to turn your ideas into reality with cutting-edge
          technology and efficient, scalable solutions. Feel free to reach out
          for consultations, project discussions, or any technical inquiries.
        </p>
            </div>
              <div className="mt-8 grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <h5 className="text-[14px]">EMAIL</h5>
          <a href="mailto:okolosiokaro@gmail.com" className="font-semibold italic underline">send a mail</a>
        </div>

        <div className="col-span-1">
          <h5 className="text-[14px]">LINKEDIN</h5>
          <a href="https://www.linkedin.com/in/oghenekaro-okolosio-359a70139/" target="_blank" className="font-semibold italic underline" rel="noopener noreferrer">@Elvis-okolosio</a>
        </div>

        <div className="col-span-1">
          <h5 className="text-[14px]">GITHUB</h5>
          <a href="https://github.com/okolosiokaro" target="_blank" className="font-semibold italic underline" rel="noopener noreferrer">@okolosiokaro</a>
        </div>

        <div className="col-span-1">
          <h5 className="text-[14px]">WHATSAPP</h5>
          <a href="https://wa.me/2347050754245" className="font-semibold italic underline">send a message</a>
        </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
