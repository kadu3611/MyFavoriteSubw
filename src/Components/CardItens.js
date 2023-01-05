import React, { useCallback } from 'react';
import {
  DivCard, DivCenterCard, DivItens, DivItensCaptions,
  DivCardItens, DivCardTitle, DivCardMyFavorite,
  DivCardTopics, DivCardNames, DivInputCardTopics
} from '../Styles/home.styles'


function CardItem({ name, bread, before, after }) {

  const secondConditionReproductArrays = (item, length) => {
    const [ruleArray] = Object.values(item)?.map((arr) => (Object.values(arr)
      ?.filter((elemento) => Object.values(elemento)[0] > 0)))
    return (

      <DivItens key={`${Object.keys(item)}${length}`}>
        <DivCardTitle key={`${Object.keys(item)}${length}`}>
          {
            `${Object.keys(item)}:`
          }
        </DivCardTitle>
        {
          ruleArray.map((object, inject) => (
            <DivItens key={`${inject}`}>
              {
                `${Object.keys(object)[0]}:
                   ${Object.values(object)[0]},`
              }
            </DivItens>
          ))

        }
      </DivItens>
    )
  }


  const reproductArrays = useCallback((genericArray) => (
    genericArray?.map((item, length) => {
      if (Object.keys(item)[0] === 'Salada'
        || Object.keys(item)[0] === 'Temperos'
        || Object.keys(item)[0] === 'Molhos') {
        return (
          <DivItens key={`${Object.keys(item)[0]}${length}`}>
            <DivCardTitle key={`${Object.keys(item)}${length}`}>
              {
                `${Object.keys(item)[0]}:`
              }
            </DivCardTitle>
            {
              Object.values(item)?.map((elemento) => (
                elemento.map((object, inject) => (
                  <DivItens key={`${inject}`}>
                    {`${object}, `}
                  </DivItens>
                ))

              ))
            }
          </DivItens>
        )
      }
      return (secondConditionReproductArrays(item, length))
    }
    )


  ), [])


  return (
    <DivCenterCard>
      <DivCard>
        <DivCardItens>
          <DivCardMyFavorite>
            Meu lanche favorito !
          </DivCardMyFavorite>
          <DivItens>
            <DivCardNames>
              Nome:
            </DivCardNames>
            <DivInputCardTopics>
              {name}
            </DivInputCardTopics>
          </DivItens>
          {bread.length !== 0 &&
            <DivItens>
              <DivCardNames>
                Sabor do Pão:
              </DivCardNames>
              <DivInputCardTopics>
                {bread}
              </DivInputCardTopics>
            </DivItens>
          }

          <DivItensCaptions>
            <DivCardTopics>
              Antes do Forno:
            </DivCardTopics>
            {
              reproductArrays(before)
            }
          </DivItensCaptions>
          <DivItensCaptions>
            <DivCardTopics>
              Depois do Forno:
            </DivCardTopics>
            {
              reproductArrays(after)
            }
          </DivItensCaptions>
        </DivCardItens>
      </DivCard>
    </DivCenterCard >
  );
}

export default CardItem;
