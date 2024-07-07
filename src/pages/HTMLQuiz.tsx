import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import quizData from '../data.json';
import {useState} from "react";
import correct from '../assets/images/icon-correct.svg';
import incorrect from '../assets/images/icon-incorrect.svg';

import{
    QuizContainer,
    QuestionContainer,
    QuestionParagraph,
    QuestionNoParagraph,
    QuestionNo,
    Question,
    Options,
    OptionsContainer,
    OptionButton,
    OptionLetter,
    SubmitButton,
    Tracker,
    TrackerLevel,
    Warning,
    ScoreContainer,
    Score
} from "./QuizStyle";


function HTMLQuiz() {
    const htmlQuiz = quizData.quizzes.find(quiz => quiz.title ==="HTML");
    const[currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showWarning, setShowWarning] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    if (!htmlQuiz) {
        return <div>Quiz not found</div>;
    }

    const currentQuestion = htmlQuiz.questions[currentQuestionIndex];
    // const correctOption = htmlQuiz.questions[currentQuestionIndex].answer;

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setShowWarning(false);
    };

    const handleSubmit = () => {
        if(selectedOption === null){
            setShowWarning(true);
            return;
        }

        const result = selectedOption === currentQuestion.answer;
        setIsCorrect(result);

        if (result) {
            setScore(prevScore => prevScore + 1);
        }

        if (currentQuestionIndex === htmlQuiz.questions.length - 1) {
            setIsQuizCompleted(true);
        }
    };

    const handleNextQuestion = () => {
        setSelectedOption(null);
        setIsCorrect(null);
        setShowWarning(false)
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    if (isQuizCompleted){
        return(
            <ScoreContainer>
                <Score>Your score: {score} out of {htmlQuiz.questions.length}</Score>
            </ScoreContainer>
        );
    }
    return(
        <QuizContainer>
            <>
                <QuestionContainer>
                    <QuestionNoParagraph>
                        <QuestionNo> Question {currentQuestionIndex + 1} of 10 </QuestionNo>
                    </QuestionNoParagraph>
                    <QuestionParagraph>
                        <Question>{currentQuestion.question}</Question>
                    </QuestionParagraph>
                    <Tracker>
                        <TrackerLevel level={currentQuestionIndex + 1}></TrackerLevel>
                    </Tracker>
                </QuestionContainer>
                <OptionsContainer>
                    <Options>
                        {currentQuestion.options.map((option, index) => (
                            <OptionButton
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                selected_Option={selectedOption}
                                _option={option}
                                is_Correct={isCorrect}
                            >
                                <OptionLetter
                                    selected_Option={selectedOption}
                                    _option={option}
                                    is_Correct={isCorrect}
                                > {String.fromCharCode(65 + index)} </OptionLetter>
                                {option}
                                {isCorrect !== null && (
                                    <>
                                        {selectedOption === option && isCorrect === true && <img src={correct} alt="Correct" />}
                                        {selectedOption === option && isCorrect === false && <img src={incorrect} alt="Incorrect" />}
                                    </>
                                )}
                            </OptionButton>
                        ))}


                    </Options>
                    {isCorrect === null ? (
                        <SubmitButton onClick = {handleSubmit}> Submit Answer</SubmitButton>
                    ):(
                        <SubmitButton onClick = {handleNextQuestion}> Next Question </SubmitButton>
                    )}

                    {showWarning && (
                        <Warning>
                            <img src={incorrect}/>
                            Please select an answer
                        </Warning>
                    )}
                </OptionsContainer>
            </>
        </QuizContainer>
    );
}

export default HTMLQuiz;