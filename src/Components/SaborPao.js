import React, { useContext } from 'react';
import { objectArrays } from '../Arrays/arrays';
import ContextComponents from "../context/ContextComponents";

function SaborPao() {
  const { arraySaborPao } = objectArrays;
  const { setSelectOptionPao} = useContext(ContextComponents);

        function showCheckboxes({ target }) {
          const { value } = target;
          setSelectOptionPao(value);
      };

      const select = (
        <label>
          Sabor do Pão:
        <select
             name="saborPao"
             onClick={showCheckboxes}
           >
            {
            arraySaborPao.map((item, index) =>(          
            <option key={index} value={item}>{item}</option>
           )
            )
       }
            </select>
          </label>

      );
    return (
        <div>
            { select }
          </div>
    );
  }
  
  export default SaborPao;