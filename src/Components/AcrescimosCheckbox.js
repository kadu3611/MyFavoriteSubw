import React, { useState, useContext, useEffect, memo, useCallback } from 'react';
import { func, actualSetList, functionBack } from '../Fuctions/functions';
import ContextComponents from '../context/ContextComponents';
import { DivButton, DivButtonList, LabelListItens,
   ButtonCheck, DivList, ButtonSelect } from '../Styles/home.styles';


function AcrescimosCheckbox({ name, arrayGenericCheckbox, moment }) {

  const { genericAntes,
    setGenericAntes,
    xbuttonAcrescimosBefore, setXbuttonAcrescimosBefore,
    xbuttonAcrescimosAfter, setXbuttonAcrescimosAfter,
    genericApos, setGenericApos
  } = useContext(ContextComponents);

  const [optionButton, setOptionButton] = useState(false);

  const xbutton = moment === 'Antes do Forno' ?
  xbuttonAcrescimosBefore : xbuttonAcrescimosAfter
  
 const setXbutton =  moment === 'Antes do Forno' ?
 setXbuttonAcrescimosBefore : setXbuttonAcrescimosAfter

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
      {`${name} >`}
    </ButtonCheck>
  );

  const somaArray = (itemName) => {
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

  useEffect(() => {
    initial()
  }, [initial])

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

  const label = (
    <DivButtonList>
      <ButtonCheck
        type="button"
        onClick={() => { setOptionButton(false) }}
      >{`${name}:`}
      </ButtonCheck>
       <DivList>
                {xbutton.map((item, index) => (
          <div key={index}>
          <LabelListItens key={index} name={Object.keys(item)}>
            {Object.keys(item)}
            
            <ButtonSelect
            name={Object.keys(item)}
              type="button"
              onClick={() => { somaArray(Object.keys(item)) }}
            >
              {`x${Object.values(item)}`}
            </ButtonSelect>
            </LabelListItens>
            <ButtonSelect
              type="button"
              onClick={() => { subtractionArray(Object.keys(item)) }}
            >
              {`-`}
            </ButtonSelect>
            

          </div>
        )
        )
        }
      </DivList>
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

export default memo(AcrescimosCheckbox);