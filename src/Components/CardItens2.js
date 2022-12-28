import React, { useCallback } from 'react';
import { DivCard, DivCenterCard, TableCard, TbodyCard,
   TheadCard, TfootCard, DivInlinecard, TrCard, TdCard } from '../Styles/home.styles'


function CardItem({ name, bread, before, after }) {

  const secondConditionReproductArrays = (item, length) => {
    const [ruleArray] = Object.values(item)?.map((arr) => (Object.values(arr)
    ?.filter((elemento) => Object.values(elemento)[0] > 0)))
      return (
        
      <TrCard key={`${Object.keys(item)}${length}`}>
        <TdCard key={`${Object.keys(item)}${length}`}>
          {
            `${Object.keys(item)}:`
          }
        </TdCard>
        {
          ruleArray.map((object, inject) => (
              <td key={`${inject}`}>
                {
                `${Object.keys(object)[0]}:
                   ${Object.values(object)[0]},`
                   }
              </td>
            ))

        }
      </TrCard>
      )
  }


  const reproductArrays = useCallback((genericArray) => (
    genericArray?.map((item, length) => {
      if (Object.keys(item)[0] === 'Salada'
        || Object.keys(item)[0] === 'Temperos'
        || Object.keys(item)[0] === 'Molhos') {
        return (
          <tr key={`${Object.keys(item)[0]}${length}`}>
            <td key={`${Object.keys(item)}${length}`}>
              {
                Object.keys(item)[0]
              }
            </td>
            {
              Object.values(item)?.map((elemento) => (
                elemento.map((object, inject) => (
                  <td key={`${inject}`}>
                    {`${object}, `}
                  </td>
                ))

              ))
            }
          </tr>
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
      <TableCard>
        <TheadCard>
          <tr>
            <th> Meu lanche favorito !</th>
          </tr>
        </TheadCard>
        <TbodyCard>
          <tr>
            <td> Nome: {name}</td>
          </tr>
          <tr>
            <td> {bread.length !== 0 &&
              `Sabor do Pão: ${bread}`}</td>
          </tr>
        </TbodyCard>
        <TfootCard>
          <TrCard>
            <th>
              Antes do Forno:
            </th>
          </TrCard>
          {

            reproductArrays(before)
          }
          <TrCard>
            <th>
              Depois do Forno:
            </th>
          </TrCard>
          {
            reproductArrays(after)
          }
        </TfootCard>
      </TableCard>
      </DivInlinecard>
    </DivCard>
    </DivCenterCard>
  );
}

export default CardItem;
