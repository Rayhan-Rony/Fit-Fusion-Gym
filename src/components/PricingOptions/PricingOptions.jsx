import React, { use } from "react";
import PriceCard from "../PriceCard/PriceCard";
import PricingDaisyCard from "../PricingDaisyCard/PricingDaisyCard";

const PricingOptions = ({ PricingOptionsPromise }) => {
  const pricePlans = use(PricingOptionsPromise);
  //   console.log(PricingOptionsPromise);
  //   console.log(pricePlans);

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="lg:mt-28 md:mt-24 mt-12">
        <h1 className="lg:text-7xl md:text-6xl text-4xl lg:text-center mb-12">
          Get Our Membership
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {/* {pricePlans.map((pricePlan) => (
            <PriceCard key={pricePlan.id} pricePlan={pricePlan}></PriceCard>
          ))} */}
          {pricePlans.map((pricePlan) => (
            <PricingDaisyCard
              key={pricePlan.id}
              pricePlan={pricePlan}
            ></PricingDaisyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingOptions;
