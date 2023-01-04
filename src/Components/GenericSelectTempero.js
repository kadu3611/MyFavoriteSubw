import React, { useState, useContext, useCallback, useEffect, memo } from 'react';
import ContextComponents from '../context/ContextComponents';
import { func, actualSetList, functionBack } from '../Fuctions/functions';
import { ButtonCheck, DivButtonList, ButtonReturn,
     DivButton, DivlistItens, ButtonSelectItem } from '../Styles/home.styles';
import Return from '../Styles/imagens/return.svg'


function GenericSelectTempero({ name, arrayGeneric, moment }) {
    const { genericAntes,
        setGenericAntes,
        selectCheckboxTemperoBefore, setSelectCheckboxTemperoBefore,
        genericApos, setGenericApos,

    } = useContext(ContextComponents);

    const arrayOrdenado = arrayGeneric.sort()

    const [optionButton, setOptionButton] = useState(false);
    const [selectArray, setSelectArray] = useState([]);

    const selectAllArray = selectCheckboxTemperoBefore
    const setSelectAllArray = setSelectCheckboxTemperoBefore

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

    function assitentFuncBack(newAntes, genricType) {
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

    function funcBack() {
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
        setSelectArray([])
    }

    function showCheckboxes(value) {
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

                <DivlistItens>
                    {selectAllArray?.map((item, index) => (
                        <ButtonSelectItem
                            key={index}
                            type="button"
                            onClick={() => showCheckboxes(item)}
                        >
                            {item}
                        </ButtonSelectItem>
                    )
                    )
                    }
                </DivlistItens>

        </DivButtonList >
    );


    useEffect(() => {
        initial()
    }, [initial])
    return (
        <DivButton>
            {selectAllArray.length !== 0 &&
                optionButton ?
                <div>
                    {label}
                </div>
                : buttonOptionTrue
            }
        </DivButton>
    );
}

export default memo(GenericSelectTempero);