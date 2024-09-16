import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { getContacts } from "../../redax/contactsSlice";
import { deleteContacts } from "../../redax/contactsOps";

import { selectNameFilter } from "../../redax/filtersSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  
  // Получаем фильтр
  const filter = useSelector(selectNameFilter);
  // console.log(filter)
  // Получаем все контакты

  const contacts = useSelector(getContacts);



  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
 

  return (
    <div>
      <ul>
        {filteredContacts .map((contact) => (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
            <button onClick={() => dispatch(deleteContacts(contact.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
