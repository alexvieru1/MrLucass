import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="col-span-7 place-self-center mt-20 lg:mt-[250px] "
      id="about"
    >
      <h1 className="text-center mb-4 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl  from-yellow-800 to-white ">
        Despre noi
      </h1>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        Cu o locație invidiată și un termen de finalizare iminent în Iunie 2024,
        ne propunem să vă oferim nu doar un cămin, ci un stil de viață deosebit.
      </p>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        Cu sediul în Constanța, zona Palazu, lângă Elvila, Complexul de
        Apartamente Mr. Lucass se distinge prin designul său modern și
        calitatea construcției.
      </p>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        De la priveliștile spectaculoase la facilitățile oferite,
        suntem dedicați să oferim o experiență de locuire superioară.
      </p>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        Cu predare la cheie și fără loc de parcare inclus, vă invităm să vă
        rezervați un loc în această comunitate exclusivistă, unde fiecare casă
        devine căminul unui stil de viață deosebit.
      </p>
    </div>
  );
};

export default About;
