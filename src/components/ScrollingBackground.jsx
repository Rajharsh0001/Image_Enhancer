import React from "react";

const ScrollingBackground = () => {
  const images = [
    "https://images.unsplash.com/photo-1761839258075-585182da7521?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "https://plus.unsplash.com/premium_photo-1712685912272-96569030d1d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175",
    "https://images.unsplash.com/photo-1762319981432-609103ab4a75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175",
    "https://images.unsplash.com/photo-1741851374540-c64860d3bcb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "https://images.unsplash.com/photo-1762088524255-8c99b515eb09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "https://images.unsplash.com/photo-1762119594508-c37996ce131f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1050",


];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="flex animate-scroll w-[600%]">
        {images.concat(images).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`bg-${i}`}
            className="w-1/6 object-cover opacity-70"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default ScrollingBackground;
