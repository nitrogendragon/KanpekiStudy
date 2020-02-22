import React,  {useState} from 'react'

export default function VocabMemoryGamePracticeCards(props) {
    const [shouldGenNumbers, setShouldGenNumbers] = useState(props.genNumbers)
    let seedrandom = require('seedrandom')
    let rng = seedrandom('added entropy.', {entropy: true})
    const pickAndSetPairs= () =>
    {
        
        let i = 0;
        let i2 =0;
        while(i < 10){
            let repeated = false
            let r = Math.floor(rng() * props.wordPairsLength)
            for(i2 = 0; i2 < i; i2++){
                if( props.idArray[i2] && r == props.idArray[i2]){
                    repeated = true
                }
                else{}
            }
            if(repeated)
            {
                
            }
            else{
            props.setIdArray([props.idArray[i] = r])
            props.setEnglishArray([props.englishArray[i] = props.wordPairsData[r].english])
            props.setJapaneseArray([props.japaneseArray[i] = props.wordPairsData[r].japanese])
            console.log(r)
            i++
            
            }
        }
        console.log(props.idArray)
        console.log(props.englishArray)
        console.log(props.japaneseArray)

    }
    if(shouldGenNumbers){
        setShouldGenNumbers(false)
        pickAndSetPairs()
    }
    return (
        <div>
            
        </div>
    )
}
