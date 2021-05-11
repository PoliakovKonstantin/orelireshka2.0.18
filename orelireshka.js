
const readline=require('readline');
const fs=require('fs');
const input=readline.createInterface(process.stdin);
input.on('line',(data) => {    
    let a=Math.floor(Math.random()*3);
    if (a==0) {
        a=1
    }
    var b=parseInt(data)
    if (b==a) { //err не работает
        fs.appendFileSync("orelireshka.txt", "Верно!!! ");
        console.log("Верно!");
    }
    else if(parseInt(data)!=a)  {
        fs.appendFileSync("orelireshka.txt", "Неверно! ");
        console.log("Неверно");
    }
}) 