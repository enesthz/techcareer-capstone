import React from "react";
import Brands from "./Brands";
import styles from "../css/third-section.module.css";

function ThirdSection() {
  return (
    <div className={"container-fluid " + styles["third-section-main"]}>
      <p className="fs-2 my-4">Tüm Restoranlar</p>
      <div className="row g-0 gx-3 gy-3">
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Brands />
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
