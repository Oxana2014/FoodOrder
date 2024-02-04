import { useState } from "react";

import MainHeader from "./components/MainHeader";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";
import Feedback from "./components/Feedback";
import Modal from "./util/Modal";
import DUMMY_MEALS from "./util/dummyMeals";
import CartContextProvider, { CartContext } from "./store/cart-context";
import { useContext } from "react";
import { useEffect } from "react";

function App() {
  const [availableMeals, setAvailableMeals] = useState(DUMMY_MEALS);
  const [appState, setAppState] = useState(null);

  function updateAppState(newState) {
    console.log("updateAppState(): ", newState);
    setAppState(newState);
  }

  return (
    <CartContextProvider>
      <MainHeader openCart={() => updateAppState("cart")} />
      {availableMeals.length === 0 && <p>Sorry, Meals are not available now</p>}
      {availableMeals.length !== 0 && <Meals meals={availableMeals} />}

      {appState === "cart" && (
        <Cart
          closeCart={() => {
            updateAppState(null);
          }}
          submitCart={() => {
            updateAppState("order");
          }}
        />
      )}
      {appState === "feedback" && <Feedback />}

      {appState === "order" && <OrderForm />}
    </CartContextProvider>
  );
}

export default App;
