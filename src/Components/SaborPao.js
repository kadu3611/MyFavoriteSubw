import React, { useContext } from 'react';
import { objectArrays } from '../Arrays/arrays';
import ContextComponents from "../context/ContextComponents";
import { LabelRight } from '../Styles/home.styles'


function SaborPao() {
  const { arraySaborPao } = objectArrays;
  const { setSelectOptionPao } = useContext(ContextComponents);

  function showCheckboxes({ target }) {
    const { value } = target;
    setSelectOptionPao(value);
  };

  const select = (
    <LabelRight>
      Sabor do Pão:
      <select
        name="saborPao"
        onClick={showCheckboxes}
      >
        {
          arraySaborPao.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          )
          )
        }
      </select>
    </LabelRight>

  );
  return (
    select
  );
}

export default SaborPao;