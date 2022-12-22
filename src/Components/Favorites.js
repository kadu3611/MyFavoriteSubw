import React, { useEffect, memo, useContext, useState } from 'react';
import { db } from '../FIrebase/firebase-config'
import { collection, getDocs, doc, } from 'firebase/firestore'
import ContextComponents from '../context/ContextComponents';
import CardItem from './CardItens';

function Favorites() {

  const { allFavorites, setAllFavorites } = useContext(ContextComponents);

  const [allCard, setAllCard] = useState(<div></div>)

  const userCollectionRef = collection(db, 'Pedido');
  // console.log(recheioCollectionRef);

  const getUsers = async () => {

    const data = await getDocs(userCollectionRef);
    setAllFavorites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data, 'data');
  }
  console.log(allFavorites, 'allFavorites');

  const closeCard = () => {
    setAllCard(<div></div>)
    console.log('to aqui close');
  }

  const funCard = (name, bread, before, after) => {
    console.log('teste');

    setAllCard(
      <div>
        <CardItem
          name={name}
          bread={bread}
          before={before}
          after={after}
        />
        <button
          type="button"
          onClick={() => funCard(closeCard)}
        >
          Fechar
        </button>
      </div>
    )
    console.log(allCard, 'all dentro da func');

  }
  console.log(allCard.props, 'all fora da func');


  useEffect(() => {
    // getUsers()
  }, [])

  return (
    <div>
      Favoritados:
      {
        console.log(allCard, 'dentro do DOM')
      }
      {
        Object.values(allCard.props).length <= 0 ?
          allFavorites?.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => funCard(item.name, item.saborPao, item.Antes, item.Depois)}
            >
              {`${item.name} =>`}
            </button>

          ))
          :
          allCard
      }


    </div>

  );
}

export default memo(Favorites);
