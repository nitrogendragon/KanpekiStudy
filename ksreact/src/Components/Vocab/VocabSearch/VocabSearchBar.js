import React, {useState} from 'react'
import VocabSearchResultItem from './VocabSearchResultItem'
import VocabFilterDropDown from './VocabFilterDropDown'
import '../../../styles/Vocab/VocabSearch/VocabSearch.css'
export default function VocabSearchBar(props) {
    const [acceptEnglish, setAcceptEnglish] = useState(true)
    const [acceptKanji, setAcceptKanji] = useState(true)
    const [acceptHiragana, setAcceptHiragana] = useState(true)
    const [acceptRomaji, setAcceptRomaji] = useState(true)
    const [searchValue, setSearchValue] = useState("")
    const [vocabSearchResults, setVocabSearchResults] = useState([])
    const vocabularyData = require('../../../Data/Vocabulary.json')
    let activeFilters
    function handleFilter(stateSetter,e){
        activeFilters = 0;
        // if we are going to end up making no searches possible we wont change
        acceptKanji ? activeFilters += 1 : activeFilters += 0
        acceptHiragana ? activeFilters += 1 : activeFilters += 0
        acceptRomaji ? activeFilters += 1 : activeFilters += 0
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
         const results = vocabularyData.map
         ( item => 
            {   
                if(
                acceptEnglish && item.english.toString() === searchValue.toString() ||
                acceptKanji && item.kanji.toString() === searchValue.toString() ||
                acceptHiragana && item.hiragana.toString() === searchValue.toString() ||
                acceptRomaji && item.romaji.toString() === searchValue.toString() )
                {
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
                        />
                        ) 
                }
            }
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
                    placeholder="  Enter english, kanji, hiragana,
                     or romaji depending on your filters... Hit enter or press SEARCH to search."
                />
                <button onClick={handleSearch} className="search-button">SEARCH</button>
                <VocabFilterDropDown 
                    handleFilter = {handleFilter}
                    acceptEnglish = {acceptEnglish}
                    acceptHiragana = {acceptHiragana}
                    acceptRomaji = {acceptRomaji}
                    acceptKanji = {acceptKanji}
                    setAcceptEnglish = {setAcceptEnglish}
                    setAcceptHiragana = {setAcceptHiragana}
                    setAcceptRomaji = {setAcceptRomaji}
                    setAcceptKanji = {setAcceptKanji}
                    />
            </div>
            {/* <p>The value of acceptEnglish is {acceptEnglish.toString()}</p>
            <p>The value of acceptKanji is {acceptKanji.toString()}</p>
            <p>The value of acceptHiragana is {acceptHiragana.toString()}</p>
            <p>The value of acceptRomaji is {acceptRomaji.toString()}</p> */}
        </div>
        {vocabSearchResults}
        </>
        
    )
}
