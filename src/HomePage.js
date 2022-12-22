import React, { memo, useContext } from 'react';
import SaborPao from './Components/SaborPao';
import Name from './Components/Name';
import Options from './Components/Options';
import CardItem from './Components/CardItens';
import ButtonSelect from './Components/ButtonSelect';
import Favorites from './Components/Favorites';
import ContextComponents from './context/ContextComponents';


function HomePage() {

  const { selectOptionPao, genericAntes,
     genericApos, nameContext } = useContext(ContextComponents);

  return (
    <div>
      <form>
        <Name />
        <SaborPao />
        <div>
          Antes do Forno:
        </div>
        <Options
          moment="Antes do Forno"
        />
        <div>
          Depois do Forno:
        </div>
        <Options
          moment="Depois do Forno"
        />
      </form>
      <CardItem 
      name = {nameContext}
      bread = {selectOptionPao}
      before = {genericAntes}
      after = {genericApos}
      />
      <ButtonSelect />
      <Favorites />
    </div>

  );
}

export default memo(HomePage);
