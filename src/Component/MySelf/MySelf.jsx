import "jspdf-autotable";
import jsPDF from "jspdf";
import React from "react";
import png from "../baby.png";

const data = [
  { id: 1, description: "Product 1", quantity: 1, price: 5 },
  { id: 2, description: "Product 2", quantity: 2, price: 5 },
  { id: 3, description: "Product 3", quantity: 3, price: 5 },
  { id: 4, description: "Product 4", quantity: 4, price: 5 },
  { id: 5, description: "Product 5", quantity: 5, price: 5 },
  { id: 6, description: "Product 6", quantity: 6, price: 5 },
  { id: 7, description: "Product 7", quantity: 7, price: 5 },
  { id: 8, description: "Product 8", quantity: 8, price: 5 },
  { id: 9, description: "Product 9", quantity: 9, price: 5 },
  { id: 10, description: "Product 10", quantity: 10, price: 5 },
  { id: 11, description: "Product 11", quantity: 11, price: 5 },
  { id: 12, description: "Product 12", quantity: 12, price: 5 },
  { id: 13, description: "Product 13", quantity: 13, price: 5 },
  { id: 14, description: "Product 14", quantity: 14, price: 5 },
  { id: 15, description: "Product 15", quantity: 15, price: 5 },
  { id: 16, description: "Product 16", quantity: 16, price: 5 },
  { id: 17, description: "Product 17", quantity: 17, price: 5 },
  { id: 18, description: "Product 18", quantity: 18, price: 5 },
  { id: 19, description: "Product 19", quantity: 19, price: 5 },
  { id: 20, description: "Product 20", quantity: 20, price: 5 },
  { id: 21, description: "Product 21", quantity: 21, price: 5 },
  { id: 22, description: "Product 22", quantity: 22, price: 5 },
  { id: 23, description: "Product 23", quantity: 23, price: 5 },
  { id: 24, description: "Product 24", quantity: 24, price: 5 },
  { id: 25, description: "Product 25", quantity: 25, price: 5 },
  { id: 26, description: "Product 26", quantity: 26, price: 5 },
  { id: 27, description: "Product 27", quantity: 27, price: 5 },
  { id: 28, description: "Product 28", quantity: 28, price: 5 },
  { id: 29, description: "Product 29", quantity: 29, price: 5 },
  { id: 30, description: "Product 30", quantity: 30, price: 5 },
  { id: 31, description: "Product 31", quantity: 31, price: 5 },
  { id: 32, description: "Product 32", quantity: 32, price: 5 },
  { id: 33, description: "Product 33", quantity: 33, price: 5 },
  { id: 34, description: "Product 34", quantity: 34, price: 5 },
  { id: 35, description: "Product 35", quantity: 35, price: 5 },
  { id: 36, description: "Product 36", quantity: 36, price: 5 },
  { id: 37, description: "Product 37", quantity: 37, price: 5 },
  { id: 38, description: "Product 38", quantity: 38, price: 5 },
  { id: 39, description: "Product 39", quantity: 39, price: 5 },
  { id: 40, description: "Product 40", quantity: 40, price: 5 },
  { id: 41, description: "Product 41", quantity: 41, price: 5 },
  { id: 42, description: "Product 42", quantity: 42, price: 5 },
  { id: 43, description: "Product 43", quantity: 43, price: 5 },
  { id: 44, description: "Product 44", quantity: 44, price: 5 },
  { id: 45, description: "Product 45", quantity: 45, price: 5 },
  { id: 46, description: "Product 46", quantity: 46, price: 5 },
  { id: 47, description: "Product 47", quantity: 47, price: 5 },
  { id: 48, description: "Product 48", quantity: 48, price: 5 },
  { id: 49, description: "Product 49", quantity: 49, price: 5 },
  { id: 50, description: "Product 50", quantity: 50, price: 5 },
  { id: 51, description: "Product 51", quantity: 51, price: 5 },
  { id: 52, description: "Product 52", quantity: 52, price: 5 },
  { id: 53, description: "Product 53", quantity: 53, price: 5 },
  { id: 54, description: "Product 54", quantity: 54, price: 5 },
  { id: 55, description: "Product 55", quantity: 55, price: 5 },
  { id: 56, description: "Product 56", quantity: 56, price: 5 },
  { id: 57, description: "Product 57", quantity: 57, price: 5 },
  { id: 58, description: "Product 58", quantity: 58, price: 5 },
  { id: 59, description: "Product 59", quantity: 59, price: 5 },
  { id: 60, description: "Product 60", quantity: 60, price: 5 },
  { id: 61, description: "Product 61", quantity: 61, price: 5 },
  { id: 62, description: "Product 62", quantity: 62, price: 5 },
  { id: 63, description: "Product 63", quantity: 63, price: 5 },
  { id: 64, description: "Product 64", quantity: 64, price: 5 },
  { id: 65, description: "Product 65", quantity: 65, price: 5 },
  { id: 66, description: "Product 66", quantity: 66, price: 5 },
  { id: 67, description: "Product 67", quantity: 67, price: 5 },
  { id: 68, description: "Product 68", quantity: 68, price: 5 },
  { id: 69, description: "Product 69", quantity: 69, price: 5 },
  { id: 70, description: "Product 70", quantity: 70, price: 5 },
  { id: 71, description: "Product 71", quantity: 71, price: 5 },
  { id: 72, description: "Product 72", quantity: 72, price: 5 },
  { id: 73, description: "Product 73", quantity: 73, price: 5 },
  { id: 74, description: "Product 74", quantity: 74, price: 5 },
  { id: 75, description: "Product 75", quantity: 75, price: 5 },
  { id: 76, description: "Product 76", quantity: 76, price: 5 },
  { id: 77, description: "Product 77", quantity: 77, price: 5 },
  { id: 78, description: "Product 78", quantity: 78, price: 5 },
  { id: 79, description: "Product 79", quantity: 79, price: 5 },
  { id: 80, description: "Product 80", quantity: 80, price: 5 },
  { id: 81, description: "Product 81", quantity: 81, price: 5 },
  { id: 82, description: "Product 82", quantity: 82, price: 5 },
  { id: 83, description: "Product 83", quantity: 83, price: 5 },
  { id: 84, description: "Product 84", quantity: 84, price: 5 },
  { id: 85, description: "Product 85", quantity: 85, price: 5 },
  { id: 86, description: "Product 86", quantity: 86, price: 5 },
  { id: 87, description: "Product 87", quantity: 87, price: 5 },
  { id: 88, description: "Product 88", quantity: 88, price: 5 },
  { id: 89, description: "Product 89", quantity: 89, price: 5 },
  { id: 90, description: "Product 90", quantity: 90, price: 5 },
  { id: 91, description: "Product 91", quantity: 91, price: 5 },
  { id: 92, description: "Product 92", quantity: 92, price: 5 },
  { id: 93, description: "Product 93", quantity: 93, price: 5 },
  { id: 94, description: "Product 94", quantity: 94, price: 5 },
  { id: 95, description: "Product 95", quantity: 95, price: 5 },
  { id: 96, description: "Product 96", quantity: 96, price: 5 },
  { id: 97, description: "Product 97", quantity: 97, price: 5 },
  { id: 98, description: "Product 98", quantity: 98, price: 5 },
  { id: 99, description: "Product 99", quantity: 99, price: 5 },
  { id: 100, description: "Product 100", quantity: 100, price: 5 },
  { id: 101, description: "Product 101", quantity: 101, price: 5 },
  { id: 102, description: "Product 102", quantity: 102, price: 5 },
  { id: 103, description: "Product 103", quantity: 103, price: 5 },
  { id: 104, description: "Product 104", quantity: 104, price: 5 },
  { id: 105, description: "Product 105", quantity: 105, price: 5 },
  { id: 106, description: "Product 106", quantity: 106, price: 5 },
  { id: 107, description: "Product 107", quantity: 107, price: 5 },
  { id: 108, description: "Product 108", quantity: 108, price: 5 },
  { id: 109, description: "Product 109", quantity: 109, price: 5 },
  { id: 110, description: "Product 110", quantity: 110, price: 5 },
  { id: 111, description: "Product 111", quantity: 111, price: 5 },
  { id: 112, description: "Product 112", quantity: 112, price: 5 },
  { id: 113, description: "Product 113", quantity: 113, price: 5 },
  { id: 114, description: "Product 114", quantity: 114, price: 5 },
  { id: 115, description: "Product 115", quantity: 115, price: 5 },
  { id: 116, description: "Product 116", quantity: 116, price: 5 },
  { id: 117, description: "Product 117", quantity: 117, price: 5 },
  { id: 118, description: "Product 118", quantity: 118, price: 5 },
  { id: 119, description: "Product 119", quantity: 119, price: 5 },
  { id: 120, description: "Product 120", quantity: 120, price: 5 },
  { id: 121, description: "Product 121", quantity: 121, price: 5 },
  { id: 122, description: "Product 122", quantity: 122, price: 5 },
  { id: 123, description: "Product 123", quantity: 123, price: 5 },
  { id: 124, description: "Product 124", quantity: 124, price: 5 },
  { id: 125, description: "Product 125", quantity: 125, price: 5 },
  { id: 126, description: "Product 126", quantity: 126, price: 5 },
  { id: 127, description: "Product 127", quantity: 127, price: 5 },
  { id: 128, description: "Product 128", quantity: 128, price: 5 },
  { id: 129, description: "Product 129", quantity: 129, price: 5 },
  { id: 130, description: "Product 130", quantity: 130, price: 5 },
  { id: 131, description: "Product 131", quantity: 131, price: 5 },
  { id: 132, description: "Product 132", quantity: 132, price: 5 },
  { id: 133, description: "Product 133", quantity: 133, price: 5 },
  { id: 134, description: "Product 134", quantity: 134, price: 5 },
  { id: 135, description: "Product 135", quantity: 135, price: 5 },
  { id: 136, description: "Product 136", quantity: 136, price: 5 },
  { id: 137, description: "Product 137", quantity: 137, price: 5 },
  { id: 138, description: "Product 138", quantity: 138, price: 5 },
  { id: 139, description: "Product 139", quantity: 139, price: 5 },
  { id: 140, description: "Product 140", quantity: 140, price: 5 },
  { id: 141, description: "Product 141", quantity: 141, price: 5 },
  { id: 142, description: "Product 142", quantity: 142, price: 5 },
  { id: 143, description: "Product 143", quantity: 143, price: 5 },
  { id: 144, description: "Product 144", quantity: 144, price: 5 },
  { id: 145, description: "Product 145", quantity: 145, price: 5 },
  { id: 146, description: "Product 146", quantity: 146, price: 5 },
  { id: 147, description: "Product 147", quantity: 147, price: 5 },
  { id: 148, description: "Product 148", quantity: 148, price: 5 },
  { id: 149, description: "Product 149", quantity: 149, price: 5 },
  { id: 150, description: "Product 150", quantity: 150, price: 5 },
];

