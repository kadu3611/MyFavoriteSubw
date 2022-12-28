import React, { useContext, memo } from 'react';
import ContextComponents from '../context/ContextComponents';
import { collection, setDoc, doc } from 'firebase/firestore'
import { db } from '../Firebase/firebase-config'
import { rulesName, rulesBeforeAndAfter } from './BusinessRules/businessRules'
import { ButtonSaveFalse, ButtonSaveTrue } from '../Styles/home.styles'


function Button() {

    const { nameContext, genericAntes, genericApos,
         selectOptionPao } = useContext(ContextComponents);

  const disabledRules = rulesBeforeAndAfter(genericAntes, genericApos) === true && 
  rulesName(nameContext) === true

    const createName = async () => {

        const pedidoRef = collection(db, "Pedido");
        await setDoc(doc(pedidoRef, nameContext), {
            name: nameContext,
            saborPao: selectOptionPao,
            Antes: genericAntes,
            Depois: genericApos
        });
        window.location.reload(false);
    }

    return (
        disabledRules ? 
        <ButtonSaveTrue
            type='button'
            onClick={createName}
            disabled = {!disabledRules}
            >
            Salvar
        </ButtonSaveTrue>
        :
        <ButtonSaveFalse
            type='button'
            onClick={createName}
            disabled = {!disabledRules}
            >
            Salvar
        </ButtonSaveFalse>

    );
}

export default memo(Button);
