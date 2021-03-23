let cod = prompt("Digite o código do combustivel a ser abastecido: ")

if (cod != 1 && cod != 2) {
    alert("Código inválido, digite 1 ou 2")
}

let quant = prompt("Quantos litros você quer abastecer? ")

let total = 0
if (cod == 1){
    total = quant * 3.16
} else {
    total = quant * 4.19
}

let combustivel = ""
if (cod == 1){
    combustivel = "álcool"
} else {
    combustivel = "gasolina"
}

document.write("Abastecido com " +combustivel +" | Valor a pagar: R$" +total);
