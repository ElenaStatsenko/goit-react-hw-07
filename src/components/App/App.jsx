import { useState, useEffect } from "react";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";


const initialValues = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
export default function App() {
 

  const [contacts, setContacts] = useState(() => {
    // Загрузка контактов из Local Storage при монтировании компонента
    const savedContacts = localStorage.getItem('contacts')
    console.log(savedContacts)
    return savedContacts ? JSON.parse(savedContacts) : initialValues;
  });
  // useEffect(()=>{
  //   dispatch(fetchTasks());
  
  // }, [dispatch])

  useEffect(() => {
    // Сохранение контактов в Local Storage при изменении состояния contacts
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
 
    setContacts([...contacts, newContact, ]);
    
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const searchContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm contacts={contacts} onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={searchContact} onDelete={deleteContact} />
    </div>
  );
}
