import React from 'react'


const handleInputChange = (event) => {
    const newText = event.target.value;

    onChangeFilter(newText);
};
export default function Filter() {
    return (
        <div className="container">
            <div className="input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
                </div>
                <input type="text"
                    className="form-control"
                    placeholder="Pesquisa"
                    value={filter}
                    onChange={handleInputChange} />
            </div>
        </div>
    )
}
