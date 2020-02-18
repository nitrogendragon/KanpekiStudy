import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Navigation from '../src/Components/Navigation/Navigation'
import Home from '../src/Components/Home/Home'
import VocabQuizContainer from '../src/Components/Vocab/VocabQuizContainer'
import VocabFlashCards from '../src/Components/Vocab/VocabFlashCards'
import VocabSearch from '../src/Components/Vocab/VocabSearch/VocabSearchContainer'
import history from './History'
import '../src/App.css'

export default function App() {
 
  
  return (
    <>
    <Navigation history = {history}/>
    <Router history={history}>
      <Switch>
        <Route component= {Home} exact path ="/Home" />
        <Route component= {VocabQuizContainer} exact path ="/VocabQuiz" />
        <Route component= {VocabSearch} exact path ="/VocabSearch" />
        <Route component= {VocabFlashCards} exact path = "/VocabFlashCards" />
      </Switch>
    </Router>
    </>
  )
}

