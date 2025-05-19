import { useState } from "react";
import { ProductList } from "./components/list/list";
import { Cart } from "./components/cart/cart";
import "./styles/home.scss"

interface CartItem {
  id: number;
  name: string;
  price: number;
  amount: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleUpdateCart = (items: CartItem[]) => {
    setCartItems(items);
  };

  return (
    <>
      <main className="container">
        <ProductList cartItems={cartItems} onUpdateCart={handleUpdateCart} />
        <Cart items={cartItems} onUpdateCart={handleUpdateCart} />
      </main>
    </>
  );
}

export default App;
