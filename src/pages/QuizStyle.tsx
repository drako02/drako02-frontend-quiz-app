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
const breakpoints = {tablet: '768px', mobile: '480px'};


interface OptionButtonProps {
    selected_option: string | null;
    _option: string;
    is_correct: boolean | null;
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

    @media(max-width: ${breakpoints.tablet}){
        width: 83%;
        height: 86%;
        top: 14%;
        left: 8%;
        flex-direction: column;
    }

    @media(max-width: ${breakpoints.mobile}){
        width: 100%;
        height: 91%;
        top: 9%;
        left: 0;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const QuestionArea = styled.div`
  width: 42%;
  height: 69%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
    //justify-content: ;
    @media(max-width: ${breakpoints.tablet}){
        width: 100%;
        height: 30%;
    }
    @media(max-width: ${breakpoints.mobile}){
        width: 87%;
        height: 29%;
        justify-content: space-between;
    }
`;

export const QuestionContainer = styled.div`
    height: fit-content;
    //margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    //margin-bottom: auto;

    @media(max-width: ${breakpoints.tablet}){
        width: 100%;
        height: 70%;
    }
    @media(max-width: ${breakpoints.mobile}){
        width: 100%;
        height: 76%;
    }
`;

// export const QuestionParagraph = styled.p`
//   margin: 0;
//   padding: 0;
// `;
//
// export const QuestionNoParagraph     = styled.p`
//     margin: 0;
//     padding: 0;
// `;

export const QuestionNo = styled.span`
  width: 100%;
  font-family: 'Rubik Regular', serif;
  font-style: italic;
  font-size: 16px;
  color: #626c7f;
  display: block;
  margin-top: 1%; 
  margin-bottom: 4%;
  line-height: 150%;

    @media(max-width: ${breakpoints.mobile}){
        width: 100%;
        height: 9%;
        font-family: "Rubik Regular", serif;
        font-size: 14px;
        font-style: italic;
        margin-bottom: 9%;
    }
`;

export const Question = styled.span`
  width: 100%;
  margin: 0;
  padding: 0;
    display: block;
  font-family: "Rubik Medium", serif;
  font-size: 36px;
    line-height: 120%;
  color: #313E51;
    
    @media(max-width: ${breakpoints.tablet}){
        line-height: 100%;

    }
    @media(max-width: ${breakpoints.mobile}){
        font-family: "Rubik Medium", serif;
        font-size: 20px;
        line-height: 120%;
    }

`;

export const Tracker = styled.div`
    height: 3.5%;
    width: 100%;
    //margin-top: auto;
    background-color: white;
    border-radius: 100px;
    margin-top: auto;

    @media(max-width: ${breakpoints.tablet}){
        height: 6.6%;
        
    })
@media(max-width: ${breakpoints.mobile}){
    width: 100%;
    height: 9.5%;
}
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

    @media(max-width: ${breakpoints.tablet}){
        width: 100%;
        height: 63%;
    }
    @media(max-width: ${breakpoints.mobile}){
        width: 87%;
        height: 55%;
        margin-top: 6.8%;
    }
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
    height: 69%;
  margin: 0;
  gap: 5%;

    @media(max-width: ${breakpoints.tablet}){
        width: 100%;
        height: 67%;
    }

    @media(max-width: ${breakpoints.mobile}){
        width: 100%;
        height: 72%;
    }
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
    border: ${({ selected_option, _option, is_correct }) => {
        if (selected_option === _option) {
            if (is_correct === null) {
                return "2.5px solid #a729f5" ;
            } else {
                return is_correct ? "3px solid #26d782" : "3px solid #ee5454;";
            }
        }
        return "";
    }};  
    
  &:hover{
      cursor: pointer;
  }
    &:active {
        border: ${({ is_correct }) => (is_correct === null ? "2.5px solid #a729f5" : "")};
    }
    
  
  img {
  ${({ selected_option, _option, is_correct }) => {
      if (selected_option === _option) {
      if (is_correct === null) {
      return "display : none;" ;
  } else {
      return is_correct ? "height: 48%; width: 7%; align-items: center; margin-left: auto; margin-right: 2.5;" 
              :
              "height: 48%; width: 7%; align-items: center; margin-left: auto; margin-right: 2.5;";
  }
  }
      if(selected_option !== _option){
          if(is_correct!== null){return "height: 48%; width: 7%; align-items: center; margin-left: auto; margin-right: 2.5;"}
      }
      return " display: none;";
  }};

  }

    @media(max-width: ${breakpoints.tablet}){
        height: 20.4%;
    }
    @media(max-width: ${breakpoints.mobile}){
        width: 100%;
        height: 22%;
        font-family: "Rubik Medium", serif;
        font-size: 18px;
        border-radius: 12px;
        
        img{
            width: 9.8%;
            height: 50%;
        }
    }
    

`;

export const OptionLetter = styled.div<OptionButtonProps>`
    display: flex;
    background-color: ${({ selected_option, _option, is_correct }) => {
        if (selected_option === _option) {
            if (is_correct === null) {
                return "#a729f5";
            } else {
                return is_correct ? "#26d782" : "#ee5454";
            }
        }
        return "#f4f6fa";
    }};
    height: 58%;
    width: 10%;
    border-radius: 8px;
    margin-left: 4%;
    margin-right: 5%;
    color: ${({ selected_option, _option, is_correct }) => {
        if (selected_option === _option) {
            if (is_correct === null) {
                return "white";
            } else {
                return is_correct ? "white" : "white";
            }
        }
        return "#626c7f";
    }};
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    
    ${OptionButton}:hover &{
        background-color: ${({ selected_option, _option, is_correct }) => {
            if (selected_option === _option) {
                if (is_correct === null) {
                    return "#a729f5";
                } else {
                    return is_correct ? "26d782"  : "ee5454";
                }
            }
            return "#f6e7ff";
        }};

        color: ${({ selected_option, _option, is_correct }) => {
            if (selected_option === _option) {
                if (is_correct === null) {
                    return "whiite";
                } else {
                    return is_correct ? "white"  : "white";
                }
            }
            return "#a729f5";
        }};

        @media(max-width: ${breakpoints.mobile}){
            border-radius: 6px;
            width: 12%;
            height: 63%;
            font-family: "Rubik Medium", serif;
            font-size: 18px;
        }
        
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

    @media(max-width: ${breakpoints.mobile}){
        width: 100%;
        height: 14%;
        font-family: "Rubik Medium", serif;
        font-size: 18px;
        border-radius: 12px;
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
    font-family: "Rubik Regular", serif;
    font-size: 24px;
    line-height: 150%;
    color:#ee5454 ;
    align-items: center;
    justify-content: center;

    @media(max-width: ${breakpoints.mobile}){
        font-family: "Rubik Regular", serif;
        font-size: 18px;
    }
    
`;

export const ScoreArea = styled.div`
    position: absolute;
    top: 23%;
    left: 9.7% ;
    width: 81%;
    height: 59%;
    display: flex;
    justify-content: space-between;

    @media(max-width: ${breakpoints.tablet}){
        height: 74%;
        width: 83%;
        top: 14%;
        left: 8.3%;
        flex-direction: column;
    }
    @media(max-width: ${breakpoints.mobile}){
        width: 100%;
        height: 91%;
        top: 9%;
        left: 0;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;


export const ScoreText = styled.div`
  width: 42%;
  margin: 0;
  padding: 0;
  font-family: "Rubik Regular", serif;
  font-size: 64px;
  line-height: 100%;
  display: flex;
  flex-direction: column;
    color: #313e51;
    span{
        font-family: "Rubik Medium", serif;
        font-size: 64px;
    }

    @media(max-width: ${breakpoints.tablet}){
        width: 100%;
        height: 19%;
        
    }
    @media(max-width: ${breakpoints.mobile}){
        width: 87%;
        height: 18%;
        font-family: "Rubik Light", serif;
        font-size: 40px;
        margin-top: 4%;
        
        span{
            font-family: "Rubik Medium", serif;
            font-size: 40px;
        }
    }

`;

export const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    gap: 4.5%;
    justify-content: space-between;

    @media(max-width: ${breakpoints.tablet}){
        width: 100%;
        height: 72%;
    }
    @media(max-width: ${breakpoints.mobile}){
        width: 87%;
        height: 64%;
        margin-top: 3%;
    }
`;

export const ScoreBox = styled.div`
    height: 75.7%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 24px;

    @media(max-width: ${breakpoints.tablet}){
        width: 100%;
        height: 75%;
    }
    @media(max-width: ${breakpoints.mobile}){
        border-radius: 12px;
    }
`;

export const PlayAgain = styled.button`
    height: 18%;
    font-family: "Rubik Medium", serif;
    font-size: 28px;
    line-height: 100%;
    color: white;
    background-color: #a729f5;
    border-style: none;
    justify-content: center;
    border-radius: 24px;
    
    &:hover{
        cursor: pointer;
        background-color: #d394fa;
    }

    @media(max-width: ${breakpoints.tablet}){
        width: 100%;
        height: 18%;
    }
    @media(max-width: ${breakpoints.mobile}){
        font-family: "Rubik Medium", serif;
        font-size: 18px;
        border-radius: 12px;
    }
`;

export const Title = styled.div<{bgColor: string}>`
    
    height: 14.5%;
    width: 49%;
    display: flex;
    font-size: 28px;
    font-family: "Rubik Medium", serif;
    line-height: 100%;
    color: #4d5869;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7%;
    gap: 9.5%;
    img{
        height: 100%;
        width: 22%;
        background-color: ${(props) => {
            return `${props.bgColor}`;
        }};
        border-radius: 8px;

    }

    @media(max-width: ${breakpoints.tablet}){
    height: 14%;
    }
    @media(max-width: ${breakpoints.mobile}){
        height: 17%;
        width: 51%;
        margin-top: 13%;
        font-family: "Rubik Medium", serif;
        font-size: 18px;

    }
`;

export const Score =styled.span`
    display: block;
    font-family: "Rubik Medium", serif;
    font-size: 144px;
    line-height: 100%;
    color: #313e51;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;

    @media(max-width: ${breakpoints.mobile}){
        font-family: "Rubik Medium", serif;
        font-size: 88px;
        margin-top: 7%;
    }
`;

export const SupportText = styled.span`
    display: block;
    color: #626c7f;
    font-family: "Rubik Regular", serif;
    font-size: 24px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4%;

    @media(max-width: ${breakpoints.mobile}){
        font-family: "Rubik Regular", serif;
        font-size: 18px;
        margin-bottom: 13%;

    }

`;
