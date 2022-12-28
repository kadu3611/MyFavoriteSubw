import React, { useCallback } from 'react';
import {
  DivCard, DivCenterCard, TableCard, TbodyCard,
  TheadCard, TfootCard, DivInlinecard, TrCard, TdCard
} from '../Styles/home.styles'


function CardItem({ name, bread, before, after }) {

  const secondConditionReproductArrays = (item, length) => {
    const [ruleArray] = Object.values(item)?.map((arr) => (Object.values(arr)
      ?.filter((elemento) => Object.values(elemento)[0] > 0)))
    return (

      <div key={`${Object.keys(item)}${length}`}>
        <div key={`${Object.keys(item)}${length}`}>
          {
            `${Object.keys(item)}:`
          }
        </div>
        {
          ruleArray.map((object, inject) => (
            <div key={`${inject}`}>
              {
                `${Object.keys(object)[0]}:
                   ${Object.values(object)[0]},`
              }
            </div>
          ))

        }
      </div>
    )
  }


  const reproductArrays = useCallback((genericArray) => (
    genericArray?.map((item, length) => {
      if (Object.keys(item)[0] === 'Salada'
        || Object.keys(item)[0] === 'Temperos'
        || Object.keys(item)[0] === 'Molhos') {
        return (
          <div key={`${Object.keys(item)[0]}${length}`}>
            <div key={`${Object.keys(item)}${length}`}>
              {
                `${Object.keys(item)[0]}:`
              }
            </div>
            {
              Object.values(item)?.map((elemento) => (
                elemento.map((object, inject) => (
                  <div key={`${inject}`}>
                    {`${object}, `}
                  </div>
                ))

              ))
            }
          </div>
        )
      }
      return (secondConditionReproductArrays(item, length))
    }
    )


  ), [])


  return (
    <DivCenterCard>
      <DivCard>
        <DivInlinecard>
          <div> Meu lanche favorito !</div>
          <div> Nome: {name}</div>
          <div> {bread.length !== 0 &&
            `Sabor do Pão: ${bread}`}
          </div>
        </DivInlinecard>
        <div>

          Antes do Forno:
        </div>
        {

          reproductArrays(before)
        }
        <div>
          Depois do Forno:
        </div>
        {
          reproductArrays(after)
        }


      </DivCard>
    </DivCenterCard >
  );
}

export default CardItem;
