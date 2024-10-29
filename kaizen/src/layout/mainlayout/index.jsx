import React from "react";
import Header from "../../components/Header"; 
import Footer from "../../components/Footer"; 

const MainLayout = (props) => {
  return (
    <div className="text-white container max-w-[1360px] mx-auto flex flex-col h-screen">
      <Header />
      <div className="flex-grow">{props?.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
