// Задача 1/36
const productName = 'Дроид';
const pricePerItem = 2000;
  
console.log(productName);
console.log(pricePerItem);


// Задача 2/36
let productName = 'Дроид';
let pricePerItem = 2000;

productName = 'Ремонтный дроид';
pricePerItem = 3500;


// Задача 3/36
const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false;


// Задача 4/36
const pricePerItem = 3500;
const orderedQuantity = 4;

const totalPrice = pricePerItem * orderedQuantity;


// Задача 5/36
const productName = 'Дроид';
const pricePerItem = 3500;

const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;


// Задача 6/36
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;


// Задача 7/36
function sayHi() {  
  console.log('Привет, это моя первая функция!');
}

sayHi();
 

// Задача 8/36
function add(a,b,c) {
  console.log(`Результат сложения равен ${a+b+c}`);  
}
  
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);


// Задача 9/36
function makeMessage (name, price) {
  makeMessage('Радар', 6150);
  makeMessage('Сканер', 3500);
  makeMessage('Реактор', 8000);
  makeMessage('Двигатель', 4070);
  const message = `Вы выбрали @{makeMessage}, цена за штуку @{price} кредитов`;
  
  return message;
};


// Задача 18/36
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  
  const totalPrice = (pricePerDroid * orderedQuantity);
  
  if(totalPrice > customerCredits) {
    message = 'Недостаточно средств на счету!';    
  } else {
    customerCredits -= totalPrice;
    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`;
  }
  
  return message;
}