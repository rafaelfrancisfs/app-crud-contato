import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

import Input from '../'



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

    const handleClose = () => {
        onClose(null)
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyESC)
        return () => {
            document.removeEventListener('keydown', handleKeyESC)
        }
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }



    const handleAgeChange = (event) => {
        //const { idContact } = props;
        // const contactIndex = contact.findIndex((contact) => contact._id === idContact)
        // const newContact = Object.assign([], contact);

        console.log(event);

    }
    const handleNameChange = (event) => {
        // console.log(event.target.value);
        // setnewName(event.target.value);
        // console.log(newName);
        // setContact([name = event.target.value]);
        // return newName
    }
    const handlePhoneChange = (event, _id) => {
        setnewPhone(event.target.value);
        console.log(newPhone)
    }

    const [input, setInput] = useState({});
    const handleInputChange = (e) => {
        // setInput({
        //     name,
        //     [e.currentTarget.name]: e.currentTarget.value
        // });
        console.log(e.currentTarget.value)
    }


    return (

        // <>
        //     <Input />
        // </>
        <div>
            <Modal isOpen={true} >
                <div className="container font-weight-light" style={styles.flexRow}>
                    <span className="font-weight-bold" >Mantenção de Contato</span>
                    <button type="button" className="bt btn btn-outline-danger btn-smi" onClick={handleClose} >X</button>
                </div>
                <form onSubmit={handleSubmit} className="container font-weight-light" >
                    <div className="form-group">
                        <label htmlfor="nameInput">Nome </label>
                        <input type="text"
                            className="form-control"
                            id="nameInput"
                            name="name"
                            value={input ? name : input}
                            autoFocus
                            onChange={handleInputChange} />

                    </div>
                    <div className="form-group">
                        <label htmlfor="ageInput">Idade</label>
                        <input type="number"
                            className="form-control"
                            id="ageInput"
                            value={age}
                            onChange={handleAgeChange}
                            idContact={_id}
                            min="0" step="1" />
                    </div>
                    <div className="form-group">
                        <label htmlfor="phoneInput">Telefone</label>
                        <input type="text"
                            className="form-control"
                            id="phoneInput"
                            onChange={handlePhoneChange}
                            value={newPhone} />
                    </div>

                    <button type="button" className="btn btn-outline-success btn-sm btn-block">Atualizar</button>
                </form>

            </Modal>
        </div>
    )
}

const styles = {
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '40px',
    }
}