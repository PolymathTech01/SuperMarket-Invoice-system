/*
User then makes a selection from the list above(1 -7)
After the item is selected, the system then prompt the user for the quantity
Then the system calculate the cost of that item and asks if any other item was bought and allows slection again
It keeps doing this till the cashier terminate that no more item is purchases with 0.
The system prints the total cost of item bought as well as the item 

sample display

Hello,
Welcome to Spar Super market, yaba .
kindly select(1-7) the list of item purchase, and press 0 to display the invoice
1. Dettol soap - #200
2. Juice - #550
3. Body Cream - #2000
4. Plantain chips - #2500
5. Crispy Chicken - #1250
6. Chocolate - #120
7. Plantain - #300
0. Exit

1
You added Detol Soap to your cart
Items = Detol soap - 200
Total = 200
kindly select(1-7) the list of item purchase, and press 0 to display the invoice
1. Dettol soap - #200
2. Juice - #550
3. Body Cream - #2000
4. Plantain chips - #2500
5. Crispy Chicken - #1250
6. Chocolate - #120
7. Plantain - #300
0. Exit
3
You added Body Cream  to your cart
Items = Detol soap - 200
 Body Cream - 2000
Total = 2200
kindly select(1-7) the list of item purchase, and press 0 to display the invoice
1. Dettol soap - #200
2. Juice - #550
3. Body Cream - #2000
4. Plantain chips - #2500
5. Crispy Chicken - #1250
6. Chocolate - #120
7. Plantain - #300
0. Exit
7
You added Plantain to your cart
Items = Detol soap - 200
 Body Cream - 2000
 Plantain - 300
Total = 2500

kindly select(1-7) the list of item purchase, and press 0 to display the invoice
1. Dettol soap - #200
2. Juice - #550
3. Body Cream - #2000
4. Plantain chips - #2500
5. Crispy Chicken - #1250
6. Chocolate - #120
7. Plantain - #300
0. Exit

0
Thank you for shopping with us. Below is your invoice
Items          cost
Detol soap     200
Body Cream    2000
Plantain       300
Total =     2500
*/
let items = {
  "1": {
    itemName: "Dettol soap",
    price: 250,
  },

  "2": {
    itemName: "Juice",
    price: 550,
  },

  "3": {
    itemName: "Body Lotion",
    price: 2000,
  },

  "4": {
    itemName: "Plantain chips",
    price: 2500,
  },

  "5": {
    itemName: "Crispy chicken",
    price: 1250,
  },

  "6": {
    itemName: "Chocolate",
    price: 500,
  },

  "7": {
    itemName: "Plantain",
    price: 300,
  },
};

let cart = {};
while (true) {
  let selection = prompt(
    "Hello, Welcome to Spar Super market, Yaba\n Kindly select(1-7) for the list of items you want to purchase and press 0 to display Invoice\n1. Detol soap - #200\n2. Juice - #550\n3. Body Cream - #2000\n4. Plantain Chips - #2500\n5. Crispy Chicken - #1250\n6. Chocolate - #120\n7. Plantain - #300\n0. Exit - To display your Invoice"
  );

  if (selection == 0) {
    let total_items = Object.values(cart);
    cart.total = eval(total_items.join("+"));
    console.log("Thank you for shopping with us. Below is your invoice");
    console.table(cart);
    break;
  } else {
    if (selection < 0 || selection > 7 || isNaN(selection)) {
      alert(
        "Invalid Input, Please try again-- Input must be a number and between (1-7)"
      );
    } else {
      switch (selection) {
        case selection:
          console.log(
            `You have added ${items[selection].itemName} to your cart `
          );

          let numOfitem = prompt(
            `How many ${items[selection].itemName} are you buying?`
          );

          let totalPrice = items[selection].price * numOfitem;
          cart[items[selection].itemName] = totalPrice;
          break;
      }
    }
  }
}

// console.log(cart)
// console.log(Object.values(cart))
// console.log(eval(Object.values(cart).join('+')))

// console.log(JSON.stringify(cart, null, 4))
