import React, { useContext } from 'react';
import ContextComponents from '../context/ContextComponents';

function Name() {

    const { setNameContext } = useContext(ContextComponents);

function nameIs({target}){
    const { value } = target
    setNameContext(value)
}

    return (
        <label>
        Nome Favorito:
        <input
          type="text"
          name="name"
          onChange={nameIs}
          placeholder="Favoritar Nome"
        />
        </label>
    )
}
export default Name;