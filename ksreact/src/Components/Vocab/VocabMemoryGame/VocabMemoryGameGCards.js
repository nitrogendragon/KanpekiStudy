import React from 'react'
import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
export default function VocabMemoryGameGCards(props) {
    const id = props.index
    if(props.text != null){
        return (
            <div id = {id} className="game-card">
                
                    <p>{props.text}</p> 

            </div>

        )
    }
    else{return<></>}
    
}
