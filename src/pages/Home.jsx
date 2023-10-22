import { Parallax } from "react-parallax";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Parallax
        strength={200}
        blur={3}
        bgImage="./assets/img/banner_image.jpg"
        bgImageAlt="studios entry"
        className="h-[calc(100vh-110px)]"
        bgImageStyle={{
          height: "100vh",
          objectFit: "cover",
          objectPosition: "bottom",
        }}
      >
        <div className="w-[50%] translate-y-56 translate-x-16 flex flex-col gap-6">
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
      <Link to="toto" smooth={true} duration={2000} className="scroll-arrow" />
      <div id="toto" className="flex justify-center bg-primary">
        <div className="p-3 mx-8 mt-24 homegrid rounded-2xl bg-quaternary">
          <div>
            <div className="h-[320px] overflow-hidden flex">
              <img
                className="object-cover w-full h-[90%] rounded-sm rounded-tl-2xl"
                src="./assets/img/west_room.jpg"
                alt="west room"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col w-5/6 gap-3 h-fit">
              <h3>East and West</h3>
              <p className="text-sm leading-relaxed font-ralewaylight">
                Discover our rooms with adjoining bathroom and shared kitchen
                favoring an intimate and natural design.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col w-5/6 gap-3 h-fit">
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
            <div className="h-[320px] overflow-hidden flex items-center">
              <img
                className="object-cover w-full h-[90%] rounded-sm"
                src="./assets/img/terrace.jpeg"
                alt="terrace"
              />
            </div>
          </div>
          <div>
            <div className="h-[320px] overflow-hidden flex items-end">
              <img
                className="object-cover w-full h-[90%] rounded-sm rounded-bl-2xl"
                src="./assets/img/sunborn_east.jpeg"
                alt="terrace"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col w-5/6 gap-3 h-fit">
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
