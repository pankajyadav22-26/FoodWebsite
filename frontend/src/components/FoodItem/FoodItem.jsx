import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { CartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  console.log("FoodItem props:", { id, name, price, description, image });
  console.log("StoreContext values:", {
    CartItems,
    addToCart,
    removeFromCart,
    url,
  });

  if (!id || !name || !price || !description || !image) {
    console.error("FoodItem component props are missing");
    return null;
  }

  if (!CartItems || !addToCart || !removeFromCart || !url) {
    console.error("StoreContext values are missing");
    return null;
  }

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={`${url}/images/${image}`}
          alt=""
        />
        {!CartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{CartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-disc">{description}</p>
        <p className="food-item-price">&#8377;{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
