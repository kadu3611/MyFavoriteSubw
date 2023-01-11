import React, { memo, useContext } from 'react';
import SaborPao from './Components/SaborPao';
import Name from './Components/Name';
import Options from './Components/Options';
import CardItem from './Components/CardItens';
import ButtonSelect from './Components/ButtonSave';
import Favorites from './Components/Favorites';
import ContextComponents from './context/ContextComponents';
import { DotWrapper, FormWrapper, DivCenterBorderBlack,
   DivCaption, DivTitle, DivBefore, DivAfter, ButtonNext, FadeIn } from './Styles/home.styles'
import { useState } from 'react';
import Marketing from './Components/Marketing';


function HomePage() {

  const { selectOptionPao, genericAntes,
    genericApos, nameContext } = useContext(ContextComponents);

    const [stateOption, setStateOption] = useState(false);

    const changeOption = () => {
      setStateOption(!stateOption)
    }

  return (
    <FadeIn>
    <DotWrapper>
    <Marketing/>
      <DivTitle>
        {`MyFavoriteSubw : )`}
      </DivTitle>
      <DivCenterBorderBlack>
        <FormWrapper>
          <Name />
          <SaborPao />
          <DivAfter
          value={stateOption}>
            <DivCaption>
            Depois do Forno
            </DivCaption>
            <Options
              moment="Depois do Forno"
            />
            <ButtonNext
              type="button"
              onClick={changeOption}
            >
              {`< Antes do Forno`}
            </ButtonNext>
          </DivAfter>
          <DivBefore
          value={stateOption}>
            <DivCaption>
            Antes do Forno
            </DivCaption>
              <Options
                moment="Antes do Forno"
              />
            <ButtonNext
              type="button"
              onClick={changeOption}
            >
              {`Depois do Forno >`}
            </ButtonNext>
          </DivBefore>
          
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
    </FadeIn>
  );
}

export default memo(HomePage);
