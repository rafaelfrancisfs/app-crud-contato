import React from 'react'
import Actions from './Actions.jsx'

export default function ContactControl({ contacts, onUpdate, onDelete }) {

    const handleOnIconClick = (id, type) => {

        const contact = contacts.find((contact) => contact._id === id)
        if (type === 'delete') {
            onDelete(id);
        }
        if (type === 'edit') {
            onUpdate(contact);
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

                    <tbody>
                        {contacts.map(({ _id, name, age }) => {
                            return <tr key={_id}>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>phone</td>
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
