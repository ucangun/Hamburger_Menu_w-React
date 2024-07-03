import "./App.css";

const burgerData = [
  {
    name: "Classic Burger",
    ingredients: "Beef patty, lettuce, tomato, and pickles",
    price: 8,
    photoName: "burgers/classic.jpg",
    soldOut: false,
  },
  {
    name: "Cheeseburger",
    ingredients: "Beef patty, cheddar cheese, lettuce, tomato, and pickles",
    price: 9,
    photoName: "burgers/cheeseburger.jpg",
    soldOut: false,
  },
  {
    name: "Bacon Burger",
    ingredients: "Beef patty, bacon, cheddar cheese, lettuce, and tomato",
    price: 11,
    photoName: "burgers/bacon.jpg",
    soldOut: false,
  },
  {
    name: "Veggie Burger",
    ingredients: "Vegetable patty, lettuce, tomato, cucumber, and avocado",
    price: 10,
    photoName: "burgers/veggie.jpg",
    soldOut: false,
  },
  {
    name: "BBQ Burger",
    ingredients:
      "Beef patty, BBQ sauce, cheddar cheese, onion rings, and pickles",
    price: 12,
    photoName: "burgers/bbq.jpg",
    soldOut: true,
  },
  {
    name: "Mushroom Swiss Burger",
    ingredients: "Beef patty, swiss cheese, mushrooms, lettuce, and tomato",
    price: 11,
    photoName: "burgers/mushroom-swiss.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Umut</h1>
    </div>
  );
}

export default App;
