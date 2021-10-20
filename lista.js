let nroAlunos = 7;

let alunos = ["Bruno", "Alice", "Fernando"];

let i = 0;

for (let i = 0; i < alunos.length; i++) {
    //console.log (i);
    if (i == 0) {
        console.log (i+" ZERO");
    }
    else if (i%2==0) {
        console.log (i+" Número par!");
    }
    else {
        console.log (i+" Número ímpar!");
    }
}