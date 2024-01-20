// FileUploader.js
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setPdfFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: '.pdf', multiple: true });

  return (
    <div>
      <div {...getRootProps()} style={{ border: '2px dashed #eee', padding: '20px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        <p>Drag and drop PDF files here, or click to select files</p>
      </div>
      {pdfFiles.length > 0 && (
        <div>
          <h2>Uploaded PDFs:</h2>
          <ul>
            {pdfFiles.map((pdf, index) => (
              <li key={index}>
                <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                  {`Note ${index + 1}`}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
