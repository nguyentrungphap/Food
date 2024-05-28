import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../app/components/Navbar";
import Footer from "../../../app/components/Footer";

function ApplicationLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default ApplicationLayout;
