import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorites here</h2>
        <p>
          Choose from a diverse menu of delectable dishes made with premium
          ingredients and culinary skill. Our goal is to fulfill your cravings
          and enhance your dining experience, one delightful meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
