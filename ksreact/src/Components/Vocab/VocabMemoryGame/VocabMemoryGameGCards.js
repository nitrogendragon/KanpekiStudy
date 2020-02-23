import React from 'react'
import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
export default function VocabMemoryGameGCards(props) {
    
    function handleClick() {
        props.handleSetSelectedCards(props.index, props.text)
    }
    if(props.text != null){
        return (
                <button 
                    id = {props.index} 
                    className="game-card" 
                    onClick = {handleClick}>
                    {props.text}
                </button> 
        )
    }
    else{return<></>}
    
}
