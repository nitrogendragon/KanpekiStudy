import React from 'react'
import '../../../styles/Vocab/VocabMemoryGame/VocabMemoryGame.css'
export default function VocabMemoryGameGuide(props) {
    
    
    if (props.active)
    {
        return (
            <div>
                <p>Welcome to the vocabulary memory game mode! If you have already played and know
                    what you are doing feel free to go ahead and hit the start button. If not, worry not, you
                    will be going in no time.
                </p>
                <p>The way this game works is divided into two parts:</p>
                <p>1.1 : You will be given pairs of words with one member being Kanji / Hiragana and the 
                    other being the English Translation. 
                </p>
                <p>1.2 : You will take as much time as you feel you need to learn or verify your 
                    knowledge of the selected vocabulary and once ready press Begin Game to start 
                    the game.
                </p>
                <p>2.1 : Once you have pressed begin game you will immediately be thrown into the game.
                    On the screen you will see a grid of cards with your pairs of words scattered about.
                    The goal of the game is to match the pairs before time runs out.
                </p>
                <p>2.2 : In order to match the pairs simply click on the first card and make sure it highlights.
                    Then click on the second card. If your two cards are a pair then they will become solid green cards 
                    and your score at the top of the page will increase.
                </p>
                <p>2.3 : If you click a card you didn't mean to simply click it again to deselect it.</p>
                <p>2.4 : To make things a little more interesting you will receieve a multiplier for 
                    correctly choosing multiple pairs in a row. If you make a mistake however, your 
                    multiplier will disappear. You can view your current multiplier next to your score.
                    Be careful though because time is ticking fast.
                </p>
                <div className = "route-button-container">
                <button className = "route-button" onClick={props.start}>Start the Game</button>
                </div>
            </div>
        )
    }
    else{ return(<></>)}
}
