import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Contact from "../Contact/Contact";

import { deleteContacts } from "../../redax/contactsOps";

import { selectVisibleContacts } from "../../redax/contactsSlice";

export default function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
            <button onClick={() => dispatch(deleteContacts(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
