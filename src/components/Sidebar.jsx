import SidebarItem from "./SidebarItem";

import items from "../data/sidebar.json";

export default function Sidebar() {
  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: "rgb(13, 110, 253)",
      }}
    >
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
