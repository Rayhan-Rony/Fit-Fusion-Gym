import React from "react";
import PriceCardFeature from "./PriceCardFeature";

const PriceCard = ({ pricePlan }) => {
  const { name, price, description, features, id } = pricePlan;
  console.log(pricePlan);
  return (
    <div className="bg-amber-300 p-6 rounded flex flex-col ">
      {/* card Header  */}
      <div>
        <h2 className="text-5xl ">{name}</h2>
        <h4 className="text-3xl">{price}</h4>
      </div>
      {/* card body */}
      <div className="flex-1">
        <p>{description}</p>
        <div>
          {features.map((feature, index) => (
            <PriceCardFeature key={index} feature={feature}></PriceCardFeature>
          ))}
        </div>
      </div>
      <button className="btn w-full">Subscribe Now</button>
    </div>
  );
};

export default PriceCard;
