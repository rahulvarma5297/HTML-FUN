// document.getElementById('count').innerText = 5

let count = 0

const countarr = []
console.log(count)

function myfunc(){
    count = count+1;
    document.getElementById('count').innerText=count;
}


function myrecord(){
    let x = count;
    countarr.push(x)
    count = 0;
    document.getElementById('count').innerText=count;
    document.getElementById('record').innerText += "-"+x;

    console.log(countarr)
}


function mytotal(){
    var element = 0
    for (let index = 0; index < countarr.length; index++) {
        element = element + countarr[index]
    }

    document.getElementById('total').innerText = element;
}




