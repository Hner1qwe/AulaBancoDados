import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Createpokedex from './CriarMatricula'
import Readpokedex from './ListarMatricula'
import Updatepokedex from './AlterarMatricula'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/matricula/cadastrar" element={ <Createpokedex/> }/>
                  <Route path="/matriculas" element={ <Readpokedex/> }/>
                  <Route path="/matriculas/alterar" element={ <Updatepokedex/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)
