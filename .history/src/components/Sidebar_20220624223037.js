import SidebarItem from "./SidebarItem";
import "./Sidebar.css";
import items from "../data/sidebar.json";
import { blue } from "@material-ui/core/colors";

export default function Sidebar() {
  const viewHeight = window.outerHeight;

  return (
    <div
      className="sidebar"
      style={{
        height: viewHeight,
        backgroundColor: "rgba(13, 110, 253, 0.8)",
      }}
    >
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
