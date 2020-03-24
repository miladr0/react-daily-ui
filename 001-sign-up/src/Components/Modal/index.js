import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faUser, faAt, faLock } from '@fortawesome/free-solid-svg-icons'

import Input from '../Input';
import './Modal.css';

const Modal = ({onSubmit}) => {
return (
    <div className="Modal">
        <form onSubmit={onSubmit} className="ModalForm">
            <Input id="name" type="text" placeholder="milad ranjbar" icon={faUser} />
            <Input id="username" type="email" placeholder="miladr0r@gmail.com" icon={faAt} />
            <Input id="password" type="password" placeholder="password" icon={faLock} />
            <button>Log in <FontAwesomeIcon className="fa" icon={faChevronRight}/></button>
        </form>
    </div>
)

}

export default Modal;
