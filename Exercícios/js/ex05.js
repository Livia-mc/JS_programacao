var n1, n2, n3, n4, pre
n1=parseInt(prompt("Digite sua primeira nota: "))
n2=parseInt(prompt("Digite sua segunda nota: "))
n3=parseInt(prompt("Digite sua terceira nota: "))
n4=parseInt(prompt("Digite sua quarta nota: "))

pre=parseInt(prompt("Digite sua porcentagem de frequencia: "))

alert("Sua média é: " + (n1+n2+n3+n4)/4)

if ((n1+n2+n3+n4)/4 >= 7, pre>=75) {
    alert("Você foi aprovado")
}
else {
    alert("Você foi reprovado")
}