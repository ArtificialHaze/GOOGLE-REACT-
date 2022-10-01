import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LinksContainer } from "./global-styles";

const icons = [
  {
    icon: "<i className='fas fa-search'></i>",
  },
  { icon: '<i class="fa-solid fa-newspaper"></i>' },
  { icon: '<i class="fa-solid fa-image"></i>' },
  { icon: '<i class="fa-solid fa-video"></i>' },
];

const links = [
  { url: "/search", text: "All" },
  { url: "/news", text: "News" },
  { url: "/images", text: "Images" },
  { url: "/videos", text: "Videos" },
];

const Links = () => {
  const [activeClass, setActiveClass] = useState("");
  return (
    <LinksContainer>
      {links.map(({ url, text, icon }, index) => (
        <NavLink
          onClick={() => setActiveClass("active")}
          className={`${activeClass}`}
          key={index}
          to={url}
        >
          {icons.forEach((icon, index) => {
            return <span key={index}>{icon}</span>;
          })}
          {text}
        </NavLink>
      ))}
    </LinksContainer>
  );
};

export default Links;
