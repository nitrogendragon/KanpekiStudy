import React from 'react'

export default function VocabQuizAnswerFeedBack(props) {
    const feedBack = props.isDisplayed ? 
        props.isCorrect ? 
        'Good job! You got it right. Go ahead and move onto the next question by hitting continue' :
        'Sorry, go ahead and try again' : null
    let textColor
    props.isCorrect ?
        textColor = {color: "green"} :
        textColor = {color: "red"}    
    
    return (
        <div className='feed-back-container' style = {{color:textColor.color}}>
            {feedBack}
        </div>
    )
}
