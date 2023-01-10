import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';


const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;

export const DotWrapper = styled.div`
display:inline;
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
    background-color: #5a346c;
    width:100%;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 420px) {
        display: flex;
    padding-bottom: 30px;
    background-color: #5a346c;

      }  

`;

export const DivCenterCard = styled.div`

    justify-content: left;
    align-items: left;
    background-color: #5a346c;
    padding-top: 10px;
    position: relative;
    left: 10%;
    top: 10%;
    width: 80%;
    @media (max-width: 420px) {
        display: inline;
        width: 100%;
    left: 0%;

      }  

`;


export const DivCard = styled.div`
    display: flex;
    background-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5%;
    border-radius: 10% 10% 30% 10%;
    width: 95%;
    left: 0%;
    @media (min-width: 1024px) {
        
      }  

`;

export const DivCardItens = styled.div`
    display: inline;
    width: 95%;

`;

export const DivCardTitle = styled.div`
font-size: 14px;
    padding-top: 2px;
    border-radius: 30px 30px 50px 30px;
    background-color: #ffc53d;
    border-color: #ffc53d;
    border-width: 0px;
    justify-content: center;
    display: flex;

    @media (min-width: 1024px) {
    font-size: 20px;

      }  

`;

export const DivCardNames = styled.div`
    display:inline;
    font-size: 18px;
    padding: 3px;
    padding-right: 10px;
    border-radius: 50px 50px 70px 10px;
    background-color: #2f803e;
    border-color: #2f803e;
    color: white;
    border-width: 0px;
    @media (max-width: 420px) {
    display: inline;
    padding: 3px;
    padding-right: 10px;
    border-radius: 30px 30px 50px 30px;
    font-size: 14px;
    background-color: #2f803e;
    border-color: #2f803e;

      }  

`;

export const DivCardTopics = styled.div`
    display: inline;
    font-size: 14px;
    border-radius: 30px 30px 50px 30px;
    background-color: #5a346c;
    border: 1px solid white;
    color: white;
    left: 3%;
    position: relative;

    @media (min-width: 420px) {
    font-size: 18px;
    padding: 3px;
    padding-right: 10px;
    border-radius: 50px 50px 70px 10px;
      }  

`;

export const DivOption = styled.div`
    border-radius: 3% 7% 50% 10%;
    font-size: 20px;
    width: 90%;
    padding: 15px;
    padding-top: 5px;
    padding-right: 5px;
    background-color: #2f803e;
    padding-bottom: 60px;
      
    @media (max-width: 420px) {
      
    width: 90%;
    padding: 15px;
    padding-top: 5px;
    padding-right: 5px;
    background-color: #2f803e;
    padding-bottom: 60px;

}
@media (max-width: 420px) {
  width: 90%;
  display: block;

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
padding-bottom: 0px;
`;

export const DivButtonList = styled.div`
    display: inline;
    padding: 2px;
    padding-bottom: 0px;
    margin-bottom: 0px;

`;

export const DivList = styled.div`
    padding-left: 5px;
`;

export const DivFavoritList = styled.div`
    display:flex;
    padding: 50px;

`;

export const DivSelect = styled.div`
    display: flex;
    padding-left: 10px;
    
    @media (max-width: 420px) {
        display: block;
        width:90%;  

}
`;

export const DivCaption = styled.div`
    font-size: 24px;
    padding: 4px;
    color: white;
    @media (min-width: 420px) {
      padding: 4px;
    }

`;

export const DivItens = styled.div`
    display: block;
        width:90%;
        padding: 1px;
        padding-right: 10px;
        padding-bottom: 1px;
        padding-left: 10px;
        font-size:13px;

    @media (min-width: 420px) {
    padding-bottom: 4px;
    padding-left: 10px;
    font-size:17px;
}
`;

export const DivCardMyFavorite = styled.div`
    text-align: center;
    font-size: 20px;
    @media (max-width: 420px) {
        font-size: 14px;
      } 

    
`;

export const DivInputCardTopics = styled.div`
padding-top: 3px;
padding-bottom: 3px;

    @media (max-width: 420px) {
        padding-top: 2px;
        padding-bottom: 2px;
    }
`;

export const DivItensCaptions = styled.div`
    display: inline;
`;

export const DivAjuste = styled.div`
    display: flex;
`;

export const DivLabelName = styled.div`
    display: inline;
    padding-left: 3px;
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
    @media (max-width: 420px) {
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
padding-top: 2px;
@media (max-width: 420px) {
        padding-bottom: 0px;
        padding-top: 0px;
      } 
`;

export const DivBefore = styled.div`
${props => console.log(props)};
display:${props => props.value ? "none" : "inline"};
@media (max-width: 420px) {
  display:${props => props.value ? "none" : "block"};

      } 
`;

export const DivAfter = styled.div`
display:${props => props.value ? "inline" : "none"};
@media (max-width: 420px) {
  display:${props => props.value ? "block" : "none"};
      } 
`;

export const DivMarketing = styled.div`
    display: flex;
    font-size: 18px;
    color:black;
    padding: 2px;
    padding-bottom: 0px;
    padding-left: 0px;
    justify-content: space-evenly;
    width:5%;
`;

export const ImagemMarketing = styled.img`
width: 20px;
height: 20px;
`;

export const AncoraMarketing = styled.a`
padding: 0px;
margin: 0px;
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
    @media (max-width: 420px) {
        font-size: 14px;

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

    @media (max-width: 420px) {
        font-size: 12px;

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

export const ButtonNext = styled.button`
display:flex;
position:relative;
left:1%;
bottom: 45px;
    padding: 10px;
    font-size: 15px;
    border-width: 0px;
    color: black;
    border:  0px solid #ffc53d ;
    background-color: white;
    border-radius: 10% 40% 10% 30%;

    :hover{
  cursor: pointe;
    transform: scale(1.02);
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
    @media (max-width: 420px) {
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
    @media (max-width: 420px) {
        font-size: 14px;

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
    @media (max-width: 420px) {
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
    border: 0px 

`;

export const InputFavorite = styled.input`
    font-size: 14px;
    justify-content: left;
    padding: 10px;
    border: 0px solid white;
    @media (max-width: 420px) {
        padding: 5px;

      }  
    
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
display:block;
    justify-content: center;
    padding-bottom: 10px;
    width:40%;

    @media (max-width: 420px) {
        width: 90%;
      }  
      @media (max-width: 768px) {
        width: 90%;
      }  


`;

export const ParagraphCard = styled.p`
    font-size:10px;

    @media (max-width: 420px) {
        width: 100%;
      }  
      @media (max-width: 768px) {
        width: 100%;
      }  


`;