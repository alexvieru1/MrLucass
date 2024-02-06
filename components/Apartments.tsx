import React from "react";
import Apartment from "./Apartment";

const Apartments = () => {
  const studios = [
    {
      title: "Studio - Vedere Spate",
      image: "/images/ap-10.jpg",
      floor: 4,
      surface: 36.66,
      balcony: 60,
      price: 1650,
      totalPrice: 96489,
    },
  ];
  const oneBedroom = [
    {
      title: "2 Camere - Vedere Laterală",
      image: "/images/ap-1.jpg",
      floor: 1,
      surface: 55,
      balcony: 8.49,
      price: 1650,
      totalPrice: 82500,
    },
    {
      title: "2 Camere - Vedere Laterală",
      image: "/images/ap-4.jpg",
      floor: 2,
      surface: 55,
      balcony: 8.49,
      price: 1650,
      totalPrice: 82500,
    },
  ];
  const twoBedroom = [
    {
      title: "3 Camere - Vedere Spate",
      image: "/images/ap-2.jpg",
      floor: 1,
      surface: 73.1,
      balcony: 5.52,
      price: 1650,
      totalPrice: 109650,
    },
    {
      title: "3 Camere - Vedere Frontală/Stradală",
      image: "/images/ap-3.jpg",
      floor: 1,
      surface: 77.55,
      balcony: 12.02,
      price: 1650,
      totalPrice: 116325,
    },
    {
      title: "3 Camere - Vedere Spate",
      image: "/images/ap-5.jpg",
      floor: 2,
      surface: 73.1,
      balcony: 5.52,
      price: 1650,
      totalPrice: 109650,
    },
    {
      title: "3 Camere - Vedere Frontală/Stradală",
      image: "/images/ap-6.jpg",
      floor: 2,
      surface: 77.55,
      balcony: 12.02,
      price: 1650,
      totalPrice: 116325,
    },
    {
      title: "3 Camere - Vedere Frontală/Stradală",
      image: "/images/ap-9.jpg",
      floor: 3,
      surface: 67.04,
      balcony: 24.82,
      price: 1650,
      totalPrice: 130472,
    },
    {
      title: "3 Camere - Vedere Spate",
      image: "/images/ap-8.jpg",
      floor: 3,
      surface: 60.85,
      balcony: 37.22,
      price: 1650,
      totalPrice: 130178,
    },
    {
      title: "3 Camere - Vedere Frontală/Stradală",
      image: "/images/ap-7.jpg",
      floor: 4,
      surface: 53.96,
      balcony: 50,
      price: 1650,
      totalPrice: 119034,
    },
  ];

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
        {oneBedroom.map((apt, index) => (
          <Apartment
            key={index}
            title={apt.title}
            image={apt.image}
            floor={apt.floor}
            surface={apt.surface}
            balcony={apt.balcony}
            price={apt.price}
            totalPrice={apt.totalPrice}
          />
        ))}
      </div>
      <div className="text-center mt-10 mb-10 text-2xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl  from-yellow-800 to-white">
        <h1>3 Camere</h1>
      </div>
      <div className="container-apartments grid 4xs:mx-[-50px] sm:mx-auto xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
        {twoBedroom.slice(0, 6).map((apt, index) => (
          <Apartment
            key={index}
            title={apt.title}
            image={apt.image}
            floor={apt.floor}
            surface={apt.surface}
            balcony={apt.balcony}
            price={apt.price}
            totalPrice={apt.totalPrice}
          />
        ))}
        {twoBedroom.slice(6).map((apt, index) => (
          <div key={index} className="col-span-full flex justify-center ">
            <Apartment
              title={apt.title}
              image={apt.image}
              floor={apt.floor}
              surface={apt.surface}
              balcony={apt.balcony}
              price={apt.price}
              totalPrice={apt.totalPrice}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-10 mb-10 text-2xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl  from-yellow-800 to-white">
        <h1>Studio</h1>
      </div>
      <div className="container-apartments flex flex-1 justify-center 4xs:mx-[-50px] sm:mx-auto">
        {studios.map((apt, index) => (
          <Apartment
            key={index}
            title={apt.title}
            image={apt.image}
            floor={apt.floor}
            surface={apt.surface}
            balcony={apt.balcony}
            price={apt.price}
            totalPrice={apt.totalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Apartments;
