let shoppingCart=['Milk','Coffee','Tea','Honey']

shoppingCart.splice(0,0,'Meat') // add 'Meat' in the beginning of your shopping cart if it has not been already added

shoppingCart.push('Sugar') // add Sugar at the end of you shopping cart if it has not been already added

shoppingCart.length=3; // remove 'Honey' if you are allergic to honey

shoppingCart[2]='GreenTea' // modify Tea to 'Green Tea' 

console.log(shoppingCart);
