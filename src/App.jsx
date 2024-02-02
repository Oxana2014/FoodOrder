import MainHeader from "./components/MainHeader";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";
import Feedback from "./components/Feedback";
import Modal from "./util/Modal";

function App() {
  return (
    <>
      {/* <MainHeader /> 
       <Meals /> */}
       <Modal>
        <Cart />
       </Modal>
      
      {/* <OrderForm /> */}
      {/* <Feedback /> */}
    </>
  );
}

export default App;
