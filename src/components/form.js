import { useState } from 'react'
import inss from './inss'
import irpf from './irpf'

const Form = props => {

  const [SalBruto, setSalBruto] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
      const descontoINSS = inss(SalBruto);
      const salarioBase = SalBruto - descontoINSS;
      const descontoIRPF = irpf(salarioBase);
      const salarioLiquido = salarioBase - descontoIRPF;
      props.handleResult(salarioLiquido);
      props.handleInss(descontoINSS);
      props.handleIrpf(descontoIRPF);
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>Salário Bruto: </label>
        <input
          type="number" placeholder='Ex.: 7500.00'
          required value={SalBruto}
          onChange={e => {
            setSalBruto(e.target.value)
          }}
        />
        <button id='calcular'>Calcular Impostos</button>
      </form>
    </div>
  )
}

export default Form