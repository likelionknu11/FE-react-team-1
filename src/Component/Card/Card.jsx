import "./Card.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show ? "0 20px 25px rgb(0 0 0 / 25%)" : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      style={{ ...props3, backgroundImage: `url('${imagen}')` }}
      className="card"
      // style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      {/* <img src={imagen} alt="" className="cardImg" /> */}
    </animated.div>
  );
}

export default Card;
