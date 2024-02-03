import Button from "./Button";

export default function Modal({ children, declineBtn, submitBtn }) {
  return (
    <dialog className="modal" open>
      {children}
      <div className="modal-actions">
  {declineBtn && <button className="text-button">{declineBtn}</button>}
    <Button onClick={() => handleAddToCart(MEAL)}>{submitBtn}</Button>
  </div>
    </dialog>
  );
}
