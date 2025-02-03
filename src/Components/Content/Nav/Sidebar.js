import React from "react";

const Sidebar = ({OnItemClick}) => {
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
      title: "Setting",
      icon: "bx bx-cog",
    },
  ];
  return (
    <aside className="sidebar">
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
