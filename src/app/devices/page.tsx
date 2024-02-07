'use client';

import { useEffect, useState } from 'react';
import SidebarLayout from '@/components/sidebar/SidebarLayout';
import CardComponent from '@/components/card/CardComponent';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Spinner, Stack, initializeIcons } from '@fluentui/react';
import { SpinnerSize } from '@fluentui/react/lib/Spinner';
import Pagination from '@/components/pagination/Pagination';
import { Text } from '@fluentui/react-components';
const Devices = () => {
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

  const totalCards = 4000;
  const cardsPerPage = 16;

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards);
  const currentRows = generateCardData(totalCards).slice(startIndex, endIndex);

  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setIsLoading(false);
  };

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <Stack horizontal tokens={{ childrenGap: 10 }} style={{ overflowX: 'auto', maxWidth: '100%' }}>
      <SidebarLayout />
      <Stack grow>
        <Text style={{ fontSize: '3rem', marginLeft: '20px', userSelect: 'none' }}>Devices</Text>
        {isLoading ? (
          <Stack verticalAlign="center" horizontalAlign="center" style={{ height: '100%', width: '100%' }}>
            <Spinner size={SpinnerSize.large} label="Loading..." />
          </Stack>
        ) : (
          <div className="ms-Grid" dir="ltr">
            {[...Array(4)].map((_, rowIndex) => (
              <div className="ms-Grid-row" key={rowIndex}>
                {currentRows.slice(rowIndex * 4, (rowIndex + 1) * 4).map((card) => (
                  <div key={card.id} className="ms-Grid-col ms-sm3" style={{ marginTop: '10px' }}>
                    <CardComponent title={card.title} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} onLoadingChange={handleLoadingChange} />
      </Stack>
    </Stack>
  );
};

export default Devices;
