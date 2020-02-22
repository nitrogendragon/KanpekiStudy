import React,  {useState} from 'react'
import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
export default function VocabMemoryGamePracticeCards(props) {
    const [shouldGenNumbers, setShouldGenNumbers] = useState(props.genNumbers)
    const [totalCards, setTotalCards] = useState(10)
    const [cardsArray, setCardsArray] = useState([])
    let seedrandom = require('seedrandom')
    let rng = seedrandom('added entropy.', {entropy: true})
    let i, i2 = 0


    const pickAndSetPairs = () =>
    {
        
        i = 0;
        i2 =0;
        while(i < totalCards){
            let repeated = false
            let r = Math.floor(rng() * props.wordPairsLength)
            for(i2 = 0; i2 < i; i2++){
                if( props.idArray[i2] && r == props.idArray[i2]){
                    repeated = true
                }
                else{}
            }
            if(repeated)
            {
                console.log("there was a repeat")
            }
            else{
            props.setIdArray([props.idArray[i] = r])
            props.setEnglishArray([props.englishArray[i] = props.wordPairsData[r].english])
            props.setJapaneseArray([props.japaneseArray[i] = props.wordPairsData[r].japanese])
            props.setRomajiArray([props.romajiArray[i] = props.wordPairsData[r].romaji])
            
            console.log(r)
            i++
            
            }
        }
        console.log(props.idArray)
        console.log(props.englishArray)
        console.log(props.romajiArray)
        console.log(props.japaneseArray)
        console.log("total cards" + totalCards)
    }


    if(shouldGenNumbers){
        setShouldGenNumbers(false)
        
        pickAndSetPairs()
        cards()
        props.startCountDown()
    
    }


    function cards() {
        for(let i = 0; i < totalCards; i++){
            setCardsArray([...cardsArray, cardsArray[i] =
            <div className="practice-card" key = {props.idArray[i]}>
            <p>{props.englishArray[i]}</p>
            <p>{props.japaneseArray[i]}</p>
            <p>{props.romajiArray[i]}</p>
        </div>])
        }

    }

    return (
        <div>{cardsArray}</div>
        
    )
}
