import React from 'react'
import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
// score = {score} timeTaken = {timeTaken} showResults = {props.showResults}
//                     toPractice = {props.toPractice} toGuide = {props.toGuide}
// numberOfCorrectMatches = {numberOfCorrectMatches} totalCards = {props.totalCards}
export default function GameResults(props) {
    if(props.showResults){
        return (
            
            <div className = "results-container">
                <div className = "results-card">
                    <div className="results-card-img"></div>
                    <p>Great work! You matched {props.numberOfCorrectMatches} / {props.totalCards}</p>
                    <p>Your Score: {props.score}</p>
                    <p>Time Taken: {props.timeTaken}</p>
                    <div className = "route-button-container">
                        <button onClick={props.toPractice} className = "route-button">New Game</button>
                    </div>
                    <div className ="route-button-container">
                        <button onClick={props.toGuide} className = "route-button">Exit Game</button>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return <></>
    }
}
