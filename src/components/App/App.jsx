import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { fetchContacts } from "../../redax/contactsOps";
import { selectGetIsLoading } from "../../redax/contactsSlice";
import { selectGetError } from "../../redax/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectGetIsLoading);
  const error = useSelector(selectGetError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}
