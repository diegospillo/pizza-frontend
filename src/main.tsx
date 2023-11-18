import React from 'react'
import ReactDOM from 'react-dom/client'
import Visualizzatore from './Gestione_ordine_studente/App'
import Autentificazione from './Autentificazione/App'
import 'bootstrap/dist/css/bootstrap.css'

const path = window.location.pathname;

switch(path){
  case '/':
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <Autentificazione />
      </React.StrictMode>,
    )
    break;
  case '/ordine':
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <Visualizzatore />
      </React.StrictMode>,
    )
    break;
  default:
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <h1>Pagina non trovata</h1>
      </React.StrictMode>,
    )
    break;
}