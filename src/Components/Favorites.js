import React, { useEffect, memo, useContext, useState, useCallback } from 'react';
import { db } from '../Firebase/firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import ContextComponents from '../context/ContextComponents';
import CardItem from './CardItens';
import {
  DivFavoritos, DivFavoritosOrganizer,
  ButtonFavoritos, DivFavoritosButtom,
  DivFavoritoStyle, InputFavorite
} from '../Styles/home.styles'


function Favorites() {

  const { allFavorites, setAllFavorites } = useContext(ContextComponents);

  const [allCard, setAllCard] = useState(<div></div>)

  const [search, setSearch] = useState([])


  const userCollectionRef = collection(db, 'Pedido');

  const getUsers = async () => {

    const data = await getDocs(userCollectionRef);
    setAllFavorites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setSearch(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    console.log(1);
  }

  const buttonMap = (
    search?.map((item) => (
      <DivFavoritosButtom
        key={item.id}>
        <ButtonFavoritos
          key={item.id}
          type="button"
          onClick={() => funCard(item.name, item.saborPao, item.Antes, item.Depois)}
        >
          {`${item.name}`}
        </ButtonFavoritos>
      </DivFavoritosButtom>
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

  const funSeacrh = useCallback(({ target }) => {
    const { value } = target
    const searchFilter = allFavorites.filter(item => item.name.includes(value))
    setSearch(searchFilter)
  }, [allFavorites, setSearch])

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
  }, [funSeacrh])

  return (
    <DivFavoritosOrganizer>
      <DivFavoritoStyle>
        <DivFavoritos>
          {`Favoritados: )`}
        </DivFavoritos>
        <DivFavoritos>
          <InputFavorite
            type="text"
            name="name"
            onChange={funSeacrh}
            placeholder="MySubw"
          />
        </DivFavoritos>
        {
          Object.values(allCard.props).length <= 0 ?
            buttonMap
            :
            allCard
        }
      </DivFavoritoStyle>
    </DivFavoritosOrganizer>

  );
}

export default memo(Favorites);
