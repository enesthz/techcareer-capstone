import { useContext, useId } from "react";
import styles from "../css/product-container.module.css";
import { CartStoreContext } from "../../../App";
import { v4 as uuidv4 } from "uuid";

function ProductContainer() {
  const { cartDispatch } = useContext(CartStoreContext);

  return (
    <>
      <div
        onClick={() =>
          cartDispatch({
            type: "add-to-cart",
            payload: {
              id: uuidv4(),
              image: process.env.PUBLIC_URL + "images/bigmac.jpg",
              price: 220,
              name: "deneme",
            },
          })
        }
        className={
          styles["product-container-main"] +
          " d-flex position-relative p-2 border rounded-3 bg-white"
        }
      >
        <div className="flex-grow-1 d-flex flex-column gap-1">
          <span className="fw-semibold">Big Mac™ Menü</span>
          <span className="text-secondary">
            Big Mac™ + Patates Kızartması (Orta) + Coca-Cola
          </span>
          <span className="fw-semibold">220TL</span>
        </div>
        <div
          className={
            styles["product-image-container"] +
            " rounded-3 bg-white flex-shrink-0 overflow-hidden"
          }
        >
          <img src={process.env.PUBLIC_URL + "images/bigmac.jpg"} alt="" />
        </div>
        <div
          className={
            styles["product-container-button"] + " border p-1 rounded-circle"
          }
        >
          <svg
            fill="#ea004b"
            aria-hidden="true"
            focusable="false"
            class="fl-none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="quantity-stepper-plus-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 5C12.3797 5 12.6935 5.28215 12.7432 5.64823L12.75 5.75V10.85C12.75 11.0709 12.9291 11.25 13.15 11.25H18.25C18.6642 11.25 19 11.5858 19 12C19 12.3797 18.7178 12.6935 18.3518 12.7432L18.25 12.75H13.15C12.9291 12.75 12.75 12.9291 12.75 13.15V18.25C12.75 18.6642 12.4142 19 12 19C11.6203 19 11.3065 18.7178 11.2568 18.3518L11.25 18.25V13.15C11.25 12.9291 11.0709 12.75 10.85 12.75H5.75C5.33579 12.75 5 12.4142 5 12C5 11.6203 5.28215 11.3065 5.64823 11.2568L5.75 11.25H10.85C11.0709 11.25 11.25 11.0709 11.25 10.85V5.75C11.25 5.33579 11.5858 5 12 5Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default ProductContainer;
