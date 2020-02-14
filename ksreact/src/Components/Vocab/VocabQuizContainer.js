import React, {useState} from 'react'
import VocabQuizPrompt from './VocabQuizPrompt'
import VocabCard from './VocabCard'
import VocabCardImg from './VocabCardImg'
import VocabAnswerButtons from './VocabAnswerButtons'
import VocabQuizContinueButton from './VocabQuizContinueButton'
import VocabQuizProgressBar from './VocabQuizProgressBar'
import VocabQuizAnswerFeedBack from './VocabQuizAnswerFeedBack'
import '../../styles/Vocab/VocabContainer.css'

export default function VocabContainer(props) {
    const [questionNumber, setQuestionNumber] = useState(0)//always start at 0
    const [progress, setProgress] = useState(0)//using for progress bar
    const [canContinue, setCanContinue] = useState(false)
    const [showFeedBack, setShowFeedBack] = useState(false)
    const [lastQuestion, setLastQuestion] = useState(false)
    /* Current key values(Question, VocabKanji, VocabHiragana, VocabEnlgish, ImgUrl, Id, Answer1, 
        Answer2, Answer3, Answer4, CorrectAnswer, LastQuestion)*/
    const vocabQuizData = require('../../Data/VocabQuiz1.json')//eventually change via useState,useEffect
    const vocabQuizLength = vocabQuizData.length
    const feedbackStyle = "slide-up-container " + (showFeedBack ? "visible" : "hidden");
    function handleAnswerClicked(isCorrectAnswer, isLastQuestion)
    {
        setShowFeedBack(false)
        setTimeout( () => {
        if( isCorrectAnswer){
            setCanContinue(true) 
        }
        setShowFeedBack(true)
        if(isLastQuestion){
            setLastQuestion(true)
        }
        else{
            setLastQuestion(false)
        }
    },100)
    }

    function handleContinueClicked()
    {
        setProgress(progress+1)
        setCanContinue(false)
        setShowFeedBack(false)
        !lastQuestion ? 
            setQuestionNumber(questionNumber+1) :
            alert('You have reached the end of the quiz, congratulations!')
            //In the future we should have this go to page that says try again or go to home or something like that
    }

    return (
        <>
        <div className='main-container'>
            {/* In general probably want a json to  */}
            <VocabQuizProgressBar totalQuestions = {vocabQuizLength} index = {progress}/>
            <VocabQuizPrompt prompt = {vocabQuizData[questionNumber].Question}/>
            <div className='break'></div>
            <VocabCard hiragana = {vocabQuizData[questionNumber].VocabHiragana} />
            <VocabCardImg imgUrl = {vocabQuizData[questionNumber].ImgUrl}/>
            <VocabAnswerButtons answers = {[
                vocabQuizData[questionNumber].Answer1,
                vocabQuizData[questionNumber].Answer2,
                vocabQuizData[questionNumber].Answer3,
                vocabQuizData[questionNumber].Answer4
                ]}
                lastQuestion = {vocabQuizData[questionNumber].LastQuestion}
                onAnswerClicked = {handleAnswerClicked}
                canContinue = {canContinue}
                correctAnswer = {vocabQuizData[questionNumber].CorrectAnswer}
            />
            <div className='break'></div>
            <div className={feedbackStyle}>
                <VocabQuizAnswerFeedBack isDisplayed={showFeedBack} isCorrect = {canContinue}/>
                <VocabQuizContinueButton onContinueClicked ={handleContinueClicked} canContinue={canContinue}/>
            </div>
        </div>

        </>
    )
}
