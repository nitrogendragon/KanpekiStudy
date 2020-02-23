import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
import VocabMemoryGameGuide from './VocabMemoryGameGuide'
import VocabMemoryGamePractice from './VocabMemoryGamePractice'
import VocabMemoryGameGame from './VocabMemoryGameGame'
import React, {useState, useEffect} from 'react'
/*
reference for setting up timer with hooks
https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

*/
export default function VocabMemoryGame() {
    const [timeLeft, setTimeLeft] = useState(10)
    const [totalTime, setTotalTime] = useState(60)
    const [timerActive, setTimerActive ] = useState(false)
    const [displayGuide, setDisplayGuide] = useState(true);
    const [displayPractice, setDisplayPractice] = useState(false);
    const [displayGame, setDisplayGame] = useState(false);
    const [totalCards, setTotalCards] = useState(10)
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
        //Do something awesome here
    }

    function returnToGuide(){
        setDisplayGame(false)
        setDisplayPractice(false)
        setDisplayGuide(true)
        
    }

    function returnToPractice(){
        setDisplayGame(false)
        setDisplayGuide(false)
        //give time for useEffect to run
        setTimeout(() => {
            setDisplayPractice(true)
        }, 500);
        
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
    },[timerActive, timeLeft, totalTime, displayPractice])

    useEffect( () =>{
        if(displayGame === false){
            setEnglishArray( englishArray.filter(item => item == null))
            console.log("we have attempted to fix the EnglishArray. but this is what it is")
            console.log(englishArray)
            setJapaneseArray(japaneseArray.filter(item => item == null))
            setRomajiArray(romajiArray.filter(item => item == null))
            setIdArray(idArray.filter(item => item == null))
        }
    }, [displayGame])
    
    return (
        <div>
            <VocabMemoryGameGuide start = {startPractice} active = {displayGuide}/>
            <VocabMemoryGamePractice 
                toGuide = {returnToGuide} 
                toGame = {startTest}
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
                totalCards = {totalCards}
            />
            { englishArray[0] === null ? <></> :
            <VocabMemoryGameGame 
                toPractice = {returnToPractice} //for restarting the game
                toGuide = {returnToGuide} //for restarting the game
                active = {displayGame}
                timeLeft = {timeLeft}
                toggleTimerActive = {toggle}
                timerReset = {reset}
                timerActive = {timerActive}
                englishArray = {englishArray}
                romajiArray = {romajiArray}
                japaneseArray = {japaneseArray}
                idArray = {idArray}
                totalCards = {totalCards}
            />
            }

        </div>
        
    )

}
