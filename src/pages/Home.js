import React from "react";
import "./Home.css";
import ImageSlider from "../components/ImageSlider";
import Product from "../components/Product";
import data from "../data";

function Home() {
  const products = data.map((item) => {
    return <Product key={item.id} {...item} />;
  });

  return (
    <div className="home">
      <div className="home--container">
        <div className="home--image">
          <ImageSlider />
        </div>
        <div className="home--products">{products}</div>
      </div>
    </div>
  );
}

export default Home;
