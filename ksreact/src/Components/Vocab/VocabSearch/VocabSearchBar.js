import React, {useState} from 'react'
import '../../../styles/Vocab/VocabSearch/VocabSearch.css'
export default function VocabSearchBar(props) {
    const [acceptEnglish, setAcceptEnglish] = useState(true)
    const [acceptKanji, setAcceptKanji] = useState(true)
    const [acceptHiraganaRomaji, setAcceptHiraganaRomaji] = useState(true)
    let activeFilters;
    function handleFilter(stateSetter,e){
        activeFilters = 0;
        // if we are going to end up making no searches possible we wont change
        acceptKanji ? activeFilters += 1 : activeFilters += 0
        acceptHiraganaRomaji ? activeFilters += 1 : activeFilters += 0
        acceptEnglish ? activeFilters += 1 : activeFilters +=0
         stateSetter(e.target.checked) 
    }
    
    function handleSearch(){
        props.Search()
    }

    
    
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <input type = "text" className="search-input"
                    placeholder=" Search... Enter english, kanji, or hiragana depending on your filters">
                </input>
                <button onClick={handleSearch} className="search-button">SEARCH</button>
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
                </div>
            </div>
            <p>{acceptEnglish.toString()}</p>
            <p>{acceptHiraganaRomaji.toString()}</p>
            <p>{acceptKanji.toString()}</p>
        </div>
        
    )
}
