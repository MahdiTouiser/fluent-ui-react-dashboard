'use client';

import { useEffect, useState } from 'react';
import SidebarLayout from '@/components/sidebar/SidebarLayout';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Spinner, Stack, initializeIcons } from '@fluentui/react';
import { SpinnerSize } from '@fluentui/react/lib/Spinner';
import Pagination from '@/components/pagination/Pagination';
import { Text } from '@fluentui/react-components';
import CardGrid from '@/components/cardGrid/CardGrid';

const Devices: React.FC = () => {
  initializeIcons();

  const generateCardData = (count: number) => {
    const cards = [];
    for (let i = 1; i <= count; i++) {
      cards.push({
        id: i,
        title: `Card ${i}`,
      });
    }
    return cards;
  };

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/devices`);
        const data = await response.json();
        console.log('Data from API:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const totalCards = 4000;
  const cardsPerRow = 6;
  const rowsPerPage = 5;

  const cardsPerPage = cardsPerRow * rowsPerPage;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startIndex: number = (currentPage - 1) * cardsPerPage;
  const endIndex: number = Math.min(startIndex + cardsPerPage, totalCards);
  const currentRows: { id: number; title: string }[] = generateCardData(totalCards).slice(startIndex, endIndex);

  const totalPages: number = Math.ceil(totalCards / cardsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setIsLoading(false);
  };

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <Stack horizontal tokens={{ childrenGap: 5 }} style={{ overflowX: 'auto', maxWidth: '100%' }}>
      <SidebarLayout />
      <Stack grow style={{ position: 'relative' }}>
        <Text style={{ fontSize: '2rem', marginLeft: '12px', userSelect: 'none' }}>Devices</Text>
        {isLoading ? (
          <Stack verticalAlign="center" horizontalAlign="center" style={{ height: '100%', width: '100%' }}>
            <Spinner size={SpinnerSize.large} label="Loading..." />
          </Stack>
        ) : (
          <CardGrid currentRows={currentRows} cardsPerRow={6} />
        )}
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', marginBottom: '10px' }}>
          <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} onLoadingChange={handleLoadingChange} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Devices;
