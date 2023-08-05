import React, { useState } from "react";
import "/home/john/CloudHacks-Team11/frontend/cloudhacks-2023/src/App.css";
import axios from "axios";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    } else {
      console.log("error occuered");
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    axios
      .post("http://localhost:5000//api/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div className="inputimage-container">
      <p>
        Step 2:
        <span style={{ fontSize: "25px", fontWeight: "bold" }}>
          Input your image here
        </span>
      </p>
      <input type="file" onChange={handleFileChange} />
      <button
        className="button"
        onClick={handleUpload}
        disabled={!selectedFile}
      >
        Upload
      </button>
    </div>
  );
};

export default ImageUpload;
