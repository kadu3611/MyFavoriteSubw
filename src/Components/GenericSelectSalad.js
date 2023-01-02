import React, { useState, useContext, useCallback, useEffect, memo } from 'react';
import ContextComponents from '../context/ContextComponents';
import { func, actualSetList, functionBack } from '../Fuctions/functions';
import { ButtonCheck, DivButtonList, DivList } from '../Styles/home.styles';


function GenericSelectSalad({ name, arrayGeneric, moment }) {
    const { genericAntes,
        setGenericAntes,
        selectCheckboxSaladBefore, setSelectCheckboxaladBefore,
        genericApos, setGenericApos,selectDisable, setSelectDisable

    } = useContext(ContextComponents);

    const arrayOrdenado = arrayGeneric.sort()

    const [optionButton, setOptionButton] = useState(false);
    const [selectArray, setSelectArray] = useState([]);


    const selectAllArray = selectCheckboxSaladBefore
    const setSelectAllArray = setSelectCheckboxaladBefore

    const disableList = selectDisable;
    const setDisableList = setSelectDisable;

    const generic = moment === 'Antes do Forno' ? genericAntes : genericApos
    const setGeneric = moment === 'Antes do Forno' ? setGenericAntes : setGenericApos

    const initial = useCallback(() => {

        setSelectAllArray(arrayOrdenado)
        setDisableList([0, 0, 0, 0, 0, 0, 0, 0])
        console.log('tste');

    }, [setSelectAllArray, arrayOrdenado, setDisableList])

    const buttonOptionTrue = (
        <ButtonCheck
            type="button"
            onClick={() => func(setOptionButton)}
        >
            {`${name} >`}
        </ButtonCheck>
    );

    function assitentFuncBack(newAntes, genricType) {
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
            } else {
                assitentFuncBack(newApos, genericAntes)

            }
        }
        const newGeneric = functionBack(name, generic)
        setGeneric(newGeneric)
        setSelectArray([])
    }


    const showCheckboxesTrue = useCallback((value) => {
        actualSetList(name, value, generic, setGeneric);
    },[generic, name, setGeneric])

    const showCheckboxes = useCallback((value, index) => {
        // const { value } = target;
        // setSelectAllArray(selectAllArray);
        selectArray.push(value)
        const arrayDisable = disableList
        arrayDisable.splice(index, 1, 1)
        setDisableList(arrayDisable)
        console.log(disableList, 'disableList');
        setSelectArray(selectArray);
        showCheckboxesTrue(selectArray);

    }, [selectArray, disableList, showCheckboxesTrue, setDisableList])



    const label = (
        <div>
            <ButtonCheck
                type="button"
                onClick={() => { setOptionButton(false) }}>
                {`${name}`}:
            </ButtonCheck>
            <DivList>
                <div
                    type="button"
                >
                    {selectAllArray?.map((item, index) => (
                        <button key={index}
                            onClick={() => showCheckboxes(item, index)}
                            disabled={disableList[index]}
                            type="button"
                            value={item}>{item}</button>
                    )
                    )
                    }
                </div>
            </DivList>
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
    }, [initial]);

    useEffect(() => {

    }, [disableList, selectAllArray])

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

export default memo(GenericSelectSalad);