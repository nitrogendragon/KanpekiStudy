import React from 'react'
import '../../styles/Vocab/VocabCard.css'
export default function VocabCardImg(props) {
    return (
        <div className='vocab-card'>
            {/* We always have to use this process.env.PUBLIC_URL + {props.imgUrl} to get our images to load if we want to be able to access by filename instead of doing tons of imports */}
            <img style={{height: '100%', width: '100%'}} src={process.env.PUBLIC_URL + props.imgUrl} alt=''></img>

        </div>
    )
}
