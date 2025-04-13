import React, { use } from "react";
import PriceCard from "../PriceCard/PriceCard";
import PricingDaisyCard from "../PricingDaisyCard/PricingDaisyCard";

const PricingOptions = ({ PricingOptionsPromise }) => {
  const pricePlans = use(PricingOptionsPromise);
  //   console.log(PricingOptionsPromise);
  //   console.log(pricePlans);

  return (
    <div>
      <div>
        <h1 className="text-7xl">Get Our Membership</h1>
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
