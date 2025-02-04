import React from "react";
import { useNavToggle } from "../../Context/NavToggleContext";

const Sidebar = ({OnItemClick}) => {
  const { isSidebar} = useNavToggle();
  const SidebarItems = [
    {
      title: "Search Stocks",
      icon: "bx bx-search-alt",
    },
    {
      title: "Cryptocurrency",
      icon: "bx bx-bitcoin",
    },
    {
      title: "Forex",
      icon: "bx bx-line-chart",
    },
    {
      title: "News",
      icon: "bx bx-news",
    },
    {
      title: "Stock",
      icon: "bx bx-trending-up",
    },
    {
      title: "Saved",
      icon: "bx bx-bookmark",
    },
    {
      title: "Settings",
      icon: "bx bx-cog",
    },
  ];
  return (
    <aside className={`sidebar ${isSidebar? 'open': ''}`}>
      <ul className="side-list">
        {SidebarItems.map((e, index) => (
          <li key={index} onClick={()=>{OnItemClick(e.title)}} className="side-item">
            <span className="side-icon"><i className={e.icon} ></i></span>
            <span className="side-text">{e.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
