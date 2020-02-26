import React, {useState, useEffect} from 'react'
import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
import VocabMemoryGameGCards from './VocabMemoryGameGCards'
import Timer from '../../General/Timer'
import uuid4 from 'uuid4'
export default function VocabMemoryGameGame(props) {
    const [englishCardsArray, setEnglishCardsArray] = useState([])
    const [japaneseCardsArray, setJapaneseCardsArray] = useState([])
    const [usedValues, setUsedValues] = useState([])
    const [selectedCardId1, setSelectedCardId1] = useState("")
    const [selectedCardId2, setSelectedCardId2] = useState("")
    const [selectedCardText1, setSelectedCardText1] = useState("")
    const [selectedCardText2, setSelectedCardText2] = useState("")
    const [ignore, setIgnore] = useState(false)
    const [genCards, setGenCards] = useState(false)
    const [score, setScore] = useState(0)
    const [multiplier, setMultiplier] = useState(1)
    const [cardSelected, setCardSelected] = useState(false)
    const [shouldUpdateSelection, setShouldUpdateSelection] = useState(false)
    let firstText = ""
    const [checkText, setCheckText] = useState("")
    const [id, setId] = useState("")
    let temp = []
    let seedrandom = require('seedrandom')
    let rng = seedrandom('added entropy.', {entropy: true})
    

    //creates array of size (size1) with values (0 to size2-1)
    //genericly written but made largely for my createCards function below to randomize order of gameCards
    function createRandomArray(size1, size2 ){
        let r 
        let arr = []
        let i = 0
        while(i< size1)
        {
            r = Math.floor(rng() * size2)
            if(arr.includes(r))
            {
                //do nothing
            }
            else{
            arr[i] = r
            i++
            }      
        }
            return arr
    }


    function handleCardStyle(text)
    {
        //put our game-card hover effects here
    }

    
    function createAndSetCardsRandomly() {
        //setup empty
        let i = 0
        const randomIndexArray = createRandomArray(props.totalCards, props.japaneseArray.length) 
        const randomIndexArray2 = createRandomArray(props.totalCards, props.japaneseArray.length) 
        let r
        //insert game cards in random order/random indexes
        for(i = 0; i < props.totalCards; i++){ 
            r = randomIndexArray[i]
            setJapaneseCardsArray([...japaneseCardsArray,japaneseCardsArray[i] = <VocabMemoryGameGCards 
                key = {uuid4()}
                text = {props.japaneseArray[r]}
                index = {props.idArray[r]}
                handleStyle = {handleCardStyle}
                handleSetSelectedCards = {handleSetSelectedCards}
                
            />]
            )
            r = randomIndexArray2[i]
            setEnglishCardsArray([...englishCardsArray,englishCardsArray[i] = <VocabMemoryGameGCards 
                key = {uuid4()}
                text = {props.englishArray[r]}
                index = {props.idArray[r]}
                handleStyle = {handleCardStyle}
                handleSetSelectedCards = {handleSetSelectedCards}
                
            />]
            )
        }
    }


    function resetArrays(){
        setEnglishCardsArray([])
        setJapaneseCardsArray([])
    }


    //Handles clicking cards and checking for correct matches, repeat clicks, and wrong matches
    function handleSetSelectedCards(id, text){
        setId(id.toString())
        if(text === checkText){
            setCheckText("")
        }
        else{
        setCheckText(text)
        }
        setShouldUpdateSelection(true)
        //everything is handled in useEffect 
    }

    function checkMatchFound() {
        //update multiplier and score and style of appropriate cards
        if(selectedCardId1 !== ""){
            selectedCardId1 === selectedCardId2 ? 
                 handleMatchFound() :
                 handleMatchNotFound()
        }
        
    }


    function handleMatchFound(){
        setScore((value) => value + 1 * multiplier)
        setMultiplier((value) => value + 1 )
    }


    function handleMatchNotFound(){
        setMultiplier(() => 1)
    }


    useEffect(()=>{
        checkMatchFound()
        if(selectedCardId2 === selectedCardId1){
            if(!usedValues.includes(selectedCardText1) && !usedValues.includes(selectedCardText2)){
                setUsedValues([...usedValues,selectedCardText1.toString(),selectedCardText2.toString()])
            }
            else if(!usedValues.includes(selectedCardText1)){
                setUsedValues([...usedValues, selectedCardText1.toString()])
            }
            else if(!usedValues.includes(selectedCardText2)){
                setUsedValues([...usedValues, selectedCardText2.toString()])
            }   
            
        }
        // reset all selection values
        setSelectedCardId1("")
        setSelectedCardId2("")
        setSelectedCardText1("")
        setSelectedCardText2("")
    }, [selectedCardId2])


    useEffect(( ) =>{
        if(shouldUpdateSelection){
            setShouldUpdateSelection(false)
            console.log(checkText)
            usedValues.filter((val)=> val !== "")
            if(checkText === "" || usedValues.includes(checkText))
            {
                console.log("found it")
                
            }    

            else if(selectedCardId1 === "") {
                console.log("selected first card")
                setSelectedCardId1(id.toString())
                setSelectedCardText1(checkText.toString())
            }
            //checking to see if we hit the same card again
            else if(selectedCardText1 === checkText){  
                console.log("We hit the same card")
                setSelectedCardId1("")
                setSelectedCardText1("")

            }
            //make sure idCard2 is null and then set values
            else if(selectedCardId2 === "")
            { 
                console.log("should be setting id2")
                setSelectedCardId2(id.toString())
                setSelectedCardText2(checkText.toString())
                //will check for match in useEffect that runs when cardId2 changes
                
            }
        }
            
    },[shouldUpdateSelection])

    useEffect(() =>{
        if(props.active === true)
        {
        setJapaneseCardsArray(japaneseCardsArray.filter(item => item == null))
        setEnglishCardsArray(englishCardsArray.filter(item => item == null))
        setGenCards(true)
        }
        else{
            setScore(0)
            setMultiplier(1)
            setSelectedCardId1("")
            setSelectedCardId2("")
            setSelectedCardText1("")
            setSelectedCardText2("")
            resetArrays()
        }
    },[props.active])


    useEffect(() =>{
        if(genCards){
            setGenCards(false)
            createAndSetCardsRandomly()
            props.toggleTimerActive()
        }
    },[genCards])

    
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