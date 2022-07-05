import SidebarItem from "./SidebarItem";
import "./Sidebar.css";
import items from "../data/sidebar.json";
import { blue } from "@material-ui/core/colors";

export default function Sidebar() {
  return (
    <div className="sidebar" style={{ background: "#0d6efd" }}>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
