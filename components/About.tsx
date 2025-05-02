import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="col-span-7 place-self-center mt-20 lg:mt-[250px] 4xs:mx-[-50px] sm:mx-auto" id="about">
      <h1 className="text-center mb-4 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-800 to-white">
        Despre noi
      </h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <Image src="/images/1234.jpg" width={400} height={400} alt="image" className="rounded-lg"/>
        <div>
          <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
            Cu o locație invidiată și finalizare în iulie 2025, oferim un cămin și un stil de viață deosebit.
          </p>
          <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
            Situat în Constanța, zona Palazu, Complexul de Apartamente Mr. Lucass se remarcă prin design modern și construcție de calitate.
          </p>
          <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
            De la priveliști spectaculoase la facilități, ne dedicăm oferirii unei experiențe de locuire superioare.
          </p>
          <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
            Predare la cheie, fără loc de parcare inclus. Rezervați-vă un loc în această comunitate exclusivistă.
          </p>
          <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
            Locuri de parcare disponibile la 8,000 €, cu 12 locuri supraterane în complex.
          </p>
          <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
            Clădirea are compartimentare cu BCA (CELCO) și tâmplărie Barrier 75 cu feronerie RotoNX și izolare acustică de până la 44dB.
          </p>
          <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
            Dotată cu lift și recepție la intrare de 29mp la parter. Fațadă din placare cu polistiren, lemn și rastel din lemn/metal înierbat.
          </p>
          <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
            Alte beneficii:
          </p>
          <ul className="text-[#ADB7BE] text-lg lg:text-xl text-start">
            <li>• Spațiu verde amenajat</li>
            <li>• Loc de joacă pentru copii</li>
            <li>• Acces rampă persoane cu dizabilități</li>
            <li>• Platformă biciclete în zona accesului la bloc</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
