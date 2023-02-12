import React from "react";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import FormDeposit from "./components/form-deposit";
import FormWithdraw from "./components/form-withdraw";

const App = () => {
  return (
    <div className="font-space">
      <Header />
      <HeroSection />
      <FormDeposit />
      {/* <FormWithdraw /> */}
    </div>
  );
};

export default App;
