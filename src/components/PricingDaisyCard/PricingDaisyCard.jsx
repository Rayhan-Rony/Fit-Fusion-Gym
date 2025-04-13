import React from "react";

const PricingDaisyCard = ({ pricePlan }) => {
  const { name, price, features, popular, description } = pricePlan;

  return (
    <>
      <div className="flex flex-col ">
        <div className="lg:card lg:w-96 md:card md:w-96 bg-base-400 shadow-sm flex-1 ">
          <div className="card-body ">
            {popular && (
              <span className="badge badge-xs bg-orange-500">Most Popular</span>
            )}
            <div className="flex justify-between  ">
              <h2 className="text-3xl font-bold">{name}</h2>
              <span className="text-xl">{price}</span>
            </div>
            <div>
              <p>{description}</p>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-xs ">
              {features.map((feature, index) => (
                <li className="" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 ">
            <button className="btn bg-orange-500 btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingDaisyCard;
