	const dishes = [
		{
			"dishID" : "1",
			"dishName" : "dish one",
			"dishPrice" : 100,
			"ingredients" : ["dish 1 ingredient one", "dish 1 ingredients two", "dish 1 ingredients three"]
		},
		{
			"dishID" : "2",
			"dishName" : "dish two",
			"dishPrice" : 200,
			"ingredients" : ["dish 2 ingredient one", "dish 2 ingredients two", "dish 2 ingredients three"]
		},
		{
			"dishID" : "3",
			"dishName" : "dish three",
			"dishPrice" : 300,
			"ingredients" : ["dish 3 ingredient one", "dish 3 ingredients two", "dish 3 ingredients three"]
		}	
	];

	const menu = {
		"restaurantName" : "AG2 Restaurant",
		"dishes" : dishes,
		"displayRestaurantName" : function(){
			return this.restaurantName;
		},
		"displayMenu" : function(){
			console.log(this.restaurantName)
			for(dish of this.dishes){
				console.log(dish.dishName +',  ₱'+ dish.dishPrice);
				console.log('Contains ' + dish.ingredients.join(","));
			}
		}
	}


	console.log(menu.displayMenu())