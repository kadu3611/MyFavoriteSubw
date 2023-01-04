import React, { memo, useContext } from 'react';
import SaborPao from './Components/SaborPao';
import Name from './Components/Name';
import Options from './Components/Options';
import OptionsAfter from './Components/OptionsAfter'
import CardItem from './Components/CardItens';
import ButtonSelect from './Components/ButtonSave';
import Favorites from './Components/Favorites';
import ContextComponents from './context/ContextComponents';
import { DotWrapper, FormWrapper, DivCenterBorderBlack,
   DivCaption, DivTitle } from './Styles/home.styles'


function HomePage() {

  const { selectOptionPao, genericAntes,
    genericApos, nameContext } = useContext(ContextComponents);

  return (
    <DotWrapper>
      <DivTitle>
        {`MyFavoriteSubw : )`}
      </DivTitle>
      <DivCenterBorderBlack>
        <FormWrapper>
          <Name />
          <SaborPao />
          <DivCaption>
            Antes do Forno:
          </DivCaption>
          <Options
            moment="Antes do Forno"
          />
          <DivCaption>
            Depois do Forno:
          </DivCaption>
          <OptionsAfter
            moment="Depois do Forno"
          />
          <ButtonSelect />
        </FormWrapper>
      </DivCenterBorderBlack>
      <CardItem
        name={nameContext}
        bread={selectOptionPao}
        before={genericAntes}
        after={genericApos}
      />

      <Favorites />
    </DotWrapper>

  );
}

export default memo(HomePage);
