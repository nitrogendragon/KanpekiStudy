import React from 'react'
import '../../../styles/Vocab/VocabSearch/VocabSearch.css'
export default function VocabSearchResultItem(props) {
    return (
        <div>
            <p>{props.kanji}</p>
            <p>{props.hiragana}</p>
            <p>{props.romaji}</p>
            <p>{props.english}</p>
            <p>{props.exampleSentence}</p>
            <p>{props.exampleSentenceEnglish}</p>
            <p>{props.type}</p>
            
        </div>
    )
}
