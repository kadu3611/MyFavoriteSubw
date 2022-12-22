import React, { useContext, memo } from 'react';
import ContextComponents from '../context/ContextComponents';
import { collection, setDoc, doc } from 'firebase/firestore'
import { db } from '../FIrebase/firebase-config'
import { rulesName, rulesBeforeAndAfter } from './BusinessRules/businessRules'


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
        <button
            type='button'
            onClick={createName}
            disabled = {!disabledRules}
            >
            Salvar
        </button>

    );
}

export default memo(Button);
