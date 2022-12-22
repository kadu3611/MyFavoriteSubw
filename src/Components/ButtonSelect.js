import React, { useContext, memo } from 'react';
import ContextComponents from '../context/ContextComponents';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore'
import { db } from '../FIrebase/firebase-config'



function Button() {

    const { nameContext, genericAntes, genericApos,
         selectOptionPao } = useContext(ContextComponents);

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
            onClick={createName}>
            Salvar
        </button>

    );
}

export default memo(Button);
