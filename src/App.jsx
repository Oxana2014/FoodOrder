import { useState } from "react";

import MainHeader from "./components/MainHeader";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";
import Feedback from "./components/Feedback";
import CartContextProvider from "./store/cart-context";
import { useEffect } from "react";
import Error from './util/Error'

function App() {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [appState, setAppState] = useState(null);
  const [errorMessage, setErrorMessage]  = useState(null)

  useEffect(() => {
  async function fetchMeals() {
    try {
      const response = await fetch("http://localhost:3000/meals");
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Can't fetch meals");
      }
      if(response.ok) {
        setAvailableMeals(responseData);
      }
      else {
        handleError("Sorry, can not fetch meals");
      }
      
    } catch (error) {
      setAvailableMeals([])
      handleError(error.message);
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
    setErrorMessage(errorMessage)
    updateAppState("error");
  }
  function resetError() {
    updateAppState(null);
     setErrorMessage(null)
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

      {appState === 'error' && <Error 
       message={errorMessage} onSubmit={resetError}/> } 

    </CartContextProvider>
  );
}

export default App;
