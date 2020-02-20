import React, {useState} from 'react'
import VocabSearchResultItem from './VocabSearchResultItem'
import '../../../styles/Vocab/VocabSearch/VocabSearch.css'
export default function VocabSearchBar(props) {
    const [acceptEnglish, setAcceptEnglish] = useState(true)
    const [acceptKanji, setAcceptKanji] = useState(true)
    const [acceptHiraganaRomaji, setAcceptHiraganaRomaji] = useState(true)
    const [searchValue, setSearchValue] = useState("")
    const [vocabSearchResults, setVocabSearchResults] = useState([])
    const vocabularyData = require('../../../Data/Vocabulary.json')
    let activeFilters
    function handleFilter(stateSetter,e){
        activeFilters = 0;
        // if we are going to end up making no searches possible we wont change
        acceptKanji ? activeFilters += 1 : activeFilters += 0
        acceptHiraganaRomaji ? activeFilters += 1 : activeFilters += 0
        acceptEnglish ? activeFilters += 1 : activeFilters +=0
        //Note that this instance of e.target.checked seems to be based off after the click
        // so if it's actually false when clicked which is what our || exception is for
        // we end up checking for true instead
        if(activeFilters>1 || e.target.checked === true)
        {
         stateSetter(e.target.checked) 
        }
    }
    
    function handleSearch(){
        //deciding to do it this way in case I want more types of searches later
       createSearchResult()
    }

    function handleKeyDown(e){
        if(e.key === "Enter"){
            handleSearch()
        }
    }

    function createSearchResult(){
         const results = vocabularyData.map( item => 
            {if(
            acceptEnglish && item.english.toString() === searchValue.toString() ||
            acceptKanji && item.kanji.toString() === searchValue.toString() ||
            acceptHiraganaRomaji && item.hiragana.toString() === searchValue.toString() ||
            acceptHiraganaRomaji && item.romaji.toString() === searchValue.toString() ){
                return(<VocabSearchResultItem 
                    key = {item.id}
                    search = {searchValue}
                    kanji = {item.kanji}
                    english = {item.english}
                    altEnglish = {item.altEnglish}
                    hiragana = {item.hiragana}
                    romaji = {item.romaji}
                    exampleSentenceKanji = {item.exampleSentenceKanji}
                    exampleSentenceHiragana = {item.exampleSentenceHiragana}
                    exampleSentenceRomaji = {item.exampleSentenceRomaji}
                    exampleSentenceEnglish = {item.exampleSentenceEnglish}
                    type = {item.type}
            />) }}
                )
                setVocabSearchResults( results)
        
    }

    
    
    return (
        <>
        <div className="search-bar-container">
            <div className="search-bar">
                <input 
                    type = "text" 
                    className="search-input"
                    value = {searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    onKeyDown={e => handleKeyDown(e)}
                    placeholder=" Search... Enter english, kanji, or hiragana depending on your filters"
                />
                <button onClick={handleSearch} className="search-button">SEARCH</button>
                {/* Filter Section Starts */}
                <div className="filter-dropdown">
                    <button className="filter-dropdown-button">FILTER</button>
                    <div className="filter-dropdown-content">
                        <label className="two-item-a-row-grid">
                            <input 
                                type = "checkbox" 
                                checked = {acceptEnglish} 
                                onChange={e => handleFilter(setAcceptEnglish, e)}>
                            </input><p>English</p>
                            <input 
                                type = "checkbox" 
                                checked = {acceptKanji}                              
                                onChange={e => handleFilter(setAcceptKanji, e)}>
                            </input><p>Kanji</p>
                            <input 
                                type = "checkbox" 
                                checked = {acceptHiraganaRomaji}
                                onChange={e => handleFilter(setAcceptHiraganaRomaji, e)}>
                            </input><p>Hiragana / Romaji</p>
                        </label>
                    </div>
                    {/* End Filter Section */}
                </div>
            </div>
            
        </div>
        {vocabSearchResults}
        </>
        
    )
}
