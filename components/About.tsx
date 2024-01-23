import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="col-span-7 place-self-center mt-20 lg:mt-[250px]" id="about">
      <h1 className="text-center mb-4 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-800 to-white">
        Despre noi
      </h1>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        Cu o locație invidiată și finalizare în iunie 2024, oferim un cămin și un stil de viață deosebit.
      </p>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        Situat în Constanța, zona Palazu, Complexul de Apartamente Mr. Lucass se remarcă prin design modern și construcție de calitate.
      </p>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        De la priveliști spectaculoase la facilități, ne dedicăm oferirii unei experiențe de locuire superioare.
      </p>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        Predare la cheie, fără loc de parcare inclus. Rezervați-vă un loc în această comunitate exclusivistă.
      </p>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        Locuri de parcare disponibile la 7,000 €, cu 12 locuri supraterane în complex.
      </p>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        Clădirea are compartimentare cu BCA (CELCO) și tâmplărie Barrier 75 cu feronerie RotoNX și izolare acustică de până la 44dB.
      </p>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        Dotată cu lift și recepție la intrare de 29mp la parter. Fațadă din placare cu polistiren, lemn și rastel din lemn/metal înierbat.
      </p>
      <p className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        Alte beneficii:
      </p>
      <ul className="text-[#ADB7BE] text-lg lg:text-xl text-center">
        <li>• Spațiu verde amenajat 128.4 m²</li>
        <li>• Loc de joacă pentru copii</li>
        <li>• Acces rampă persoane cu dizabilități</li>
        <li>• Platformă biciclete în zona accesului la bloc</li>
      </ul>
    </div>
  );
};

export default About;
