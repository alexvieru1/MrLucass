"use client";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { progressPhotos } from "@/constants/progressPhotos";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Timeline } from "flowbite-react";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";

const Etape = () => {
  const p = progressPhotos;
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1536); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", updateScreenSize);

    updateScreenSize();

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div>
      <Nav />
      <div className="place-content-center">
        <div className="grid grid-cols-1">
          <div className="text-center mt-20 mb-10">
            <h1
              className="mb-8 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl  from-yellow-800 to-white "
              id="etape"
            >
              Etapele construcției
            </h1>
            <p className="text-[#ADB7BE] text-lg lg:text-xl">
              Vă invităm să aruncați o privire asupra etapelor construirii
              complexului Mr. Lucass:
            </p>
          </div>
        </div>
      </div>
      <div className="mx-10 ">
        <Timeline>
          {p.map((ph, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>
                  {ph.etapa} {index + 1}
                </Timeline.Time>
                <Timeline.Title className="text-white">
                  {ph.title}
                </Timeline.Title>
                <Timeline.Body>{ph.description}</Timeline.Body>
                {ph.photos.length > 1 ? (
                  isLargeScreen ? (
                    <div className="h-[300px] 4xs:mr-4 xs:h-[550px] xs:w-[426px] sm:h-[600px] sm:w-[464px] lg:h-[450px] lg:w-[503px] flex flex-row gap-3 mb-5">
                      {ph.photos.map((photo, index) => (
                        <Image
                          src={photo}
                          key={index}
                          width={665}
                          height={859}
                          alt="img"
                          className="4xs:rounded-xl"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="h-[300px] 4xs:mr-4 xs:h-[550px] xs:w-[426px] sm:h-[600px] sm:w-[464px] lg:h-[450px] lg:w-[503px]">
                      <Carousel pauseOnHover slideInterval={5000}>
                        {ph.photos.map((photo, index) => (
                          <Image
                            src={photo}
                            key={index}
                            width={665}
                            height={859}
                            alt="img"
                            className="4xs:rounded-xl"
                          />
                        ))}
                      </Carousel>
                    </div>
                  )
                ) : (
                  <div className="h-[300px] 4xs:mr-4 xs:h-[550px] xs:w-[426px] sm:h-[600px] sm:w-[464px] lg:h-[450px] lg:w-[483px]">
                    {ph.photos.map((photo, index) => (
                      <Image
                        src={photo}
                        key={index}
                        width={665}
                        height={859}
                        alt="img"
                        className="4xs:rounded-xl"
                      />
                    ))}
                  </div>
                )}
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Etape;
