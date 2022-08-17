import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Nav from "./components/Nav";
import "./App.css";
import { useState } from "react";
import { mdiTarget } from "@mdi/js";

const App = () => {
  const data = [
    {
      name: "Product A",
      image:
        "https://i.picsum.photos/id/288/200/200.jpg?hmac=PrR6Ld35xhRNiCKOIS-dmUjGl-L-3ylEddVJrdwCAHw",
      price: "$299",
    },
    {
      name: "Product B",
      image:
        "https://i.picsum.photos/id/485/200/200.jpg?hmac=7ho6uS1u-Lmj8IR2V6-nJaiAVicTYT7bNcnzCMRwEG4",
      price: "$199",
    },
    {
      name: "Product C",
      image:
        "https://i.picsum.photos/id/656/200/200.jpg?hmac=MNTvk8A5MPGsxw6vlhoVkWBGsnwW_UjuWcxVp-gQZI8",
      price: "$99",
    },
    {
      name: "Product D",
      image:
        "https://i.picsum.photos/id/377/200/200.jpg?hmac=rcJQMvK0zOsZkiVu3ncmb8j3LjiGAySY2-TqaHP5jnw",
      price: "$399",
    },
    {
      name: "Product E",
      image:
        "https://i.picsum.photos/id/829/200/200.jpg?hmac=UR6WfoHy282eoIXjFzEm86pUeBNLQsX71BUthF-sOvM",
      price: "$199",
    },
    {
      name: "Product F",
      image:
        "https://i.picsum.photos/id/1008/200/200.jpg?hmac=I0T_cpYR-61pUlB0jVB4I5B7tL0fvzN5MgslAOirM50",
      price: "$99",
    },
  ];

  const [quantities, setQuantities] = useState(
    data.map((product) => {
      return {
        name: product.name,
        quantity: 0,
      };
    })
  );
  const [cart, setCart] = useState([]);

  const handleChange = (productName) => (e) => {
    const newValue = quantities.map((item) => {
      if (item.name === productName) {
        return { ...item, quantity: +e.target.value };
      }
      return item;
    });
    setQuantities(newValue);
  };

  const handleIncrement = (productName) => {
    const newValue = quantities.map((item) => {
      if (item.name === productName) {
        return { ...item, quantity: (item.quantity += 1) };
      }
      return item;
    });
    setQuantities(newValue);
  };

  const handleDecrement = (productName) => {
    const newValue = quantities.map((item) => {
      if (item.name === productName) {
        return {
          ...item,
          quantity: item.quantity === 0 ? 0 : (item.quantity -= 1),
        };
      }
      return item;
    });
    setQuantities(newValue);
  };

  const handleAddToCart = (productName) => {
    const newValue = quantities.map((item) => {
      if (item.name === productName) {
        return { ...item, quantity: 0 };
      }
      return item;
    });
    setQuantities(newValue);
    const itemToAdd = quantities.find((item) => {
      return item.name === productName;
    });

    if (itemToAdd.quantity !== 0) {
      setCart([
        ...cart,
        {
          itemToAdd,
        },
      ]);
    }
    console.log(cart);
  };

  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              data={data}
              handleChange={handleChange}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleAddToCart={handleAddToCart}
              quantities={quantities}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
