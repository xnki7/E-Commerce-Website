import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img
        src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Wew4ix68L._SY355_.jpg"
        alt=""
        className="checkoutProduct__image"
      />

      <div className="product__info">
        <p className="checkoutProduct__title">
          boAt Nirvana 751 ANC Netflix Stream Edition Hybrid Active Noise
          Cancelling Bluetooth Over Ear Headphones with Up to 65H Playtime, ASAP
          Charge, Ambient Sound Mode, Immersive Sound, Carry Pouch(Black)
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct__rating">
            ⭐⭐
        </div>
        <button className="checkoutProduct__btn">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
