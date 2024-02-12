'use client';

import { Nav, INavLink, INavLinkGroup, initializeIcons } from '@fluentui/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface SidebarLayoutProps {
  selected: string;
}

const navigationStyles: any = {
  root: {
    width: '250px',
    height: '98vh',
    boxSizing: 'border-box',
    border: '5px solid #eee',
    overflowY: 'auto',
    paddingTop: '1vh',
    backgroundColor: '#add8e6 !important',
  },
};

const links: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        key: 'home',
        url: '/',
        iconProps: {
          iconName: 'Home',
          styles: {
            root: {
              fontSize: 30,
            },
          },
        },
      },
      {
        name: 'Devices',
        key: 'devices',
        url: '/devices',
        iconProps: {
          iconName: 'Devices3',
          styles: {
            root: {
              fontSize: 30,
            },
          },
        },
      },
    ],
  },
];

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ selected }) => {
  initializeIcons();

  const [selectedItem, setSelectedItem] = useState<string>(selected);
  const router = useRouter();

  useEffect(() => {
    setSelectedItem(selected);
  }, [selected]);

  const handleLinkClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink): void => {
    if (item && typeof item.key === 'string') {
      ev?.preventDefault();
      setSelectedItem(item.key);
      router.push(item.url);
    }
  };

  return <Nav groups={links} selectedKey={selectedItem} onLinkClick={handleLinkClick} styles={navigationStyles} />;
};

export default SidebarLayout;
