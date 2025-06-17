import React, { useState } from "react";
import ITEMS from "../assets/Images"

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    console.log("Filter clicked:", filter); // Debugging log
    setActiveFilter(filter); // Update state
  };

  return (
    <section className="r-side px-5 py-10 mt-10">
        <h1 className="text-2xl font-semibold text-center">GALLERY</h1>
        <div className="flex justify-center mt-5">
            <div className="flex gap-5 cursor-pointer tracking-wide">
                {["all", "nature","fresh"].map((filter) => (
                    <div key={filter} className={`filter-item ${activeFilter === filter ? "active" : ""}`}
                        onClick={() => handleFilterClick(filter)} >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </div>
                ))}
            </div>
        </div>

        <div className="flex justify-center items-center w-full">
            <div className="max-w-7xl grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">
                {ITEMS.map((item) => (
                    <div key={item.id} className={`gallery-item ${item.category} ${
                        activeFilter === "all" || activeFilter === item.category ? "show" : "hide"
                        }`} >
                        {item.link ? (
                            <a href={item.link} target="_blank">
                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={item.img} alt={item.alt} className="w-full" />
                            </a>
                            ) : (
                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={item.img} alt={item.alt} className="w-full" />
                    )}
                    </div>
                ))}
            </div>
        </div>
        
    </section>
  );
};

export default Gallery;