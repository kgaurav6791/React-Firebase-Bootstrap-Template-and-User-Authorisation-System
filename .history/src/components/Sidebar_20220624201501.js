import SidebarItem from "./SidebarItem";
import "./Sidebar.css";
import items from "../data/sidebar.json";
import { blue } from "@material-ui/core/colors";

export default function Sidebar() {
  const viewHeight = window.outerHeight;

  return (
    <div
      className="sidebar"
      style={{ display:flex, flex-grow:1 , background: "#0d6efd" }}
    >
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
