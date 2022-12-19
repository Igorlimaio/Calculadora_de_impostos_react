function inss(SalBruto){                    //função que calcula o desconto do inss
    let inss;
    if (SalBruto <= 1212){                  //inss para o salário entre os determinados valores abaixo
        inss = SalBruto*0.075;
    }
    else if(SalBruto>=1212.01 && SalBruto<=2427.35){
        inss = (SalBruto-1212)*0.09 + 1212*0.075;
    }
    else if(SalBruto>=2427.36 && SalBruto<=3641.03){
        inss = (SalBruto-2427.35)*0.12 + 1212*0.075 + (2427.35-1212)*0.09;
    }
    else if(SalBruto>=3641.04){
        inss = (SalBruto-3641.03)*0.14 + 1212*0.075 + (2427.35-1212)*0.09 + (3641.03-2427.35)*0.12;
        if(inss>828.39){
            inss = 828.39;
        }
    }
    return inss;
}

export default inss