import React from 'react';
import SaborPao from './Components/SaborPao';
import Name from './Components/Name';
import Options from './Components/Antes/Options';
import CardItem from './Components/CardItens';


function HomePage() {
 
  return (
    <div>
      <form>
        <Name />
        <SaborPao />
        <div>
          Antes do Forno:
        </div>
        <Options
          moment="Antes do Forno"
        />
        <div>
          Depois do Forno:
        </div>
        <Options
          moment="Depois do Forno"
        />
      </form>
      <CardItem/>
      
    </div>

  );
}

export default HomePage;
