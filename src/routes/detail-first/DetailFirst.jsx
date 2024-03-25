import React from "react";
import Header from "../shared-components/Header";
import FirstSection from "./components/FirstSection";
import Brands from "./components/Brands";
import { Link } from "react-router-dom";
import styles from "./css/detail-first.module.css";

function detailFirst() {
  return (
    <>
      <Header></Header>
      <FirstSection />
      <div className="d-flex align-items-center px-5 mt-4 gap-2">
        <Link
          to={"/"}
          className="fw-semibold  d-block text-primary text-decoration-none border-"
        >
          <span
            className={
              styles["link"] + " border-bottom border-2 border-primary"
            }
          >
            Anasayfa
          </span>
        </Link>
        <span className="fw-semibold">{">"}</span>
        <span className="fw-semibold">İstanbul</span>
      </div>
      <p className="px-5 m-0 mt-4 fs-2">Tüm Restoranlar</p>
      <div className="container-fluid px-5 mt-4 mb-4">
        <div className="row g-3">
          <div className="col-12 col-lg-6 col-xl-4">
            <Brands></Brands>
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <Brands></Brands>
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <Brands></Brands>
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <Brands></Brands>
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <Brands></Brands>
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <Brands></Brands>
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <Brands></Brands>
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <Brands></Brands>
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <Brands></Brands>
          </div>
        </div>
      </div>
    </>
  );
}

export default detailFirst;
