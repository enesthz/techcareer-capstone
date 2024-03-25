import { useEffect, useRef } from "react";
import styles from "../css/menu-selector.module.css";

function MenuSelector() {
  const menuSelectorRef = useRef(null);

  useEffect(function () {
    if (
      menuSelectorRef.current.scrollWidth <= menuSelectorRef.current.offsetWidth
    ) {
      document
        .querySelector("." + styles["selector-button-next"])
        .classList.add(styles["hide"]);
    }
  }, []);

  function handleClickNext(event) {
    menuSelectorRef.current.scrollLeft += menuSelectorRef.current.offsetWidth;
    if (
      menuSelectorRef.current.scrollLeft +
        menuSelectorRef.current.offsetWidth >=
      menuSelectorRef.current.scrollWidth
    ) {
      document
        .querySelector("." + styles["selector-button-next"])
        .classList.add(styles["hide"]);
    }

    document
      .querySelector("." + styles["selector-button-prev"])
      .classList.remove(styles["hide"]);
  }

  function handleClickPrev(event) {
    menuSelectorRef.current.scrollLeft -= menuSelectorRef.current.offsetWidth;
    if (menuSelectorRef.current.scrollLeft <= 0) {
      document
        .querySelector("." + styles["selector-button-prev"])
        .classList.add(styles["hide"]);
    }

    document
      .querySelector("." + styles["selector-button-next"])
      .classList.remove(styles["hide"]);
  }

  function handleClickMenuItem(event) {
    let selectedMenu = event.target;
    let previousSelectedMenu = menuSelectorRef.current.querySelector(
      "." + styles["selected-menu"]
    );

    if (previousSelectedMenu) {
      previousSelectedMenu.classList.remove(styles["selected-menu"]);
    }
    selectedMenu.classList.add(styles["selected-menu"]);
  }

  return (
    <div className="position-relative">
      <div
        ref={menuSelectorRef}
        className={styles["menu-selector-main"] + " container-fluid d-flex"}
      >
        <a
          href="#populer"
          onClick={handleClickMenuItem}
          className={styles["menu-item"] + " text-decoration-none text-black"}
        >
          Popüler (6)
        </a>
        <a
          href="#coca-cola-1"
          onClick={handleClickMenuItem}
          className={styles["menu-item"] + " text-decoration-none text-black"}
        >
          Coca-Cola Fırsat Menüleri (1)
        </a>
        <a
          href="#coca-cola-2"
          onClick={handleClickMenuItem}
          className={styles["menu-item"] + " text-decoration-none text-black"}
        >
          Coca-Cola Hesaplı Menüler (2)
        </a>
        <a
          href="#yemeksepeti"
          onClick={handleClickMenuItem}
          className={styles["menu-item"] + " text-decoration-none text-black"}
        >
          Yemek Sepeti Özel Fiyat (1)
        </a>
        <a
          href="#iftar"
          onClick={handleClickMenuItem}
          className={styles["menu-item"] + " text-decoration-none text-black"}
        >
          İftar Menüleri (1)
        </a>
        <a
          href="#kova"
          onClick={handleClickMenuItem}
          className={styles["menu-item"] + " text-decoration-none text-black"}
        >
          Kova Menüleri (1)
        </a>
        <a
          href="#mekonomik"
          onClick={handleClickMenuItem}
          className={styles["menu-item"] + " text-decoration-none text-black"}
        >
          Mekonomik Menüler (2)
        </a>
      </div>
      <div
        className={
          styles["selector-button-next"] + " d-flex align-items-center"
        }
      >
        <div onClick={handleClickNext} className={"rounded-circle border p-1"}>
          <svg
            fill="#ea004b"
            className="button"
            aria-hidden="true"
            focusable="false"
            class="fl-none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.44365 5.46971C8.70989 5.20343 9.12655 5.17918 9.42018 5.39702L9.5043 5.46963L15.7071 11.6714C15.8629 11.8272 15.8634 12.0796 15.7081 12.236L9.46248 18.5284C9.17067 18.8223 8.6958 18.8241 8.40182 18.5323C8.13457 18.267 8.10881 17.8505 8.32557 17.556L8.39788 17.4716L13.5895 12.2398C13.7447 12.0835 13.7442 11.831 13.5884 11.6752L8.44373 6.53037C8.17744 6.26413 8.1532 5.84747 8.37103 5.55384L8.44365 5.46971Z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={
          styles["selector-button-prev"] +
          " " +
          styles["hide"] +
          " d-flex align-items-center"
        }
      >
        <div onClick={handleClickPrev} className={"rounded-circle border p-1"}>
          <svg
            fill="#ea004b"
            aria-hidden="true"
            focusable="false"
            class="fl-none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5565 5.46971C15.2903 5.20343 14.8736 5.17918 14.58 5.39702L14.4959 5.46963L8.29311 11.6714C8.13729 11.8272 8.13681 12.0796 8.29204 12.236L14.5377 18.5284C14.8295 18.8223 15.3044 18.8241 15.5984 18.5323C15.8656 18.267 15.8914 17.8505 15.6746 17.556L15.6023 17.4716L10.4107 12.2398C10.2555 12.0835 10.256 11.831 10.4118 11.6752L15.5565 6.53037C15.8227 6.26413 15.847 5.84747 15.6291 5.55384L15.5565 5.46971Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MenuSelector;
