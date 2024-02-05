// import Modal from "../util/Modal";

// export default function Error({message, onSubmit}) {
//     console.log("message: ", message)
//   return (
//     <Modal declineBtn={null} submitBtn="Okay" submitFn={onSubmit} >
//       <div className="error">
//         {/* <h3>An Error occured!</h3>
//         <p>message</p>
//         */}
//       </div>
//  </Modal>
//   );
// }

import Modal from "./Modal";

export default function Error({message, onSubmit}) {
  return (
    <Modal declineBtn={null} submitBtn="Okay" submitFn={onSubmit} >
      <div className="error">
        <h3>An Error occured!</h3>
        <p>{message}</p>
       
      </div>
 </Modal>
  );
}
