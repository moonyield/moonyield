import React from "react";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import FormWithdraw from "./components/form-withdraw";
import Notification from "./components/NotificationBanner";

const App = () => {
  return (
    <div className="font-space">
      <Header />
      <HeroSection />
      <FormWithdraw />
      <Notification />
    </div>
  );
};

export default App;
