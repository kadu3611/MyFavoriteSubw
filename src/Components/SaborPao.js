import React, { useContext } from 'react';
import { objectArrays } from '../Arrays/arrays';
import ContextComponents from "../context/ContextComponents";
import { LabelRight, SelectName } from '../Styles/home.styles'


function SaborPao() {
  const { arraySaborPao } = objectArrays;
  const { setSelectOptionPao } = useContext(ContextComponents);

  function showCheckboxes({ target }) {
    const { value } = target;
    setSelectOptionPao(value);
  };

  const select = (
    <div>
    <LabelRight>
      Sabor do Pão:
    </LabelRight>
      <SelectName
        name="saborPao"
        onClick={showCheckboxes}
      >
        {
          arraySaborPao.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          )
          )
        }
      </SelectName>
      </div>

  );
  return (
    select
  );
}

export default SaborPao;