function verifica() {
    const idade = document.getElementById("Idade").value;
    if(idade < 0 ){
        alert("A idade é invalida");
    } else if(idade <= 12){
        alert("Está é uma CRIANÇA");
    } else if(idade <=18){
        alert("Está é uma ADOLESCENTE" );
    } else if(idade <= 100){
        alert("Está é um ADULTO");
    } else {
        alert("Idade  invalida")
    }
}

function verifica2() {
    const idade = document.getElementById("Idade").value;
    if(idade < 0 || idade > 100){
        alert("A idade é invalida");
    } else if(idade <= 12 &&  idade <= 12){
        alert("Está é uma CRIANÇA");
    } else if(idade <= 18 && idade <= 18){
        alert("Está é uma ADOLESCENTE" );
    } else if(idade <= 100){
        alert("Está é um ADULTO");
    } else {
        alert("Idade  invalida")
    }
}