function salvar(){
    const Nome = document.getElementById('Nome').value;
    const Idade = document.getElementById('Idade').value;
    
    alert(`Bem vindo(a), ${Nome} você tem ${Idade} anos!`)
}
function comparaNumeros(){
    const numero1 = parseInt(document.getElementById("Numero01").value);
    const numero2 = parseInt(document.getElementById("Numero02").value);

    if(numero1 > numero2) {
        alert("O primeiro numero é maior");
    } else if(numero1 == numero2) {
        alert("Os dois numeros são iguais");
    } else {
        alert("O primeiro numero é maior");
    }
}
//if/else Estrutura de decisão para as linguagens de progamação 