import React, {useState, useEffect} from 'react'
import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
import VocabMemoryGameGCards from './VocabMemoryGameGCards'
import Timer from '../../General/Timer'
import uuid4 from 'uuid4'
export default function VocabMemoryGameGame(props) {
    const [englishCardsArray, setEnglishCardsArray] = useState([])
    const [japaneseCardsArray, setJapaneseCardsArray] = useState([])
    const [selectedCardId1, setSelectedCardId1] = useState("")
    const [selectedCardId2, setSelectedCardId2] = useState("")
    const [selectedCardText1, setSelectedCardText1] = useState("")
    const [selectedCardText2, setSelectedCardText2] = useState("")
    const [genCards, setGenCards] = useState(true)
    const [score, setScore] = useState(0)
    const [multiplier, setMultiplier] = useState(1)
    let cardSelected = false
    let firstText = ""


    function createCards() {
        for(let i = 0; i < props.totalCards; i++){
                setJapaneseCardsArray([...japaneseCardsArray,japaneseCardsArray[i] = <VocabMemoryGameGCards 
                    key = {uuid4()}
                    text = {props.japaneseArray[i]}
                    index = {props.idArray[i]}
                    handleSetSelectedCards = {handleSetSelectedCards}
                />]
                )
                setEnglishCardsArray([...englishCardsArray,englishCardsArray[i] = <VocabMemoryGameGCards 
                    key = {uuid4()}
                    text = {props.englishArray[i]}
                    index = {props.idArray[i]}
                    handleSetSelectedCards = {handleSetSelectedCards}
                />]
                )
        }
    }


    function handleSetSelectedCards(id, text){
        console.log("the text is: " + text)
        console.log("we pressed one of the cards")
        //initial set values when nothing is set
        if(!cardSelected && selectedCardId1 === "") {
            console.log("Set first card values")
            setSelectedCardId1(id.toString())
            setSelectedCardText1(text.toString())
            firstText = text
            cardSelected = true
        }
        //checking to see if we hit the same card again
        else if(cardSelected && firstText === text){  
            console.log("erased first card values due to repeat click")
            setSelectedCardId1("")
            setSelectedCardText1("")
            firstText = ""
            cardSelected = false
        }
        //make sure idCard2 is null and then set values
        else if(selectedCardId2 === "")
        {
            setSelectedCardId2(id.toString())
            setSelectedCardText2(text.toString())
            firstText = ""
            cardSelected = false
            //will check for match now in useEffect below
            
        }
    }


    useEffect(() => {

        console.log("the value of selectedCardId1 is:" + selectedCardId1.toString())
        console.log("the value of selectedCardId2 is:" + selectedCardId2.toString())
    },[selectedCardId1, selectedCardId2])


    useEffect(()=>{
        checkMatchFound()
        //reset all selection values
        setSelectedCardId1("")
        setSelectedCardId2("")
        setSelectedCardText1("")
        setSelectedCardText2("")
    }, [selectedCardId2])


    function checkMatchFound() {
        //update multiplier and score and style of appropriate cards
        if(selectedCardId1 !== ""){
            selectedCardId1 === selectedCardId2 ? 
                 handleMatchFound() :
                 handleMatchNotFound()
        }
        
    }


    function handleMatchFound(){
        console.log("we should be updating our score")
        setScore((value) => value + 1 * multiplier)
        setMultiplier((value) => value + 1 )
    }


    function handleMatchNotFound(){
        console.log("we should be resetting the multiplier")
        setMultiplier(() => 1)
    }


    useEffect(() =>{
        if(props.active === true)
        {
        setJapaneseCardsArray(japaneseCardsArray.filter(item => item == null))
        console.log("this is the filtered JapaneseCardsArray")
        console.log(japaneseCardsArray)
        setEnglishCardsArray(englishCardsArray.filter(item => item == null))
        setGenCards(true)
        }
    },[props.active])
    if(genCards)
    {
        setGenCards(false)
        createCards()
        props.toggleTimerActive()
    }
    if(props.active){
        
    return (
        <div>
            <Timer className= "count-down"timeRemaining = {props.timeLeft} />
            <button onClick={props.toPractice} className = "route-button">New Game</button>
            <button onClick={props.toGuide} className = "route-button">Exit Game</button>
            <div className="game-grid">
                {englishCardsArray}
                {japaneseCardsArray}
            </div>
            <p> the value of selectedCardId1 is: {selectedCardId1}</p>
            <p> the value of selectedCardId2 is: {selectedCardId2}</p>
            <p> the value of selectedCardText1 is: {selectedCardText1.toString()}</p>
            <p> the value of selectedCardText2 is: {selectedCardText2.toString()}</p>
            <p>Score: {score}</p>
            <p>multiplier: {multiplier}</p>
        </div>
    )
    }
    else{
        return(<></>)
    }
}
