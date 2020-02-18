import React, {useState} from 'react'
import '../../../styles/Vocab/VocabSearch/VocabSearch.css'
export default function VocabSearchBar(props) {
    const [acceptEnglish, setAcceptEnglish] = useState(true)
    const [acceptKanji, setAcceptKanji] = useState(true)
    const [acceptHiraganaRomaji, setAcceptHiraganaRomaji] = useState(true)
    function handleSearch(){
        props.Search()
    }
    function handleFilter(checked){
        checked = !checked
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
                        
                        <input type = "checkbox" checked = "checked" value = {true} onChange={handleFilter}></input><p>English</p>
                        <input type = "checkbox" checked = "checked" value = {true} onChange={handleFilter}></input>Kanji
                        <input type = "checkbox" checked = "checked" value = {true} onChange={handleFilter}></input>Hiragana / romaji
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
