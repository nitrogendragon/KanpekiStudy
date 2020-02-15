import React from 'react'
import{Link} from 'react-router-dom'
export default function Navigation(props) {
    
    return (
    <div className='header-nav'>
        <button onClick={() => props.history.push('/Home')} value = "/Home">
            Home
        </button>
        <button onClick={() => props.history.push('/VocabQuiz')} value = "/Home">
            VocabQuiz
        </button>
      
    </div>
    )
}
