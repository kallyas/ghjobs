import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export default function JobsPagination({ page, setPage, hasNextPage }) {
  function adjustPage(amount) {
    setPage((prevPage) => prevPage + amount);
  }

  return (
    <div className="flex items-center justify-center space-x-2 my-8">
      {page !== 1 && (
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => adjustPage(-1)}
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
      )}
      {page !== 1 && (
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setPage(1)}
        >
          1
        </Button>
      )}
      {page > 2 && (
        <Button variant="ghost" size="sm" disabled>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      )}
      {page > 2 && (
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => adjustPage(-1)}
        >
          {page - 1}
        </Button>
      )}
      <Button variant="default" size="sm" disabled>
        {page}
      </Button>
      {hasNextPage && (
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => adjustPage(1)}
        >
          {page + 1}
        </Button>
      )}
      {hasNextPage && (
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => adjustPage(1)}
          className="flex items-center gap-1"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
