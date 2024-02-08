'use client';

import { Nav } from '@fluentui/react';
import { useState } from 'react';

const navigationStyles = {
  root: {
    width: '250px',
    height: '100vh',
    boxSizing: 'border-box',
    border: '5px solid #eee',
    overflowY: 'auto',
    paddingTop: '1vh',
    backgroundColor: '#add8e6 !important',
  },
  groupContent: {
    marginBottom: '30px',
  },
};

const links = [
  {
    links: [
      {
        name: 'Dashboard',
        key: 'key1',
        url: '/dashboard',
        iconProps: {
          iconName: 'ViewDashboard',
          styles: {
            root: {
              fontSize: 30,
              color: 'black',
            },
          },
        },
      },
      {
        name: 'Devices',
        key: 'key2',
        url: '/devices',
        iconProps: {
          iconName: 'Devices3',
          styles: {
            root: {
              fontSize: 30,
              color: 'black',
            },
          },
        },
      },
    ],
  },
];

const SidebarLayout = () => {
  const [selectedItem, setSelectedItem] = useState(links[0].links[1].key);
  return (
    <>
      <Nav groups={links} selectedKey={selectedItem} onLinkClick={(ev, item) => setSelectedItem(item?.key || '')} styles={navigationStyles} />
    </>
  );
};

export default SidebarLayout;
