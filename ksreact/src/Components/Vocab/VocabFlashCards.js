import React,{useState} from 'react'
import '../../styles/Vocab/VocabFlashCards.css'
export default function VocabFlashCards() {
    const FlashCardsData = require('../../Data/FlashCards.json')
    const vocabQuizLength = FlashCardsData.length
    const [flashCardFrontValueTop, setFlashCardFrontValueTop] = useState('Welcome, hit Next Card to start practicing.')
    const [flashCardFrontValueBottom, setFlashCardFrontValueBottom] = useState()
    const [flashCardBackValueTop, setFlashCardBackValueTop] = useState('Boo!')
    const [flashCardBackValueBottom, setFlashCardBackValueBottom] = useState()
    let seedrandom = require('seedrandom')
    let rng = seedrandom('added entropy.', {entropy: true})
    
    let index = 0
    let engFront

    

    function SetFrontBackValueType(){
        index =  Math.floor(rng() * vocabQuizLength)
        // console.log(index)
        if(index < .5){
            engFront = true;
        }
        else{engFront = false;}
    }
    function SetRandomFlashCard(){
        SetFrontBackValueType()
        index = Math.floor(rng() * vocabQuizLength)
        // console.log(index)
        if(engFront){
            setFlashCardFrontValueTop(FlashCardsData[index].english.toString())
            setFlashCardFrontValueBottom("")
            setFlashCardBackValueTop(FlashCardsData[index].kanji.toString())
            setFlashCardBackValueBottom(FlashCardsData[index].hiragana.toString())
        }
        else{
            setFlashCardFrontValueTop(FlashCardsData[index].kanji.toString())
            
            setFlashCardFrontValueBottom(FlashCardsData[index].hiragana.toString())
            setFlashCardBackValueTop(FlashCardsData[index].english.toString())
            setFlashCardBackValueBottom("")
        }
       
    }
    function handleClick(){
        SetRandomFlashCard()
    }
    return (
        
        <div className="container">
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <div className="flip-box-inner-content">
                            <h1>{flashCardFrontValueTop}</h1>
                            <h2>{flashCardFrontValueBottom}</h2>
                        </div>
                    </div>
                    <div className="flip-box-back">
                    <div className="flip-box-inner-content">
                            <h1>{flashCardBackValueTop}</h1>
                            <h2>{flashCardBackValueBottom}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleClick} className="button" >Next Card</button>
        </div>
        
    )
}
