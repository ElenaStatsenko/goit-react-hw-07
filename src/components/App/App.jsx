import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { fetchTasks } from "../../redax/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchTasks());
  
  }, [dispatch])

  // const [contacts, setContacts] = useState(() => {
  //   // Загрузка контактов из Local Storage при монтировании компонента
  //   const savedContacts = localStorage.getItem('contacts')
  //   console.log(savedContacts)
  //   return savedContacts ? JSON.parse(savedContacts) : initialValues;
  // });
  // // useEffect(()=>{
  // //   dispatch(fetchTasks());
  
  // // }, [dispatch])

  // useEffect(() => {
  //   // Сохранение контактов в Local Storage при изменении состояния contacts
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  // const [filter, setFilter] = useState("");

  // const addContact = (newContact) => {
 
  //   setContacts([...contacts, newContact, ]);
    
  // };

  // const deleteContact = (contactId) => {
  //   setContacts(contacts.filter((contact) => contact.id !== contactId));
  // };

  // const searchContact = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm  />
      <SearchBox  />
      <ContactList  />
    </div>
  );
}
