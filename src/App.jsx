import {useState} from 'react'

import MainHeader from "./components/MainHeader";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";
import Feedback from "./components/Feedback";
import Modal from "./util/Modal";
import DUMMY_MEALS from './util/dummyMeals'


function App() {
  const [availableMeals, setAvailableMeals] = useState(DUMMY_MEALS)

  return (
    <>
      <MainHeader /> 
      {availableMeals.length === 0 && <p>Sorry, Meals are not available now</p>}
      {availableMeals.length !== 0 && <Meals meals={availableMeals}/>}
      
    
        <Cart />
    {/* <Feedback /> */}
      
      {/* <OrderForm /> */}
  
    </>
  );
}

export default App;
