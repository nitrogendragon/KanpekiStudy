import React from 'react'
import '../../styles/Vocab/ProgressBar.css'


export default function VocabQuizProgressBar(props) {

    const curProgress = (props.index / props.totalQuestions * 100 ).toString() +'%'
    // const curProgress = (props.index / props.totalQuestions * 100).toString() +'%'
    // useEffect( () => {
    //     if(index< props.totalQuestions && props.index != 0){
    //     setIndex(index + 1)
    //     }
    // },[props.index])

    
    return (
        
        <div className='progress-container'>
            <div className='progress'style={{width:curProgress}}></div>
        </div>
        
    )
}
