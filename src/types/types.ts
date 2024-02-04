export default interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (newPage: number) => void;
  onLoadingChange: (isLoading: boolean) => void;
}
