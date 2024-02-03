import { useRef, useEffect } from "react";

import Button from "./Button";

export default function Modal({ children, declineBtn, submitBtn }) {
const dialog = useRef()

useEffect(() => {if(dialog.current) dialog.current.showModal()})
// 

function handleClose() {
  dialog.current.close()
}
  return (
    <dialog ref={dialog} className="modal">
      {children}
      <div className="modal-actions">
  {declineBtn && <button onClick={handleClose} className="text-button">{declineBtn}</button>}
    <Button onClick={() => handleAddToCart(MEAL)}>{submitBtn}</Button>
  </div>
    </dialog>
  );
}
