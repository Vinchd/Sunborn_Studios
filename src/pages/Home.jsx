import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  AOS.init({ duration: 2000 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Parallax
        strength={200}
        blur={4}
        bgImage="./assets/img/banner_image.jpg"
        bgImageAlt="studios entry"
        className="h-[calc(100vh-110px)] flex items-center"
        bgImageStyle={{
          height: "100vh",
          objectFit: "cover",
          objectPosition: "bottom",
        }}
      >
        <div className="md:w-[50%] max-md:px-5 md:translate-x-16 flex flex-col justify-center gap-6">
          <h2 className="text-3xl">
            Slow down in <br />
            Ahangama
          </h2>
          <div className="text-sm leading-loose">
            Nested in the heart of Ahangama, Sri Lanka, SUNBORN STUDIOS will
            feature two bright and open rooms just 2 minutes away from Sri
            Lanka’s stunning coastline and vibrant surf spots.
          </div>
        </div>
      </Parallax>
      <Link
        to="home-content"
        smooth={true}
        duration={2000}
        className="scroll-arrow"
      />
      <div className="flex justify-center overflow-hidden lg:px-12 bg-quaternary">
        <div
          id="homegrid"
          className="p-3 mx-3 mt-24 mb-8 md:mx-8 rounded-2xl bg-primary"
        >
          <div>
            <div className="flex h-full overflow-hidden rounded-tl-2xl">
              <img
                className="object-cover w-full h-[90%] rounded-sm rounded-tl-2xl max-md:rounded-t-2xl"
                data-aos="fade-right"
                src="./assets/img/west_room.jpg"
                alt="west room"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              className="flex flex-col w-5/6 gap-3 h-fit"
              data-aos="fade-left"
            >
              <h3>East and West</h3>
              <p className="text-sm leading-relaxed font-ralewaylight">
                Discover our rooms with adjoining bathroom and shared kitchen
                favoring an intimate and natural design.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              className="flex flex-col w-5/6 gap-3 h-fit"
              data-aos={isMobile ? "fade-left" : "fade-right"}
            >
              <h3>Private Terrace</h3>
              <p className="text-sm leading-relaxed font-ralewaylight">
                Opening on a private wooden terrace amid a tropical garden, our
                studios are filled with natural light from morning until night,
                creating a gentle, calming and intimate space that invites you
                to slow down.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center h-full overflow-hidden">
              <img
                className="object-cover w-full h-[90%] rounded-sm"
                data-aos={isMobile ? "fade-right" : "fade-left"}
                src="./assets/img/terrace.jpeg"
                alt="terrace"
              />
            </div>
          </div>
          <div>
            <div className="flex items-end h-full overflow-hidden md:rounded-bl-2xl">
              <img
                className="object-cover w-full h-[90%] rounded-sm md:rounded-bl-2xl"
                data-aos="fade-right"
                src="./assets/img/sunborn_east.jpeg"
                alt="terrace"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              className="flex flex-col w-5/6 gap-3 h-fit"
              data-aos="fade-left"
            >
              <h3>Fineness of Sri Lankan Crafts</h3>
              <p className="text-sm leading-relaxed font-ralewaylight">
                The room features a queen size bed, a large desk and a private
                bathroom with hot water. The studio has access to a fully
                equipped kitchen, including a large fridge and all the necessary
                ustensiles to prepare your favorite meal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
