import React from 'react'

export default function Spinnner() {
    return (
        <div>
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Carregando...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Carregando...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Carregando...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Carregando...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Carregando...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Carregando...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Carregando...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Carregando...</span>
            </div>
            <span>Carregando...</span>
        </div>
    )
}
