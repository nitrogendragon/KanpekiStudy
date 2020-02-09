import React from 'react'
import '../styles/VocabCard.css'
export default function VocabCardImg(props) {
    return (
        <div className='vocab-card'>
            {/* We always have to use require to get our images to load */}
            <img src={process.env.PUBLIC_URL + props.imgUrl} alt=''></img>

        </div>
    )
}
