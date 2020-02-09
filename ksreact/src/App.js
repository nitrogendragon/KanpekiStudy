import React, {useState, useEffect, useRef} from 'react'
export default function App() {
  const words = ['word', 'the', 'bird', 'swerved', 'curved']
  const [word, setWord ] = useState(words[0])
  const[index, setIndex] = useState(0)
  function handleIndexChange(){
    setIndex(index < words.length ? index+1 : 0)
  }
  useEffect(()=>{
    setWord(words[index])
  },[words,index])
  
  let wordlist = []
  
  return (
    <div>
      <ul>{words.map( (word) => <h1>{word}</h1>)}</ul>
      <p>Our word is: {word}</p>
      <button onClick={handleIndexChange}>Update Word</button>
      <p>The index is currently: {index}</p>
    </div>
  )
}

