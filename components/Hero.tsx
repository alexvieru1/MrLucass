import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className=" grid grid-cols-1 lg:grid-cols-12 4xs:mx-[-50px] sm:mx-auto">
        <div className="col-span-7 place-self-center">
          <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl  from-yellow-800 to-white " id="hero">
            Complexul de Apartamente Mr. Lucass în Localitatea Constanța
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Cu sediul în Constanța, zona Palazu pe Strada Barbu Catargi,
            Complexul de Apartamente Mr. Lucass se distinge prin designul său
            modern și calitatea construcției. De la priveliștile spectaculoase
            la facilitățile oferite, suntem dedicați să oferim o
            experiență de locuire superioară.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="md:place-self-center">
            <Image
              src="/images/image(4).webp"
              alt="night-view image"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
