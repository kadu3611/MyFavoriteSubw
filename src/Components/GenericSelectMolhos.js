import React, { useState, useContext, useCallback, useEffect, memo } from 'react';
import ContextComponents from '../context/ContextComponents';
import { func, actualSetList, functionBack } from '../Fuctions/functions';
import { ButtonCheck, DivButtonList } from '../Styles/home.styles';


function GenericSelectMolhos({ name, arrayGeneric, moment }) {
    const { genericAntes,
        setGenericAntes,
        selectCheckboxMolhosBefore, setSelectCheckboxMolhosBefore,
        genericApos, setGenericApos,

    } = useContext(ContextComponents);

    const arrayOrdenado = arrayGeneric.sort()

    const [optionButton, setOptionButton] = useState(false);
    const [selectArray, setSelectArray] = useState([]);

    const selectAllArray = selectCheckboxMolhosBefore
    const setSelectAllArray = setSelectCheckboxMolhosBefore

    const generic = moment === 'Antes do Forno' ? genericAntes : genericApos
    const setGeneric = moment === 'Antes do Forno' ? setGenericAntes : setGenericApos


    const initial = useCallback(() => {
        // setGenericAntes((back) => [...back, { [name]: [] }])

        setSelectAllArray(arrayOrdenado)

    }, [setSelectAllArray, arrayOrdenado])

    const buttonOptionTrue = (
        <ButtonCheck
            type="button"
            onClick={() => func(setOptionButton)}
        >
            {`${name} >`}
        </ButtonCheck>
    );

    function assitentFuncBack(newAntes, genricType){
        const trueApos = genricType?.filter((item) => Object.keys(item)[0] === name)
                if (trueApos.length < 1) {
                const newGeneric = functionBack(name, generic)
                setGeneric(newGeneric)
                    setSelectAllArray(arrayOrdenado)
                } else {
                    arrayOrdenado.forEach(function (element) {
                        if (Object.values(trueApos[0])[0].indexOf(element) === -1)
                            newAntes.push(element);
                    });
                    setSelectAllArray(newAntes)
                }
    }

    function funcBack() {
        let newAntes = []
        let newApos = []

        if (generic.length !== 0) {
            if (moment === 'Antes do Forno') {
                assitentFuncBack(newAntes, genericApos)
            } else{
                assitentFuncBack(newApos, genericAntes)

            }
        }
       const newGeneric = functionBack(name, generic)
        setGeneric(newGeneric)
        setSelectArray([])
    }


    // const memo = useMemo(() => (
    //     selectArray
    // ), [selectArray])

    function showCheckboxes({ target }) {
        const { value } = target;
        const filterArray = selectAllArray?.filter((item) => item !== value);
        setSelectAllArray(filterArray);
        selectArray.push(value)
        setSelectArray(selectArray);
        showCheckboxesTrue(selectArray);

    }

    function showCheckboxesTrue(value) {
        actualSetList(name, value, generic, setGeneric);
    }

    const label = (
        <div>
            <ButtonCheck
                type="button"
                onClick={() => { setOptionButton(false) }}>
                {`${name}`}:
            </ButtonCheck>
            <select
                onClick={showCheckboxes}
            >
                {selectAllArray?.map((item, index) => (
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


    useEffect(() => {
        initial()
    }, [initial])
    return (
        <DivButtonList>
            {selectAllArray.length !== 0 &&
                optionButton ?
                <div>
                    {label}
                </div>
                : buttonOptionTrue

            }
        </DivButtonList>
    );
}

export default memo(GenericSelectMolhos);