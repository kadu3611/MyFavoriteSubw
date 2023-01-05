import styled from 'styled-components';


export const DotWrapper = styled.div`
    background-color: #5a346c;

    :root {
        width: 100%;
        background-color: #5a346c;

      @media (min-width: 768px) {
        width: 100%;
    background-color: #5a346c;

      }

      @media (min-width: 1024px) {
        width: 90%;
    background-color: #5a346c;

      }
    }
    
`;

export const DivCenterBorderBlack = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #5a346c;
    padding-bottom: 30px;
    width:100%
`;

export const DivCenterCard = styled.div`
    justify-content: left;
    align-items: left;
    background-color: #5a346c;
    position: relative;
    left: 10%;
    top: 10%;
    width: 80%;
    @media (max-width: 400px) {
        display: inline;
        width: 100%;
    left: 0%;

      }  

`;

export const DivCard = styled.div`
    display: flex;
    font-size: 20px;
    background-color: white;
    padding-top: 10px;
    padding-left: 5%;
    border-radius: 10% 10% 30% 10%;
    width: 95%;
    left: 0%;
    @media (min-width: 1024px) {
        display: flex;
        
      }  

`;

export const DivCardItens = styled.div`
    font-size: 20px;
    display: block;
    width: 95%;
    @media (max-width: 1024) {
    display: flex;
      }  

`;

export const DivCardTitle = styled.div`
font-size: 20px;
    padding-top: 2px;
    border-radius: 30px 30px 50px 30px;
    background-color: #ffc53d;
    border-color: #ffc53d;
    border-width: 0px;
    justify-content: center;
    display: flex;

    @media (min-width: 1024) {
    display: flex;
    font-size: 20px;
    border-radius: 30px 30px 50px 30px;
    background-color: #ffc53d;
    border-color: #ffc53d;
      }  

`;

export const DivCardNames = styled.div`
    display:inline;
    font-size: 20px;
    padding: 3px;
    padding-right: 10px;
    border-radius: 50px 50px 70px 10px;
    background-color: #2f803e;
    border-color: #2f803e;
    color: white;
    border-width: 0px;
    @media (max-width: 400px) {
    display: inline;
    padding: 3px;
    padding-right: 10px;
    border-radius: 30px 30px 50px 30px;
      }  

`;

export const DivCardTopics = styled.div`
    display: inline;
    font-size: 20px;
    border-radius: 30px 30px 50px 30px;
    background-color: #5a346c;
    border-color: white;
    color: white;
    left: 3%;
    position: relative;

    @media (min-width: 400px) {
    font-size: 20px;
    padding: 3px;
    padding-right: 10px;
    border-radius: 50px 50px 70px 10px;
    border-color: white;
    color: white;
    border-width: 0px;
      }  

`;


export const DivOption = styled.div`
    border-radius: 10% 10% 60% 10%;
    display: block;
    font-size: 20px;
    padding: 15px;
    padding-top: 5px;
    background-color: #2f803e;
    @media (min-width: 400px) {
  width: 90%;
}

@media (min-width: 768px) {
  width: 90%;
}

@media (max-width: 1024px) {
  width: 80%;
  justify-items: columns;
    justify-content: space-evenly;
}
`;

export const DivButton = styled.div`
    display: block;
    font-size: 16px;
    padding: 2px;

`;

export const DivButtonList = styled.div`
    display: inline;
    padding: 2px;
    padding-bottom: 0px;

`;

export const DivList = styled.div`
    font-size: 16px;
    padding-left: 5px;
`;

export const DivFavoritList = styled.div`
    display:flex;
    padding: 50px;

`;

export const DivSelect = styled.div`
    display: flex;
    padding-left: 10px;
    
    @media (max-width: 400px) {
        display: block;
        width:90%;  
}
`;

export const DivCaption = styled.div`
    font-size: 24px;
    padding: 4px;
    color: white;
`;

export const DivItens = styled.div`
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;

    @media (max-width: 400px) {
        display: block;
        width:90%;
        padding: 1px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
}
`;

export const DivCardMyFavorite = styled.div`
    text-align: center;
    
`;

export const DivItensCaptions = styled.div`
    display: inline;
    
`;

export const DivAjuste = styled.div`
    display: flex;

`;

export const DivFavoritos = styled.div`
display: flex;
font-size: 20px;
color: white;
justify-content: center;
padding: 10px;
`;

export const DivFavoritosOrganizer = styled.div`
padding-top: 20px;
padding-bottom: 20px;
`;

export const DivFavoritoStyle = styled.div`
width: 100%;
border-radius: 30% 10% 30% 10%;
`;

export const DivFavoritosButtom = styled.div`
display: flex;
padding-top: 2px;
padding-bottom: 2px;
justify-content: center;

`;

export const DivTitle = styled.div`
    display: flex;
    width: 100%;
    color:white;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
    font-size: 50px;
    @media (max-width: 400px) {
        font-size: 35px;
      } 
      @media (max-width: 768px) {
        font-size: 35px;
      }  
`;

export const DivSeparator = styled.div`
   padding: 5px;
