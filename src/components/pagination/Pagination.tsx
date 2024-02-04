import React, { useState } from "react";
import { Stack, IconButton, Spinner, SpinnerSize } from "@fluentui/react";
import PaginationProps from "@/types/types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChange,
  onLoadingChange,
}) => {
  const [loading, setLoading] = useState(false);

  const handlePageChange = async (newPage: number) => {
    try {
      setLoading(true);
      onLoadingChange(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (newPage >= 1 && newPage <= totalPages) {
        onChange(newPage);
      }
    } finally {
      setLoading(false);
      onLoadingChange(false);
    }
  };

  return (
    <Stack horizontal horizontalAlign="center" verticalAlign="center">
      <IconButton
        iconProps={{ iconName: "ChevronLeft" }}
        disabled={currentPage === 1 || loading}
        onClick={() => handlePageChange(currentPage - 1)}
      />
      {loading ? (
        <Spinner size={SpinnerSize.medium} />
      ) : (
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
      )}
      <IconButton
        iconProps={{ iconName: "ChevronRight" }}
        disabled={currentPage === totalPages || loading}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </Stack>
  );
};

export default Pagination;
