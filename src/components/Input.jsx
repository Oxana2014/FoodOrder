export default function Input({ label, type, id, changeFn, ...props }) {
  function changeHandler(event) {
    console.log("event.target.value: ",event.target.value)
    changeFn(id, event.target.value);
  }
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={changeHandler} {...props} required />
    </p>
  );
}
