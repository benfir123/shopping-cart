import { useEffect } from "react";

const CardItem = ({
  name,
  image,
  price,
  handleChange,
  handleIncrement,
  handleDecrement,
  handleAddToCart,
  quantities,
}) => {
  const handleIncrementWithParam = handleIncrement.bind(null, name);
  const handleDecrementWithParam = handleDecrement.bind(null, name);
  const handleAddToCartWithParam = handleAddToCart.bind(null, name);

  useEffect(() => {
    const incrementButton = document.querySelector(
      `[listid=${name.replace(/\s/g, "")}] > #increment`
    );
    const decrementButton = document.querySelector(
      `[listid=${name.replace(/\s/g, "")}] > #decrement`
    );
    const addToCartButton = document.querySelector(
      `[listid=${name.replace(/\s/g, "")}] > #add-to-cart`
    );

    incrementButton.addEventListener("click", handleIncrementWithParam);
    decrementButton.addEventListener("click", handleDecrementWithParam);
    addToCartButton.addEventListener("click", handleAddToCartWithParam);

    return () => {
      incrementButton.removeEventListener("click", handleIncrementWithParam);
      decrementButton.removeEventListener("click", handleDecrementWithParam);
      addToCartButton.removeEventListener("click", handleAddToCartWithParam);
    };
  });

  return (
    <div className="card-item" listid={name.replace(/\s/g, "")}>
      <img src={image} alt="" />
      <h4>{name}</h4>
      <p>{price}</p>
      <button id="decrement">-</button>
      <input
        type="number"
        name="quantity"
        id=""
        min="0"
        value={quantities.find((item) => item.name === name).quantity}
        onChange={handleChange(name)}
      />
      <button id="increment">+</button>
      <button id="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default CardItem;
