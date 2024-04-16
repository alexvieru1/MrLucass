"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className=" grid grid-cols-1 lg:grid-cols-12 4xs:mx-[-50px] sm:mx-auto">
        <motion.div
          className="col-span-7 place-self-center 4xs:mt-6"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <h1
            className="mb-4 text-4xl 4xs:text-center md:text-start lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl  from-yellow-800 to-white "
            id="hero"
          >
            Complexul de Apartamente Mr. Lucass din Constanța
          </h1>
          <p className="text-[#ADB7BE] 4xs:text-center md:text-start text-lg lg:text-xl">
            Cu sediul în Constanța, zona Palazu pe Strada Barbu Catargi,
            Complexul de Apartamente Mr. Lucass se distinge prin designul său
            modern și calitatea construcției. De la priveliștile spectaculoase
            la facilitățile oferite, suntem dedicați să oferim o experiență de
            locuire superioară.
          </p>
        </motion.div>
        <motion.div
          className="col-span-5 place-self-center mt-4"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.7 },
          }}
          viewport={{ once: true }}
        >
          <div className="md:place-self-center">
            <Image
              src="/images/image(4).webp"
              alt="night-view image"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
