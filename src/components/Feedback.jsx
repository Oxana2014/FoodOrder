import ModalActions from "../util/ModalActions";

export default function Feedback() {
  return (
  
      <div >
        <h3>Success!</h3>
        <p>Your order was submitted successfully</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>
<ModalActions declineBtn={null} submitBtn="Okay" />
        {/* <div className="modal-actions">
          <button>Okay</button>
        </div> */}
      </div>
 
  );
}
