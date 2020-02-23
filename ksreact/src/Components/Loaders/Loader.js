import React from 'react'
import '../../styles/Loader/loader.css'
export default function Loader(props) {
    if(props.show === true)
    {
    return (
        <div className = "loader" style ={props.hideLoader}>
            Loading...
        </div>
    )
    }
    else{
        return <></>
    }
}
