import React from "react";

const Link = ({ item }) => {
  // console.log(item);
  return (
    <li className="hover:text-white text-gray-400 p-4 text-xl">
      <a href={item.path}>{item.title}</a>
    </li>
  );
};

export default Link;
