import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import SuccessMetrics from "./components/successMetrics";
function page() {
  return (
    <div className="bg-white">
      <div
        className="bg-blue-500 pb-12  bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        }}
      >
        <Header />
        <Home />
      </div>
      <About />
      <Services />
      <SuccessMetrics />
      <Contact />
    </div>
  );
}
export default page;
