import React from 'react'
import '../../../styles/Vocab/VocabSearch/VocabSearch.css'
export default function VocabFilterDropDown(props) {
    return (
        <div className="filter-dropdown">
        <button className="filter-dropdown-button">FILTER</button>
        <div className="filter-dropdown-content"> 
                <label className="hover-dark">
                <input 
                    type = "checkbox" 
                    checked = {props.acceptEnglish} 
                    onChange={e => props.handleFilter(props.setAcceptEnglish, e)}>
                </input> English
                </label>
                <label className="hover-dark">
                <input 
                    type = "checkbox" 
                    checked = {props.acceptKanji}                              
                    onChange={e => props.handleFilter(props.setAcceptKanji, e)}>
                </input> Kanji
                </label>
                <label className="hover-dark">
                <input 
                    type = "checkbox" 
                    checked = {props.acceptHiragana}
                    onChange={e => props.handleFilter(props.setAcceptHiragana, e)}>
                </input> Hiragana 
                </label>
                <label className="hover-dark">
                <input 
                    type = "checkbox" 
                    checked = {props.acceptRomaji}
                    onChange={e => props.handleFilter(props.setAcceptRomaji, e)}>
                </input> Romaji
                </label>
                
            
        </div>
        {/* End Filter Section */}
    </div>
    )
}
