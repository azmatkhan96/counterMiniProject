const countValue = document.querySelector(".count");
const subValue =  document.querySelector("#sub");
const addValue =  document.querySelector("#add");
const changeValue =  document.querySelector("#number");
const resetValue = document.querySelector("#reset");

addValue.addEventListener("click",() => {
    countValue.innerText = parseInt(countValue.innerText) + parseInt(changeValue.value); 
})

subValue.addEventListener("click",() => {
    countValue.innerText = parseInt(countValue.innerText) - parseInt(changeValue.value);
})

resetValue.addEventListener("click",() => {
    countValue.innerText = 0;
})




