import React, { useState } from "react";
import "/home/john/CloudHacks-Team11/frontend/cloudhacks-2023/src/App.css";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Get the selected file from the input element
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    } else {
      return;
    }

    const formData = new FormData();
    axios
      .post("http://localhost:5000/api/upload", formData)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  };

  return (
    <div>
      <h1>Input your files here</h1>{" "}
      <div className="fileupload">
        <input type="file" onChange={handleFileChange} />
        <button
          className="button"
          onClick={handleUpload}
          disabled={!selectedFile}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
