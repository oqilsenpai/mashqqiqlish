
import React, { useMemo, useState, useCallback } from "react";

const Loader = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 10;

  const filteredData = useMemo(() => {
    return data.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);
  }, [data, pageNumber]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const changePage = useCallback((i) => {
    setPageNumber(i);
  }, []);
console.log("loader rendered")
  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="inline-flex -space-x-px text-base h-10">
          {pageNumbers.map((i) => (
            <li key={i} onClick={() => changePage(i)}>
              <a
                href="#"
                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${i === pageNumber ? "!bg-cyan-500" : ""}`}
              >
                {i}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {filteredData.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};

export default React.memo(Loader);
