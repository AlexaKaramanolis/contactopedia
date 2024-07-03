import React from "react";

const RemoveAllContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-danger form-control"
        onClick={props.handleRemoveAllContact}
      >
        Remove All Contacts
      </button>
    </div>
  );
};

export default RemoveAllContact;
