let tentativas = 1
let chute
let nome = prompt('Qual seu nome, divo(a)');
 let numeroSecreto = parseInt(Math.random() * 11)
 alert('Boas vindas ao jogo do número secreto, &[nome]! Tente adivinhar o número secreto entre 0 e 10')
while (chute != numeroSecreto) {
     let chute = prompt('Escolha um número entre 0 e 10')
     if (chute == numeroSecreto) {
         break
     } else {
         if (chute > numeroSecreto) {
             alert('O número secreto é menor')
         } else {
             alert('O número secreto é maior')
         }
     }
     tentativas++
 }

 let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
 alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)