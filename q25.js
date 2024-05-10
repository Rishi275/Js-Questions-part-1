25. /*In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea' */

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


shoppingCart.push("Sugar");
shoppingCart.unshift("Meat");
let array = shoppingCart.map(x => x.replace('Tea','Green Tea'));
console.log(array);