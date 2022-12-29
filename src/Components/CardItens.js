import React, { useCallback } from 'react';
import {
  DivCard, DivCenterCard, DivItens, DivItensBefore, DivItensAfter, DivAjuste
} from '../Styles/home.styles'


function CardItem({ name, bread, before, after }) {

  const secondConditionReproductArrays = (item, length) => {
    const [ruleArray] = Object.values(item)?.map((arr) => (Object.values(arr)
      ?.filter((elemento) => Object.values(elemento)[0] > 0)))
    return (

      <DivItens key={`${Object.keys(item)}${length}`}>
        <DivItens key={`${Object.keys(item)}${length}`}>
          {
            `${Object.keys(item)}:`
          }
        </DivItens>
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
            <DivItens key={`${Object.keys(item)}${length}`}>
              {
                `${Object.keys(item)[0]}:`
              }
            </DivItens>
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
      <DivItens>
          <DivItens> Meu lanche favorito !</DivItens>
          <DivItens> Nome: {name}</DivItens>
          <DivItens> {bread.length !== 0 &&
            `Sabor do Pão: ${bread}`}
          </DivItens>
        <DivItensBefore>
            Antes do Forno:
            {
              reproductArrays(before)
            }
        </DivItensBefore>
        <DivItensAfter>
          Depois do Forno:
        {
          reproductArrays(after)
        }
      </DivItensAfter>
      </DivItens>
    </DivCard>
    </DivCenterCard >
  );
}

export default CardItem;
