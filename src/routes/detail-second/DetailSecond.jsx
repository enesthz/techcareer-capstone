import React from "react";
import Header from "../shared-components/Header";
import FirstSection from "./components/FirstSection";
import { Link } from "react-router-dom";
import styles from "./css/detail-second.module.css";
import MenuSelector from "./components/MenuSelector";
import ProductContainer from "./components/ProductContainer";
import Cart from "./components/Cart";

function detailSecond() {
  return (
    <>
      <Header />
      <div className="d-flex align-items-center px-1 px-sm-4 px-lg-5 mt-4 gap-2">
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
        <Link
          to={"/detail-first"}
          className="fw-semibold  d-block text-primary text-decoration-none border-"
        >
          <span
            className={
              styles["link"] + " border-bottom border-2 border-primary"
            }
          >
            İstanbul
          </span>
        </Link>
        <span className="fw-semibold">{">"}</span>
        <span className="fw-semibold">McDonald's</span>
      </div>
      <FirstSection />
      <div
        className={
          styles["selector-bar"] +
          " d-flex px-0 px-xl-5 my-1 align-items-center gap-1"
        }
      >
        <input
          type="text"
          className="form-control shadow-none rounded-5 ps-4 d-none d-xl-block py-1"
          placeholder="Menüde Ara"
        />
        <div className="w-100">
          <MenuSelector />
        </div>
      </div>
      <div className={styles["product-section"] + " d-flex p-3 w-100 gap-4"}>
        <div className="flex-grow-1 d-flex flex-column gap-3">
          <span id="populer" className="fw-semibold fs-3">
            Popüler
          </span>
          <div className="row g-2">
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
          </div>
          <span id="coca-cola-1" className="fw-semibold fs-3">
            Coca-Cola Fırsat Menüleri
          </span>
          <div className="row g-2">
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
          </div>
          <span id="coca-cola-2" className="fw-semibold fs-3">
            Coca-Cola Hesaplı Menüleri
          </span>
          <div className="row g-2">
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
          </div>
          <span id="yemeksepeti" className="fw-semibold fs-3">
            Yemek Sepeti Özel Fiyat
          </span>
          <div className="row g-2">
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
          </div>
          <span id="iftar" className="fw-semibold fs-3">
            İftar Menüleri
          </span>
          <div className="row g-2">
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
          </div>
          <span id="kova" className="fw-semibold fs-3">
            Kova Menüleri
          </span>
          <div className="row g-2">
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
          </div>
          <span id="mekonomik" className="fw-semibold fs-3">
            Mekonomik Menüler
          </span>
          <div className="row g-2">
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
              <ProductContainer></ProductContainer>
            </div>
          </div>
        </div>
        <div className={"d-none d-lg-block"}>
          <Cart></Cart>
        </div>
      </div>
    </>
  );
}

export default detailSecond;
