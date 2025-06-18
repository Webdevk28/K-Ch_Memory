import React, { useState } from "react";
import ITEMS from "../assets/Images";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";


const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null); // Track clicked image
  const itemsPerPage = 6;

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const filteredItems = ITEMS.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

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

  // Open modal with clicked image
  const openModal = (item) => {
    setSelectedImage(item);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigate to next/prev image in modal
  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <section className="r-side wrapper px-3 py-10">
      <h1 className="normal-font text-2xl font-semibold text-center">GALLERY</h1>
      {/* Filters */}
      <div className="flex justify-center mt-5">
        <div className="normal-font flex gap-5 cursor-pointer tracking-wide">
          {["all", "nature", "fresh"].map((filter) => (
            <div
              key={filter}
              className={`filter-item ${activeFilter === filter ? "active" : ""}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex justify-center items-center w-full">
        <div className="max-w-7xl grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5 overflow-hidden mb-3">
          {paginatedItems.map((item) => (
            <div key={item.id}
              className="gallery-item show cursor-pointer"
              onClick={() => openModal(item)} >
              <img className="w-full sm:h-64 md:h-80 object-cover"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                src={item.img}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-3 gap-4 mb-6">
          <button onClick={handlePrev} disabled={currentPage === 1}
            className="p-1 text-2xl text-slate-700 bg-gray-300 hover:bg-gray-400 rounded-full disabled:opacity-50">
            <HiOutlineArrowSmLeft />
          </button>
          <span className="flex items-center font-medium">
            {currentPage} <RiArrowRightSLine/> {totalPages}
          </span>
          <button onClick={handleNext} disabled={currentPage === totalPages}
            className="p-1 text-2xl text-slate-700 bg-gray-300 hover:bg-gray-400 rounded-full disabled:opacity-50">
            <HiOutlineArrowSmRight />
          </button>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex justify-center items-center p-3">
          <button onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-red-200 hover:scale-95 duration-500 text-3xl" >
            <IoClose />
          </button>

          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.img}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain"
            />

            {/* Navigation Arrows */}
            <button onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-xl bg-slate-800 hover:text-slate-300 hover:scale-105 duration-500 bg-opacity-50 p-2 rounded-full">
              <IoCaretBackOutline />
            </button>
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl bg-slate-800 hover:text-slate-300 hover:scale-105 duration-500 bg-opacity-50 p-2 rounded-full">
              <IoCaretForwardOutline />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;