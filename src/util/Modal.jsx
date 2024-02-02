export default function Modal({ children }) {
  return (
    <dialog className="modal" open>
      {children}
    </dialog>
  );
}
