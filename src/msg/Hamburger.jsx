const Hamburger = ({ burgerObj }) => {
  return (
    <li className="hamburger">
      <img src={burgerObj.photoName} alt={burgerObj.name} />
      <div>
        <h3>{burgerObj.name}</h3>
        <p>{burgerObj.ingredients}</p>

        <span>{burgerObj.price}</span>
      </div>
    </li>
  );
};

export default Hamburger;
