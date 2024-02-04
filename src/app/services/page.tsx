"use client";
import { useEffect, useState } from "react";
import SidebarLayout from "@/components/sidebar/SidebarLayout";
import CardComponent from "@/components/card/CardComponent";
import "office-ui-fabric-react/dist/css/fabric.css";
import { Stack } from "@fluentui/react";
import Pagination from "@/components/pagination/Pagination";
import { Spinner } from "office-ui-fabric-react";

const Services = () => {
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
  const cardsPerPage = 60;

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
    <Stack tokens={{ childrenGap: 20 }}>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm1 ms-xl1 ">
            <SidebarLayout />
          </div>
          <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
            {isLoading ? (
              <Spinner label="Loading..." />
            ) : (
              currentRows.map((card) => (
                <div
                  key={card.id}
                  className="ms-Grid-col ms-sm1 ms-xl1"
                  style={{ paddingBottom: "20px" }}
                >
                  <CardComponent title={card.title} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={handlePageChange}
        onLoadingChange={handleLoadingChange}
      />
    </Stack>
  );
};

export default Services;
