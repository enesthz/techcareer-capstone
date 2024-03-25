import { createContext, useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailFirst from "./routes/detail-first/DetailFirst";
import MainRoute from "./routes/main-route/MainRoute";
import DetailSecond from "./routes/detail-second/DetailSecond";

function cartReducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "add-to-cart": {
      return state.concat([
        {
          id: action.payload.id,
          image: action.payload.image,
          price: action.payload.price,
          quantity: 1,
          name: action.payload.name,
        },
      ]);
    }
    case "remove-from-cart": {
      return state.filter((element) => element.id !== action.payload.id);
    }
    case "increment-quantity": {
      return state.map((element) => {
        if (element.id === action.payload.id) {
          element.quantity = element.quantity + 1;
        }
        return element;
      });
    }
    // eslint-disable-next-line no-fallthrough
    case "decrement-quantity": {
      return state.map((element) => {
        if (element.id === action.payload.id) {
          element.quantity = element.quantity - 1;
        }
        return element;
      });
    }
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
  },
  {
    path: "/detail-first",
    element: <DetailFirst />,
  },
  {
    path: "/detail-second",
    element: <DetailSecond />,
  },
]);

export const CartStoreContext = createContext(null);

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  return (
    <CartStoreContext.Provider value={{ cartState, cartDispatch }}>
      <RouterProvider router={router} />
    </CartStoreContext.Provider>
  );
}

export default App;
