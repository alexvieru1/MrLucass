import Image from "next/image";
import React from "react";
import { Carousel } from "flowbite-react";

const Gallery = () => {
  const galleryPhotos = [
    { title: "/images/render-1.jpg" },
    { title: "/images/render-2.jpg" },
    { title: "/images/render-3.jpg" },
    { title: "/images/render-4.jpg" },
    { title: "/images/render-5.jpg" },
    { title: "/images/render-6.jpg" },
  ];

  return (
    <div id="gallery" className="4xs:mx-[-50px] sm:mx-auto">
      <h1 className="text-center mt-10 mb-10 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-800 to-white ">
        Galerie
      </h1>
      <div className="h-[400px] mx-auto xs:h-[550px] xs:w-[426px] sm:h-[600px] sm:w-[464px] lg:h-[650px] lg:w-[503px]">
        <Carousel pauseOnHover slideInterval={2000} >
          {galleryPhotos.map((photo, index) => (
            <Image
              src={photo.title}
              key={index}
              width={665}
              height={859}
              alt="img"
              className="4xs:rounded-xl"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
