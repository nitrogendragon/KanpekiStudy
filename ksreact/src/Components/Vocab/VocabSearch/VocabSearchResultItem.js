import React from 'react'
import '../../../styles/Vocab/VocabSearch/VocabSearch.css'
export default function VocabSearchResultItem(props) {
    return (
        <>
        <div className="vocab-search-result-card" >
            <div className="vocab-search-result-card-section-1">
                <p className="vocab-search-result-card-kanji">{props.kanji}</p>
                <p className="vocab-search-result-card-hiragana">{props.hiragana}</p>
                <p className="vocab-search-result-card-romaji">{props.romaji}</p>
            </div>
            <div className="vocab-search-result-card-section-2">
                <p className="vocab-search-result-card-type">{props.type}</p>
                <p className="vocab-search-result-card-english">{props.english}</p>
                <p className="vocab-search-result-card-english">{props.altEnglish}</p>
            </div>
            <div className="vocab-search-result-card-section-3">
                <p className="vocab-search-result-card-example-sentence">{props.exampleSentenceKanji}</p>
                <div>
                    <p>{props.exampleSentenceHiragana}</p>
                    <p>{props.exampleSentenceRomaji}</p>
                </div>
                <p>{props.exampleSentenceEnglish}</p>
            </div>
        </div>
        </>
    )
}
