import React from "react";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10 mb-20 p-10" id="contact">
      <div className="absolute inset-0 -z-10 min-h-96 overflow-hidden">
        <img
          src="/footer-grid.svg"
          alt="grid"
          mt-5
          className="w-full h-full opacity-50 object-cover"
        />
      </div>
      <div className="flex flex-col items-center z-10 sm:p-4">
        <h1 className="heading lg:max-w-[45vw] text-center ">
          Tenha um site profissional que represente a {""}
          <span className="text-blue-400">
            sua marca e atraia mais clientes.
          </span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          para o seu negócio, otimizado para SEO e responsivo para todos os
          dispositivos.
        </p>
        {/* <a href="mailto:leandroofelix90@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a> */}
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full px-5">
        <div className="flex items-center md:gap-3 gap-5 mt-5 md:mt-0 sm:mb-20">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop:filter backdrop-blur-lg satured-180 bg-opacity-75 hover:bg-blue-300 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                key={profile.id}
                width={20}
                height={20}
                className="rounded-sm"
              />
            </a>
          ))}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light text-center mt-5 md:text-left">
          Copyright © Leaandro Felix ®
        </p>
      </div>
    </footer>
  );
};

export default Footer;
