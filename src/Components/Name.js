import React, { useContext } from 'react';
import ContextComponents from '../context/ContextComponents';
import { LabelCenter } from '../Styles/home.styles'


function Name() {

    const { setNameContext } = useContext(ContextComponents);

function nameIs({target}){
    const { value } = target
    setNameContext(value)
}

    return (
        <LabelCenter>
        Nome Favorito:
        <input
          type="text"
          name="name"
          onChange={nameIs}
          placeholder="Favoritar Nome"
        />
        </LabelCenter>
    )
}
export default Name;