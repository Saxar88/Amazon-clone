import React from "react";
import "./Home.css";
import ImageSlider from "../components/ImageSlider";
import Product from "../components/Product";
import data from "../components/data";

function Home() {
  const slides = [
    {
      url: "https://m.media-amazon.com/images/I/615YUOqLN5L._SX3000_.jpg",
      title: "We deliver",
    },
    {
      url: "https://m.media-amazon.com/images/I/61HHmUkimnL._SX3000_.jpg",
      title: "Best sellers",
    },
    {
      url: "https://m.media-amazon.com/images/I/71f7FKMnU7L._SX3000_.jpg",
      title: "Refresh your space",
    },
    {
      url: "https://m.media-amazon.com/images/I/61kT3Ag3PWL._SX3000_.jpg",
      title: "Discover our beauty picks",
    },
    {
      url: "https://m.media-amazon.com/images/I/61OQs6Tq7cL._SX3000_.jpg",
      title: "Explore",
    },
  ];

  const containerStyles = {
    width: "1500px",
    height: "600px",
    cursor: "pointer",
  };

  const products = data.map((item) => {
    return <Product key={item.id} {...item} />;
  });

  return (
    <div className="home">
      <div className="home--container">
        <div className="home--image" style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
        <div className="home--products">{products}</div>
      </div>
    </div>
  );
}

export default Home;
