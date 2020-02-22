import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
import Timer from '../../General/Timer'
import VocabMemoryGameGuide from './VocabMemoryGameGuide'
import React, {useState, useEffect} from 'react'
/*
reference for setting up timer with hooks
https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

*/
export default function VocabMemoryGame() {
    const [timeLeft, setTimeLeft] = useState(0)
    const [totalTime, setTotalTime] = useState(10)
    const [timerActive, setTimerActive ] = useState(false)
    const [displayGuide, setDisplayGuide] = useState(true);
    const [displayPractice, setDisplayPractice] = useState(false);
    const [displayTest, setDisplayTest] = useState(false);

    
    function renderPractice(){
        if(displayPractice){
            return(
                <div>
                    <Timer timeRemaining = {timeLeft} />
                    <button onClick = {toggle}>Start CountDown</button>
                    <button onClick = {reset}>Reset CountDown</button>
                    <p>TimerActive is currently {timerActive.toString()}</p>   
                </div>
            )
        }
    }
    function toggle(){
        if(timeLeft!= 0){
        setTimerActive(!timerActive)
        }
    }

    function startPractice(){

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
        }
        return () => clearInterval(interval)
    }, [timerActive, timeLeft])

    
    
    
    
    
    return (
        <div>
            <VocabMemoryGameGuide start = {startPractice}/>
            {renderPractice()}

        </div>
        
    )

}
