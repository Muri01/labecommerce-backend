console.log("---- O Aplicativo foi iniciado ----")

//exercicio 2
// console.log(process.argv[2])

//Exercicio 3

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const choicePlayer = process.argv[2]
const numberPlayer = process.argv[3]
const numberComputer = getRndInteger(0,10)
// console.log({choicePlayer})
// console.log({numberPlayer})
// console.log({numberComputer})

if(!choicePlayer | !numberComputer){
    console.log("digite um número e uma escolha")
} else {
    const soma = numberPlayer+numberComputer
    // (soma % 2 === 0) ? result = "par" : result = "impar"
    if(soma % 2 === 0){
        const result = "par"
        console.log("soma é par!!")
        if(result === choicePlayer){
            const winner = "GANHOU!"
            console.log(`Você escolheu ${choicePlayer}. Você ${winner}!`)

        } else{
            const winner = "PERDEU"
            console.log(`Você escolheu ${choicePlayer}. Você ${winner}!`)

        }
    } else{
        const result = "impar"
        console.log("soma é impar!!")
        if(result === choicePlayer){
            const winner = "GANHOU!"
            console.log(`Você escolheu ${choicePlayer}. Você ${winner}!`)

        } else{
            const winner = "PERDEU"
            console.log(`Você escolheu ${choicePlayer}. Você ${winner}!`)

        }
    }
}

// console.log(`Você escolheu ${choicePlayer}. O resultado foi ${soma}. Você ${winner}!`)
