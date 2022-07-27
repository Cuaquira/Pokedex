import './App.css'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Pokedex from './Components/pokedex'
import Pokedexdetail from './Components/pokedexdetail'
import Protectec_route from './Components/Protected_route'


function App() {
  

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route element={ <Protectec_route />} >
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={ <Pokedexdetail />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

