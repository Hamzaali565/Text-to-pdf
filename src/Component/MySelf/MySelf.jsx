import jsPDF from "jspdf";
import React from "react";

const MySelf = () => {
  const Generate = async () => {
    const doc = new jsPDF();
  };
  return (
    <div>
      <button onClick={Generate}>Generate PDF</button>
    </div>
  );
};

export default MySelf;
