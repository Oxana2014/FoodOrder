import { useState } from "react";

export default function Input({ label, type, id, changeFn, ...props }) {
  const [invalid, setInvalid] = useState(true);
  let cssClasses = "control ";
  if (invalid) {
    cssClasses += "invalid";
  }

  function changeHandler(event) {
    console.log("event.target.value: ", event.target.value);
    if (event.target.value.trim() === "") {
      setInvalid(true);
    } else if ( type === "email" &&
      !event.target.value.includes("@")
    ) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
    changeFn(id, event.target.value);
  }
  return (
    <p className={cssClasses}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={changeHandler} {...props} required />
    </p>
  );
}
