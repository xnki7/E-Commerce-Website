import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt=""
            className="home__image"
          />

          <div className="home__row">
            <Product
              id = "12341"
              title="boAt Nirvana 751 ANC Netflix Stream Edition Hybrid Active Noise Cancelling Bluetooth Over Ear Headphones with Up to 65H Playtime, ASAP Charge, Ambient Sound Mode, Immersive Sound, Carry Pouch(Black)"
              price={11.96}
              rating={5}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Wew4ix68L._SY355_.jpg"
            />
            <Product
            id = "12342"
            title="boAt Airdopes 172 True Wireless Earbuds with ENx™ Tech, Beast Mode, 35H Playtime, 11mm Drivers, ASAP™ Charge, IPX4, IWP™, Touch Controls(Stunning Black)"
            price={9.98}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51Cr2ebLj9L._SY355_.jpg"
            />
          </div>

          <div className="home__row">
            <Product 
              id = "12343"
              title="HP Pavilion Aero AMD Ryzen 5 13.3 inches WUXGA Laptop "
              price={30.99}
              rating={4}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71mX6qUGIIL._SY450_.jpg"
            />
            <Product
            id = "12344"
            title="Alan Jones Clothing Men's Fleece Hooded Hoodie"
            price={4.89}
            rating={3}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61TQiA49VoL._UY550_.jpg"
            />
            <Product 
              id="12345"
              title="Arkanum Rustic Look Brass Metal Pocket Watch Royal Flush (Gold)"
              price={2.76}
              rating={4}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/4156yah20qL.jpg"
            />
          </div>

          <div className="home__row">
            <Product 
              id="123456"
              title="Pigeon by Stovekraft Amaze Plus Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, used for boiling Water, making tea and coffee, instant noodles, soup etc. 1500 Watt (Silver)"
              price={6.21}
              rating={5}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/31na34LxwmL._SX300_SY300_QL70_FMwebp_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
