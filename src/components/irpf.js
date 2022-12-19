function irpf(salarioBase){                 //função que calcula o desconto do irpf
    let irpf;
    if (salarioBase <= 1903.98){            //irpf para o salário entre os determinados valores abaixo
        irpf = 0;
    }
    else if(salarioBase>=1903.99 && salarioBase<=2826.65){
        irpf = (salarioBase-1903.98)*0.075;
    }
    else if(salarioBase>=2826.66 && salarioBase<=3751.05){
        irpf = (salarioBase-2826.65)*0.15 + (2826.65-1903.98)*0.075;
    }
    else if(salarioBase>=3751.06 && salarioBase<=4664.68){
        irpf = (salarioBase-3751.05)*0.225 + (3751.05-2826.65)*0.15 + (2826.65-1903.98)*0.075;
    }
    else if(salarioBase>=4664.69){
        irpf = (salarioBase-4664.68)*0.275 + (4664.68-3751.05)*0.225 + (3751.05-2826.65)*0.15 + (2826.65-1903.98)*0.075;
    }
    return irpf;
}

export default irpf