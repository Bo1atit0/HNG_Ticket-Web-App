import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" bg-bg min-h-screen flex flex-col justify-center items-center mx-auto relative ">
      <div className="bg-accent w-40 h-40 rounded-full absolute top-30 left-20 container mask-x-to-amber-600"></div>
      <div className="flex flex-col gap-10 items-center justify-center text-center container mx-auto backdrop-blur-md bg-black/20 rounded-t-lg h-[60vh]">
        <div className="text-text">
          <h1 className="font-extrabold text-5xl mb-4 text-c1">Tikety</h1>
          <p className="text-xl ">
            Manage your tickets easily -{" "}
            <span className="font-bold">
              create, track, and resolve issues in one place.
            </span>
          </p>
        </div>
        <div className="flex gap-4">
          <Link to="/auth/signup">
            <button
              className="bg-c1 font-semibold min-w-40 px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 
      cursor-pointer scale-95 hover:scale-100 transition-all duration-400 ease-in-out text-bg"
            >
              Get Started
            </button>
          </Link>

          <Link to="/auth/login">
            <button
              className=" font-semibold min-w-40 px-4 py-2.5 rounded-lg flex items-center justify-center gap-2
      cursor-pointer scale-100 hover:scale-95 transition-all duration-400 ease-in-out shadow-xl bg-bg shadow-c1"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="container h-32 bg-accent ">
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
