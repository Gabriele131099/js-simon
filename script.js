var arrayNum = [] 
var num
for (var i = 0; i < 5; i++) {
    num = Math.floor(Math.random()*9)
    arrayNum.push(num)
}
setTimeout(gioca , 30000);

function gioca() {
    var arrayMemo= []
    var punti = 0
    var arrayMemoB = []
    for (var i = 0; i < arrayNum.length; i++) {
        var memo = prompt("che numeri hai visto")
        arrayMemo.push(memo)
        if ( memo === arrayMemo[i]) {
            punti += 15
            arrayMemoB.push(memo)
        } else {
        }
    }    
    document.getElementById("result").innerHTML = ("i tuoi punti sono" + punti + "</br> I numeri corretti sono" + arrayMemoB)
}



