import React, { useState, useContext, useEffect, useMemo, useCallback } from 'react';
import { func, actualSetList } from './Fuctions/functions';
import ContextComponents from '../context/ContextComponents';

function GenericCheckbox({ name, arrayGenericCheckbox, moment }) {

  const { genericAntes,
    setGenericAntes,
    genericApos,
    setGenericApos,

  } = useContext(ContextComponents);

  const [optionButton, setOptionButton] = useState(false);
  console.log(arrayGenericCheckbox, 'arrayGenericCheckbox ===============');

  // const initial = useCallback(() => {
  //   setXbutton(arrayGenericCheckbox)},
  // [arrayGenericCheckbox]);
  const [xbutton, setXbutton] = useState([]);
  console.log(genericAntes, 'genericAntes Checkbox');

  useEffect(() => {
    setXbutton(arrayGenericCheckbox);
  },[
    genericAntes, arrayGenericCheckbox,setXbutton
    ]);
    useEffect(() => {
    },[
      genericAntes
      ]);
  

  // let setGenericMoment = undefined
  // let genericMoment = undefined

  // function funcMoment(){
  //   if (moment === "Antes do Forno") {
  //     setGenericMoment = setGenericAntes
  //     genericMoment = genericAntes
  //   } else {
  //     setGenericMoment = setGenericApos
  //     genericMoment = genericApos

  //   }

  // }

  const buttonOptionTrue = (
    <button
      type="button"
      onClick={() => func(setOptionButton)}
    >
      {`${name} =>`}
    </button>
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
    if (moment === "Antes do Forno") {
    actualSetList(name, numberSoma, genericAntes, setGenericAntes);

    } else {
    actualSetList(name, numberSoma, genericApos, setGenericApos);
    }
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
if (moment === "Antes do Forno") {
    actualSetList(name, numberSub, genericAntes, setGenericAntes);

    } else {
    actualSetList(name, numberSub, genericApos, setGenericApos);
    }

  };

  function funcTurnBack() {
    setXbutton(arrayGenericCheckbox);
if (moment === "Antes do Forno") {
    actualSetList(name, arrayGenericCheckbox, genericAntes, setGenericAntes);

    } else {
    actualSetList(name, arrayGenericCheckbox, genericApos, setGenericApos);
    }
  };

  const label = (
    <div>
      <button
        type="button"
        onClick={() => { setOptionButton(false) }}
      >{`${name}:`}
      </button>
      <label>
        {xbutton.map((item, index) => (
          <label key={index} name={Object.keys(item)}>
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
          </label>
        )
        )
        }
      </label>
      <button
        type="button"
        onClick={() => { funcTurnBack() }}
      >
        retornar
      </button>
    </div>

  );
  

  return (
    <div>
      {optionButton ? label : buttonOptionTrue}
    </div>
  );
}

export default GenericCheckbox;