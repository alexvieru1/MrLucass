import React from "react";
import Apartment from "./Apartment";
import { studios } from "@/constants/studios";
import { oneBedroom } from "@/constants/oneBedroom";
import { twoBedroom } from "@/constants/twoBedroom";

const Apartments = () => {
  const s = studios;
  const one = oneBedroom;
  const two = twoBedroom;

  return (
    <div className="container flex flex-col">
      <div
        className="mt-20 text-center mb-4 text-4xl lg:text-6xl 4xs:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl  from-yellow-800 to-white"
        id="apartments"
      >
        <h1>Apartamente</h1>
      </div>
      <div className="text-center mt-10 mb-10 text-2xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl  from-yellow-800 to-white">
        <h1>2 Camere</h1>
      </div>
      <div className="container-apartments grid 4xs:mx-[-50px] sm:mx-auto xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
        {one.map((apt, index) => (
          <Apartment
            key={index}
            title={apt.title}
            image={apt.image}
            floor={apt.floor}
            surface={apt.surface}
            balcony={apt.balcony}
            price={apt.price}
            totalPrice={apt.totalPrice}
            sold={apt.sold}
          />
        ))}
      </div>
      <div className="text-center mt-10 mb-10 text-2xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl  from-yellow-800 to-white">
        <h1>3 Camere</h1>
      </div>
      <div className="container-apartments grid 4xs:mx-[-50px] sm:mx-auto xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
        {two.slice(0, 6).map((apt, index) => (
          <Apartment
            key={index}
            title={apt.title}
            image={apt.image}
            floor={apt.floor}
            surface={apt.surface}
            balcony={apt.balcony}
            price={apt.price}
            totalPrice={apt.totalPrice}
            sold={apt.sold}
          />
        ))}
        {two.slice(6).map((apt, index) => (
          <div key={index} className="col-span-full flex justify-center ">
            <Apartment
              title={apt.title}
              image={apt.image}
              floor={apt.floor}
              surface={apt.surface}
              balcony={apt.balcony}
              price={apt.price}
              totalPrice={apt.totalPrice}
              sold={apt.sold}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-10 mb-10 text-2xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl  from-yellow-800 to-white">
        <h1>Studio</h1>
      </div>
      <div className="container-apartments flex flex-1 justify-center 4xs:mx-[-50px] sm:mx-auto">
        {s.map((apt, index) => (
          <Apartment
            key={index}
            title={apt.title}
            image={apt.image}
            floor={apt.floor}
            surface={apt.surface}
            balcony={apt.balcony}
            price={apt.price}
            totalPrice={apt.totalPrice}
            sold={apt.sold}
          />
        ))}
      </div>
    </div>
  );
};

export default Apartments;
