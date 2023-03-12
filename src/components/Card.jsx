import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate= useNavigate()
  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={()=>navigate(`/${item.path}`)} >
        <img src={item.image} id="footer-img" alt={item.path} />
        <br />
        <br />
        <h4>{item.header}</h4>
        <br />
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default Card;
