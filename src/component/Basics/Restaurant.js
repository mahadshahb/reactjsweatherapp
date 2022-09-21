import React, { useState } from "react";
import "./style.css";
import Menu from "./menuAPi";
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";

const uniqueData = [
  ...new Set(
    Menu.map((current) => {
      return current.category;
    })
  ),
  "All",
];
console.log(uniqueData);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueData);
  const filterItem = (category) => {
    if (category === "All") {
      return setMenuData(Menu);
    }
    const updatedList = Menu.filter((current) => {
      return current.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
