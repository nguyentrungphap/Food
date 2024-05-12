import React from "react";
import { Outlet } from "react-router-dom";
import style from "./style.module.scss";
import Navbar from "../../../admin/components/Navbar/index";
import Footer from "../../../admin/components/Footer/index";
function ApplicationLayoutAdmin() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.navbar}>
          <Navbar />
        </div>
        <div className={style.container}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ApplicationLayoutAdmin;
