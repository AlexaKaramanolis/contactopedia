import { getRandomUser } from "../../Utility/api";
import React from "react";

const GetRandomContact = async (props) => {
  try {
    const responseFromAPI = await getRandomUser();
    console.log(responseFromAPI);

    // Assuming the correct fields from the API response are:
    const { first_name, last_name, email, phone_number } = responseFromAPI.data;

    return props.handleAddRandomContact({
      name: `${first_name} ${last_name}`,
      email: email,
      phone: phone_number,
    });
  } catch (error) {
    console.error("Error fetching random contact:", error);
  }
};

const AddRandomContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => GetRandomContact(props)}
      >
        Add Random Contact
      </button>
    </div>
  );
};

export default AddRandomContact;
