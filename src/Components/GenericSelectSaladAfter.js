import React, { useState, useContext, useCallback, useEffect, memo } from 'react';
import ContextComponents from '../context/ContextComponents';
import { func, actualSetList, functionBack } from '../Fuctions/functions';
import {
    ButtonCheck, DivButtonList, DivList, LabelCheckbox,
    InputCheckbox, ButtonReturn, DivButton
} from '../Styles/home.styles';
import CheckIcon from '../Styles/imagens/check.svg'
import Return from '../Styles/imagens/return.svg'



function GenericSelectSalad({ name, arrayGeneric, moment }) {
    const { genericAntes,
        setGenericAntes,
        selectCheckboxSaladAfter, setSelectCheckboxaladAfter,
        genericApos, setGenericApos, selectArray, setSelectArray,
    } = useContext(ContextComponents);

    const arrayOrdenado = arrayGeneric.sort()

    const [optionButton, setOptionButton] = useState(false);

    const [disableCheck, setDisableCheck] = useState([0, 0, 0, 0, 0, 0, 0, 0]);


    const selectAllArray = selectCheckboxSaladAfter
    const setSelectAllArray = setSelectCheckboxaladAfter

    const newListSelect = selectArray
    const setNewListSelect = setSelectArray

    const generic = moment === 'Antes do Forno' ? genericAntes : genericApos
    const setGeneric = moment === 'Antes do Forno' ? setGenericAntes : setGenericApos


    const initial = useCallback(() => {
        setSelectAllArray(arrayOrdenado)

    }, [setSelectAllArray, arrayOrdenado])

    const buttonOptionTrue = (
        <DivButtonList>
            <ButtonCheck
                type="button"
                onClick={() => func(setOptionButton)}
            >
                {`${name} >`}
            </ButtonCheck>
        </DivButtonList>
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
        setDisableCheck([0, 0, 0, 0, 0, 0, 0, 0])

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
        <DivButtonList>
            <ButtonCheck
                type="button"
                onClick={() => { setOptionButton(false) }}>
                {`${name}`}:
            </ButtonCheck>
            <ButtonReturn
                type="button"
                onClick={() => { funcBack() }}

            >
                <img
                    alt="tick icon"
                    style={{ width: '15px' }}
                    src={Return}
                />
            </ButtonReturn>
            <DivList>
                <div>
                    {selectAllArray?.map((item, index) => (
                        <LabelCheckbox
                            key={index}
                            checked={disableCheck[index]}
                        >
                            {item}
                            <img
                                alt="tick icon"
                                style={{ width: '15px' }}
                                src={CheckIcon}
                            />
                            <InputCheckbox
                                type="checkbox"
                                onChange={() => showCheckboxes(item, index)}
                                checked={disableCheck[index]}
                            />
                        </LabelCheckbox>
                    )
                    )
                    }
                </div>
            </DivList >

        </DivButtonList >
    );

    useEffect(() => {
        initial()
    }, [initial, disableCheck, setSelectAllArray]);

    return (
        <DivButton>
            {selectAllArray.length !== 0 &&
                optionButton ?
                label
                : buttonOptionTrue

            }
        </DivButton>
    );
}

export default memo(GenericSelectSalad);