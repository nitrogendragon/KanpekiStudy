import React from 'react'
import Timer from '../../General/Timer'
import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
import VocabMemoryGamePracticeCards from './VocabMemoryGamePracticeCards'
export default function VocabMemoryGamePractice(props) {

    if(props.active)
    {
        return (
            <div>
                <Timer className= "count-down"timeRemaining = {props.timeLeft} />
                {/* <button onClick = {props.toggle}>Start CountDown</button> */}
                <div className = "route-button-container">
                    <button className = "route-button" onClick = {props.toGame}>Start Now</button>
                </div>
                <VocabMemoryGamePracticeCards 
                    genNumbers = {true}
                    startCountDown = {props.toggle}
                    englishArray = {props.englishArray}
                    romajiArray = {props.romajiArray}
                    japaneseArray = {props.japaneseArray}
                    idArray = {props.idArray}
                    setEnglishArray = {props.setEnglishArray}
                    setRomajiArray = {props.setRomajiArray}
                    setJapaneseArray = {props.setJapaneseArray}
                    setIdArray = {props.setIdArray}
                    wordPairsData = {props.wordPairsData}
                    wordPairsLength = {props.wordPairsLength}
                    totalCards = {props.totalCards}
                    />
                <div className = "route-button-container">
                    <button className = "route-button" onClick = {props.toGuide}>Return to Guide</button>
                </div>
            </div>
        )
    }
    else{return <></>}
}
