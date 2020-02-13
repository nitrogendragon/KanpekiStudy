import React, {useState,useEffect} from 'react'
import '../styles/ProgressBar.css'


export default function VocabQuizProgressBar(props) {
    const [index, setIndex] = useState(0)
    const curProgress = (props.index / props.totalQuestions * 100 ).toString() +'%'
    // const curProgress = (props.index / props.totalQuestions * 100).toString() +'%'
    // useEffect( () => {
    //     if(index< props.totalQuestions && props.index != 0){
    //     setIndex(index + 1)
    //     }
    // },[props.index])

    const ProgressContainer = {
        width: {curProgress}+'%',
        height: '20px',
        backgroundColor: '#222'
    }
    return (
        
        <div className='progress-container'>
            <div className='progress'style={{width:curProgress}}></div>
        </div>
        
    )
}
