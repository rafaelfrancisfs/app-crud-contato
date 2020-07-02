import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import * as api from '../services/apiServices.js'

Modal.setAppElement('#root');

export default function ModalNewContact({ onClose, onSave }) {

    const [newName, setnewName] = useState('');
    const [newAge, setNewAge] = useState(0);
    const [newPhone, setnewPhone] = useState('');


    const [input, setInput] = useState({})

    const handleInputChange = (e) => {
        // setInput({
        //     ...input,
        //     [e.currentTarget.name]: e.currentTarget.value
        // });
        console.log(e.currentTarget.value)
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyESC)
        return () => {
            document.removeEventListener('keydown', handleKeyESC)
        }
    })

    const handleKeyESC = (event) => {
        if (event.key === 'Escape') {
            onClose(null)
        }
    }

    const handleClose = () => {
        onClose(null)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    const handleNewName = (event) => {
        setnewName(event.target.value);
        console.log(newName);
    }

    const handleNewAge = (event) => {
        setNewAge(+event.target.value);

        console.log(newAge);
        console.log(newName);
    }
    const handleNewPhone = (event) => {
        setnewPhone(event.target.value);
        console.log(newPhone);
    }


    const handleSave = async () => {
        const newContact = {
            "name": newName,
            "age": newAge,
            "phoneNumber": { "phone": newPhone }
        };

        if (newContact) {
            await api.insertContact(newContact);
            handleClose();
        }

    }

    return (
        <div>
            <Modal isOpen={true} >
                <div className="container font-weight-light" style={styles.flexRow}>
                    <span className="font-weight-bold" >Incluir Novo Contato</span>
                    <button type="button" className="bt btn btn-outline-danger btn-smi" onClick={handleClose} >X</button>
                </div>
                <form onSubmit={handleSubmit} className="container font-weight-light" >

                    <div className="form-group">

                        <label htmlfor="nameInput">Nome</label>
                        <input type="text"
                            className="form-control"
                            id="nameInput"
                            autoFocus
                            name="name"
                            onChange={handleNewName}

                        />

                    </div>
                    <div className="form-group">
                        <label htmlfor="ageInput">Idade</label>
                        <input type="number"
                            className="form-control"
                            id="ageInput"
                            min="0" step="1"
                            onChange={handleNewAge} />
                    </div>
                    <div className="form-group">
                        <label htmlfor="phoneInput">Telefone</label>
                        <input type="text"
                            className="form-control"
                            id="phoneInput"
                            onChange={handleNewPhone}
                        />
                    </div>

                    <button type="button"
                        className="btn btn-outline-success btn-sm btn-block"
                        onClick={handleSave}>Incluir</button>
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