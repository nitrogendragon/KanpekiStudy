import React, {useState, useEffect} from 'react'
import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
import VocabMemoryGameGCards from './VocabMemoryGameGCards'
import Timer from '../../General/Timer'
import uuid4 from 'uuid4'
export default function VocabMemoryGameGame(props) {
    const [englishCardsArray, setEnglishCardsArray] = useState([])
    const [japaneseCardsArray, setJapaneseCardsArray] = useState([])
    const [genCards, setGenCards] = useState(true)

    function createCards() {
        for(let i = 0; i < props.totalCards; i++){
                setJapaneseCardsArray([...japaneseCardsArray,japaneseCardsArray[i] = <VocabMemoryGameGCards 
                    key = {uuid4()}
                    text = {props.japaneseArray[i]}
                    index = {props.idArray[i]}
                />]
                )
                setEnglishCardsArray([...englishCardsArray,englishCardsArray[i] = <VocabMemoryGameGCards 
                    key = {uuid4()}
                    text = {props.englishArray[i]}
                    index = {props.idArray[i]}
                />]
                )
        }
    }
    useEffect(() =>{
        if(props.active === true)
        {
        setGenCards(true)
        }
    },[props.active])
    if(genCards)
    {
        setGenCards(false)
        createCards()
        console.log(props.englishArray)
        console.log(englishCardsArray)
        console.log(japaneseCardsArray)
    }
    if(props.active){
        
    return (
        <div>
            <Timer className= "count-down"timeRemaining = {props.timeLeft} />
            <button onClick={props.toPractice}>New Game</button>
            <button onClick={props.toGuide}>Exit Game</button>
            <div className="game-grid">
                {[...englishCardsArray]}
                {[...japaneseCardsArray]}
            </div>
        </div>
    )
    }
    else{
        return(<></>)
    }
}
