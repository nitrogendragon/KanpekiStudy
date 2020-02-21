import React from 'react'
import{} from 'react-router-dom'
import NavButton from './NavButton'
import '../../styles/Navigation/nav.css'
export default function Navigation(props) {
    
    return (
    <div className='header-nav'>
        <NavButton history = {props.history} address = '/Home' buttonText = "Home" />
        <NavButton history = {props.history} address = '/VocabQuiz' buttonText = "Vocab Quiz" />
        <NavButton history = {props.history} address = '/VocabFlashCards' buttonText = "Vocab Flash Cards " />
        <NavButton history = {props.history} address = '/VocabSearch' buttonText = "Vocab Search " />
    </div>
    )
}
