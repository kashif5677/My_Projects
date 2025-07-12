import React, { useRef } from "react";

const CardShow = () => {
  const cursorRef = useRef();

  const handleMouseMove = (e) => {
    const index = e.target.dataset.index;
    if (!index) return;

    const box = cursorRef.current.children[index];
    if (!box) return;

    box.style.opacity = "1"; // use 0–1 in React for opacity
    box.style.transition = "all 0.5s ease";
    box.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    const index = e.target.dataset.index;
    if (!index) return;

    const box = cursorRef.current.children[index];
    if (!box) return;

    box.style.opacity = "0";
    box.style.transform = "scale(1)";
  };

  return (
    <div>
      <div className="flex gap-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            data-index={i}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-40 h-40 bg-gray-300 text-center flex items-center justify-center cursor-pointer"
          >
            Card {i + 1}
          </div>
        ))}
      </div>

      <div
        id="cursor"
        ref={cursorRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        {[0, 1, 2].map((i) => (
          <img
            key={i}
            data-index={i}
            src={`https://via.placeholder.com/100?text=Image+${i + 1}`}
            className="absolute left-1/2 top-1/2 opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
            alt={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardShow;
