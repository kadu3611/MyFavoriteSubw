import React, { useState, useContext, useMemo, useEffect } from 'react';
import ContextComponents from '../context/ContextComponents';
import { func, actualSetList } from './Fuctions/functions';

function GenericSelect({ name, arrayGeneric, moment }) {
    const { genericAntes,
        setGenericAntes,
        genericApos,
        setGenericApos,
    } = useContext(ContextComponents);

    let setGenericMoment = undefined
    let genericMoment = undefined

    function funcMoment() {
        if (moment === "Antes do Forno") {
            setGenericMoment = setGenericAntes
            genericMoment = genericAntes
        } else {
            setGenericMoment = setGenericApos
            genericMoment = genericApos

        }

    }

    const arrayOrdenado = arrayGeneric.sort()

    const [optionButton, setOptionButton] = useState(false);
    const [selectCheckbox, setSelectCheckbox] = useState(arrayOrdenado);
    const [selectArray, setSelectArray] = useState([]);

    const buttonOptionTrue = (
        <button
            type="button"
            onClick={() => func(setOptionButton)}
        >
            {`${name} =>`}
        </button>
    );

    function funcBack() {
        setSelectCheckbox(arrayOrdenado)
        setSelectArray([])
        showCheckboxesTrue([]);
    }

    const label = (
        <div>
            <button
                type="button"
                onClick={() => { setOptionButton(false) }}>
                {`${name}`}:
            </button>
            <select
                onClick={showCheckboxes}
            >
                {selectCheckbox?.map((item, index) => (
                    <option key={index} name={item}>{item} </option>
                )
                )
                }
            </select>
            <button
                type="button"
                onClick={() => { funcBack() }}
            >
                retornar
            </button>
        </div>
    );

    const memo = useMemo(() => (
        selectArray
    ), [selectArray])

    function showCheckboxes({ target }) {
        const { value } = target;
        const filterArray = selectCheckbox?.filter((item) => item !== value);
        setSelectCheckbox(filterArray);
        selectArray.push(value)
        setSelectArray(selectArray);
        showCheckboxesTrue(memo);

    }

    function showCheckboxesTrue(value) {
        actualSetList(name, value, genericMoment, setGenericMoment);
    }

    useEffect(() => {
        funcMoment();
    })
    return (
        <div>
            {selectCheckbox.length !== 0 &&
                optionButton ?
                <div>
                    {label}
                </div>
                : buttonOptionTrue

            }
        </div>
    );
}

export default GenericSelect;