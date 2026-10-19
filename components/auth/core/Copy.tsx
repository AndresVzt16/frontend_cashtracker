import React from "react";

const Copy = () => {
  return (
    <article className="text-gray-400 text-sm mt-2 text-center w-full">
      <p>
        © CASHTRACKER {new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </article>
  );
};

export default Copy;
