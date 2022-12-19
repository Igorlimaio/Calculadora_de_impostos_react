import { useState } from 'react'
import './App.css';
import Display from './components/display';
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
        <Display a={result} b={dinss} c={dirpf}/>
        <button id='limpar' onClick={clear}>Limpar Informações</button>
      </div>
    </div>
  )
}

export default App;
