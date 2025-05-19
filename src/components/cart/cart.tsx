"use client";
import "./cart.scss";
import { ProductCart } from "../product-cart/product-cart";

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

interface CartProps {
  items: CartItem[];
  onUpdateCart: (items: CartItem[]) => void;
}

export function Cart({ items, onUpdateCart }: CartProps) {
  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 0) return;
    
    const updatedItems = items.map(item => 
      item.id === itemId ? { ...item, amount: newQuantity } : item
    ).filter(item => item.amount > 0);
    
    onUpdateCart(updatedItems);
  };

  const handleRemoveItem = (itemId: number) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    onUpdateCart(updatedItems);
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.amount), 0);
  const totalItems = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="box-cart">
      <h2>
        Your Cart (<span>{totalItems}</span>)
      </h2>
      {items.length === 0 ? (
        <div className="emptyCartDetail">
          <img src="illustration-empty-cart.svg" alt="Empty Cart" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <ProductCart
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                image={item.image}
                onRemove={() => handleRemoveItem(item.id)}
                onUpdateQuantity={(newQuantity) => handleUpdateQuantity(item.id, newQuantity)}
              />
            ))}
          </div>
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}
