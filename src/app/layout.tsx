'use client';

import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import './globals.css';
import SidebarLayout from '@/components/sidebar/SidebarLayout';
import Devices from './devices/page';
import Home from './page';

const inter = Inter({ subsets: ['latin'] });

export default function Layout(): JSX.Element {
  const selectedOption = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: 'flex', height: '95vh' }}>
          <SidebarLayout selected={selectedOption} />
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
            {selectedOption === '/' && <Home />}
            {selectedOption === '/devices' && <Devices />}
          </div>
        </div>
      </body>
    </html>
  );
}
