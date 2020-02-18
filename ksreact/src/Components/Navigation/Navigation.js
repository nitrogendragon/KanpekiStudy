import React from 'react'
import{} from 'react-router-dom'
export default function Navigation(props) {
    
    return (
    <div className='header-nav'>
        <button onClick={() => props.history.push('/Home')} value = "/Home">
            Home
        </button>
        <button onClick={() => props.history.push('/VocabQuiz')} value = "/VocabQuiz">
            VocabQuiz
        </button>
        <button onClick={() => props.history.push('/VocabFlashCards')} value = "/VocabFlashCards">
            FlashCards
        </button>
        <button onClick={() => props.history.push('/VocabSearch')} value = "/VocabSearch">
            Vocab Search
        </button>
      
    </div>
    )
}
