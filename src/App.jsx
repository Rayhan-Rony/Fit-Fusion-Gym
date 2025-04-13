import { Suspense } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import NavDaisy from "./components/NavDaisy/NavDaisy";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import Banner from "./components/Banner/Banner";
import DetailsChart from "./components/DetailsChart/DetailsChart";
import axios from "axios";
import Footer from "./components/Footer/Footer";

function App() {
  const PricingOptionsPromise = fetch("pricing.json").then((res) => res.json());
  const chartData = axios.get("chartData.json");
  return (
    <>
      <header className="bg-[url(https://i.ibb.co/4ZhHyp1c/2.png)]  lg:bg-top-left bg-center  h-screen">
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
        <Suspense
          fallback={<span className="loading loading-bars loading-sm"></span>}
        >
          <DetailsChart chartData={chartData}></DetailsChart>
        </Suspense>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
