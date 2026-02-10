import SidebarItem from "./SidebarItem";

import items from "../data/sidebar.json";
import { blue } from "@material-ui/core/colors";

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
