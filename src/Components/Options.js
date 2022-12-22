import React from 'react';
import { objectArrays } from '../Arrays/arrays';
import RecheioCheckbox from './RecheioCheckbox';
import AcrescimosCheckbox from './AcrescimosCheckbox';
import GenericSelectSalad from './GenericSelectSalad';
import GenericSelectTempero from './GenericSelectTempero';
import GenericSelectMolhos from './GenericSelectMolhos';


function Options({moment}) {

    const { arrayAcrescimos, arraySalada, arrayTemperos, arrayMolhos,
         arrayRecheio } = objectArrays
 
    return (
      <div>
        <RecheioCheckbox
          name="Recheio do pão"
          arrayGenericCheckbox={arrayRecheio}
          moment={moment}
        />
         <AcrescimosCheckbox
          name="Acréscimos"
          arrayGenericCheckbox={arrayAcrescimos}
          moment={moment}
        />
         <GenericSelectSalad
          name="Salada"
          arrayGeneric={arraySalada}
          moment={moment}
        />
        <GenericSelectTempero
          name="Temperos"
          arrayGeneric={arrayTemperos}
          moment={moment}
        />
        <GenericSelectMolhos
          name="Molhos"
          arrayGeneric={arrayMolhos}
          moment={moment}
        />
        </div>
        
    );
}

export default Options;
