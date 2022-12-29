import styled from 'styled-components';


export const DotWrapper = styled.div`
    background-color: #5a346c;

`;

export const DivCenterBorderBlack = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #5a346c;

`;

export const DivCenter = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: left;
    align-items: left;
    padding-left: 230px;
    background-color: #5a346c;

`;

export const DivCenterCard = styled.div`
    font-size: 20px;
    justify-content: left;
    align-items: left;
    background-color: #5a346c;
    padding-left: 50px;


`;

export const DivCard = styled.div`
    display: flex;
    font-size: 20px;
    background-color: white;
    padding: 10%;
    padding-top: 10px;
    padding-left: 5%;
    padding-bottom: 7%;
    border-radius: 10% 10% 30% 10%;

`;

export const TableCard = styled.table`
    font-size: 20px;
    display: inline;
    background-color: white;

`;

export const TheadCard = styled.thead`
    display: inline;
    background-color: white;

`;

export const TbodyCard = styled.tbody`
    display: block;
    background-color: white;

`;

export const TfootCard = styled.tfoot`
    display: inline;
    background-color: white;
    width: 10%;

`;

export const TrCard = styled.tr`
    display: flex;
    background-color: white;

`;

export const TdCard = styled.td`
        display: flex;
    align-items: flex-start;
    background-color: white;

`;


export const FormWrapper = styled.form`
    justify-content: space-evenly;
    padding-top: 30px;
    padding-bottom: 20px;
    padding-right: 120px;
    padding-left: 120px;

`;

export const LabelCenter = styled.label`
    font-size: 20px;
    justify-content: left;
    padding: 2px;
    color: white;
`;

export const InputName = styled.input`
    font-size: 16px;
    justify-content: left;
    padding: 2px;
`;

export const SelectName = styled.select`
    font-size: 16px;
    justify-content: left;
    padding: 2px;
`;

export const LabelRight = styled.label`
    font-size: 20px;
    justify-items: right;
    padding: 2px;
    color: white;

    
`;

export const DivOption = styled.div`
    border-radius: 10% 10% 60% 10%;
    display: block;
    font-size: 20px;
    justify-items: columns;
    justify-content: space-evenly;
    padding: 15px;
    padding-top: 5px;
    background-color: #2f803e;

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

export const DivButton = styled.div`
    display: block;
    font-size: 16px;
    padding: 2px;

`;

export const DivButtonList = styled.div`
    display: flex;
    align-items: flex-start;
    font-size: 16px;
    padding: 2px;

`;

export const LabelListItens = styled.label`
    display: flex;
    font-size: 16px;
    padding-top: 2px;
    color: white;

`;

export const DivCaption = styled.div`
    font-size: 24px;
    padding: 4px;
    color: white;


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
        //#2f803e
        //#DDDBBB
  cursor: pointe;
    transform: scale(1.05);
    }
`;


export const DivItens = styled.div`
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
`;
export const DivItensBefore = styled.div`
    display: flex;
    
`;

export const DivItensAfter = styled.div`
    display: flex;
`;

export const DivAjuste = styled.div`
    display: flex;

`;