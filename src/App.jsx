import { Suspense } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import NavDaisy from "./components/NavDaisy/NavDaisy";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import Banner from "./components/Banner/Banner";

function App() {
  const PricingOptionsPromise = fetch("pricing.json").then((res) => res.json());
  return (
    <>
      <header className="bg-[url(https://i.ibb.co/4ZhHyp1c/2.png)] bg-top-left h-screen">
        <Nav></Nav>
        <Banner></Banner>

        {/* <NavDaisy></NavDaisy> */}
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-bars loading-sm"></span>}
        >
          <PricingOptions
            PricingOptionsPromise={PricingOptionsPromise}
          ></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
