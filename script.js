var arrayNum = [] 
var num
var arrayMemo= []
var punti = 0
var arrayMemoB = []

for (var i = 0; i < 5; i++) {
    num = Math.floor(Math.random()*9)
    arrayNum.push(num)
}
setTimeout(gioca , 3000);

function gioca() {
    for (var i = 0; i < arrayNum.length; i++) {
        var memo = prompt("che numeri hai visto? ")
        arrayMemo.push(memo)
        if ( memo == arrayNum[i]) {
            punti += 15
            arrayMemoB.push(memo)
        } else {
           

        }
    }    
    document.getElementById("result").innerHTML = ("I tuoi punti sono: " + punti + "</br> I tuoi numeri  sono: " + arrayMemo + "</br> I numeri corretti sono: " + arrayMemoB + "</br>" + arrayNum) 
}
alert("osserva i seguenti numeri " + arrayNum)



