'use client';

import { useEffect, useState } from 'react';
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
  const cardsPerRow = 4;
  const rowsPerPage = 4;

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
    <Stack verticalFill tokens={{ childrenGap: 10 }} style={{ overflowX: 'auto', maxWidth: '100%', overflowY: 'hidden' }}>
      <Text style={{ fontSize: '3rem', marginLeft: '25px', userSelect: 'none' }}>Devices</Text>
      {isLoading ? (
        <Stack verticalAlign="center" horizontalAlign="center" style={{ flexGrow: 1 }}>
          <Spinner size={SpinnerSize.large} label="Loading..." />
        </Stack>
      ) : (
        <div style={{ position: 'relative', marginLeft: '15px' }}>
          <CardGrid currentRows={currentRows} cardsPerRow={cardsPerRow} />
        </div>
      )}
      <div style={{ position: 'absolute', bottom: '5%', left: '50%' }}>
        <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} onLoadingChange={handleLoadingChange} />
      </div>
    </Stack>
  );
};

export default Devices;
