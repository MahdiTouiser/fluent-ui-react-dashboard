'use client';

import { useEffect, useState } from 'react';
import SidebarLayout from '@/components/sidebar/SidebarLayout';
import CardComponent from '@/components/card/CardComponent';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Spinner, Stack } from '@fluentui/react';
import Pagination from '@/components/pagination/Pagination';

const Devices = () => {
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

  const cardData = generateCardData(totalCards);
  const cardsPerPage = 36;

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentRows = cardData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setIsLoading(false);
  };

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <Stack horizontal tokens={{ childrenGap: 20 }} style={{ overflowX: 'auto', maxWidth: '100%' }}>
      <SidebarLayout />
      <Stack grow>
        {isLoading ? (
          <Stack verticalAlign="center" horizontalAlign="center" style={{ height: '100%', width: '100%' }}>
            <Spinner label="Loading..." />
          </Stack>
        ) : (
          <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
              {currentRows.map((card) => (
                <div
                  key={card.id}
                  className="ms-Grid-col ms-sm1 ms-xl1"
                  style={{
                    padding: '20px',
                    width: '175px',
                    height: '175px',
                  }}
                >
                  <CardComponent title={card.title} />
                </div>
              ))}
            </div>
          </div>
        )}
        <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} onLoadingChange={handleLoadingChange} />
      </Stack>
    </Stack>
  );
};

export default Devices;
