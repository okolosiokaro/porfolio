import React from "react";
import logo from "../../img/zfg.png";
import { APP_LINKS, contacts } from "../systemConst";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto w-[90%] py-4">
          <div className="my-4">
          <img src="/assets/images/maro.jpeg" alt="Elvis Okolosio" loading="lazy" className="mx-auto mb-5 h-12 w-12 rounded-full border-2 border-white bg-white"/>

          <div className="flex w-full items-center justify-center gap-5 text-gray-500">
            <a href="mailto:okolosiokaro@gmail.com" className="font-semibold hover:text-black">
              <span className="iconify text-xl mdi--email"></span></a>

            <a href="https://www.linkedin.com/in/oghenekaro-okolosio-359a70139/" target="_blank" className="font-semibold hover:text-black" rel="noopener noreferrer">
              <span className="iconify text-lg logos--linkedin-icon"></span>
            </a>

            <a href="https://github.com/okolosiokaro" target="_blank" className="font-semibold hover:text-black" rel="noopener noreferrer">
              <span className="iconify text-lg logos--github-icon"></span>
            </a>

            <a href="https://wa.me/2347050754245" className="font-semibold hover:text-black">
              <span className="iconify text-lg logos--whatsapp-icon"></span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-200 bg-secondary py-3 text-center font-mont text-sm text-gray-50">
        <div className="mx-auto w-[90%]">
          <p className="text-sm">
            Copyright © 2024 - {new Date().getFullYear()} Elvis Okolosio.
          </p>
        </div>
      </div>
    </footer>
  );
}
