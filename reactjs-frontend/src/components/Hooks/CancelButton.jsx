import React from "react";

function CancelButton(props) {
  const { onClose } = props;
  //don't need useNavigate
  return (
    <button type="button" onClick={onClose}>
      Cancel
    </button>
  );
}

export default CancelButton;
