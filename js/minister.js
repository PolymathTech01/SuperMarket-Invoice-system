let items ={
    "1" : {
        "itemName" : "Dettol soap",
        "price" : 250,
    },

    "2": {
        "itemName": "Juice",
        "price" : 550,
    },

    "3" : {
        "itemName" : "Body Lotion",
        "price" : 2000,
    },

    "4" : {
        "itemName" : "Plantain chips",
        "price" : 2500,
    },

    "5" : {
        "itemName" : "Crispy chicken",
        "price" : 1250,
    },

    "6" : {
        "itemName" : "Chocolate",
        "price" : 500,
    },

    "7" : {
        "itemName" : "Plantain",
        "price" : 300,
    },
}
let cart = {}

while(true){

	let userSelection = prompt ('Good Day, \n Welcome to Domino Supermart. \n Kindly select your preffered items of purchase,press 0 to display invoice. \n 1.Dettol soap \n 2.Juice \n 3.Body lotion \n 4.Plantain chips \n 5.Crispy chicken \n 6.Chocolate \n 7.Plantain \n 0.Exit.')


	if (userSelection == 0){
		let arrOfPrice = Object.values(cart)
		console.log(arrOfPrice)
		let total = eval(arrOfPrice.join("+"))
		cart.total = total
	

		break
	}
	else{

		if (userSelection < 0 || userSelection > 7 || isNaN(userSelection)){
			console.log("Invalid Input")
			break
		}
	else{
	switch (userSelection){ 
	
			

		case userSelection:
			console.log(`You have added ${items[userSelection].itemName} to your cart `)
			let numOfitem = prompt(`How many ${items[userSelection].itemName} are you buying?`)
			let totalPrice = items[userSelection].price * numOfitem
			cart[items[userSelection].itemName] = totalPrice

			break

		


	}
}
	}
}

console.log(cart)