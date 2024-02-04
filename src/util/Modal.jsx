import { useRef, useEffect } from "react";

import Button from "./Button";

function Modal({ children, declineBtn, submitBtn, submitFn, closeFn, submitDisabled }) {
const dialog = useRef()

useEffect(() => {if(dialog.current) dialog.current.showModal()},[])
 
function handleSubmit() {
  submitFn()
}

function handleClose() {
  dialog.current.close()
closeFn()
}
  return (
    <dialog ref={dialog} onClose={handleClose} className="modal">
      {children}
      <div className="modal-actions">
  {declineBtn && <button onClick={handleClose} className="text-button">{declineBtn}</button>}
    <Button onClick={handleSubmit} disabled={submitDisabled}>{submitBtn}</Button>
  </div>
    </dialog>
  );
}
export default Modal