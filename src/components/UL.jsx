import React, { useState } from "react";

function Ul(em) {
  const [items, setItem] = useState("");

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Ul;
