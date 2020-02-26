import React from 'react'
import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
export default function VocabMemoryGameGCards(props) {
    
    function handleClick(e) {
        const target = e.target
        props.handleSetSelectedCards(props.index, props.text,target)
    }
    if(props.text != null){
        return (
                <button 
                    id = {props.index} 
                    className="game-card" 
                    onClick = {e => handleClick(e)}
                >
                    {props.text}
                </button> 
        )
    }
    else{return<></>}
    
}
