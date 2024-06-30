import styled from "styled-components";



// export const Menu = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50% ;
//   transform:translate(-50% , -50%);
//   width: 81%;
//   height: 60%;
//   display: flex;
//   justify-content: space-between;
// `;

export const QuizContainer = styled.div`
    position: absolute;
    top: 23%;
    left: 9.7% ;
    //transform:translate(-50% , -50%);
    width: 81%;
    height: 64%;
    display: flex;
    justify-content: space-between;
`;

export const QuestionContainer = styled.div`
  width: 42%;
  height: 80%;
  margin: 0;
  padding: 0;
`;

export const QuestionParagraph = styled.p`
  margin: 0;
  padding: 0;
`;

export const QuestionNoParagraph = styled.p`
    margin: 0;
    padding: 0;
`;

export const QuestionNo = styled.span`
  font-family: 'Rubik Regular', serif;
  font-style: italic;
  font-size: 16px;
  color: #626c7f;
  display: inline-block;
  margin-top: 1%; 
  margin-bottom: 6%;
  line-height: 150%;
`;

export const Question = styled.span`
  margin: 0;
  padding: 0;
  font-family: "Rubik Medium", serif;
  font-size: 36px;
  color: #313E51;

`;


export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  margin: 0;
  gap: 4%;
`;

export const OptionButton = styled.button`
  background-color: #ffffff;
  font-family: "Rubik Medium", serif;
  font-size: 28px;
  color: #4d5869;
  flex: 1;
  width: 100%;
  height: 21%;
  border-width: 0;
  border-radius: 24px;
  box-shadow: 0 16px 40px rgb(143, 160, 193, 0.15);
  display: flex;
  align-items: center;
  //transition: 0.2s ease;  
    
    
  &:hover{
      cursor: pointer;
  }
    &:active{
        border:2.5px solid #a729f5 ;
      
  }   
`;

export const OptionLetter = styled.div`
    display: flex;
    background-color: #f4f6fa;
    height: 58%;
    width: 10%;
    border-radius: 8px;
    margin-left: 4%;
    margin-right: 8%;
    color: #626c7f;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    
    ${OptionButton}:hover &{
        background-color: #f6e7ff;
        color: #a729f5;
    }
    
`;

export const SubmitButton = styled.button`
    background-color: #a729f5;
    font-family: "Rubik Medium", serif;
    font-size: 28px;
    color: #ffffff;
    flex: 1;
    width: 100%;
    height: 21%;
    border-width: 0;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
    
    &:hover{
        background-color: #d394fa;
    }
`