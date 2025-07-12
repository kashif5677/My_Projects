import { useState } from 'react';

function HoverDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href="#" className="text-blue-600 hover:underline">
        Hover Over Me ▼
      </a>

      {isOpen && (
        <div className="absolute mt-2 w-44 bg-white border border-gray-300 rounded shadow-lg z-20">
          <ul className="py-2 text-sm text-gray-700">
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HoverDropdown;
