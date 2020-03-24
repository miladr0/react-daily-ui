import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Input.css';

const Signup = ({id, type, placeholder, icon}) => {
return (
    <div className="Input">
        <input id={id} autoComplete="false" required type={type}
            placeholder={placeholder} />
            <label htmlFor={id}><FontAwesomeIcon className="fa" icon={icon}/></label>
    </div>
)

}

export default Signup;
