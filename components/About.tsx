import React from "react";
import Image from "next/image";

const About = () => {
  return (
<div
  className="col-span-7 place-self-center mt-20 lg:mt-[250px]"
  id="about"
>
  <h1 className="text-center mb-4 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-800 to-white">
    Despre noi
  </h1>
  <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
    Cu o locație invidiată și un termen de finalizare iminent în iunie 2024,
    ne propunem să vă oferim nu doar un cămin, ci un stil de viață deosebit.
  </p>
  <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
    Cu sediul în Constanța, zona Palazu, lângă Elvila, Complexul de Apartamente
    Mr. Lucass se distinge prin designul său modern și calitatea construcției.
  </p>
  <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
    De la priveliștile spectaculoase la facilitățile oferite, suntem dedicați
    să oferim o experiență de locuire superioară.
  </p>
  <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
    Cu predare la cheie și fără loc de parcare inclus, vă invităm să vă
    rezervați un loc în această comunitate exclusivistă, unde fiecare casă devine
    căminul unui stil de viață deosebit.
  </p>
  <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
    Locurile de parcare din incinta complexului sunt disponibile la prețul de
    7,000 €, complexul dispunând de 12 locuri de parcare supraterane.
  </p>
  <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
    De asemenea, clădirea are în componență la nivel de compartimentare
    configurație cu BCA (CELCO) atât la pereții exteriori, cât și la cei
    interiori.
  </p>
  <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
    Are montată tâmplărie Barrier 75 echipată cu feronerie RotoNX și trei foi de
    sticlă, asigurând un coeficient acustic de până la 44dB, oferind astfel
    izolare de înaltă calitate.
  </p>
  <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
    Este dotat cu un lift, iar la parter este proiectată o recepție de 29mp la
    intrare.
  </p>
  <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
    Prezintă o fațadă care este alcătuită din placare cu polistiren, lemn și
    rastel din lemn/metal înierbat.
  </p>
  <p className="text-[#ADB7BE] text-lg lg:text-xl text-start">
    Alte beneficii ale imobilului:
  </p>
  <ul className="text-[#ADB7BE] text-lg lg:text-xl text-start list-disc">
    <li>spațiu verde amenajat 116mp</li>
    <li>loc de joacă pentru copii</li>
    <li>acces rampă persoane cu dizabilități</li>
    <li>platformă biciclete zonă acces bloc</li>
  </ul>
</div>

  );
};

export default About;
