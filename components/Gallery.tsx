"use client";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  const galleryPhotos = [
    { title: "/images/image(2).webp" },
    { title: "/images/image(3).webp" },
    { title: "/images/image(6).webp" },
    { title: "/images/image(1).webp" },
    { title: "/images/image(4).webp" },
    { title: "/images/image(5).webp" },
  ];

  return (
    <div id="gallery">
      <h1 className="text-center mt-10 mb-10 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-800 to-white ">
        Galerie
      </h1>
      <div className="container-images grid mx-auto place-items-center xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
        {galleryPhotos.slice(0, 3).map((photo, index) => (
          <Image
            key={index}
            src={photo.title}
            alt="image"
            width={400}
            height={400}
            className="rounded-2xl mb-8 hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        ))}
      </div>
      <div className="container-images grid mt-10 mx-auto place-items-center xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
        {galleryPhotos.slice(3).map((photo, index) => (
          <Image
            key={index}
            src={photo.title}
            alt="image"
            width={400}
            height={400}
            className="rounded-2xl mb-8 hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
