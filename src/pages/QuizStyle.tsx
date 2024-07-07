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

interface OptionButtonProps {
    selected_Option: string | null;
    _option: string;
    is_Correct: boolean | null;
}

export const QuizContainer = styled.div`
    position: absolute;
    top: 23%;
    left: 9.7% ;
    //transform:translate(-50% , -50%);
    width: 81%;
    height: 72%;
    display: flex;
    justify-content: space-between;
`;

export const QuestionContainer = styled.div`
  width: 42%;
  height: 69%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const QuestionParagraph = styled.p`
  margin: 0;
  padding: 0;
`;

export const QuestionNoParagraph     = styled.p`
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

export const Tracker = styled.div`
    height: 3.5%;
    width: 100%;
    margin-top: auto;
    background-color: white;
    border-radius: 100px;
`;

export const TrackerLevel = styled.div<{level: number}>`
    position: relative;
    height: 50%;
    width: ${({level}) => {
        return `${9.9 * level }%`
    }};
    background-color: #a729f5;
    top: 25%;
    left: 0.5%;
    border-radius: 100px;
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    gap: 4.5%;
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
    height: 69%;
  margin: 0;
  gap: 5%;
`;

export const OptionButton = styled.button<OptionButtonProps>`
  background-color: #ffffff;
  font-family: "Rubik Medium", serif;
  font-size: 28px;
  color: #4d5869;
    line-height: 90%; 
  text-align: left;
  flex: 1;
  width: 100%;
  height: 21%;
  border-width: 0;
  border-radius: 24px;
  box-shadow: 0 16px 40px rgb(143, 160, 193, 0.15);
  display: flex;
  align-items: center;
  //transition: 0.2s ease;  
    border: ${({ selected_Option, _option, is_Correct }) => {
        if (selected_Option === _option) {
            if (is_Correct === null) {
                return "2.5px solid #a729f5" ;
            } else {
                return is_Correct ? "3px solid #26d782" : "3px solid #ee5454;";
            }
        }
        return "";
    }};  
    
  &:hover{
      cursor: pointer;
  }
    &:active{
        border:2.5px solid #a729f5 ;
      
  }
  
  img {
  ${({ selected_Option, _option, is_Correct }) => {
      if (selected_Option === _option) {
      if (is_Correct === null) {
      return "display : none;" ;
  } else {
      return is_Correct ? "height: 43%; width: 7%; align-items: center; margin-left: auto; margin-right: 2.5;" 
              :
              "height: 43%; width: 7%; align-items: center; margin-left: auto; margin-right: 2.5;";
  }
  }
      return " display: none;";
  }};

  }
    

`;

export const OptionLetter = styled.div<OptionButtonProps>`
    display: flex;
    background-color: ${({ selected_Option, _option, is_Correct }) => {
        if (selected_Option === _option) {
            if (is_Correct === null) {
                return "#a729f5";
            } else {
                return is_Correct ? "#26d782" : "#ee5454";
            }
        }
        return "#f4f6fa";
    }};
    height: 58%;
    width: 10%;
    border-radius: 8px;
    margin-left: 4%;
    margin-right: 5%;
    color: ${({ selected_Option, _option, is_Correct }) => {
        if (selected_Option === _option) {
            if (is_Correct === null) {
                return "white";
            } else {
                return is_Correct ? "white" : "white";
            }
        }
        return "#626c7f";
    }};
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    
    ${OptionButton}:hover &{
        background-color: ${({ selected_Option, _option, is_Correct }) => {
            if (selected_Option === _option) {
                if (is_Correct === null) {
                    return "#a729f5";
                } else {
                    return is_Correct ? "26d782"  : "ee5454";
                }
            }
            return "#f6e7ff";
        }};

        color: ${({ selected_Option, _option, is_Correct }) => {
            if (selected_Option === _option) {
                if (is_Correct === null) {
                    return "whiite";
                } else {
                    return is_Correct ? "white"  : "white";
                }
            }
            return "#a729f5";
        }};
        
    }
    
`;

export const SubmitButton = styled.button`
    background-color: #a729f5;
    font-family: "Rubik Medium", serif;
    font-size: 28px;
    color: #ffffff;
    //flex: 1;
    width: 100%;
    height: 14.6%;
    border-width: 0;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
    
    &:hover{
        background-color: #d394fa;
        cursor: pointer;
    }
`;

export const Warning = styled.div`
   img{
        height: 100%;
        width: 10%;
    }
    display: flex;
    flex-direction: row;
    height: 6%;
    margin-top: auto;
    font-family: "Rubik", serif;
    font-size: 24px;
    line-height: 150%;
    color:#ee5454 ;
    align-items: center;
    justify-content: center;
    
`;

export const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Score = styled.h1`
    font-size: 2rem;
    color: #333;
`;