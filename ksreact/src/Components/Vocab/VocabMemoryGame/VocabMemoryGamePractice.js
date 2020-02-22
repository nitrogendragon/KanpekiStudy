import React, {useState} from 'react'
import Timer from '../../General/Timer'
import VocabMemoryGamePracticeCards from './VocabMemoryGamePracticeCards'
export default function VocabMemoryGamePractice(props) {
    

    function handleToGuide(){
        props.toGuide()
    }
    if(props.active)
    {
        return (
            <div>
                <Timer timeRemaining = {props.timeLeft} />
                <button onClick = {props.toggle}>Start CountDown</button>
                <button onClick = {props.reset}>Reset CountDown</button>
                <p>TimerActive is currently {props.timerActive.toString()}</p>   
                <VocabMemoryGamePracticeCards 
                    genNumbers = {true}
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
                <button onClick = {handleToGuide}>Return to Guide</button>

            </div>
        )
    }
    else{return <></>}
}
