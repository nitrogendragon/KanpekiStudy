import React from 'react'
import '../../styles/Vocab/VocabFlashCards.css'
export default function VocabFlashCards() {
    const FlashCardsData = require('../../Data/FlashCards.json')//eventually change via useState,useEffect
    const vocabQuizLength = FlashCardsData.length
    let flashCardFrontValueTop
    let flashCardFrontValueBottom
    let flashCardBackValueTop
    let flashCardBackValueBottom
    let index = 0;
    let engFront;
    function SetFrontBackValueType(){
        index = Math.random()
        console.log(index)
        if(index < .5){
            engFront = true;
        }
        engFront = false;
    }
    function SetRandomFlashCard(){
        SetFrontBackValueType()
        index = Math.floor(Math.random() * vocabQuizLength)
        if(engFront){
            flashCardFrontValueTop = FlashCardsData[index].english.toString()
            flashCardBackValueTop = FlashCardsData[index].kanji.toString()
            flashCardBackValueBottom = FlashCardsData[index].hiragana.toString()
        }
        else{
            flashCardFrontValueTop = FlashCardsData[index].kanji.toString()
            flashCardFrontValueBottom = FlashCardsData[index].hiragana.toString()
            flashCardBackValueTop = FlashCardsData[index].english.toString()
        }

    }
    SetRandomFlashCard()
    return (
        <div className="container">
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <div className="flip-box-inner-content">
                            <h1>{flashCardFrontValueTop}</h1>
                            <h2>{flashCardFrontValueBottom}</h2>
                        </div>
                    </div>
                    <div class="flip-box-back">
                    <div className="flip-box-inner-content">
                            <h1>{flashCardBackValueTop}</h1>
                            <h2>{flashCardBackValueBottom}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
