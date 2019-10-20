const message: string = 'hello world';
console.log(message);

class shoppingList  { 
    groceries: string[];

    constructor() {
        this.groceries = [];
    }

    addGroceryItem(item: string){
        this.groceries = [...this.groceries, item];
        // return this.groceries;
    }

    removeGroceryItem(item: string) {
     this.groceries = this.groceries.filter((grocery) => grocery !== item);
    }

};

const mylist = new shoppingList();
mylist.addGroceryItem('Banana');
mylist.addGroceryItem("Apple");
console.log("groceryList", mylist.groceries);
mylist.removeGroceryItem("Apple");
console.log("groceryList", mylist.groceries);
