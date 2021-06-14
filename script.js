var arrayNum = [] 
var num
for (var i = 0; i < 4; i++) {
    num = Math.floor(Math.random()*9)
    arrayNum.push(num)
}
alert(" Ricorda i seguenti numeri " + arrayNum)
var arrayMemo= []
for (var i = 0; i < arrayNum.length; i++) {
    var memo = prompt("che numeri hai visto")
    arrayMemo.push(memo)
}
