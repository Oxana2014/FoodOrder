import Modal from "../util/Modal";

export default function Feedback({onSubmit}) {
  return (
    <Modal declineBtn={null} submitBtn="Okay" submitFn={onSubmit} >
      <div >
        <h3>Success!</h3>
        <p>Your order was submitted successfully</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>
      </div>
 </Modal>
  );
}
