"use client";

import { Nav, initializeIcons } from "@fluentui/react";
import { useState } from "react";

const navigationStyles = {
  root: {
    width: "200px",
    height: "110vh",
    boxSizing: "border-box",
    border: "5px solid #eee",
    overflowY: "auto",
    paddingTop: "10vh",
  },
  groupContent: {
    marginBottom: "30px",
  },
};

const links = [
  {
    links: [
      {
        name: "Dashboard",
        key: "key1",
        url: "/dashboard",
        iconProps: {
          iconName: "News",
          styles: {
            root: {
              fontSize: 50,
              color: "black",
            },
          },
        },
      },
      {
        name: "Services",
        key: "key2",
        url: "/services",
        iconProps: {
          iconName: "Cloud",
          styles: {
            root: {
              fontSize: 50,
              color: "black",
            },
          },
        },
      },
    ],
  },
];

const SidebarLayout = () => {
  const [selectedItem, setSelectedItem] = useState(links[0].links[1].key);
  initializeIcons();
  return (
    <>
      <Nav
        groups={links}
        selectedKey={selectedItem}
        onLinkClick={(ev, item) => setSelectedItem(item?.key || "")}
        styles={navigationStyles}
      />
    </>
  );
};

export default SidebarLayout;
