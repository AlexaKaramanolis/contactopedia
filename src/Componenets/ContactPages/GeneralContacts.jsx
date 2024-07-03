import Contact from "./Contact";

const GeneralContacts = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ borderRadius: "10px", backgroundColor: "gray" }}
    >
      <div className="text-center text-white-50">Other Contacts</div>
      <div>
        {props.contacts.map((contact, index) => (
          <Contact
            contact={contact}
            key={index}
            favoriteClick={props.favoriteClick}
            deleteContact={props.deleteContact}
            updateClick={props.updateClick}
          ></Contact>
        ))}
      </div>
    </div>
  );
};
export default GeneralContacts;
