import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);
  let activeClassName = "navbarleft";
  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      // BECAUSE A HREF WILL FORCE RELOAD THE WHOLE PAGE (TO GO TO ROUTE) SO USE LINK OR NAVLINK INSTEAD FROM REACT ROUTER DOM
      // <a href={item.path || "#"} className="sidebar-item plain">
      //   {item.icon && <i className={item.icon}></i>}
      //   {item.title}
      // </a>
      <NavLink to={item.path || "#"} className="sidebar-item plain">
        {" "}
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </NavLink>
    );
  }
}
