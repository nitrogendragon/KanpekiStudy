import React from 'react'
import '../../../styles/Vocab/VocabSearch/VocabSearch.css'
import VocabSearchFilterDropDownItem from './VocabSearchFilterDropDownItem'
export default function VocabFilterDropDown(props) {
    return (
        <div className="filter-dropdown">
        <button className="filter-dropdown-button">FILTER</button>
        <div className="filter-dropdown-content">         
                <VocabSearchFilterDropDownItem inputTypeText = "English" 
                    acceptInputType = {props.acceptEnglish}
                    setAcceptInputType = {props.setAcceptEnglish}
                    handleFilter = { props.handleFilter} 
                    />
                <VocabSearchFilterDropDownItem inputTypeText = "Kanji" 
                    acceptInputType = {props.acceptKanji}
                    setAcceptInputType = {props.setAcceptKanji}
                    handleFilter = { props.handleFilter} 
                    />
                <VocabSearchFilterDropDownItem inputTypeText = "Hiragana" 
                    acceptInputType = {props.acceptHiragana}
                    setAcceptInputType = {props.setAcceptHiragana}
                    handleFilter = { props.handleFilter} 
                    />
                <VocabSearchFilterDropDownItem inputTypeText = "Romaji" 
                    acceptInputType = {props.acceptRomaji}
                    setAcceptInputType = {props.setAcceptRomaji}
                    handleFilter = { props.handleFilter} 
                    />
                
        </div>
        {/* End Filter Section */}
    </div>
    )
}
