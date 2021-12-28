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
items = {
    1: ["Detol_soap", 200],
    2: ["Juice", 550],
    3: ["Body Cream", 2000],
    4: ["Plantain Chips", 2500],
    5: ["Crispy Chicken", 1250],
    6: ["Chocolate", 120],
    7: ["Plantain", 300]
}
let total
let new_items = {}
let selection = prompt("Hello, Welcome to Spar Super market, Yaba\n Kindly select(1-7) for the list of items you want to purchase and press 0 to display Invoice\n1. Detol soap - #200\n2. Juice - #550\n3. Body Cream - #2000\n4. Plantain Chips - #2500\n5. Crispy Chicken - #1250\n6. Chocolate - #120\n7. Plantain - #300\n0. Exit")



switch (selection){
    case "1":
        console.log(`You've added ${items[1][0]} to your cart\n`)
        new_items.items[1][0] = items[1][1]
        break
    case "2":
        console.log(`You've added ${items[2][0]} to your cart\n`)
        new_items.items[2][0] = items[2][1]
        break
    case "3":
        console.log(`You've added ${items[3][0]} to your cart\n`)
        new_items.items[3][0] = items[3][1]
        break
    case "4":
        console.log(`You've added ${items[4][0]} to your cart\n`)
        new_items.items[4][0] = items[4][1]
        break
    case "5":
        console.log(`You've added ${items[5][0]} to your cart\n`)
        new_items.items[5][0] = items[5][1]
        break
    case "6":
        console.log(`You've added ${items[6][0]} to your cart\n`)
        new_items.items[6][0] = items[6][1]
        break
    case "7":
        console.log(`You've added ${items[7][0]} to your cart\n`)
        new_items.items[7][0] = items[7][1]
        break
    default:
        console.log("Invalid selection")
}
console.log(new_items)
// function items_selection(){
// for (selection; selection < 8; selection++){
// switch (selection){
//     case selection:
//         console.log(`You've added ${items[selection][0]} to your cart\n`)
//         return
//     case 0:
//         console.log("You've exited successfully")
//     default:
//         console.log("Sorry Invalid Selection")
// }
// }
// }
// console.log(items_selection())



// console.log(items[1])