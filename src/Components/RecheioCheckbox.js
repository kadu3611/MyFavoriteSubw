import React, { useState, useContext, useEffect, memo, useCallback } from 'react';
import { func, actualSetList, functionBack } from '../Fuctions/functions';
import ContextComponents from '../context/ContextComponents';
import {
  DivButton, DivButtonList, LabelListItens, ButtonCheck,
   DivList, ButtonReturn, DivSelect, ButtonSelect
} from '../Styles/home.styles';
import Return from '../Styles/imagens/return.svg'


function RecheioCheckbox({ name, arrayGenericCheckbox, moment }) {

  const { genericAntes,
    setGenericAntes,
    xbuttonRecheioBefore, setXbuttonRecheioBefore,
    xbuttonRecheioAfter, setXbuttonRecheioAfter,
    genericApos,
    setGenericApos

  } = useContext(ContextComponents);

  const [optionButton, setOptionButton] = useState(false);

  const xbutton = moment === 'Antes do Forno' ?
    xbuttonRecheioBefore : xbuttonRecheioAfter

  const setXbutton = moment === 'Antes do Forno' ?
    setXbuttonRecheioBefore : setXbuttonRecheioAfter

  const generic = moment === 'Antes do Forno' ? genericAntes : genericApos
  const setGeneric = moment === 'Antes do Forno' ? setGenericAntes : setGenericApos

  const initial = useCallback(() => {

    setXbutton(arrayGenericCheckbox)

  }, [setXbutton, arrayGenericCheckbox])


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

  const somaArray = (itemName) => {
    if (itemName) {
      const numberSoma = xbutton.map((item) => {
        if (Object.keys(item)[0] === itemName[0]) {
          return {
            [Object.keys(item)[0]]: Object.values(item)[0] + 1
          }
        }
        return item;
      });
      setXbutton(numberSoma);
      actualSetList(name, numberSoma, generic, setGeneric);
    }
  };

  function subtractionArray(itemName) {
    const numberSub = xbutton.map((item) => {
      if (Object.keys(item)[0] === itemName[0] && Object.values(item)[0] > 0) {
        return {
          [Object.keys(item)[0]]: Object.values(item)[0] - 1
        }
      }
      return item;
    });
    setXbutton(numberSub);
    actualSetList(name, numberSub, generic, setGeneric);
  };

  function funcTurnBack() {
    setXbutton(arrayGenericCheckbox);
    const newGeneric = functionBack(name, generic)
    setGeneric(newGeneric)
  };

  useEffect(() => {
    initial()
  }, [initial])

  const label = (
    <DivButtonList>
      <ButtonCheck
        type="button"
        onClick={() => { setOptionButton(false) }}
      >
        {`${name}:`}
      </ButtonCheck>
      <ButtonReturn
        type="button"
        onClick={() => { funcTurnBack() }}
      >
        <img
          alt="tick icon"
          style={{ width: '15px' }}
          src={Return}
        />
      </ButtonReturn>
      <DivList>
        {xbutton.map((item, index) => (
          <DivSelect key={index}>
            <LabelListItens key={index} name={Object.keys(item)}>
              {Object.keys(item)}
              <DivButtonList>
              <ButtonSelect
                type="button"
                onClick={() => { somaArray(Object.keys(item)) }}
              >
                {`x${Object.values(item)}`}
              </ButtonSelect>
              </DivButtonList>
            </LabelListItens>
            <ButtonSelect
              type="button"
              onClick={() => { subtractionArray(Object.keys(item)) }}
            >
              {`-`}
            </ButtonSelect>
          </DivSelect>
        )
        )
        }
      </DivList>

    </DivButtonList>

  );


  return (
    <DivButton>
      {optionButton ? label : buttonOptionTrue}
    </DivButton>
  );
}

export default memo(RecheioCheckbox);