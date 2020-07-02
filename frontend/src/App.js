import React, { useState, useEffect } from 'react';
import './css/App.css';

import * as api from './services/apiServices.js'

import Footer from './components/footer/Footer'
import Spinnner from './components/Spinnner';
import ContactControl from './components/ContactControl.jsx';
import ModalContact from './components/ModalContact.jsx';
import ModalNewContact from './components/ModalNewContact.jsx';
import Filter from './components/Filter';


function App() {

  const [allContacts, setAllContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNewContact, setModalNewContact] = useState(false)
  const [isSpinner, setIsSpinner] = useState(false)

  useEffect(() => {
    const getContacts = async () => {
      //setimeout para mostrar o spinner 
      const contacts = await api.getAllContacts();
      setTimeout(() => {
        setAllContacts(contacts);
        setFilteredContacts(contacts);

      }, 2000);
    }
    getContacts();
  }, [allContacts])

  const handleUpdate = (contact) => {
    setSelectedContact(contact);
    setModalOpen(true);

    console.log(contact)
  }
  const handleDelete = async (id) => {
    const deleteContact = await api.deleteContact(id);
    if (deleteContact) {
      setIsSpinner(true)
      setTimeout(() => {
        setIsSpinner(false)
      }, 2000);

      const newConacts = Object.assign([], allContacts)
      setAllContacts(newConacts);
    }
  }

  const handleSaveContact = () => {

  };


  const handleSaveNewContact = async (newContact) => {
    // const { name, age, phoneNumber } = formData;
    // const { phone } = phoneNumber;
    console.log("handleSaveNewContact newContact: " + newContact)
    if (newContact) {
      await api.insertContact(newContact)
    }


  };

  const handleClose = () => {
    setModalOpen(false);
  };
  const handleNewContactClose = () => {
    setModalNewContact(false);
    setIsSpinner(true)
    setTimeout(() => {
      setIsSpinner(false)
    }, 2000);
  };

  const handleNewContact = () => {
    setModalNewContact(true);
    console.log('setModalNewContact')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Cadastro de Contato</h3>
      </header>

      {isSpinner ? <Spinnner /> : ''}
      {allContacts.length === 0 && <Spinnner />}
      {allContacts.length > 0 && <Filter />}
      {allContacts.length > 0 && <ContactControl
        contacts={allContacts}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onNewContact={handleNewContact} />
      }
      {modalOpen && <ModalContact onSave={handleSaveContact} onClose={handleClose} selectedContact={selectedContact} />}
      {modalNewContact && <ModalNewContact onClose={handleNewContactClose} onSave={handleSaveNewContact} />}
      <Footer />
    </div >
  );
}

export default App;
