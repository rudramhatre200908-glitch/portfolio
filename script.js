let cart = 0;
let total = 0;

function addCart(price){

cart++;
total += price;

document.getElementById("count").innerHTML = cart;
document.getElementById("items").innerHTML = cart;
document.getElementById("total").innerHTML = total;

}

const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let value = search.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

let text = card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});