import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
  <div className="home">
      <div className="home__container">
          <img
            className="home__image"
            src="https://source.unsplash.com/1500x800/?mall,stores,clothes,iphonex"
            alt=""
            />

            <div className="home__row">
                <Product 
                    id="12321458"
                    title="The Origin Of Everything"
                    price={1400}
                    image="https://cdn.shopify.com/s/files/1/0266/6843/3505/products/NewScientist_Book_JM_The-Origins-Of-Almost-Everything_600x_crop_center.jpg?v=1574084421"
                    rating={5}
                />
                <Product
                    id="12321458"
                    title="Pillow"
                    price={600}
                    image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-home-decor-1533590825.png?crop=1.00xw:1.00xh;0,0&resize=768:*"
                    rating={5}
                 />
                
            </div>

            <div className="home__row">
                <Product 
                    id="B0794W1SKP"
                    title="Amazon Echo Plus (2nd Generation, Charcoal)"
                    price={8560}
                    image="https://static.bhphoto.com/images/images500x500/amazon_b0794w1skp_echo_plus_2nd_generation_1539618736_1437070.jpg"
                    rating={5}
                />
                <Product
                    id="123214548"
                    title="Apple iPhone XS Max, 256GB, Gold - Fully Unlocked (Renewed)"
                    price={90000}
                    image="https://images-na.ssl-images-amazon.com/images/I/71isxv6Wd-L._AC_SX679_.jpg"
                    rating={5}
                 />
                
                 <Product
                    id="120264458"
                    title="Fastrack Glasses"
                    price={550}
                    image="https://images-na.ssl-images-amazon.com/images/I/71ABmIyBQ%2BL._UX679_.jpg"
                    rating={5}
                 /> 
                 <Product
                    id="120264458"
                    title="CCROSS Analogue Men's Watch (White Dial Brown Colored Strap)"
                    price={55000}
                    image="https://images-na.ssl-images-amazon.com/images/I/61jamKQuygL._UX385_.jpg"
                    rating={5}
                 /> 
            </div>

            <div className="home__row">
                <Product
                    id="UA55KS9000KLXL"
                    title="Samsung 138cm (55 inch) Ultra HD (4K) Curved LED Smart TV"
                    price={254100}
                    image="https://rukminim1.flixcart.com/image/416/416/television/b/u/x/samsung-ua55ks9000klxl-original-imaekc8hnfhsaumz.jpeg?q=70"
                    rating={5}
                 />
                <Product
                    id="120264458"
                    title="Luxerious sofa"
                    price={55000}
                    image="https://images-na.ssl-images-amazon.com/images/I/51kZ-02ISzL.jpg"
                    rating={5}
                 />
                

                
                
            </div>
      </div>
  </div>
  );
}

export default Home;
