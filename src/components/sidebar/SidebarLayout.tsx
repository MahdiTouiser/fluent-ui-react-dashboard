'use client';

import { Nav, INavLink, INavLinkGroup } from '@fluentui/react';
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
  groupContent: {
    marginBottom: '30px',
  },
};

const links: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        key: 'home',
        url: '/',
        icon: 'Home',
      },
      {
        name: 'Devices',
        key: 'devices',
        url: '/devices',
        icon: 'Devices3',
      },
    ],
  },
];

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ selected }) => {
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
