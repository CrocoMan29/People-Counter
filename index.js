let counter = document.getElementById('counter');
// console.log(counter);
let saveEl = document.getElementById("save-el")
let count = 0;

function increment(){
    count++;
    counter.textContent = count;
    // console.log(count);
}

function save(){
    let tmp = count + " - "
    saveEl.textContent += tmp + " "
    count = 0
    counter.textContent = count
    console.log(count);
}
