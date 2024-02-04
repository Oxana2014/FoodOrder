import Modal from "../util/Modal";

export default function OrderForm({
  closeOrder,
  onErrorAfterSubmit,
  submitOrder,
}) {
  function onSubmit() {
    console.log("Send http request");
    console.log("Receive response");
    //if (!responce.ok)
    // throw error
   // onErrorAfterSubmit("An error occured");
    //else
    submitOrder();
  }

  return (
    <Modal
      declineBtn="Close"
      submitBtn="Submit Order"
      closeFn={closeOrder}
      submitFn={onSubmit}
    >
      <form>
        <h3>Checkout</h3>
        <p>TotalAmount $100</p>
        <div className="control">
          <label>Full Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="control">
          <label>E_Mail Address</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="control">
          <label>Street</label>
          <input type="text" id="street" name="street" />
        </div>
        <div className="control-row">
          <div className="control">
            <label>Postal Code</label>
            <input type="text" id="postal-code" name="postal-code" />
          </div>
          <div className="control">
            <label>City</label>
            <input type="text" id="city" name="city" />
          </div>
        </div>
      </form>
    </Modal>
  );
}
