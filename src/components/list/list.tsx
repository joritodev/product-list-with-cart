import { Product } from "../product/product";
import Data from "../../data.json";
import "./list.scss";

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

interface ProductListProps {
  cartItems: CartItem[];
  onUpdateCart: (items: CartItem[]) => void;
}

export function ProductList({ cartItems, onUpdateCart }: ProductListProps) {
  const handleAddToCart = (product: typeof Data[0]) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      const updatedItems = cartItems.map(item =>
        item.id === product.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      onUpdateCart(updatedItems);
    } else {
      onUpdateCart([
        ...cartItems,
        {
          id: product.id,
          name: product.productName,
          price: product.productPrice,
          amount: 1,
          image: product.image
        }
      ]);
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    const updatedItems = cartItems.map(item =>
      item.id === productId
        ? { ...item, amount: item.amount - 1 }
        : item
    ).filter(item => item.amount > 0);
    
    onUpdateCart(updatedItems);
  };

  return (
    <div className="box-grid">
      <h1>Desserts</h1>
      <section className="list-grid">
        {Data.map((product) => (
          <Product
            key={product.id}
            productName={product.productName}
            productType={product.productType}
            productPrice={product.productPrice}
            image={product.image}
            quantity={cartItems.find(item => item.id === product.id)?.amount || 0}
            onAddToCart={() => handleAddToCart(product)}
            onRemoveFromCart={() => handleRemoveFromCart(product.id)}
          />
        ))}
      </section>
    </div>
  );
}

