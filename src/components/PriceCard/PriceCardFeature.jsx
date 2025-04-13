import { CircleCheckBig } from "lucide-react";
import React from "react";

const PriceCardFeature = ({ feature }) => {
  //   console.log(feature);
  return (
    <p className="flex gap-3 mt-5">
      <CircleCheckBig />
      {feature}
    </p>
  );
};

export default PriceCardFeature;