const MySelf = () => {
  const doc = new jsPDF();
  const Generate = async () => {
    const headerImage = new Image();
    headerImage.src = png;
    const pageCount = Math.ceil(data.length / 20);
    for (let page = 1; page <= pageCount; page++) {
      if (page > 1) {
        doc.addPage();
      }
      //image
      doc.addImage(headerImage, "PNG", 15, 5, 10, 10);
      //text
      doc.setFontSize(10);
      doc.text("IPD Running Bill", doc.internal.pageSize.width - 35, 10);
      // Admision details
      // Border around text elements
      const borderX = 10; // X-coordinate of the border
      const borderY = 22; // Y-coordinate of the border
      const borderWidth = doc.internal.pageSize.width - 20; // Width of the border
      const borderHeight = 20; // Height of the border
      doc.rect(borderX, borderY, borderWidth, borderHeight);
      // Vertical separator line between "Bill No" and "Bill Date"
      const separatorX = borderX + 60; // X-coordinate of the separator line
      const separatorY = borderY; // Y-coordinate of the separator line
      const separatorX1 = borderX + 130; // X-coordinate of the separator line
      const separatorY1 = borderY; // Y-coordinate of the separator line
      const separatorHeight = borderHeight; // Height of the separator line
      doc.setLineWidth(0.5); // Set the line width
      doc.line(
        separatorX,
        separatorY,
        separatorX,
        separatorY + separatorHeight
      );
      doc.line(
        separatorX1,
        separatorY1,
        separatorX1,
        separatorY1 + separatorHeight
      );
      // Text inside the border
      doc.setFontSize(8);
      doc.text("Bill No:   IFB/2024/000021", borderX + 2, borderY + 5);
      doc.text("Bill Date:   21/02/2024  20:15", borderX + 2, borderY + 15);
      doc.text("Admission No:   ADM/2024/002100", borderX + 70, borderY + 5);
      doc.text(
        "Admission Date:   02/20/2024  21:13",
        borderX + 70,
        borderY + 15
      );
      doc.text("Discharge Date And Time", borderX + 140, borderY + 5);
      doc.text("02/03/2024  15:30", borderX + 140, borderY + 15);
    }
    const pdfDataUri = doc.output("datauristring");
    const pdfWindow = window.open();
    pdfWindow.document.write(
      '<iframe width="100%" height="100%" src="' + pdfDataUri + '"></iframe>'
    );
  };
  return (
    <div>
      <button onClick={Generate}>Generate PDF</button>
    </div>
  );
};

export default MySelf;
