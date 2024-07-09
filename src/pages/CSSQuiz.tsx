import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import {useNavigate} from "react-router-dom";
import quizData from '../data.json';
import {useState} from "react";
import correct from '../assets/images/icon-correct.svg';
import incorrect from '../assets/images/icon-incorrect.svg';
import iconCSS from '../assets/images/icon-css.svg';
import {
    QuizContainer,
    QuestionContainer,

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
    ScoreArea,
    ScoreText,
    ScoreBox, PlayAgain, Title, Score, SupportText, QuestionArea
} from "./QuizStyle";
import Mode from "../Mode";



function CSSQuiz() {
    const cssQuiz = quizData.quizzes.find(quiz => quiz.title === "CSS");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showWarning, setShowWarning] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const navigate = useNavigate();

    if (!cssQuiz) {
        return <div>Quiz not found</div>;
    }

    const currentQuestion = cssQuiz.questions[currentQuestionIndex];
    // const correctOption = cssQuiz.questions[currentQuestionIndex].answer;

    const handleOptionClick = (option: string) => {
        if (isCorrect === null) { // Only allow option selection if the answer has not been submitted
            setSelectedOption(option);
            setShowWarning(false);
        }
    };

    const handleSubmit = () => {
        if (selectedOption === null) {
            setShowWarning(true);
            return;
        }

        const result = selectedOption === currentQuestion.answer;
        setIsCorrect(result);

        if (result) {
            setScore(prevScore => prevScore + 1);
        }

        if (currentQuestionIndex === cssQuiz.questions.length - 1) {
            setIsQuizCompleted(true);
        }
    };

    const handleNextQuestion = () => {
        setSelectedOption(null);
        setIsCorrect(null);
        setShowWarning(false)
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    const handlePlayAgain = () => {
        navigate('/');
    }

    if (isQuizCompleted) {
        return (
            <ScoreArea>
                <ScoreText>
                    Quiz complete
                    <span>You scored...</span>
                </ScoreText>
                <ScoreContainer>
                    <ScoreBox>
                        <Title bgColor="#e0fdef"> <img src={iconCSS}/> {cssQuiz.title}  </Title>
                        <Score>{score}</Score>
                        <SupportText>out of 10</SupportText>
                    </ScoreBox>
                    <PlayAgain onClick={handlePlayAgain}>Play Again</PlayAgain>
                </ScoreContainer>
            </ScoreArea>
        );
    }
    return (
        <QuizContainer>
            <>
                <QuestionArea>
                    <QuestionContainer>
                        <QuestionNo> Question {currentQuestionIndex + 1} of 10 </QuestionNo>
                        <Question>{currentQuestion.question}</Question>
                    </QuestionContainer>
                    <Tracker>
                        <TrackerLevel level={currentQuestionIndex + 1}></TrackerLevel>
                    </Tracker>
                </QuestionArea>
                <OptionsContainer>
                    <Options>
                        {currentQuestion.options.map((option, index) => (
                            <OptionButton
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                selected_option={selectedOption}
                                _option={option}
                                is_correct={isCorrect}
                            >
                                <OptionLetter
                                    selected_option={selectedOption}
                                    _option={option}
                                    is_correct={isCorrect}
                                > {String.fromCharCode(65 + index)} </OptionLetter>
                                {option}
                                {isCorrect !== null && (
                                    <>
                                        {selectedOption === option && isCorrect === true &&
                                            <img src={correct} alt="Correct"/>}
                                        {selectedOption === option && isCorrect === false &&
                                            <img src={incorrect} alt="Incorrect"/>}
                                        {option === currentQuestion.answer && isCorrect === false &&
                                            <img  src={correct} alt="Correct"/>}
                                    </>
                                )}
                            </OptionButton>
                        ))}


                    </Options>
                    {isCorrect === null ? (
                        <SubmitButton onClick={handleSubmit}> Submit Answer</SubmitButton>
                    ) : (
                        <SubmitButton onClick={handleNextQuestion}> Next Question </SubmitButton>
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

export default CSSQuiz;