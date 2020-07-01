import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'


Modal.setAppElement('#root');
export default function ModalContact({ onSave, onClose, selectedContact }) {

    const { _id, name, age } = selectedContact;
    const [contact, setContact] = useState(selectedContact)

    const [newAge, setNewAge] = useState(age);
    const [newName, setnewName] = useState(name);
    const [newPhone, setnewPhone] = useState('');

    const handleKeyESC = (event) => {
        if (event.key === 'Escape') {
            onClose(null)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyESC)
        return () => {
            document.removeEventListener('keydown', handleKeyESC)
        }
    })
    const handleSubmit = (event) => { }



    const handleAgeChange = (event) => {
        //const { idContact } = props;
        // const contactIndex = contact.findIndex((contact) => contact._id === idContact)
        // const newContact = Object.assign([], contact);

        console.log(event);

    }
    const handleNameChange = (event) => {
        console.log(event.target.value);
        setnewName(event.target.value);
        console.log(newName);
        setContact([name = event.target.value]);
        return newName
    }
    const handlePhoneChange = (event, _id) => {
        setnewPhone(event.target.value);
        console.log(newPhone)
    }

    return (
        <div>
            <Modal isOpen={true} >
                <form onSubmit={handleSubmit} className="container" >
                    <div class="form-group">
                        <label htmlfor="nameInput">Nome</label>
                        <input type="text"
                            class="form-control"
                            id="nameInput"
                            value={name} autoFocus
                            onChange={handleNameChange} />

                    </div>
                    <div class="form-group">
                        <label htmlfor="ageInput">Idade</label>
                        <input type="number"
                            class="form-control"
                            id="ageInput"
                            value={age}
                            onChange={handleAgeChange}
                            idContact={_id}
                            min="0" step="1" />
                    </div>
                    <div class="form-group">
                        <label htmlfor="phoneInput">Telefone</label>
                        <input type="text"
                            class="form-control"
                            id="phoneInput"
                            onChange={handlePhoneChange}
                            value={newPhone} />
                    </div>

                    <button type="submit" class="btn btn-seconde">Atualizar</button>
                </form>

            </Modal>
        </div>
    )
}
