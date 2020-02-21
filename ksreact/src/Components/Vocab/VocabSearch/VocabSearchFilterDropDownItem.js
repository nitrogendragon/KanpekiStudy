import React from 'react'
import '../../../styles/Vocab/VocabSearch/VocabSearch.css'
export default function VocabSearchFilterDropDownItem(props) {
    return (
        <label className="hover-dark">
                <input 
                    type = "checkbox" 
                    checked = {props.acceptInputType} 
                    onChange={e => props.handleFilter(props.setAcceptInputType, e)}>
                </input> {props.inputTypeText}
        </label>
    )
}
