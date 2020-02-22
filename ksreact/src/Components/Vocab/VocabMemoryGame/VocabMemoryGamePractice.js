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
                <button className = "route-button" onClick = {props.reset}>Reset CountDown</button>
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
                    />
                <button className = "route-button" onClick = {props.toGuide}>Return to Guide</button>

            </div>
        )
    }
    else{return <></>}
}
