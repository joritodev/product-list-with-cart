import "./product-cart.scss";

interface ProductCartProps {
  name: string;
  price: number;
  amount: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  onRemove: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
}

export function ProductCart({ name, price, amount, image, onRemove, onUpdateQuantity }: ProductCartProps) {
  return (
    <ul>
      <li>
        <div className="product-info">
          <img src={image?.thumbnail} alt={name} className="product-thumbnail" />
          <span>{name}</span>
        </div>
        <div className="quantity-price">
          <div className="quantity-controls">
            <button onClick={() => onUpdateQuantity(amount - 1)}>-</button>
            <span>{amount}</span>
            <button onClick={() => onUpdateQuantity(amount + 1)}>+</button>
          </div>
          <div className="price-info">
            <span className="unit-price">@ ${price}</span>
            <span className="total-price">$ {(price * amount).toFixed(2)}</span>
          </div>
        </div>
        <button onClick={onRemove} className="remove-button">
          <img src="icon-remove-item.svg" alt="Remove Item" />
        </button>
      </li>
    </ul>
  );
}
