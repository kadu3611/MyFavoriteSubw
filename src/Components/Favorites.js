import React, { useEffect, memo, useContext, useState } from 'react';
import { db } from '../FIrebase/firebase-config'
import { collection, getDocs} from 'firebase/firestore'
import ContextComponents from '../context/ContextComponents';
import CardItem from './CardItens';
import { DivCenter } from '../Styles/home.styles'


function Favorites() {

  const { allFavorites, setAllFavorites } = useContext(ContextComponents);

  const [allCard, setAllCard] = useState(<div></div>)

  const userCollectionRef = collection(db, 'Pedido');

  const getUsers = async () => {

    const data = await getDocs(userCollectionRef);
    setAllFavorites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  const buttonMap = (
    allFavorites?.map((item) => (
      <div
      key={item.id}>
        <button
          key={item.id}
          type="button"
          onClick={() => funCard(item.name, item.saborPao, item.Antes, item.Depois)}
        >
          {`${item.name} =>`}
        </button>
      </div>
    ))
  )

  const closeCard = () => {
    setAllCard(<div></div>)
  }

  const funCard = (name, bread, before, after) => {

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
          onClick={() => closeCard()}
        >
          Fechar
        </button>
      </div>
    )

  }

  useEffect(() => {
    // getUsers()
  }, [])

  return (
    <DivCenter>
      Favoritados:
      {
        Object.values(allCard.props).length <= 0 ?
          buttonMap
          :
          allCard
      }
    </DivCenter>

  );
}

export default memo(Favorites);
