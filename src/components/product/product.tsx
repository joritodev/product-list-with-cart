import { AddToCart } from "../icons/add-to-cart";
import { DecrementIcon } from "../icons/decrement-icon";
import { IncrementIcon } from "../icons/increment-icon";
import "./product.scss";

interface ProductProps {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  productType: string;
  productName: string;
  productPrice: number;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
  quantity: number;
}

export function Product({
  image,
  productType,
  productName,
  productPrice,
  onAddToCart,
  onRemoveFromCart,
  quantity
}: ProductProps) {
  return (
    <div className="box-product">
      <img src={image.mobile} alt={productName} className="img-mobile"/>
      <img src={image.tablet} alt={productName} className="img-tablet"/>
      <img src={image.desktop} alt={productName} className="img-desktop"/>
      <div className="cart">
        <div className={`addcart ${quantity > 0 ? 'active' : ''}`}>
          {quantity > 0 && (
            <button className="decrement" onClick={onRemoveFromCart}>
              <DecrementIcon />
            </button>
          )}
          <button className="add-to-cart-content" onClick={onAddToCart}>
            <AddToCart />
            <span>Add to Cart</span>
          </button>
          {quantity > 0 && (
            <>
              <span className="amount">{quantity}</span>
              <button className="increment" onClick={onAddToCart}>
                <IncrementIcon />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="productName-price">
        <span>{productType}</span>
        <h3 className="name">{productName}</h3>
        <h3 className="price">${productPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}
