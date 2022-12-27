import React, { useCallback } from 'react';
import { DivCenter } from '../Styles/home.styles'


function CardItem({ name, bread, before, after }) {

  const secondConditionReproductArrays = (item, length) => {

      return (
        
      <tr key={`${Object.keys(item)}${length}`}>
        <td key={`${Object.keys(item)}${length}`}>
          {
            Object.keys(item)
          }
        </td>
        {
          Object.values(item)?.map((elemento) => (
            elemento.map((object, inject) => (
              <td key={`${inject}`}>
                {Object.values(object)[0] > 0 && `${Object.keys(object)[0]}:
                   ${Object.values(object)[0]}`
                   }
              </td>
            ))

          ))
        }
      </tr>
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
    <DivCenter>
      <table>
        <thead>
          <tr>
            <th> Meu lanche favorito !</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Name: {name}</td>
          </tr>
          <tr>
            <td> {bread.length !== 0 &&
              `Sabor do Pão: ${bread}`}</td>
          </tr>

        </tbody>
        <tfoot>
          <tr>
            <th>
              Antes do Forno:
            </th>
          </tr>
          {

            reproductArrays(before)
          }
                        
          {console.log('lá vem')}
          <tr>
            <th>
              Depois do Forno:
            </th>
          </tr>
          {
            reproductArrays(after)
          }
        </tfoot>
      </table>
    </DivCenter>
  );
}

export default CardItem;
