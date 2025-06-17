import React, { useState } from "react";
import ITEMS from "../assets/Images";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  // Filtered items based on active filter
  const filteredItems = ITEMS.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="r-side px-5 py-10 mt-10">
      <h1 className="text-2xl font-semibold text-center">GALLERY</h1>

      {/* Filters */}
      <div className="flex justify-center mt-5">
        <div className="flex gap-5 cursor-pointer tracking-wide">
          {["all", "nature", "fresh"].map((filter) => (
            <div
              key={filter}
              className={`filter-item ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex justify-center items-center w-full">
        <div className="max-w-7xl grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">
          {paginatedItems.map((item) => (
            <div key={item.id} className={`gallery-item show`}>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    src={item.img}
                    alt={item.alt}
                    className="w-full"
                  />
                </a>
              ) : (
                <img
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  src={item.img}
                  alt={item.alt}
                  className="w-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="flex items-center font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
