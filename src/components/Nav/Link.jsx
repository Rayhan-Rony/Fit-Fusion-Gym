import React from "react";

const Link = ({ item }) => {
  // console.log(item);
  return (
    <li className="hover:text-white text-gray-400 lg:p-4 p-1 lg:text-xl md:text-xl text-base">
      <a href={item.path}>{item.title}</a>
    </li>
  );
};

export default Link;
