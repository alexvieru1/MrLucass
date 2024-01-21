import { AtSymbolIcon, MapIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";

const Contact = () => {
  return (
    <div className="container">
    <div
      className="mt-20 text-center mb-4 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl  from-yellow-800 to-white"
      id="contact"
    >
      <h1>Contact</h1>
    </div>
    <div className="grid grid-cols-1">
      <h1 className="text-xl text-center text-[#ADB7BE]">
        Ești interesat să discutăm mai multe detalii sau să răspundem la întrebările tale?
      </h1>
      <h1 className="text-[#ADB7BE] text-lg text-center">
        Sună-ne sau trimite-ne un email și vom reveni la tine cât mai curând posibil.
      </h1>
      <div className="p-6 text-center select-text">
        <div className="flex items-center justify-center mb-1 text-base">
          <PhoneIcon className="h-5 w-5 mr-2" />
          (0741) 274 273
        </div>
        <div className="flex items-center justify-center mb-1 text-base">
          <PhoneIcon className="h-5 w-5 mr-2" />
          (0754) 439 439
        </div>
        <div className="flex items-center justify-center mb-1 text-base">
          <AtSymbolIcon className="h-5 w-5 mr-2" />
          daniella1961@yahoo.com
        </div>
        <div className="flex items-center justify-center text-base">
          <MapPinIcon className="h-5 w-5 mr-2" />
          Str. Barbu Catargi, Nr. 18C, Palazu Mare, Constanța
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1">
      <div className="rounded-lg overflow-hidden mb-10">
        <iframe
          title="Google Map"
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Str.%20Barbu%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Catargi,%20Nr.18C,%20Palazu%20Mare,%20Constanța+(Mister%20Lucass)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  </div>
  );
};

export default Contact;
