import { useState } from 'react'
import './App.css';
import Form from './components/form';
import Header from './components/header';

function App() {
  const [result, setResult] = useState('')
  const [dinss, setInss] = useState('')
  const [dirpf, setIrpf] = useState('')

  const updateResult = r => {
    setResult("R$" + r.toFixed(2))
  }

  const updateInss = r => {
    setInss("R$" + r.toFixed(2))
  }

  const updateIrpf = r => {
    setIrpf("R$" + r.toFixed(2))
  }

  const clear = e => {
    setInss('')
    setIrpf('')
    setResult('')
    
  }

  return (
    <div className="App">
      <Header title="Calculadora de Impostos" />
      <div className='Body'>
        <Form handleResult={updateResult} handleInss={updateInss} handleIrpf={updateIrpf}/>
        <p className='paragrafo'>Seu salário líquido: {result}</p>
        <p className='paragrafo'>Confira seus descontos: </p>
        <p className='paragrafo'>INSS: {dinss}</p>
        <p className='paragrafo'>IRPF: {dirpf}</p>
        <button id='limpar' onClick={clear}>Limpar Informações</button>
      </div>
    </div>
  )
}

export default App;
