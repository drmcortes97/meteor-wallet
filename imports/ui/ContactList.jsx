import React from "react";
import {ContactsCollection} from "../api/ContactsCollection";
import {useTracker} from 'meteor/react-meteor-data';

export const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch(); // Tracker
  });

  return (
    <>
      <h3>Contact List</h3>
      <table border="1" bgcolor="#ffffff">
      <tr >
        <th>Name</th>
        <th>Email</th>
        <th>Partner</th>
        <th>Image</th>
      </tr>
        {contacts.map((contact) => (
        <tr>
          <td>{contact.name}</td> 
          <td>{contact.email}</td>
          <td>{contact.partner}</td>
          <td>{contact.imageUrl}</td>
        </tr>
        ))}
        
      </table>
    </>
  )
}
