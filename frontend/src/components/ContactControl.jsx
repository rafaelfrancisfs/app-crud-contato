import React from 'react'
import Actions from './Actions.jsx'

export default function ContactControl({ contacts, onUpdate, onDelete, onNewContact }) {

    const handleOnIconClick = (id, type) => {

        const contact = contacts.find((contact) => contact._id === id)
        if (type === 'delete') {
            onDelete(id);
            return;
        }

        if (type === 'edit') {
            onUpdate(contact);
            return;
        }

        if (type === 'new') {
            onNewContact();
            console.log("new contact")
        }
    }

    return (

        <div className="container">

            <div className="table-responsive-sm">
                <table className="table table-hover">
                    <th scope="col">Nome</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Ações</th>
                    <th className="btn btn-outline-success btn-sm">
                        <Actions type="new" icon="fas fa-user-plus" onIconClick={handleOnIconClick} />

                    </th>

                    <tbody>
                        {contacts.map(({ _id, name, age, phoneNumber }) => {
                            return <tr key={_id}>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>{phoneNumber.phone}</td>
                                <td>
                                    <div>
                                        <Actions type="edit" icon="far fa-edit" id={_id} onIconClick={handleOnIconClick} />
                                        <Actions type="delete" icon="far fa-trash-alt" id={_id} onIconClick={handleOnIconClick} />
                                    </div>
                                </td>

                            </tr>
                        })}


                    </tbody>

                </table>
            </div>
        </div>
    )
}
