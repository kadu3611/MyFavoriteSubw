import React, { useState, useContext, useCallback, useEffect, memo } from 'react';
import ContextComponents from '../context/ContextComponents';
import { func, actualSetList, functionBack } from '../Fuctions/functions';
import { ButtonCheck, DivButtonList, DivList } from '../Styles/home.styles';


function GenericSelectSalad({ name, arrayGeneric, moment }) {
    const { genericAntes,
        setGenericAntes,
        selectCheckboxSaladBefore, setSelectCheckboxaladBefore,
        genericApos, setGenericApos, selectArray, setSelectArray,
    } = useContext(ContextComponents);

    const arrayOrdenado = arrayGeneric.sort()

    const [optionButton, setOptionButton] = useState(false);
  const [disableCheck, setDisableCheck] = useState([0,0,0,0,0,0,0,0]);


    const selectAllArray = selectCheckboxSaladBefore
    const setSelectAllArray = setSelectCheckboxaladBefore

    const newListSelect = selectArray
    const setNewListSelect = setSelectArray

    const generic = moment === 'Antes do Forno' ? genericAntes : genericApos
    const setGeneric = moment === 'Antes do Forno' ? setGenericAntes : setGenericApos

    const initial = useCallback(() => {
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

    const assitentFuncBack = (newAntes, genricType) => {
        const trueAfter = genricType?.filter((item) => Object.keys(item)[0] === name)
        if (trueAfter.length < 1) {
            const newGeneric = functionBack(name, generic)
            setGeneric(newGeneric)
            setSelectAllArray(arrayOrdenado)
        } else {
            arrayOrdenado.forEach(function (element) {
                if (Object.values(trueAfter[0])[0].indexOf(element) === -1)
                    newAntes.push(element);
            });
            setSelectAllArray(newAntes)
        }

    }

    const funcBack = () => {
        let newAntes = []
        let newApos = []
        if (generic.length !== 0) {
            if (moment === 'Antes do Forno') {
                assitentFuncBack(newAntes, genericApos)
            } else {
                assitentFuncBack(newApos, genericAntes)

            }
        }
        const newGeneric = functionBack(name, generic)
        setGeneric(newGeneric)
        setNewListSelect([])
        setDisableCheck([0,0,0,0,0,0,0,0])
        // setSelectAllArray(selectAllArray)
        console.log('PASSSA?');


    }

    const showCheckboxesTrue = (value) => {
        actualSetList(name, value, generic, setGeneric);
    }

    const showCheckboxes = (value, index) => {
        if (newListSelect.includes(value)) {
            disableCheck.splice(index, 1, 0)
            const newArray = newListSelect.filter((item) => item !== value)
            setNewListSelect(newArray)
            showCheckboxesTrue(newArray)
            console.log('if');
        } else {
            disableCheck.splice(index, 1, 1)
            console.log('aqui');
            const newSelectArray = [...newListSelect, value]
            setNewListSelect(newSelectArray);   
            showCheckboxesTrue(newSelectArray);
        }
    }


    const label = (
        <div>
            <ButtonCheck
                type="button"
                onClick={() => { setOptionButton(false) }}>
                {`${name}`}:
            </ButtonCheck>
            <DivList>
                <div>
                    {selectAllArray?.map((item, index) => (
                        <label key={index}>
                            {item}
                            <input type="checkbox"
                                onChange={() => showCheckboxes(item, index)}
                                checked={disableCheck[index]}
                            />
                        </label>
                    )
                    )
                    }
                </div>
            </DivList >
            <button
                type="button"
                onClick={() => { funcBack() }}
            >
                retornar
            </button>
        </div >
    );

    useEffect(() => {
        initial()
    }, [initial, disableCheck]);

    return (
        <DivButtonList>
            {selectAllArray.length !== 0 &&
                optionButton ?
                label
                : buttonOptionTrue

            }
        </DivButtonList>
    );
}

export default memo(GenericSelectSalad);