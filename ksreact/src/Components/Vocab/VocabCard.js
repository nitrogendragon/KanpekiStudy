import React from 'react'
import '../../styles/Vocab/VocabCard.css'
export default function VocabCard(props) {
    return (
        <div className='vocab-card'>
            {props.kanji ? props.kanji : props.hiragana ? props.hiragana : props.english}
        </div>
    )
}
