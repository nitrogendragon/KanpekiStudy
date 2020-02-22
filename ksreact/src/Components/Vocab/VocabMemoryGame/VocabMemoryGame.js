import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
import Timer from '../../General/Timer'
import VocabMemoryGameGuide from './VocabMemoryGameGuide'
import VocabMemoryGamePractice from './VocabMemoryGamePractice'
import React, {useState, useEffect} from 'react'
/*
reference for setting up timer with hooks
https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

*/
export default function VocabMemoryGame() {
    const [timeLeft, setTimeLeft] = useState(60)
    const [totalTime, setTotalTime] = useState(60)
    const [timerActive, setTimerActive ] = useState(false)
    const [displayGuide, setDisplayGuide] = useState(true);
    const [displayPractice, setDisplayPractice] = useState(false);
    const [displayGame, setDisplayGame] = useState(false);

    const [englishArray, setEnglishArray] = useState([])
    const [japaneseArray, setJapaneseArray] = useState([])
    const [romajiArray, setRomajiArray] = useState([])
    const [idArray, setIdArray] = useState([])
    const wordPairsData = require('../../../Data/VocabWordPairsData.json')
    const wordPairsLength = wordPairsData.length

    
    
    function toggle(){
        if(timeLeft!= 0){
        setTimerActive(!timerActive)
        }
    }

    function startPractice(){
        setTotalTime(60)
        reset()
        setDisplayGuide(false)
        setDisplayPractice(true)
    }
    function startTest(){
        setTotalTime(60)
        reset()
        setDisplayPractice(false)
        setDisplayGame(true)
    }

    function stopTest(){

    }

    function returnToGuide(){
        setDisplayGame(false)
        setDisplayPractice(false)
        setDisplayGuide(true)
        
    }

    function reset(){
        setTimeLeft(totalTime)
        setTimerActive(false)
    }

    
    useEffect(() => {
        let interval = null
        if(timerActive){
            interval = setInterval( () => {
                setTimeLeft(timeLeft => Math.round((timeLeft -.1) * 100) / 100);
            }, 100)
        }
        else if(!timerActive && timeLeft !==totalTime ){
            clearInterval(interval)
        }
        if(timeLeft <= 0){
            clearInterval(interval)
            setTimerActive(false)
            setTimeLeft(0)
            if(displayPractice)
            {
                startTest()
            }
            else
            {
                stopTest()
            }
        }
        return () => clearInterval(interval);
    })

    
    return (
        <div>
            <VocabMemoryGameGuide start = {startPractice} active = {displayGuide}/>
            <VocabMemoryGamePractice 
                toGuide = {returnToGuide} 
                active = {displayPractice}
                timeLeft = {timeLeft}
                toggle = {toggle}
                reset = {reset}
                timerActive = {timerActive}
                englishArray = {englishArray}
                romajiArray = {romajiArray}
                japaneseArray = {japaneseArray}
                setEnglishArray = {setEnglishArray}
                setJapaneseArray = {setJapaneseArray}
                setRomajiArray = {setRomajiArray}
                idArray = {idArray}
                setIdArray = {setIdArray}
                wordPairsData = {wordPairsData}
                wordPairsLength = {wordPairsLength}
            />

        </div>
        
    )

}
