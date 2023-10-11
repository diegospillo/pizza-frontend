import React from 'react'
import ReactDOM from 'react-dom/client'
import Visualizzatore from './Visualizzatore/App'
import Amministratore from './Amministratore/App'
import 'bootstrap/dist/css/bootstrap.css'

const path = window.location.pathname;
switch(path){
  case '/ordine':
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <Visualizzatore />
      </React.StrictMode>,
    )
    break;
  case '/amministratore':
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <Amministratore />
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