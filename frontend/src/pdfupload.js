// App.js
import React, { useState } from 'react';
import FileUploader from './FileUploader';


const PdfUpload = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  const handleFileUpload = (files) => {
    setPdfFiles([...pdfFiles, ...files]);
  };

  return (
    <div>
      <FileUploader />
    </div>
  );
};

export default PdfUpload;
