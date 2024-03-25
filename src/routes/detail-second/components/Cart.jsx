import { useContext } from "react";
import { CartStoreContext } from "../../../App";
import styles from "../css/cart.module.css";
import CartItem from "./CartItem";

function Cart() {
  const { cartState, cartDispatch } = useContext(CartStoreContext);

  const cartItemList = cartState.map((cartItem, index) => {
    return <CartItem data={cartItem} key={index} />;
  });

  function handleDeliveryTypeClick(event) {
    const parentNode = event.target.parentNode;
    const selected = parentNode.querySelector(`.${styles["selected"]}`);
    if (selected !== event.target) {
      event.target.classList.add(styles["selected"]);
      selected.classList.remove(styles["selected"]);
    }
  }

  return (
    <div
      className={
        styles["cart-main"] +
        " border rounded-3 p-2 d-flex flex-column justify-content-between user-select-none"
      }
    >
      <div className="d-flex overflow-hidden rounded-3 user-select-none flex-shrink-0">
        <div
          onClick={handleDeliveryTypeClick}
          className={
            styles["selected"] +
            " rounded-3 w-50 d-flex justify-content-center align-items-center h-100 fw-semibold"
          }
        >
          Restoran
        </div>
        <div
          onClick={handleDeliveryTypeClick}
          className="w-50 d-flex align-items-center justify-content-center fw-semibold rounded-3"
        >
          Gel Al
        </div>
      </div>
      {cartState.length === 0 ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 500 500"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="#E5E5E5"
              d="M414.45 430.76c18.71 0 36.07-9.29 33.88-33.89l-4.8-213.51-.68-83.6c.16-44.52-43.29-39.33-43.29-39.33L90.84 76.83A33.88 33.88 0 0 0 57 110.71l-5.52 295.16a33.875 33.875 0 0 0 9.92 23.963 33.877 33.877 0 0 0 23.96 9.927l329.09-9Z"
            ></path>
            <path
              fill="#D5D5D5"
              d="M250 405.82c56.123 0 101.62-8.207 101.62-18.33 0-10.123-45.497-18.33-101.62-18.33-56.123 0-101.62 8.207-101.62 18.33 0 10.123 45.497 18.33 101.62 18.33Z"
            ></path>
            <path
              fill="#BE0034"
              d="m310.29 305.37 18.23-8.56 10.31 5.35 21.59-9.35 7.33-6.15-17.57-217.61a25.762 25.762 0 0 0-27.46-23.63L155.54 57a25.759 25.759 0 0 0-23.93 27.3l13.6 225.16 12.43-8.79 15.87 3.05 10.72-3.9 18.11 5.95 11.42-8.42 16.36 7 11-9.11 15.63 6.92 14.75-6.64 12.08 8.55 15-9.05 11.71 10.35Z"
            ></path>
            <path
              fill="#FF004A"
              d="M368.55 298.28 350 60.3a19.649 19.649 0 0 0-21-18.07L149.74 54.68a19.659 19.659 0 0 0-18.26 20.74l13 224 16.65-10.73 11.52 7.75 16.6-7.44 10.72 7.8 15.8-6.79 11 5.79 5.67-.4 10.74-6.48 13.57 9.43 16.4-8.46 10.12 8 15.23-9.19 12.69 9.78 17.12-8.39 11.43 6.41 15.3-5.22 13.51 7Z"
            ></path>
            <path
              fill="#FF0085"
              d="m203.151 295.433 12.619-5.423 11 5.79 5.67-.4 10.74-6.48 13.57 9.43 16.4-8.46 10.12 8 15.23-9.19 12.69 9.78 17.12-8.39 11.43 6.41 15.3-5.22 11.634 6.028c-8.134-15.697-18.271-30.593-28.974-44.638-4.56-5.93-5.05-9.3-2.44-15.62 1.798-4.335 3.602-8.668 5.406-13.001 6.279-15.081 12.557-30.161 18.564-45.334L350 60.3a19.649 19.649 0 0 0-21-18.07l-42.31 2.939a40.626 40.626 0 0 0-1.31 5.371 842.568 842.568 0 0 1-82.229 244.893Z"
            ></path>
            <path
              fill="#E90063"
              d="M355.961 136.767 368.55 298.28l-13.51-7-15.3 5.22-11.43-6.41-17.12 8.39-9.983-7.694a842.597 842.597 0 0 0 54.754-154.019Z"
            ></path>
            <path
              fill="#fff"
              d="M163.81 137.41a3.659 3.659 0 0 0 .2 4.15 12.49 12.49 0 0 0 5.27 4.61c2.86 1.27 4.94 1 6.4-2.13 1.74-3.71 3.65-7.36 5.48-11 1.66-3.35 3.33-6.68 5.17-10.37.46 1 3.25 10.59 4.7 15.21a7.06 7.06 0 0 0 1.91 3.11 10.694 10.694 0 0 0 7.78 2.79c3.38-.21 4.24-1.34 3.72-4.23-.19-1-.4-2.09-.68-3.11a88.849 88.849 0 0 0-6.89-17.62 41.007 41.007 0 0 0-4.27-6.43 1.777 1.777 0 0 1-.37-2.13c1.64-4.16 3.33-8.31 4.76-12.55a26.995 26.995 0 0 0 1.5-12 5.194 5.194 0 0 0-2.43-3.85 8.165 8.165 0 0 0-6.79-1.11c-2.11.56-3.89 1.63-4.29 4.15a115.064 115.064 0 0 1-12.51 37.22c-2.91 5.35-5.74 10.2-8.66 15.29ZM271.4 387.33c2.47 7 21.35 8.08 18.64.39-2.47-7-21.34-8.08-18.64-.39ZM213.32 389.18c1.54 4.37 13.32 5 11.63.24-1.54-4.37-13.32-5-11.63-.24Z"
            ></path>
            <path
              fill="#333"
              d="M184.13 377.32c3.91 0 4.85-6.7 3.42-6.74-2.79-.1-7.7 6.76-3.42 6.74ZM315.8 369.44c-3.91-.06-5 6.59-3.55 6.67 2.78.15 7.84-6.61 3.55-6.67ZM247.86 359.11c-.61-3.86-7.35-3.79-7.18-2.37.32 2.77 7.85 6.6 7.18 2.37Z"
            ></path>
            <path
              fill="#fff"
              d="M226.54 340c4.52-1 6.52-12.67 1.56-11.53-4.52 1-6.52 12.66-1.56 11.53Z"
            ></path>
            <path
              fill="#333"
              d="M284.85 330c3.42 1.89 7.51-3.46 6.29-4.2-2.38-1.45-10 2.11-6.29 4.2Z"
            ></path>
          </svg>
          <p className="fw-semibold fs-5 mt-2">
            Sepetiniz şu an boş gözüküyor.
          </p>
          <div className="text-center">
            Yemek, market ve günlük ihtiyaçların için hemen seçeneklere göz at!
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column h-100 py-2 gap-2 overflow-y-scroll">
          <p className="fw-semibold m-0">Ürünleriniz</p>
          {cartItemList}
        </div>
      )}

      <div
        className={
          styles["cart-accept"] +
          " flex-shrink-0 d-flex flex-column justify-content-center border-top"
        }
      >
        <div className="d-flex justify-content-between mb-2">
          <span className="fw-semibold">
            Toplam <span>(KDV Dahil)</span>
          </span>
          <span className="fw-semibold">
            {cartState.length === 0
              ? 0
              : cartState.reduce((accumulator, cartItem) => {
                  return accumulator + cartItem.quantity * cartItem.price;
                }, 0)}{" "}
            TL
          </span>
        </div>
        <button
          disabled={cartState.length === 0}
          className="btn btn-primary w-100 text-white"
        >
          Sepeti Onayla
        </button>
      </div>
    </div>
  );
}

export default Cart;
