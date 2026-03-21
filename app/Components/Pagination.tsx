import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  pageNumber: number;
};

function PaginationProducts({
  currentPage,
  setCurrentPage,
  pageNumber,
}: PaginationProps) {
  const getPages = () => {
    if (pageNumber <= 7) {
      return Array.from({ length: pageNumber }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", pageNumber];
    }
    if (currentPage >= pageNumber - 2) {
      return [
        1,
        "...",
        pageNumber - 3,
        pageNumber - 2,
        pageNumber - 1,
        pageNumber,
      ];
    }
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      pageNumber,
    ];
  };

  return (
    <Pagination className="mt-8">
      <PaginationContent className="gap-1">
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer font-mono text-xs border border-gray-300 rounded-lg hover:bg-black hover:text-white hover:border-black transition-colors"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          />
        </PaginationItem>

        {getPages().map((page, i) =>
          page === "..." ? (
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis className="font-mono" />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                className={`cursor-pointer font-mono text-xs border rounded-lg transition-colors
                  ${
                    currentPage === page
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:bg-black hover:text-white hover:border-black"
                  }`}
                onClick={() => setCurrentPage(Number(page))}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            className="cursor-pointer font-mono text-xs border border-gray-300 rounded-lg hover:bg-black hover:text-white hover:border-black transition-colors"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pageNumber))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationProducts;
