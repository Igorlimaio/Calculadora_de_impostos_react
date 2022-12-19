const Display = props => {
    const a = (props.a)
    const b = (props.b)
    const c = (props.c)
    let displayOuta = ''
    let displayOutb = ''
    let displayOutc = ''

    if (a!==''){
        displayOuta =`Seu salário líquido: ${a}`;
        displayOutb =`Desconto do INSS: ${b}`;
        displayOutc =`Desconto do IRPF: ${c}`;
    }

    return (
        <div>
            <p className='paragrafo'>{displayOuta}</p>
            <p className='paragrafo'>{displayOutb}</p>
            <p className='paragrafo'>{displayOutc}</p>
        </div>
    )
}

export default Display