import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import {useNavigate} from "react-router-dom";
import quizData from '../data.json';
import {useState} from "react";
import correct from '../assets/images/icon-correct.svg';
import incorrect from '../assets/images/icon-incorrect.svg';
import iconHTML from '../assets/images/icon-html.svg';
import {
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
    ScoreArea,
    ScoreText,
    ScoreBox, PlayAgain, Title, Score, SupportText
} from "./QuizStyle";
import Mode from "../Mode";



function HTMLQuiz() {
    const htmlQuiz = quizData.quizzes.find(quiz => quiz.title === "HTML");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showWarning, setShowWarning] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const navigate = useNavigate();

    if (!htmlQuiz) {
        return <div>Quiz not found</div>;
    }

    const currentQuestion = htmlQuiz.questions[currentQuestionIndex];
    // const correctOption = htmlQuiz.questions[currentQuestionIndex].answer;

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
                            <Title bgColor="#fff1e9"> <img src={iconHTML}/> {htmlQuiz.title}  </Title>
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

export default HTMLQuiz;