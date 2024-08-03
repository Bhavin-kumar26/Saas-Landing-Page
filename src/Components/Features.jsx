import React from "react";

import FeaturesBox from "./FeaturesBox";

const Features = () => {
  const features = [
    {
      title: "Integration Ecosystem",
      description:
        `Enhance your productivity by connecting with your tools, keeping your essentials in one place.`,
    },
    {
      title: "Goal Setting and Tracking",
      description:
        "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    },
    {
      title: "Secure Data Encryption",
      description:
        "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    },
  ];
  return (
    <div className=" bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <div className=" flex justify-center items-center flex-col">
          <h2 className=" text-5xl sm:text-6xl font-semibold text-center">
            Everything you need
          </h2>
          <p className=" mt-8 font-light text-white/60 text-center max-w-md">
            Enjoy customizable lists, learn work tools, and smart tracking all
            in one place. Set tasks, get reminders, and see your progress simply
            and quickly
          </p>
        </div>
        <div className=" flex flex-col sm:flex-row gap-5 mt-8 ">
          {features.map((items, index) => (
           <FeaturesBox key={index} title={items.title} desc={items.description}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
