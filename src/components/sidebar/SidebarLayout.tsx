"use client";

import { Nav, initializeIcons } from "@fluentui/react";
import { useState } from "react";

const navigationStyles = {
  root: {
    width: "200px",
    height: "110vh",
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
    paddingTop: "10vh",
  },
};

const links = [
  {
    links: [
      {
        name: "Dashboard",
        key: "key1",
        url: "/",
        iconProps: {
          iconName: "News",
          styles: {
            root: {
              fontSize: 20,
              color: "black",
            },
          },
        },
      },
      // {
      //   name: "Settings",
      //   key: "key2",
      //   url: "/settings",
      //   iconProps: {
      //     iconName: "Settings",
      //     styles: {
      //       root: {
      //         fontSize: 20,
      //         color: "#106ebe",
      //       },
      //     },
      //   },
      // },
      // {
      //   name: "Transfer",
      //   key: "key3",
      //   url: "/",
      //   iconProps: {
      //     iconName: "SwitcherStartEnd",
      //     styles: {
      //       root: {
      //         fontSize: 20,
      //         color: "#106ebe",
      //       },
      //     },
      //   },
      // },
      // {
      //   name: "Stats",
      //   key: "key4",
      //   url: "/",
      //   iconProps: {
      //     iconName: "StackedLineChart",
      //     styles: {
      //       root: {
      //         fontSize: 20,
      //         color: "#106ebe",
      //       },
      //     },
      //   },
      // },
    ],
  },
];

const SidebarLayout = () => {
  const [selectedItem, setSelectedItem] = useState(links[0].links[0].key);
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
