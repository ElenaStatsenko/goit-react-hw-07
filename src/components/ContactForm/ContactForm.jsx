import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redax/contactsSlice";
import {  useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    const key = nanoid();
    const object = {
      ...evt,
      id: key,
    };
   
    dispatch(addContact(object));
    
  };
  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberlFieldId = useId();


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <label htmlFor={numberlFieldId}>Number</label>
        <ErrorMessage name="name" component="span" />
        <Field type="number" name="number" id={numberlFieldId} />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
