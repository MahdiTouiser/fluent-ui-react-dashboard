"use client";
import { Stack, IconButton } from "@fluentui/react";
import PaginationProps from "@/types/types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChange,
  onLoadingChange,
}) => {
  const handlePageChange = async (newPage: number) => {
    try {
      onLoadingChange(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (newPage >= 1 && newPage <= totalPages) {
        onChange(newPage);
      }
    } finally {
      onLoadingChange(false);
    }
  };

  return (
    <Stack horizontal horizontalAlign="center" verticalAlign="center">
      <IconButton
        iconProps={{ iconName: "ChevronLeft" }}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      />

      <span>{`Page ${currentPage} of ${totalPages}`}</span>

      <IconButton
        iconProps={{ iconName: "ChevronRight" }}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </Stack>
  );
};

export default Pagination;
