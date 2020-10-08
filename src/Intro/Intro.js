import React from 'react';


import './Intro.css'

import Form from '../assets/icon/books.svg'
import Exp from '../assets/icon/telecommuting.svg'
import Skill from '../assets/icon/puzzle.svg'
const Intro = () => {

    return (
        <div className="intro">
            <div className="id">
                <h1>Axel Delacourt</h1>
                <h2>Master Communication</h2>
                <div className="menu">
                    <img src={Form} className="iconSize"/>
                    <img src={Exp} className="iconSize"/>
                    <img src={Skill} className="iconSize"/>
                </div>
            </div>
            <div className="proPic">
            </div>

        </div>
    )
}

export default Intro;