`;

export const DivlistItens = styled.div`
display: block;
padding-top: 5px;
`;

export const ButtonFavoritos = styled.button`
    display: flex;
    font-size: 16px;
    color: white;
    height: 25px;
    width: 200px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 30px 30px 50px 30px;
    background-color: white;
    color: black;
    border-width: 0px;
    :hover{
        background-color: #2f803e;
    color: white;


  cursor: pointe;
    transform: scale(1.05);
    }

`;

export const LabelCenter = styled.label`
display: block;
    font-size: 20px;
    justify-content: left;
    padding: 2px;
    color: white;
     
`;

export const LabelRight = styled.label`
    font-size: 20px;
    justify-items: right;
    padding: 2px;
    color: white;
`;

export const LabelListItens = styled.label`
    display: inline;
    font-size: 18px;
    padding-top: 2px;
    padding-right: 2px;
    color: black;
    :hover{
        //#2f803e
        //#DDDBBB
        color: white;
    transform: scale(1.05);
    }
    
`;

export const LabelCheckbox = styled.label`
    display: flex;
    font-size: 18px;
    padding-top: 2px;
    padding-bottom: 2px;
   img {
      display: ${props => props.checked ? 'flex' : 'none'};
      filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg) brightness(105%) contrast(68%);
      padding-left: 3px;
   }
   :hover{
        //#2f803e
        //#DDDBBB
        color: white;
    transform: scale(1.05);
    padding-left: 18px;
    }

`;

export const ButtonSaveFalse = styled.button`
    padding: 20px;
    font-size: 20px;
    position: relative;
    left: 40%;
    top: 10px;
    border-width: 0px;
    border-radius: 10% 10% 30% 10%;

    :hover{
        //#2f803e
        //#DDDBBB
  cursor: pointe;
    transform: scale(1.05);
    }
`;

export const ButtonSaveTrue = styled.button`
    padding: 20px;
    font-size: 20px;
    position: relative;
    left: 40%;
    top: 10px;
    border-width: 0px;
    color: #2f803e;
    border:  0px solid #ffc53d ;
    background-color: white;
    border-radius: 10% 10% 30% 10%;

    :hover{
  cursor: pointe;
    transform: scale(1.05);
    }
`;

export const ButtonCheck = styled.button`
    font-size: 14px;
    height: 25px;
    width: 150px;
    padding-top: 2px;
    border-radius: 30px 30px 50px 30px;
    background-color: #ffc53d;
        border-color: #ffc53d;
    border-width: 0px;
    :hover{
        background-color: white;
        border-color: white;

  cursor: pointe;
    transform: scale(1.05);
    }
`;

export const ButtonSelect = styled.button`
font-size:16px;
    border: 0px solid;
    padding-left: 3px;
    padding-right: 5px;
    background: #2f803e;
    justify-content: center;
    align-items: center;
    color: #ffc53d;
    :hover{
  cursor: pointe;
    transform: scale(1.05);
    border: 1px solid white;

    }
    @media (max-width: 400px) {
    padding-left: 3px;
    padding-right: 3px;
      }  
`;

export const ButtonReturn = styled.button`
    font-size:14px;
    border: 0px solid;
    padding: 4px;
    justify-content: center;
    background:#2f803e;
    border: 1px solid #ffc53d;
    border-radius: 10% 10% 30% 10%;
    left: 6px;
    position: relative;
    :hover{
        //#2f803e
        //#DDDBBB
  cursor: pointe;
    border: 1px solid white;
    border-radius: 10% 10% 30% 10%;

    }
`;

export const ButtonSelectItem = styled.button`
display: flex;
    font-size:18px;
    border: 0px solid white;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    background: #2f803e;
    justify-content: center;
    color: black;
    :hover{
  cursor: pointe;
    transform: scale(1.05);
    border: 1px solid white;
    
    }
`;

export const ButtonClose = styled.button`
    font-size:16px;
    border: 0px solid;
    padding: 5px;
    background: #2f803e;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 10% 5% 30% 10%;
    border-color: black;
    position: relative;
    left: 10%;
    :hover{
  cursor: pointe;
    transform: scale(1.05);
    border: 1px solid white;

    }
    @media (max-width: 400px) {
    padding-left: 3px;
    padding-right: 3px;
    position: relative;
    left: 0%;
      }  
`;


export const SelectName = styled.select`
    border-radius: 10px;
    border: none;
    text-transform: capitalize;
    color: black;
    background: white;
    text-align: left;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    :active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

`;

export const SelectList = styled.select`
    font-size: 16px;
    padding-left: 5px;

`;

export const InputName = styled.input`
    font-size: 16px;
    justify-content: left;
    padding: 2px;
    border-radius: 10px;

`;

export const InputFavorite = styled.input`
    font-size: 14px;
    justify-content: left;
    padding: 2px;
    border: 0px solid white;
`;

export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
display: grid;
overflow: hidden;
   white-space: nowrap;width: 1px;
   height: 1px;
   margin: -1px;
   padding: 2px;
      
`;

export const FormWrapper = styled.form`
    justify-content: space-evenly;
    padding-bottom: 10px;
    width:60%;

    @media (max-width: 400px) {
        width: 100%;
      }  
      @media (max-width: 768px) {
        width: 100%;
      }  


`;