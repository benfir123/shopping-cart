import CardItem from "../components/CardItem";

const Shop = ({
  data,
  handleChange,
  handleIncrement,
  handleDecrement,
  handleAddToCart,
  quantities,
}) => {
  return (
    <div className="Shop">
      Hi from Shop
      {data.map((product) => {
        return (
          <CardItem
            key={product.name}
            name={product.name}
            image={product.image}
            price={product.price}
            handleChange={handleChange}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleAddToCart={handleAddToCart}
            quantities={quantities}
          />
        );
      })}
    </div>
  );
};

export default Shop;
