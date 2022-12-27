import React, { useState, useContext, useEffect, memo, useCallback } from 'react';
import { func, actualSetList, functionBack } from '../Fuctions/functions';
import ContextComponents from '../context/ContextComponents';
import { DivButton, DivButtonList, LabelListItens, ButtonCheck } from '../Styles/home.styles';

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
   
  const setXbutton =  moment === 'Antes do Forno' ?
   setXbuttonRecheioBefore : setXbuttonRecheioAfter

  const generic = moment === 'Antes do Forno' ? genericAntes : genericApos
  const setGeneric = moment === 'Antes do Forno' ? setGenericAntes : setGenericApos

  const initial = useCallback(() => {

    setXbutton(arrayGenericCheckbox)

  }, [setXbutton, arrayGenericCheckbox])


  const buttonOptionTrue = (
    <ButtonCheck
      type="button"
      onClick={() => func(setOptionButton)}
    >
      {`${name} =>`}
    </ButtonCheck>
  );

  const  somaArray = (itemName) => {
    if(itemName){
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
      <button
        type="button"
        onClick={() => { setOptionButton(false) }}
      >{`${name}:`}
      </button>
      <div>
        {xbutton.map((item, index) => (
          <div key={index}>
          <LabelListItens key={index} name={Object.keys(item)}/>
            {Object.keys(item)}
            <button
              type="button"
              onClick={() => { subtractionArray(Object.keys(item)) }}
            >
              {`-`}
            </button>
            <button
              type="button"
              onClick={() => { somaArray(Object.keys(item)) }}
            >
              {`x${Object.values(item)}`}
            </button>
          </div>
        )
        )
        }
      </div>
      <button
        type="button"
        onClick={() => { funcTurnBack() }}
      >
        retornar
      </button>
    </DivButtonList>

  );
  

  return (
    <DivButton>
      {optionButton ? label : buttonOptionTrue}
    </DivButton>
  );
}

export default memo(RecheioCheckbox);