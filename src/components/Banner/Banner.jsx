import React from "react";

const Banner = () => {
  return (
    <div className="max-w-11/12 mx-auto flex flex-col justify-center h-10/12  ">
      <h1 className="lg:text-8xl md:text-7xl text-5xl font-bold lg:leading-24 md:leading-20">
        Push Your <br /> Limits
      </h1>
      <p className="lg:text-2xl md:text-2xl text-xl lg:leading-8 mt-2 text-gray-300">
        Achieve your fitness goals,stay happy and healthy with our state-{" "}
        <br className="lg:block md:block hidden" />
        of-the-art facilities and expert trainers
      </p>
      <div className="mt-10 flex gap-6">
        <button className="btn text-xl bg-orange-500 border border-amber-500 font-normal py-6 px-6 hover:bg-neutral">
          Join Now
        </button>
        <button className="btn  btn-outline text-xl font-normal py-6 px-6 hover:bg-orange-500 hover:border-amber-500">
          Book a Trainer
        </button>
      </div>
    </div>
  );
};

export default Banner;
