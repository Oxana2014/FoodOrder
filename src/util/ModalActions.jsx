import Button from "./Button"

export default function ModalActions({declineBtn, submitBtn}) {
    return  <div className="modal-actions">
  {declineBtn && <button className="text-button">{declineBtn}</button>}
    <Button onClick={() => handleAddToCart(MEAL)}>{submitBtn}</Button>
  </div>
}