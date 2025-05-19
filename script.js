const price  = document.getElementById('price');
const kilo  = document.getElementById('kilo');
const gram  = document.getElementById('gram');
const result = document.querySelector('.result');

price.addEventListener('input', ()=>{
const kgPrice = price.value * kilo.value;
const gramPrice = price.value/1000 * gram.value;
result.innerHTML = ` <p>kg price = rs${kgPrice+gramPrice}</p>`;

// console.log(gramPrice);

console.log(kgPrice+gramPrice);

});
kilo.addEventListener('input', ()=>{
const kgPrice = price.value * kilo.value;
const gramPrice = price.value/1000 * gram.value;
result.innerHTML = ` <p>kg price = rs${kgPrice+gramPrice}</p>`;

// console.log(gramPrice);

console.log(kgPrice+gramPrice);

});
gram.addEventListener('input', ()=>{
const kgPrice = price.value * kilo.value;
const gramPrice = price.value/1000 * gram.value;
result.innerHTML = ` <p>kg price = rs${kgPrice+gramPrice}</p>`;

// console.log(gramPrice);

console.log(kgPrice+gramPrice);

});