import React, { useContext } from 'react';
import ContextComponents from '../context/ContextComponents';
import { LabelCenter, InputName } from '../Styles/home.styles'


function Name() {

    const { setNameContext } = useContext(ContextComponents);

function nameIs({target}){
    const { value } = target
    setNameContext(value)
}

    return (
        <LabelCenter>
        Nome Favorito:
        <InputName
          type="text"
          name="name"
          onChange={nameIs}
          placeholder="Nome Favorito"
        />
        </LabelCenter>
    )
}
export default Name;