import React from "react";
import styles from "../css/first-section.module.css";

function FirstSection() {
  return (
    <div
      className={
        styles["first-section-main"] +
        " container-fluid row g-0 overflow-hidden"
      }
    >
      <div className="col-7 h-100 fs-1 d-flex align-items-center ps-5">
        İstanbul Online Yemek Siparişi
      </div>
      <div className="col-5 h-100">
        <img
          src={process.env.PUBLIC_URL + "images/first-section.webp"}
          alt=""
        />
      </div>
    </div>
  );
}

export default FirstSection;
