import React from 'react';

const PdfList = ({ pdfFiles }) => (
  <div>
    <h2>Uploaded PDFs:</h2>
    <ul>
      {pdfFiles.map((file, index) => (
        <li key={index}>{file.name}</li>
      ))}
    </ul>
  </div>
);

export default PdfList;
