import Hamburger from "./Hamburger";

const burgerData = [
  {
    name: "Classic Burger",
    ingredients: "Beef patty, lettuce, tomato, and pickles",
    price: 8,
    photoName: "./img/img1.jpg",
    soldOut: false,
  },
  {
    name: "Cheeseburger",
    ingredients: "Beef patty, cheddar cheese, lettuce, tomato, and pickles",
    price: 9,
    photoName: "./img/img2.jpg",
    soldOut: false,
  },
  {
    name: "Bacon Burger",
    ingredients: "Beef patty, bacon, cheddar cheese, lettuce, and tomato",
    price: 11,
    photoName: "./img/img3.jpg",
    soldOut: false,
  },
  {
    name: "Veggie Burger",
    ingredients: "Vegetable patty, lettuce, tomato, cucumber, and avocado",
    price: 10,
    photoName: "./img/img4.jpg",
    soldOut: false,
  },
  {
    name: "BBQ Burger",
    ingredients:
      "Beef patty, BBQ sauce, cheddar cheese, onion rings, and pickles",
    price: 12,
    photoName: "./img/img5.jpg",
    soldOut: true,
  },
  {
    name: "Mushroom Swiss Burger",
    ingredients: "Beef patty, swiss cheese, mushrooms, lettuce, and tomato",
    price: 11,
    photoName: "./img/img6.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
    </div>
  );
};

export default Menu;
