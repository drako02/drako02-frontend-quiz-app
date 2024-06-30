import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import quizData from '../data.json';
import {useState} from "react";

import{
    QuizContainer,
    QuestionContainer,
    QuestionParagraph,
    QuestionNoParagraph,
    QuestionNo,
    Question,
    OptionsContainer,
    OptionButton,
    OptionLetter,
    SubmitButton,
} from "./QuizStyle";

type QuestionType = {
    question: string;
    options: string[];
    answer: string;
};

function HTMLQuiz() {

    const[currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const[currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setCurrentQuestion(quizData.quizzes[0].questions[currentQuestionIndex]);
    }, [currentQuestionIndex]);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    }

    const handleNextQuestion = () => {
        if(selectedOption === currentQuestion?.answer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex > quizData.quizzes[0].questions.length -1) {
            setCurrentQuestionIndex(currentQuestionIndex +1);
        } else {
            alert(`Quiz completed! Your score: ${score + (selectedOption === currentQuestion?.answer ? 1 : 0)}/${quizData.quizzes[0].questions.length}`);

        }
    }

    return(
        <QuizContainer>
            {currentQuestion &&(
                <>
                    <QuestionContainer>
                        <QuestionNoParagraph>
                            <QuestionNo> Question {currentQuestionIndex + 1} of 10 </QuestionNo>
                        </QuestionNoParagraph>
                        <QuestionParagraph>
                            <Question>{currentQuestion.question}</Question>
                        </QuestionParagraph>
                    </QuestionContainer>
                    <OptionsContainer>
                        {currentQuestion.options.map((option, index) => (
                            <OptionButton
                                key = {index}
                                onClick = {() => handleOptionClick(option)}

                            >
                                <OptionLetter> {String.fromCharCode(65 + index)} </OptionLetter>
                                {option}
                            </OptionButton>
                        ))}

                        {/*<OptionButton>*/}
                        {/*    <OptionLetter>A</OptionLetter>*/}
                        {/*    Option 1*/}
                        {/*</OptionButton>*/}
                        {/*<OptionButton>*/}
                        {/*    <OptionLetter>B</OptionLetter>*/}
                        {/*    Option 2*/}
                        {/*</OptionButton>*/}
                        {/*<OptionButton>*/}
                        {/*    <OptionLetter>C</OptionLetter>*/}
                        {/*    Option 3*/}
                        {/*</OptionButton>*/}
                        {/*<OptionButton>*/}
                        {/*    <OptionLetter>D</OptionLetter>*/}
                        {/*    Option*/}
                        {/*</OptionButton>*/}

                        <SubmitButton onClick = {handleNextQuestion}> Submit Answer</SubmitButton>
                    </OptionsContainer>
                </>
            )}
        </QuizContainer>
    );
}

export default HTMLQuiz;