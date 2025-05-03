import React from "react";
import Image from "next/image";

interface ApartmentProps {
  title: string;
  image: string;
  floor: number;
  surface: number;
  balcony: number;
  price: number;
  totalPrice: number;
  sold: boolean;
}

const Apartment: React.FC<ApartmentProps> = ({
  title,
  image,
  floor,
  surface,
  balcony,
  price,
  totalPrice,
  sold,
}) => {
  return (
    <div className="relative mb-10 xl:mr-10 max-w-[400px] block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-110 transition-transform duration-300 ease-in-out">
      {/* Sold badge */}
      {sold && (
        <div className="absolute top-2 right-2 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
          Vândut
        </div>
      )}

      <Image
        className={`rounded-t-lg ${sold ? "opacity-60" : ""}`}
        src={image}
        alt={title}
        width={400}
        height={400}
      />
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
          <span className="font-medium">Suprafață utilă:</span> {surface} m²{" "}
          {balcony < 20
            ? `(${balcony} m² balcon inclus)`
            : `+ ${balcony} m² terasă`}
        </p>
        <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
          <span className="font-medium">Etaj:</span> {floor}
        </p>
        {!sold && (
          <p className="mb-0 text-base text-neutral-600 dark:text-neutral-200">
            <span className="font-medium">Preț final:</span>{" "}
            {totalPrice.toLocaleString()} € + TVA
          </p>
        )}
      </div>
    </div>
  );
};

export default Apartment;
