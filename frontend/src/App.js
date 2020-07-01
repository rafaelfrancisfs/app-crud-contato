import React, { useState, useEffect } from 'react';
import './css/App.css';

import * as api from './services/apiServices.js'

import Footer from './components/footer/Footer'
import Spinnner from './components/Spinnner';
import ContactControl from './components/ContactControl.jsx';
import ModalContact from './components/ModalContact.jsx';


function App() {

  const [allContacts, setAllContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      //setimeout para mostrar o spinner 
      const contacts = await api.getAllContacts();
      setTimeout(() => {
        setAllContacts(contacts);

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
      const newConacts = Object.assign([], allContacts)
      setAllContacts(newConacts);
    }
  }

  const handleSaveContact = () => { };


  const handleClose = () => {
    setModalOpen(false);
  };


  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <header>
        <h3>Cadastro de Contato</h3>
      </header>
      {allContacts.length === 0 && <Spinnner />}
      {allContacts.length > 0 && <ContactControl
        contacts={allContacts}
        onUpdate={handleUpdate}
        onDelete={handleDelete} />}

      {modalOpen && <ModalContact onSave={handleSaveContact} onClose={handleClose} selectedContact={selectedContact} />}

      <Footer />
    </div >
  );
}

export default App;
