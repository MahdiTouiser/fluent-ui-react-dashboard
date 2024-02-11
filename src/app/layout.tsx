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
        <div style={{ display: 'flex', height: '100vh' }}>
          <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '0 20px 0 0' }}>
            <SidebarLayout selected={selectedOption} />
          </div>
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
            {selectedOption === '/' && <Home />}
            {selectedOption === '/devices' && <Devices />}
          </div>
        </div>
      </body>
    </html>
  );
}
