import React, { Component } from 'react'
import "../../css/App.css";
import rffs from "../../assets/rffs.png";
export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <p>Desenvolvido por</p>
                <img src={rffs} className='Footer-logoRffs' alt='RafaelFrancis' />
            </div>
        )
    }
}
