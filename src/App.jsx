import { useState } from "react";

import MainHeader from "./components/MainHeader";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";
import Feedback from "./components/Feedback";
import CartContextProvider, { CartContext } from "./store/cart-context";
import { useContext } from "react";
import { useEffect } from "react";

function App() {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [appState, setAppState] = useState(null);

  useEffect(() => {
  async function fetchMeals() {
    try {
      const response = await fetch("http://localhost:3000/meals");
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Can't fetch meals");
      }
      setAvailableMeals(responseData);
    } catch (error) {
      handleError(error);
    }
  }
  fetchMeals()
}, [])

  function updateAppState(newState) {
    console.log("updateAppState(): ", newState);
    setAppState(newState);
  }
  function handleError(errorMessage) {
    console.log("Error: ", errorMessage);
    updateAppState("error");
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
      {appState === "feedback" && (
        <Feedback onSubmit={() => updateAppState(null)} />
      )}

      {appState === "order" && (
        <OrderForm
          closeOrder={() => updateAppState(null)}
          onErrorAfterSubmit={() => handleError(errorMessage)}
          submitOrder={() => updateAppState("feedback")}
        />
      )}

      {/* {appState === 'error' && <Error /> } */}
    </CartContextProvider>
  );
}

export default App;
